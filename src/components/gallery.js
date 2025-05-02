"use client";
import React from "react";

const Gallery = () => {
  const images = [
    "/gallery-image1.jpg",
    "/gallery-image2.jpg",
    "/gallery-image3.jpg",
    "/gallery-image4.jpg",
    "/gallery-image5.jpg",
    "/gallery-image6.jpg",
  ];

  return (
    <div className="py-10">
      <h2 className="text-white text-center text-3xl mb-6">Galerie</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 px-4 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
