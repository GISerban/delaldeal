// Cele 3 topicuri principale
const Cards = () => {
  return (
    <section className="grid gap-8 md:grid-cols-3">
      {/* Card 1 */}
      <div className="bg-[var(--sage)] rounded-3xl shadow-md p-8 flex flex-col justify-between h-full">
        <h2 className="text-2xl text-white font-semibold my-font mb-4">
          Povestea Noastră
        </h2>
        <p className="flex-grow text-white">
          Începută ca un proiect familial, Casa din Deal s-a dezvoltat încet și
          cu atenție. Dorința de a trăi armonios cu natura a transformat primele
          câteva găini într-o gospodărie apreciată pentru prospețime și
          transparență.
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
          Onestitatea, responsabilitatea și respectul față de animale și mediu
          sunt principiile noastre de bază. Credem în calitate înainte de
          cantitate și în relații directe, bazate pe încredere.
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
          Găinile cresc libere pe pășuni bogate în iarbă și insecte, hrănite cu
          cereale locale, fără aditivi. Fiecare zi începe cu verificarea
          adaposturilor și curățenia spațiilor de odihnă.
        </p>
        <p className="mt-4 text-sm text-white">
          Astfel, ouăle noastre se remarcă prin gălbenuș dens și coajă fermă.
        </p>
      </div>
    </section>
  );
};

export default Cards;
