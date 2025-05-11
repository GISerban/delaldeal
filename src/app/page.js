"use client";
import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Hero from "@/components/acasa/hero";
import Presentation from "@/components/acasa/presentation";
import Benefits from "@/components/acasa/benefits";
import Gallery from "@/components/acasa/gallery";
import Reviews from "@/components/acasa/reviews";
import Footbar from "@/components/footbar";

// HomePage
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SEO
        title="delaDeal"
        description="Gospodăria delaDeal - Produse naturale, sustenabile și o tradiție transmisă din generație în generație."
      />
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="mx-auto grid grid-cols-1 gap-12">
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
