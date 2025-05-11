
# Casa din Deal – Admin & Site

Un proiect complet Next.js cu panou de administrare, recenzii și gestionare a raselor de găini.

## 🔧 Instalare

1. Instalează dependențele:
```bash
npm install
```

2. Configurează variabilele din `.env` (ai deja un exemplu funcțional).

3. Populează baza de date (opțional, dacă ai șters `dev.db`):
```bash
npx prisma db push
node prisma/seed.js
```

4. Pornește aplicația:
```bash
npm run dev
```

Accesează panoul de administrare la [`/admin`](http://localhost:3000/admin)

---

## 🔒 Autentificare Admin

- **Username:** `admin`
- **Parolă:** `admin123`
- Poți modifica în `.env`.

---

## 📁 Structură

- `src/components/` – componente reutilizabile (Navbar, Footbar, SEO, etc.)
- `src/app/admin` – panoul de administrare
- `public/uploads/` – imaginile pentru rase
- `prisma/` – schema și datele bazei de date

---

## 🧠 Tehnologii

- Next.js (App Router)
- Prisma ORM + SQLite
- Tailwind CSS
- API Routes pentru CRUD

---

## ✅ Funcționalități

- Administrare rase (CRUD + upload imagine)
- Administrare recenzii (CRUD)
- Form de recenzie pe homepage
- Structură modulară și curată
