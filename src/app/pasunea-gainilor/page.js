"use client";
import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Presentation from "@/components/pasunea-gainilor/presentation";
import Carousel from "@/components/pasunea-gainilor/carousel";
import Description from "@/components/pasunea-gainilor/description";
import Benefits from "@/components/pasunea-gainilor/benefits";
import Facts from "@/components/pasunea-gainilor/facts";
import Footbar from "@/components/footbar";
import Plants from "@/components/pasunea-gainilor/plants";

export default function PasuneaGainilorPage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)] text-[var(--primary-text)]">
      <SEO
        title="Pășunea Găinilor | delaDeal"
        description="Află cum contribuie pășunea naturală la sănătatea găinilor noastre și la calitatea ouălor pe care le oferim."
      />
      <header>
        <Navbar />
      </header>
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-28">
        <Presentation />
        <Carousel />
        <Description />
        <Plants />
        <Description />
        <Benefits />
        <Facts />
      </main>
      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
