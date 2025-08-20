"use client";

import { useState } from "react";

const competitors = ["Honda CB350", "Jawa 42"] as const;
type Competitor = (typeof competitors)[number];

const facts: Record<Competitor, { label: string; re350: string; other: string }[]> = {
  "Honda CB350": [
    { label: "Ex-Showroom Price (INR)", re350: "₹1.93–2.33L", other: "₹2.00–2.18L" },
    { label: "Mileage", re350: "41.5 kmpl", other: "42 kmpl" },
    { label: "Power", re350: "20.2 HP", other: "21 HP" },
    { label: "Torque", re350: "27 Nm", other: "~30 Nm" },
    { label: "Features", re350: "Dual-ABS, Retro looks", other: "Digital cluster, slipper clutch" },
  ],
  "Jawa 42": [
    { label: "Mileage", re350: "35–40 kmpl", other: "33 kmpl" },
    { label: "Power", re350: "20.2 HP", other: "27 HP" },
    { label: "Colours", re350: "9 options", other: "14 options" },
    { label: "Torque", re350: "27 Nm", other: "~28 Nm" },
  ],
};

export default function ComparisonSection() {
  const [comp, setComp] = useState<Competitor>("Honda CB350");

  return (
    <section className="mx-auto px-4 py-8 text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Classic 350 vs Competitors</h2>
      
      {/* Toggle Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        {competitors.map((c) => (
          <button
            key={c}
            onClick={() => setComp(c)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              comp === c
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm md:text-base border-collapse">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="p-3 text-left">Spec</th>
              <th className="p-3 text-center text-red-500">Classic 350</th>
              <th className="p-3 text-center">{comp}</th>
            </tr>
          </thead>
          <tbody>
            {facts[comp].map((row, idx) => (
              <tr
                key={idx}
                className={`${
                  idx % 2 === 0 ? "" : "bg-[#3c3d3c]"
                }`}
              >
                <td className="p-3 text-left">{row.label}</td>
                <td className="p-3 text-center font-semibold">{row.re350}</td>
                <td className="p-3 text-center">{row.other}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
