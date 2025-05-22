"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminRasePage() {
  const [breeds, setBreeds] = useState([]);
  const [form, setForm] = useState({ name: "", description: "", image: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    const res = await fetch("/api/rase");
    const data = await res.json();
    setBreeds(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`/api/rase${editId ? `/${editId}` : ""}`, {
      method: editId ? "PUT" : "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    setForm({ name: "", description: "", image: "" });
    setEditId(null);
    fetchBreeds();
  };

  const handleDelete = async (id) => {
    await fetch("/api/rase/" + id, { method: "DELETE" });
    fetchBreeds();
  };

  const handleEdit = (b) => {
    setEditId(b.id);
    setForm({
      name: b.name,
      description: b.description,
      image: b.image,
    });
  };

  return (
    <main className="p-6">
      <Link
        href="/admin"
        className="text-sm text-blue-600 underline mb-4 block"
      >
        ← Înapoi la panou
      </Link>
      <h1 className="text-3xl font-bold mb-4">Administrare Rase de Găini</h1>

      <form onSubmit={handleSubmit} className="grid gap-2 mb-6">
        <input
          placeholder="Nume rasă"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="Descriere"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <input
          placeholder="Imagine (ex: /rase/sussex.jpg)"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          {editId ? "Actualizează rasa" : "Adaugă rasă"}
        </button>
      </form>

      <ul className="space-y-2">
        {breeds.map((b) => (
          <li key={b.id} className="border p-4 rounded flex justify-between">
            <div>
              <h3 className="font-semibold">{b.name}</h3>
              <img
                src={b.image}
                alt={b.name}
                className="w-32 h-20 object-cover mt-2 rounded"
              />
              <p className="text-sm text-gray-600 italic">{b.description}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(b)} className="text-blue-500">
                Editează
              </button>
              <button
                onClick={() => handleDelete(b.id)}
                className="text-red-500"
              >
                Șterge
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
