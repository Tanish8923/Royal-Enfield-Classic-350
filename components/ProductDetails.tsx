"use client";

import { useState } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";

const sections = [
  {
    title: "Product Details",
    content:
      "Classic 350 retains the retro charm while being powered by a modern 349cc engine. Comfortable, reliable, and stylish — designed for city commutes as well as long rides.",
  },
  {
    title: "Top Highlights",
    content:
      "✔ Timeless retro design\n✔ Smooth 349cc single-cylinder engine\n✔ Dual-channel ABS\n✔ Premium chrome finishes",
  },
  {
    title: "Product Specifications",
    content:
      "Engine: 349cc, Air-oil cooled\nPower: 20.2 bhp @ 6100 rpm\nTorque: 27 Nm @ 4000 rpm\nMileage: ~35 km/l\nSeat Height: 805 mm\nKerb Weight: 195 kg",
  },
  {
    title: "About the Brand",
    content:
      "Royal Enfield has been producing iconic motorcycles since 1901. Known for reliability, heritage, and timeless designs, it continues to inspire riders worldwide.",
  },
];

export default function ProductDetails() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full">
      <div className="divide-y border-b border-[#303030]">
        {sections.map((item, index) => (
          <div key={index}>
            {/* Header */}
            <button
              onClick={() => toggleSection(index)}
              className="w-full flex justify-between items-center px-4 py-4 text-left text-lg font-medium text-black cursor-pointer"
            >
              {item.title}
              {openIndex === index ? (
                <FaChevronDown className="text-black" />
              ) : (
                <FaChevronRight className="text-black" />
              )}
            </button>

            {/* Content */}
            {openIndex === index && (
              <div className="px-4 pb-4 text-[#303030] whitespace-pre-line">
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
