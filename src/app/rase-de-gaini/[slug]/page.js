import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";

const breeds = {
  "rhode-island": {
    name: "Rhode Island Red",
    description:
      "Rhode Island Red este o rasă rezistentă, cunoscută pentru ouăle sale maronii, temperamentul blând și adaptabilitatea la diferite condiții de mediu.",
    image: "/rhode.jpg",
  },
  leghorn: {
    name: "Leghorn",
    description:
      "Leghorn este o rasă prolifică de ouătoare, recunoscută pentru ouăle sale albe, caracterul energic și consumul redus de hrană.",
    image: "/leghorn.jpg",
  },
  "plymouth-rock": {
    name: "Plymouth Rock",
    description:
      "Plymouth Rock este o rasă prietenoasă și versatilă, ideală pentru gospodării, producând ouă maronii și fiind apreciată și pentru carne.",
    image: "/plymouth.jpg",
  },
  sussex: {
    name: "Sussex",
    description:
      "Sussex este o rasă blândă și curioasă, apreciată pentru consistența producției de ouă crem și temperamentul ei sociabil.",
    image: "/sussex.jpg",
  },
  marans: {
    name: "Marans",
    description:
      "Marans este cunoscută pentru ouăle sale cu coajă foarte închisă la culoare, aproape de ciocolatiu, și pentru comportamentul calm.",
    image: "/marans.jpg",
  },
  australorp: {
    name: "Australorp",
    description:
      "Australorp este o rasă foarte bună de ouătoare, cu o producție excelentă de ouă maronii și o fire docilă, perfectă pentru gospodării.",
    image: "/australorp.jpg",
  },
};

export default function RasaPage({ params }) {
  const { slug } = params;
  const breed = breeds[slug];

  if (!breed) return notFound();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--offwhite)] text-[var(--primary-text)]">
      <header className="sticky top-0 bg-white shadow-sm z-50">
        <Navbar />
      </header>

      <main className="flex-grow max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold my-font mb-6">{breed.name}</h1>
        <img
          src={breed.image}
          alt={breed.name}
          className="rounded-xl shadow-md mb-6 w-full max-h-[400px] object-cover"
        />
        <p className="text-lg leading-relaxed">{breed.description}</p>
      </main>

      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
