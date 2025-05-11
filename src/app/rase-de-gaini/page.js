"use client";
import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Presentation from "@/components/rase-de-gaini/presentation";
import List from "@/components/rase-de-gaini/list";
import Footbar from "@/components/footbar";

export default function RaseleDeGainiPage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)] text-[var(--primary-text)] flex flex-col">
      <SEO
        title="Rase de Găini | delaDeal"
        description="Descoperă diverse rase de găini, caracteristicile lor și informații utile pentru alegerea celor mai potrivite pentru gospodărie sau fermă."
      />
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <Navbar />
      </header>
      <main className="flex-grow max-w-5xl mx-auto py-12 px-4 sm:px-8">
        <Presentation />
        <List />
      </main>
      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
