import { useState, useEffect } from "react";
import Link from "next/link";

const List = () => {
  const [breeds, setBreeds] = useState([]);

  useEffect(() => {
    const fetchRase = async () => {
      const res = await fetch("/api/rase");
      const data = await res.json();
      setBreeds(data);
    };

    fetchRase();
  }, []);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {breeds.map((breed) => (
        <Link key={breed.slug} href={`/rase-de-gaini/${breed.slug}`}>
          <div className="bg-[var(--sage)] rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-200 cursor-pointer">
            <img
              src={breed.image}
              alt={breed.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl text-white font-semibold my-font">
                {breed.name}
              </h2>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default List;
