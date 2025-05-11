"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";

export default function RasaPage() {
  const { slug } = useParams();
  const [breed, setBreed] = useState(null);

  useEffect(() => {
    const fetchBreed = async () => {
      const res = await fetch(`/api/rase/${slug}`);
      if (res.ok) {
        const data = await res.json();
        setBreed(data);
      }
    };
    if (slug) fetchBreed();
  }, [slug]);

  if (!breed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-black">
        <p>Se încarcă detaliile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--offwhite)] text-[var(--primary-text)] flex flex-col">
      <SEO
        title={`${breed.name} | delaDeal`}
        description={`Află totul despre rasa de găini ${breed.name}: caracteristici, comportament și adaptabilitate.`}
      />
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <Navbar />
      </header>

      <main className="flex-grow max-w-4xl mx-auto py-12 px-4 sm:px-8">
        <h1 className="text-4xl font-bold my-font mb-6 text-center">
          {breed.name}
        </h1>
        <img
          src={breed.image}
          alt={breed.name}
          className="w-full h-72 object-cover rounded-xl shadow-md mb-6"
        />
        <p className="text-lg leading-relaxed whitespace-pre-line">
          {breed.description}
        </p>
      </main>

      <footer className="mt-auto">
        <Footbar />
      </footer>
    </div>
  );
}
