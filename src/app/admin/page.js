"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("auth") === "true";
    setAuth(isAuthenticated);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const validUser =
      username === "admin" ||
      username === process.env.NEXT_PUBLIC_ADMIN_USERNAME;
    const validPass =
      password === "admin123" ||
      password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (validUser && validPass) {
      localStorage.setItem("auth", "true");
      setAuth(true);
    } else {
      setError("Utilizator sau parolă greșite");
    }
  };

  const logout = () => {
    localStorage.removeItem("auth");
    setAuth(false);
    setUsername("");
    setPassword("");
  };

  if (!auth) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white p-8 rounded shadow-md w-80"
        >
          <h2 className="text-2xl mb-4 text-center">Autentificare Admin</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          <input
            type="password"
            placeholder="Parolă"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 mb-3 border rounded"
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Intră în admin
          </button>
        </form>
      </div>
    );
  }

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-6">Panou de administrare</h1>
      <div className="space-y-4">
        <Link
          href="/admin/rase"
          className="block bg-gray-100 hover:bg-green-100 p-4 rounded border text-lg font-medium"
        >
          🐔 Administrează Rase
        </Link>
        <Link
          href="/admin/recenzii"
          className="block bg-gray-100 hover:bg-green-100 p-4 rounded border text-lg font-medium"
        >
          ⭐ Administrează Recenzii
        </Link>
      </div>
      <button onClick={logout} className="mt-6 text-sm text-red-500 underline">
        Ieși din cont
      </button>
    </main>
  );
}
