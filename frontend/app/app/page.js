// frontend/app/page.js
"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import VehicleGrid from "./components/Vehiclegrid";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Main Navigation */}
      <Navbar />
      
      {/* 2. Hero Banner and Overlay Booking Card */}
      <Hero />
      
      {/* 3. Interactive Fleet Grid (fetches live from FastAPI) */}
      <VehicleGrid />
      
      {/* 4. Steps Progress Section */}
      <HowItWorks />
      
      {/* 5. Clean Footer Contacts */}
      <Footer />
    </main>
  );
}