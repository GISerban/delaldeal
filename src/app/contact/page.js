"use client";
import SEO from "@/components/seo";
import Navbar from "@/components/navbar";
import Data from "@/components/contact/data";
import Form from "@/components/contact/form";
import Footbar from "@/components/footbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--offwhite)] text-[var(--primary-text)]">
      <SEO
        title="Contact | delaDeal"
        description="Contactează-ne pentru comenzi sau întrebări despre ouăle noastre bio."
      />
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <Navbar />
      </header>
      <main className="flex-grow max-w-3xl mx-auto px-6 py-16 space-y-12">
        <Data />
        <Form />
      </main>
      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
