"use client";
import Head from "next/head";
import Navbar from "@/components/navbar";
import Footbar from "@/components/footbar";

const SEO = () => (
  <Head>
    <title>Despre Noi | delaDeal</title>
    <meta
      name="description"
      content="Descoperă povestea, valorile și modul de creștere a găinilor la Casa din Deal – ouă proaspete și sustenabile."
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--offwhite)] flex flex-col">
      <header className="sticky top-0 z-50">
        <SEO />
        <Navbar />
      </header>

      <main className="flex-grow mx-auto max-w-6xl px-6 py-16 space-y-20 text-[var(--primary-text)]">
        {/* Introducere */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold my-font mb-4">
            Despre Casa din Deal
          </h1>
          <p className="text-lg leading-relaxed">
            La Casa din Deal cultivăm respectul pentru natură și tradiție,
            oferind ouă de cea mai bună calitate. Găinile noastre trăiesc liber,
            hrănite natural și crescute cu grijă, iar fiecare ou reflectă acest
            mod de viață autentic.
          </p>
        </section>

        {/* Cele 3 topicuri principale */}
        <section className="grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-[var(--sage)] rounded-3xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl text-white font-semibold my-font mb-4">
              Povestea Noastră
            </h2>
            <p className="flex-grow text-white">
              Începută ca un proiect familial, Casa din Deal s-a dezvoltat încet
              și cu atenție. Dorința de a trăi armonios cu natura a transformat
              primele câteva găini într-o gospodărie apreciată pentru prospețime
              și transparență.
            </p>
            <p className="mt-4 text-sm text-white">
              Ne mândrim cu fiecare etapă parcursă, de la primele pui până la
              recunoașterea în comunitatea locală.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[var(--sage)] rounded-3xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl text-white font-semibold my-font mb-4">
              Valorile Noastre
            </h2>
            <p className="flex-grow text-white">
              Onestitatea, responsabilitatea și respectul față de animale și
              mediu sunt principiile noastre de bază. Credem în calitate înainte
              de cantitate și în relații directe, bazate pe încredere.
            </p>
            <p className="mt-4 text-sm text-white">
              Fiecare decizie este luată ținând cont de impactul asupra
              ecosistemului și al comunității.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[var(--sage)] rounded-3xl shadow-md p-8 flex flex-col justify-between h-full">
            <h2 className="text-2xl text-white font-semibold my-font mb-4">
              Practicile Noastre
            </h2>
            <p className="flex-grow text-white">
              Găinile cresc libere pe pășuni bogate în iarbă și insecte, hrănite
              cu cereale locale, fără aditivi. Fiecare zi începe cu verificarea
              adaposturilor și curățenia spațiilor de odihnă.
            </p>
            <p className="mt-4 text-sm text-white">
              Astfel, ouăle noastre se remarcă prin gălbenuș dens și coajă
              fermă.
            </p>
          </div>
        </section>

        {/* Secțiune FAQ */}
        <section className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl font-semibold my-font text-center mb-6">
            Întrebări Frecvente
          </h2>
          {[
            {
              q: "De unde provin cerealele pentru găini?",
              a: "Folosim exclusiv cereale cultivate de ferme locale partenere, fără pesticide și în mod sustenabil.",
            },
            {
              q: "Cum fac comanda și care e aria de livrare?",
              a: "Comenzile se plasează telefonic sau prin formularul de pe site; livrăm în raza a 20 km în jurul fermei.",
            },
            {
              q: "În cât timp primești ouăle după colectare?",
              a: "Toate ouăle sunt livrate în maxim 24h de la recoltare, pentru a garanta prospețimea maximă.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="border-l-4 border-[var(--sage)] bg-white p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-medium mb-2">{item.q}</h3>
              <p>{item.a}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="mt-auto p-0">
        <Footbar />
      </footer>
    </div>
  );
}
