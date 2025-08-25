import React from "react";
import { CITIES } from "../utils/constants.jsx";

export default function CityGallery() {
  const cities = ["Pune", "Mumbai", "Bengaluru", "Delhi", "Chennai"];
  return (
    <section className="bg-white">
      <div className="container-px py-10">
        <h2 className="text-2xl font-semibold mb-4">
          Get storage spaces near you
        </h2>
        <div className="grid md:grid-cols-5 gap-4">
          {CITIES.map((c) => (
            <div key={c.city} className="rounded-xl overflow-hidden ">
              <div className="aspect-[5/3]">
                <img src={c.imageUrl} className="object-cover" />
              </div>
              <div className="pb-2">
                <div className="font-extrabold text-xl text-gray-700">
                  {c.city}
                </div>
                <div className="text-sm text-gray-600">
                  {c.totalSpace} Storage Spaces
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
