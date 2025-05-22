import Image from "next/image";

const Plants = () => {
  const plants = [
    {
      name: "Trifoi roșu",
      image: "/pasune/trifoi.jpg",
      desc: "Plin de proteine și ușor de digerat, susține o alimentație echilibrată pentru găini și contribuie la calitatea ouălor.",
    },
    {
      name: "Păpădie",
      image: "/pasune/papadie.jpg",
      desc: "Detoxifiant natural, bogat în vitamine A și C. Sprijină sistemul digestiv al păsărilor și imunitatea acestora.",
    },
    {
      name: "Iarba grasă",
      image: "/pasune/iarba-grasa.jpg",
      desc: "Sursă naturală de acizi grași Omega-3, cu impact pozitiv asupra profilului nutrițional al ouălor.",
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold my-font text-center mb-12">
        Plantele care hrănesc natural găinile noastre
      </h2>
      <div className="grid gap-10 md:grid-cols-3">
        {plants.map((plant, i) => (
          <div
            key={i}
            className="bg-[var(--sage)] p-6 rounded-2xl shadow-md flex flex-col items-start"
          >
            <div className="w-full h-40 relative mb-4 rounded-xl overflow-hidden">
              <Image
                src={plant.image}
                alt={plant.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-xl text-white my-font font-semibold mb-2">
              {plant.name}
            </h3>
            <p className="text-sm text-white leading-relaxed">{plant.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plants;
