// frontend/app/components/Footer.js
"use client";
import Link from "next/link";
import { Car, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div>
          <Link href="/" className="flex items-center space-x-2 mb-6">
            <Car className="h-7 w-7 text-blue-500" />
            <span className="text-xl font-black tracking-tight text-white">
              LEFATSHE<span className="text-blue-500">FLEET</span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Premium airport and local car rental automation services designed to keep your travels smooth and cost-effective.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Explore</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#vehicles" className="hover:text-white transition">Our Fleet</Link></li>
            <li><Link href="#how-it-works" className="hover:text-white transition">How It Works</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Contact Support</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Information</h4>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-white transition">Terms & Conditions</Link></li>
            <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="#" className="hover:text-white transition">Rental Policies</Link></li>
          </ul>
        </div>

        {/* Contact/HQ Info */}
        <div>
          <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">HQ Terminal</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-blue-500 shrink-0" />
              <span>Gaborone, Botswana</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-blue-500 shrink-0" />
              <span>+267 71 234 567</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-500 shrink-0" />
              <span>support@lefatshefleet.co.bw</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-600">
        <p>© {new Date().getFullYear()} Lefatshe Fleet Services. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Designed by Legendary Gabs Devs</p>
      </div>
    </footer>
  );
}