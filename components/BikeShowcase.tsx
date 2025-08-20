"use client";

import { useState } from "react";
import Image from "next/image";

// Define allowed color keys
type BikeColor = "Gray" | "Red" | "Black";

// Strongly type the variants
const bikeVariants: Record<BikeColor, string[]> = {
  Gray: [
    "/images/royalEnfieldGray.avif",
    "/images/royalEnfieldFront.avif",
    "/images/royalEnfieldBack.avif",
    "/images/royalEnfieldEngine.avif",
    "/images/royalEnfieldHead.avif",
    "/images/royalEnfieldSilencer.avif",
    "/images/royalEnfieldSpeedMeter.avif"
  ],
  Red: [
    "/images/royalEnfieldMadrasRed.avif",
    "/images/royalEnfieldFront.avif",
    "/images/royalEnfieldBack.avif",
    "/images/royalEnfieldEngine.avif",
    "/images/royalEnfieldHead.avif",
    "/images/royalEnfieldSilencer.avif",
    "/images/royalEnfieldSpeedMeter.avif"
  ],
  Black: [
    "/images/royalEnfieldBlack.avif",
    "/images/royalEnfieldFront.avif",
    "/images/royalEnfieldBack.avif",
    "/images/royalEnfieldEngine.avif",
    "/images/royalEnfieldHead.avif",
    "/images/royalEnfieldSilencer.avif",
    "/images/royalEnfieldSpeedMeter.avif"
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
    <section className="w-full">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Main Bike Image */}
        <div className="w-full flex justify-center mb-6">
          <Image
            src={selectedImage}
            alt={`Royal Enfield Classic 350 - ${selectedColor}`}
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="flex justify-start ml-6 gap-4 overflow-x-auto pb-4">
          {bikeVariants[selectedColor].map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`border-2 rounded-md transition shrink-0 ${
                selectedImage === img
                  ? "border-black"
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
        <div className="p-6 mt-6 w-full max-w-xl">
          {/* Flex container with responsive direction */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* LEFT SIDE: Price + Selected Color */}
            <div className="flex flex-col">
              <p className="text-gray-500 text-lg">Starting From</p>
              <p className="text-3xl font-bold text-gray-900 mt-1 transition-all duration-500">
                ₹{new Intl.NumberFormat("en-IN").format(250000)}
              </p>
              {selectedColor && (
                <p className="text-md text-gray-600 mt-2">
                  Selected: <span className="font-medium">{selectedColor}</span>
                </p>
              )}
            </div>
        
            {/* RIGHT SIDE: Color Options */}
            <div className="flex flex-col items-start md:items-end">
              <p className="text-gray-600 text-sm mb-2">Choose Color:</p>
              <div className="flex flex-wrap gap-6">
                {colors.map((color) => (
                  <div key={color.name} className="flex flex-col items-center">
                    <button
                      onClick={() => {
                        setSelectedColor(color.name);
                        setSelectedImage(bikeVariants[color.name][0]);
                      }}
                      className={`relative w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        selectedColor === color.name
                          ? "scale-130 "
                          : "hover:scale-105"
                      }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.name}
                    >
                      {/* {selectedColor === color.name && (
                        <span className="absolute text-white text-lg">✔</span>
                      )} */}
                    </button>
                    <span className="text-xs text-gray-600 mt-1">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
