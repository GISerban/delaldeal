import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px]">
      <Image
        src="/logo-casa-din-deal.svg"
        alt="Casa din Deal"
        layout="fill"
        objectFit="contain" // Keeps the aspect ratio intact
        priority
      />
    </div>
  );
};

export default Logo;
