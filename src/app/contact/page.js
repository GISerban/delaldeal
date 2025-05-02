"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--offwhite)] text-[var(--primary-text)]">
      <Head>
        <title>Contact | delaDeal</title>
        <meta
          name="description"
          content="Contactează-ne pentru comenzi sau întrebări despre ouăle noastre bio."
        />
      </Head>

      <header className="sticky top-0 bg-white shadow-sm z-50">
        <Navbar />
      </header>

      <main className="flex-grow max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h1 className="text-4xl font-bold my-font mb-4">Contact</h1>
          <p>
            <strong>Email:</strong> contact@deladeal.ro
          </p>
          <p>
            <strong>Telefon:</strong> +40 775 269 353
          </p>
          <p>
            <strong>Adresă:</strong> Dumbrăviţa, Bihor
          </p>
          <p>
            <strong>Prezență la târg:</strong> Duminica, Piața Obor Oradea
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold my-font mb-4">
            Trimite-ne un mesaj
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1" htmlFor="name">
                Nume
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="message">
                Mesaj
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded h-32"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-6 py-3 bg-[var(--sage)] text-white rounded hover:opacity-90 transition"
            >
              {status === "sending" ? "Trimit..." : "Trimite"}
            </button>
            {status === "success" && (
              <p className="text-green-600">Mesaj trimis cu succes!</p>
            )}
            {status === "error" && (
              <p className="text-red-600">
                A apărut o eroare. Încearcă din nou.
              </p>
            )}
          </form>
        </section>
      </main>
      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
