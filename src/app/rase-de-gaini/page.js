import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";
import Link from "next/link";
import Head from "next/head";

const breeds = [
  {
    slug: "rhode-island",
    name: "Rhode Island Red",
    image: "/rhode.jpg",
  },
  {
    slug: "leghorn",
    name: "Leghorn",
    image: "/leghorn.jpg",
  },
  {
    slug: "plymouth-rock",
    name: "Plymouth Rock",
    image: "/plymouth.jpg",
  },
  {
    slug: "sussex",
    name: "Sussex",
    image: "/sussex.jpg",
  },
  {
    slug: "marans",
    name: "Marans",
    image: "/marans.jpg",
  },
  {
    slug: "australorp",
    name: "Australorp",
    image: "/australorp.jpg",
  },
];

const SEO = () => (
  <Head>
    <title>Rase de Găini | delaDeal</title>
    <meta
      name="description"
      content="Descoperă diverse rase de găini, caracteristicile lor și informații utile pentru alegerea celor mai potrivite pentru gospodărie sau fermă."
    />
  </Head>
);

export default function RaseleDeGainiPage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)] text-[var(--primary-text)] flex flex-col">
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <SEO />
        <Navbar />
      </header>

      <main className="flex-grow max-w-5xl mx-auto py-12 px-4 sm:px-8">
        <h1 className="text-4xl font-bold my-font mb-10 text-center">
          Rasele de Găini
        </h1>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Explorează cele mai cunoscute rase de găini, fiecare cu trăsături
          unice legate de ouat, comportament și adaptabilitate. Află ce le face
          speciale și cum să alegi rasa potrivită pentru propria ta gospodărie
          sau fermă.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {breeds.map((breed) => (
            <Link key={breed.slug} href={`/rase-de-gaini/${breed.slug}`}>
              <div className="bg-[var(--sage)] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-200 cursor-pointer">
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl text-white font-semibold my-font">
                    {breed.name}
                  </h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
