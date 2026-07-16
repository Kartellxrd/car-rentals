"use client";
import { Search, Calendar, MapPin, Car } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-slate-950 min-h-[85vh] flex flex-col justify-between overflow-hidden">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 z-10 w-full text-center md:text-left">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Your Journey, <br />
            <span className="text-blue-500">Our Key.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-light max-w-xl leading-relaxed">
            Premium airport and local car rentals across Botswana. Lock in your vehicle online, bypass the counters, and pick up in minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-6 text-slate-300 text-sm">
            <span className="flex items-center gap-2">🛡️ All-Inclusive Pricing</span>
            <span className="flex items-center gap-2">🕒 24/7 Support Desk</span>
          </div>
        </div>
      </div>

      {/* Floating Booking Search Card */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 -translate-y-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-600" /> Book Your Ride Fast & Simple
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="border border-slate-200 rounded-lg p-3 hover:border-blue-500 transition">
              <label className="block text-xs font-bold text-slate-400 uppercase">Pickup Location</label>
              <div className="flex items-center gap-2 mt-1">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">Gaborone International</span>
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-3 hover:border-blue-500 transition">
              <label className="block text-xs font-bold text-slate-400 uppercase">Dates</label>
              <div className="flex items-center gap-2 mt-1">
                <Calendar className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">Select Dates</span>
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-3 hover:border-blue-500 transition">
              <label className="block text-xs font-bold text-slate-400 uppercase">Vehicle Class</label>
              <div className="flex items-center gap-2 mt-1">
                <Car className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-semibold text-slate-700">Any Vehicle</span>
              </div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition shadow-lg shadow-blue-200 h-full py-4">
              <Search className="h-5 w-5" /> Search Fleet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}