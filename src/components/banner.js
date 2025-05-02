const Banner = () => {
  return (
    <div className="relative h-screen md:h-[500px] lg:h-[600px] bg-[url('/banner_background.jpg')] bg-cover bg-center bg-no-repeat rounded-sm text-center flex items-center justify-center">
      {/* Fallback background color and overlay */}
      <div className="absolute inset-0 bg-black/40 rounded-sm"></div>

      {/* Banner Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold p-6 inline-block rounded-lg border-4 border-white shadow-lg transition-all duration-300 text-[var(--sage)] hover:text-[var(--offwhite)]">
          Casa din Deal
        </h1>
      </div>
    </div>
  );
};

export default Banner;
