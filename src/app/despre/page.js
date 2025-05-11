"use client";
import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Presentation from "@/components/despre/presentation";
import Cards from "@/components/despre/cards";
import Questions from "@/components/despre/faq";
import Footbar from "@/components/footbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)] flex flex-col">
      <SEO
        title="Despre | delaDeal"
        description="Descoperă povestea, valorile și modul de creștere a găinilor in ferma delaDeal – ouă proaspete și sustenabile."
      />
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-grow mx-auto max-w-6xl px-6 py-16 space-y-20 text-[var(--primary-text)]">
        <Presentation />
        <Cards />
        <Questions />
      </main>
      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
