"use client";

import { useState } from "react";
import Image from "next/image";

// Define allowed color keys
type BikeColor = "Gray" | "Red" | "Black";

// Strongly type the variants
const bikeVariants: Record<BikeColor, string[]> = {
  Gray: [
    "/images/royalEnfieldGray.avif",
    "/images/royalEnfieldGray2.avif",
    "/images/royalEnfieldGray3.avif",
  ],
  Red: [
    "/images/royalEnfieldMadrasRed.avif",
    "/images/royalEnfieldMadrasRed2.avif",
    "/images/royalEnfieldMadrasRed3.avif",
  ],
  Black: [
    "/images/royalEnfieldBlack.avif",
    "/images/royalEnfieldBlack2.avif",
    "/images/royalEnfieldBlack3.avif",
  ],
};

const colors: { name: BikeColor; hex: string; border: string }[] = [
  { name: "Gray", hex: "#9ca3af", border: "#4b5563" },
  { name: "Red", hex: "#ef4444", border: "#7f1d1d" },
  { name: "Black", hex: "#111111", border: "#000000" },
];

export default function BikeShowcase() {
  const [selectedColor, setSelectedColor] = useState<BikeColor>("Gray");
  const [selectedImage, setSelectedImage] = useState(bikeVariants["Gray"][0]);

  return (
    <section className="w-full bg-white py-8">
      <div className="w-full max-w-7xl mx-auto px-4">
        
        {/* Main Bike Image */}
        <div className="w-full flex justify-center mb-6">
          <Image
            src={selectedImage}
            alt={`Royal Enfield Classic 350 - ${selectedColor}`}
            width={1200}
            height={600}
            className="rounded-lg shadow-md w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4">
          {bikeVariants[selectedColor].map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`border-2 rounded-md p-1 transition shrink-0 ${
                selectedImage === img
                  ? "border-red-600"
                  : "border-transparent hover:border-gray-400"
              }`}
            >
              <Image
                src={img}
                alt={`${selectedColor} Bike ${index + 1}`}
                width={140}
                height={100}
                className="rounded w-[120px] h-[80px] object-cover"
              />
            </button>
          ))}
        </div>

        {/* Color Selector */}
        <div className="flex items-center text-black text-2xl gap-6 mt-4">
          <span className="mr-2">Available Colors:</span>
          <div className="flex gap-6">
            {colors.map((color) => (
              <div key={color.name} className="flex flex-col items-center">
                <button
                  onClick={() => {
                    setSelectedColor(color.name);
                    setSelectedImage(bikeVariants[color.name][0]);
                  }}
                  className={`w-10 h-10 rounded-full transition-transform duration-200 ${
                    selectedColor === color.name
                      ? "scale-110 ring-2"
                      : "hover:ring-2"
                  }`}
                  style={{
                    backgroundColor: color.hex,
                    // darken the border when selected, lighter when hover
                    boxShadow:
                      selectedColor === color.name
                        ? `0 0 0 3px ${color.border}`
                        : `0 0 0 2px transparent`,
                  }}
                  title={color.name}
                />
                <span className="text-sm mt-2">{color.name}</span>
              </div>
            ))}
          </div>
        </div>



        {/* Price */}
        <div className="text-center mt-6 text-2xl font-semibold text-gray-800">
          $2,500
        </div>
      </div>
    </section>
  );
}
