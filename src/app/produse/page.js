"use client";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";

const SEO = () => (
  <Head>
    <title>Produsele Noastre | delaDeal</title>
    <meta
      name="description"
      content="Ouă certificate bio de la găini pășunate – beneficii, modalități de păstrare și cum poți comanda."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default function ProdusePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--offwhite)] text-[var(--primary-text)]">
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <SEO />
        <Navbar />
      </header>

      <main className="flex-grow max-w-5xl mx-auto px-6 py-16 space-y-20">
        {/* Introducere */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold my-font mb-4">
            Ouă Bio de la Găini Pășunate
          </h1>
          <p className="text-lg leading-relaxed">
            Ouăle noastre provin de la găini certificate bio, crescute liber pe
            pășuni verzi, hrănite cu cereale organice și fără tratamente
            chimice. Gustul autentic și calitatea superioară sunt garantate de
            modul nostru de creștere.
          </p>
        </section>

        {/* Beneficii */}
        <section className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Bogate în Nutrienți",
              text: "Ouăle bio conțin un conținut mai ridicat de omega-3, vitaminele A și E și antioxidanți.",
            },
            {
              title: "Gălbenuș Intens",
              text: "Datorită dietei naturale, gălbenușurile au o culoare galben-portocaliu, semn al prospețimii și calității.",
            },
            {
              title: "Siguranță Alimentară",
              text: "Fără pesticide, antibiotice sau hormoni — doar ouă curate, verificate și ambalate cu atenție.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[var(--sage)] p-6 rounded-2xl shadow-md text-white text-center"
            >
              <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
        </section>

        {/* Păstrare */}
        <section className="bg-[var(--sage)] text-white p-8 rounded-2xl shadow-md space-y-4">
          <h2 className="text-3xl font-semibold my-font">Cum se Păstrează</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Păstrați ouăle în frigider la 4–6 °C, cu vârful în jos.</li>
            <li>
              Nu clătiți ouăle înainte de depozitare pentru a nu îndepărta
              stratul natural protector.
            </li>
            <li>
              Folosiți-le în maxim 21 zile de la colectare pentru prospețime
              maximă.
            </li>
          </ul>
        </section>

        {/* Comandă */}
        <section className="bg-[var(--sage)] text-white p-8 rounded-2xl shadow-md space-y-4 text-lg">
          <h2 className="text-3xl font-semibold my-font">
            Modalități de Comandă
          </h2>
          <p>
            Poți comanda ouă bio direct prin datele de contact din pagina{" "}
            <a href="/contact" className="text-[var(--sage)] underline">
              Contact
            </a>
            , sau ne găsești săptămânal la târgul din Oradea (fiecare sâmbătă,
            Piața Centrală).
          </p>
          <p>
            Pentru cantități mai mari și informații suplimentare, ne poți suna
            la <strong>+40 722 123 456</strong> sau ne trimiți un email la{" "}
            <strong>contact@casadindeal.ro</strong>.
          </p>
        </section>
      </main>

      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
