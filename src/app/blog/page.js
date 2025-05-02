"use client";
import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";

const SEO = () => (
  <Head>
    <title>Blog | delaDeal</title>
    <meta
      name="description"
      content="Citește articole despre viața la țară și sfaturi pentru creșterea găinilor."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)]">
      <SEO />
      <header>
        <Navbar />
      </header>
      <main className="mx-auto max-w-4xl py-12 px-4 sm:px-8 space-y-6 text-[var(--primary-text)]">
        <h1 className="text-4xl font-bold my-font mb-6">Blog</h1>
        <p>Articole despre viața la țară</p>
        <p>Sfaturi pentru creșterea găinilor</p>
      </main>
      <footer>
        <Footbar />
      </footer>
    </div>
  );
}
