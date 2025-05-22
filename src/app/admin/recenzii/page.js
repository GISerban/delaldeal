"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AdminRecenziiPage() {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 0, message: "" });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const res = await fetch("/api/recenzii");
    const data = await res.json();
    setReviews(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = editId ? `/api/recenzii/${editId}` : "/api/recenzii";
    const method = editId ? "PUT" : "POST";

    await fetch(endpoint, {
      method,
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    setForm({ name: "", rating: 0, message: "" });
    setEditId(null);
    fetchReviews();
  };

  const handleDelete = async (id) => {
    await fetch("/api/recenzii/" + id, { method: "DELETE" });
    fetchReviews();
  };

  const handleEdit = (r) => {
    setEditId(r.id);
    setForm({ name: r.name, rating: r.rating, message: r.message });
  };

  const handleStarClick = (value) => {
    setForm({ ...form, rating: value });
  };

  return (
    <main className="p-6">
      <Link
        href="/admin"
        className="text-sm text-blue-600 underline mb-4 block"
      >
        ← Înapoi la panou
      </Link>
      <h1 className="text-3xl font-bold mb-4">Administrare Recenzii</h1>

      <form onSubmit={handleSubmit} className="grid gap-2 mb-6">
        <input
          placeholder="Nume client"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <div className="flex space-x-1 text-xl text-yellow-400">
          {[1, 2, 3, 4, 5].map((value) => (
            <span
              key={value}
              onClick={() => handleStarClick(value)}
              className={`cursor-pointer ${
                form.rating >= value ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          placeholder="Mesaj"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="border p-2 rounded"
          required
        />
        <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700">
          {editId ? "Actualizează recenzia" : "Adaugă recenzie"}
        </button>
      </form>

      <ul className="space-y-2">
        {reviews.map((r) => (
          <li key={r.id} className="border p-4 rounded flex justify-between">
            <div>
              <h3 className="font-semibold">
                {r.name} – {r.rating}⭐
              </h3>
              <p className="text-sm text-gray-600 italic">{r.message}</p>
            </div>
            <div className="space-x-2">
              <button onClick={() => handleEdit(r)} className="text-blue-500">
                Editează
              </button>
              <button
                onClick={() => handleDelete(r.id)}
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
