import Image from "next/image";

const Logo = () => {
  return (
    <div className="relative w-[64px] h-[64px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px]">
      <Image
        src="/logo.png"
        alt="Casa din Deal"
        layout="fill"
        objectFit="contain"
        priority
      />
    </div>
  );
};

export default Logo;
