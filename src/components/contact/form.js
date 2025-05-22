import { useState } from "react";

const Form = () => {
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
          <p className="text-red-600">A apărut o eroare. Încearcă din nou.</p>
        )}
      </form>
    </section>
  );
};

export default Form;
