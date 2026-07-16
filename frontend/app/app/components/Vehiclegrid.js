"use client";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function VehicleGrid() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/vehicles")
      .then((res) => res.json())
      .then((data) => {
        setVehicles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching vehicles:", err);
        setLoading(false);
      });
  }, []);

  return (
    <section id="vehicles" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-end mb-12">
        <div>
          <span className="text-xs font-extrabold tracking-widest text-blue-600 uppercase">Our Fleet</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">Vehicles for Every Journey</h2>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20 text-slate-400 font-medium">Loading fleet assets...</div>
      ) : vehicles.length === 0 ? (
        <div className="text-center py-20 text-slate-400 font-medium">No vehicles currently registered in the database.</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((car) => (
            <div key={car.id} className="bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="aspect-[16/10] bg-slate-50 relative overflow-hidden flex items-center justify-center p-4">
                  <img 
                    src={car.image_url || "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000"} 
                    alt={`${car.make} ${car.model}`}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">{car.year} Model</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-3">{car.make} {car.model}</h3>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mt-1">Plate: {car.license_plate}</p>
                </div>
              </div>
              <div className="p-6 border-t border-slate-50 flex items-center justify-between">
                <div>
                  <p className="text-2xl font-black text-slate-900">P{car.daily_rate}<span className="text-xs font-normal text-slate-500"> /day</span></p>
                  <p className="text-xs text-slate-400">P{car.security_deposit} refundable deposit</p>
                </div>
                <button className="bg-slate-900 group-hover:bg-blue-600 text-white p-3 rounded-xl transition duration-300">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}