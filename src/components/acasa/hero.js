const Hero = () => {
  return (
    <section
      className="relative h-screen sm:h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: "url('/acasa/banner_background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="mt-4 text-base my-font sm:text-6xl md:text-5xl max-w-2xl p-4">
          Produse naturale
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold my-font p-4">
          delaDeal
        </h1>
      </div>
    </section>
  );
};

export default Hero;
