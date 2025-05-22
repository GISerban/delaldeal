// Benefits
const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: "Ouă de Calitate Superioară",
      description: "Oferim ouă proaspete de la găini crescute liber...",
    },
    {
      id: 2,
      title: "Găini Fericite, Natură Curată",
      description:
        "Găinile noastre trăiesc în libertate, pe pășuni deschise...",
    },
    {
      id: 3,
      title: "Tradiție cu Respect pentru Natură",
      description:
        "Crestem găini în mod tradițional, dar cu o grijă modernă...",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-8 bg-[var(--off-white-background)] border-b border-t border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold my-font text-center mb-8 text-[var(--primary-text)]">
          În ce credem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div
              key={b.id}
              className="p-6 bg-[var(--primary-background)] rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold my-font mb-2 text-white">
                {b.title}
              </h3>
              <p className="text-base text-white">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
