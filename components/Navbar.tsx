"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 bg-black backdrop-blur-md border-b  transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2">
        
        {/* Left Side - Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo/royalEnfieldLogo.png"
            alt="Royal Enfield Logo"
            width={140}
            height={24}
            className="object-contain"
          />
        </Link>

        {/* Right Side - Breadcrumb */}
        <div className="flex items-center text-gray-300 text-sm md:text-base">
          <span className="hover:text-white cursor-pointer">Royal Enfield</span>
          <span className="mx-2 text-gray-500">{">"}</span>
          <span className="text-white font-semibold">Royal Enfield Classic 350</span>
        </div>

      </div>
    </nav>
  );
}
