// Secțiune FAQ
const Questions = () => {
  return (
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
  );
};

export default Questions;
