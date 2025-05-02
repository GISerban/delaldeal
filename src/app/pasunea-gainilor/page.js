// app/pasunea-gainilor/page.tsx
"use client";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";

const carouselImages = [
  "/pasunea4.jpg",
  "/pasunea2.jpg",
  "/pasunea3.jpg",
  "/pasunea1.jpg",
];

const plants = [
  {
    name: "Trifoi roșu",
    image: "/trifoi.jpg",
    desc: "Plin de proteine și ușor de digerat, susține o alimentație echilibrată pentru găini și contribuie la calitatea ouălor.",
  },
  {
    name: "Păpădie",
    image: "/papadie.jpg",
    desc: "Detoxifiant natural, bogat în vitamine A și C. Sprijină sistemul digestiv al păsărilor și imunitatea acestora.",
  },
  {
    name: "Iarba grasă",
    image: "/iarba-grasa.jpg",
    desc: "Sursă naturală de acizi grași Omega-3, cu impact pozitiv asupra profilului nutrițional al ouălor.",
  },
];

const SEO = () => (
  <Head>
    <title>Pășunea Găinilor | delaDeal</title>
    <meta
      name="description"
      content="Află cum contribuie pășunea naturală la sănătatea găinilor noastre și la calitatea ouălor pe care le oferim."
    />
  </Head>
);

export default function PasuneaGainilorPage() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % carouselImages.length);
  const prev = () =>
    setIndex((prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className="min-h-screen bg-[var(--offwhite)] text-[var(--primary-text)]">
      <header>
        <SEO />
        <Navbar />
      </header>
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-28">
        {/* TITLU */}
        <section className="text-center">
          <h1 className="text-5xl font-bold my-font mb-4">Pășunea Găinilor</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            În inima naturii, găinile noastre se bucură de libertatea unei
            pășuni autentice, unde solul fertil și plantele variate creează un
            mediu ideal pentru o viață sănătoasă. Fiecare zi petrecută în aer
            liber se reflectă în calitatea ouălor și în starea de bine a
            păsărilor noastre.
          </p>
        </section>

        {/* CARUSEL */}
        <section className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={carouselImages[index]}
            alt={`Pășune ${index + 1}`}
            fill
            className="object-cover transition-all duration-500"
          />
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-3 py-2 shadow"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full px-3 py-2 shadow"
          >
            ›
          </button>
        </section>

        {/* DESCRIEREA PĂȘUNII */}
        <section className="text-lg leading-relaxed text-gray-800 space-y-6">
          <p>
            Pășunea noastră este amplasată pe dealuri cu sol bogat și este
            întreținută natural, fără substanțe chimice sau erbicide. Pe tot
            parcursul anului, solul este lăsat să respire, să regenereze flora
            spontană și să găzduiască o biodiversitate sănătoasă.
          </p>
          <p>
            Plantele care cresc în mod natural aici oferă găinilor o varietate
            de nutrienți esențiali — o dietă vie, diversificată, imposibil de
            reprodus prin furaje standardizate. Pe lângă alimentație, pășunea le
            oferă spațiu pentru mișcare, soare, umbră și curiozitate.
          </p>
        </section>

        {/* ZONA DE PLANTE */}
        <section>
          <h2 className="text-3xl font-bold my-font text-center mb-12">
            Plantele care hrănesc natural găinile noastre
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            {plants.map((plant, i) => (
              <div
                key={i}
                className="bg-[var(--sage)] p-6 rounded-2xl shadow-md flex flex-col items-start"
              >
                <div className="w-full h-40 relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={plant.image}
                    alt={plant.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl text-white my-font font-semibold mb-2">
                  {plant.name}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  {plant.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFICIILE PĂȘUNATULUI PENTRU GĂINI ȘI OUA */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold my-font text-center mb-8">
            Beneficiile pășunatului pentru găini și ouă
          </h2>
          <p>
            Găinile noastre se bucură de o dietă diversificată din pășunea
            naturală, ceea ce le ajută să rămână sănătoase și active. Pășunatul
            îmbunătățește digestia și ajută păsările să își întărească sistemul
            imunitar, oferindu-le mai multă energie și vitalitate.
          </p>
          <p>
            Datorită hranei naturale și diversificate pe care o găsesc în
            pășune, ouăle noastre au un gust mai intens și o culoare mai vie. De
            asemenea, acestea conțin mai mulți nutrienți esențiali, cum ar fi
            acizii grași Omega-3 și vitaminele A, D și E.
          </p>
        </section>

        {/* IMPACTUL ASUPRA MEDIULUI */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold my-font text-center mb-8">
            Impactul pozitiv asupra mediului
          </h2>
          <p>
            Prin utilizarea pășunii naturale, contribuim la protejarea
            biodiversității și la menținerea unui ecosistem sănătos. Fără
            substanțe chimice sau pesticide, pășunea devine un refugiu pentru o
            varietate de plante și animale. În plus, această abordare ajută la
            îmbunătățirea calității solului și a apei din zonă.
          </p>
          <p>
            Astfel, fiecare ou pe care îl oferim este un simbol al
            angajamentului nostru față de mediu și față de sănătatea
            consumatorilor.
          </p>
        </section>

        {/* FACTBOX CU BENEFICII */}
        <section className="bg-[var(--sage)] p-10 rounded-2xl shadow-md space-y-4 text-gray-900">
          <h2 className="text-2xl font-bold my-font">Pe scurt:</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Zero substanțe chimice – pășune 100% naturală</li>
            <li>Conținut natural de Omega-3 și vitamine în ouă</li>
            <li>Stare de bine pentru găini = produse mai bune</li>
            <li>Refugiu ecologic pentru plante și insecte benefice</li>
          </ul>
        </section>
      </main>

      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
