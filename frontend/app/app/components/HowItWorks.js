"use client";
import { Search, CalendarDays, Key, Heart } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Search className="h-6 w-6 text-blue-600" />,
      title: "1. Search",
      desc: "Choose your pickup location, dates, and select from our high-efficiency fleet."
    },
    {
      icon: <CalendarDays className="h-6 w-6 text-blue-600" />,
      title: "2. Book Online",
      desc: "Instantly reserve your car with an upfront secure payment powered safely by Stripe."
    },
    {
      icon: <Key className="h-6 w-6 text-blue-600" />,
      title: "3. Quick Pick-Up",
      desc: "Grab your physical keys directly from the terminal with your auto-generated receipt."
    },
    {
      icon: <Heart className="h-6 w-6 text-blue-600" />,
      title: "4. Enjoy the Ride",
      desc: "Navigate the roads of Botswana with maximum comfort, reliable support, and peace of mind."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase">How It Works</span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Renting a Car is Easy</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition text-left relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-24 h-24 bg-blue-50/50 rounded-bl-full -z-0 transition-all group-hover:scale-110" />
              <div className="h-12 w-12 bg-blue-100/80 rounded-xl flex items-center justify-center mb-6 relative z-10">
                {step.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 relative z-10">{step.title}</h3>
              <p className="text-sm text-slate-500 mt-3 leading-relaxed relative z-10">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}