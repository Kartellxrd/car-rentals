"use client";
import Link from "next/link";
import { Car, Phone } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Car className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-black tracking-tight text-slate-900">
            LEFATSHE<span className="text-blue-600">FLEET</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="#vehicles" className="hover:text-blue-600 transition">Vehicles</Link>
          <Link href="#how-it-works" className="hover:text-blue-600 transition">Services</Link>
          <Link href="#contact" className="hover:text-blue-600 transition">Contact Us</Link>
        </div>

        {/* Right Call-to-Action */}
        <div className="flex items-center space-x-6">
          <a href="tel:+26771234567" className="hidden lg:flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition">
            <Phone className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-sm">+267 71 234 567</span>
          </a>
          <Link 
            href="#vehicles" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md shadow-blue-200 transition"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}