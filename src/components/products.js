"use client";
import React, { useState } from "react";

const SelectedProduct = ({ name, description, image }) => {
  return (
    <div className="transition-all duration-500 ease-in-out w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 bg-[var(--sage)] p-4 rounded-lg shadow-md opacity-100 scale-110">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-md mb-4"
      />
      <h3 className="text-xl text-green-700 font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const UnselectedProduct = ({ name, description, image, className }) => {
  return (
    <div
      className={`${className} bg-gray-100 p-4 rounded-lg shadow-md opacity-40 scale-75`}
    >
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Products = () => {
  const productData = [
    {
      id: 1,
      name: "Oua",
      description: "Descrierea produsului 1",
      image: "/path-to-product1.jpg",
    },
    {
      id: 2,
      name: "Lapte",
      description: "Descrierea produsului 1",
      image: "/path-to-product2.jpg",
    },
    {
      id: 3,
      name: "Mere",
      description: "Descrierea produsului 3",
      image: "/path-to-product2.jpg",
    },
    // Add more products if needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const nextSlide = () => {
    if (isSliding) return; // Prevent multiple clicks during transition
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentSlide((next) => (next + 1) % productData.length);
    }, 500); // Duration of the slide transition
  };

  const prevSlide = () => {
    if (isSliding) return; // Prevent multiple clicks during transition
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setCurrentSlide(
        (prev) => (prev - 1 + productData.length) % productData.length,
      );
    }, 500); // Duration of the slide transition
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center text-green-700 mb-6">
        Produse
      </h2>
      <div className="relative">
        <div className="flex justify-center items-center space-x-6 overflow-hidden">
          {/* Left Product */}
          <UnselectedProduct
            {...productData[
              (currentSlide - 1 + productData.length) % productData.length
            ]}
          />

          {/* Center Product */}
          <SelectedProduct {...productData[currentSlide]} />

          {/* Right Product */}
          <UnselectedProduct
            {...productData[(currentSlide + 1) % productData.length]}
          />
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-600"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Products;
