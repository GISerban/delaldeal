"use client";
import { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/navbar";

// SEO Component
const SEO = () => (
  <Head>
    <title>delaDeal</title>
    <meta
      name="description"
      content="Gospodăria delaDeal - Produse naturale, sustenabile și o tradiție transmisă din generație în generație."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

// Hero Section
const Hero = () => {
  return (
    <section
      className="relative h-screen sm:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/banner_background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="mt-4 text-base my-font sm:text-6xl md:text-5xl max-w-2xl p-4">
          Produse naturale
        </p>
        <h1
          className={`text-4xl sm:text-5xl md:text-7xl font-bold my-font p-4`}
        >
          delaDeal
        </h1>
      </div>
    </section>
  );
};

// Product Details Section (Prezentarea Gospodăriei)
const Presentation = () => {
  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--off-white-background)]">
      <div className="max-w-4xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold my-font mb-4 text-[var(--primary-text)] `}
        >
          Cine suntem
        </h2>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-[var(--primary-text)]">
          Gospodăria noastră este un loc unde tradiția se întâlnește cu grija
          față de natură. În fiecare zi, ne străduim să oferim produse de
          calitate, cultivate cu dragoste și respect față de mediul
          înconjurător. Fiecare pas pe care îl facem este ghidat de dorința de a
          proteja resursele naturale și de a oferi consumatorilor noștri produse
          sănătoase și naturale.
        </p>
        <p className="text-base sm:text-lg leading-relaxed mb-4 text-[var(--primary-text)]">
          La noi, animalele sunt tratate cu respect și libertate, având
          posibilitatea de a se mișca liber pe pășuni largi. Acest lucru nu doar
          că le îmbunătățește sănătatea, dar contribuie și la calitatea
          superioară a produselor noastre. De asemenea, lucrăm cu metode de
          agricultură sustenabilă, care ajută la menținerea echilibrului
          ecologic al zonei.
        </p>
        <p className="text-base sm:text-lg leading-relaxed text-[var(--primary-text)]">
          Credem în importanța educației și în transmiterea tradițiilor din
          generație în generație. Prin urmare, suntem dedicați să promovăm un
          stil de viață sănătos și responsabil, iar fiecare produs pe care îl
          oferim este un simbol al muncii noastre și al iubirii față de pământ.
        </p>
      </div>
    </section>
  );
};

// Gallery Section
const Gallery = () => {
  const images = [
    {
      src: "/gallery-image1.jpg",
      alt: "Găini pe pășune",
      description: "Găini crescute liber pe pășuni verzi.",
    },
    {
      src: "/gallery-image2.jpg",
      alt: "Ouă proaspete",
      description: "Găini fericite care se bucură de viață.",
    },
    {
      src: "/gallery-image3.jpg",
      alt: "Produse naturale",
      description: "Ouă proaspete de la găini fericite.",
    },
    {
      src: "/gallery-image4.jpg",
      alt: "Pășune",
      description: "Ouă de calitate superioară, proaspete și sănătoase.",
    },
    {
      src: "/gallery-image5.jpg",
      alt: "Găini fericite",
      description: "Produse naturale din gospodăria noastră.",
    },
    {
      src: "/gallery-image6.jpg",
      alt: "Ouă de calitate",
      description: "Pășuni largi pentru un mediu sănătos.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-brittany font-bold text-center mb-6 text-[var(--text-dark)]"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div key={index} className="relative group">
              <div
                className="w-full h-48 sm:h-64 md:h-80 bg-cover bg-center rounded-lg transition-transform duration-300 transform group-hover:scale-105"
                style={{ backgroundImage: `url('${img.src}')` }}
                aria-label={img.alt}
              ></div>
              {/* Description shown only on hover */}
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] text-white text-center p-2 rounded-b-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-sm">{img.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Reviews Section
const Reviews = () => {
  const reviews = [
    {
      id: 1,

      name: "Ion Popescu",

      rating: 5,

      message:
        "Produsele sunt excelente! Am avut o experiență minunată, ouăle sunt proaspete și de calitate superioară. Recomand cu încredere!",
    },

    {
      id: 2,

      name: "Maria Ionescu",

      rating: 4.5,

      message:
        "Serviciul este rapid și eficient. Ouăle au un gust fantastic și sunt livrate mereu la timp. Singura sugestie ar fi mai multe opțiuni pentru ambalaj.",
    },

    {
      id: 3,

      name: "Alexandru Vasilescu",

      rating: 4,

      message:
        "Oferă produse de calitate, dar ar putea îmbunătăți comunicarea. În rest, sunt mulțumit de serviciile oferite și de gustul produselor.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--off-white-background)]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold my-font text-center mb-6 text-[var(--primary-text)]">
          Ce spun clienții
        </h2>
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 sm:p-6 bg-[var(--primary-background)] rounded-lg shadow-md"
            >
              <div className="flex items-center mb-3">
                <div className="flex space-x-1 text-yellow-400">
                  {Array.from({ length: Math.floor(review.rating) }, (_, i) => (
                    <span key={i} className="text-lg sm:text-xl">
                      ★
                    </span>
                  ))}
                  {review.rating % 1 !== 0 && (
                    <span className="text-lg sm:text-xl">★</span>
                  )}
                </div>
                <span className="ml-3 font-semibold text-base sm:text-lg text-white">
                  {review.name}
                </span>
              </div>
              <p className="text-white text-sm sm:text-base">
                {review.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// New Section: Avantajele Noastre (Our Benefits) with a pure white background
const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Ouă de Calitate Superioară",
      description:
        "Oferim ouă proaspete de la găini crescute liber, hrănite natural și îngrijite cu atenție. Gust autentic, calitate garantată.",
    },
    {
      id: 2,
      title: "Găini Fericite, Natură Curată",
      description:
        "Găinile noastre trăiesc în libertate, pe pășuni deschise, fără stres și fără cuști. Respectăm natura și bunăstarea animalelor.",
    },
    {
      id: 3,
      title: "Tradiție cu Respect pentru Natură",
      description:
        "Crestem găini în mod tradițional, dar cu o grijă modernă față de mediu și animale. Ne concentrăm pe ouă sănătoase, produse responsabil.",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--off-white-background)] border-b border-t border-black">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl font-bold my-font text-center mb-8 text-[var(--primary-text)] `}
        >
          În ce credem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="p-6 bg-[var(--primary-background)]  rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className={`text-2xl font-semibold my-font mb-2 text-white `}>
                {benefit.title}
              </h3>
              <p className="text-base text-white">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footbar = () => {
  return (
    <footer className="py-6 px-4 sm:px-8 bg-[var(--primary-background)] border-t border-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs sm:text-sm text-white">
          &copy; {new Date().getFullYear()} Casa din Deal. Toate drepturile
          rezervate.
        </p>
      </div>
    </footer>
  );
};

// HomePage Component (Main Page)
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SEO />
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="mx-auto grid grid-cols-1 gap-12 ">
        <Presentation />
        <Benefits />
        <Gallery />
        <Reviews />
      </main>
      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
