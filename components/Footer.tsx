import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Royal Enfield</h2>
          <p className="text-sm leading-6">
            Timeless motorcycles built with a blend of heritage, classic design, and modern engineering.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Bikes</a>
          <a href="#" className="hover:text-white">Accessories</a>
          <a href="#" className="hover:text-white">About Us</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-white"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-white"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Royal Enfield. All rights reserved.
      </div>
    </footer>
  );
}
