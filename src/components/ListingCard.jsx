import React from "react";
import { Link } from "react-router-dom";

export default function ListingCard({ item }) {
  return (
    <div className="bg-white border border-neutral-200 rounded-2xl shadow-[0_10px_30px_rgba(2,6,23,0.08)] overflow-hidden">
      <div className="aspect-[4/3] w-full bg-neutral-200">
        <img src={item.img} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <span className="px-2 py-1 rounded-md text-[11px] font-medium bg-red-100 text-red-700">
            {item.badge}
          </span>
          <button
            className="h-8 w-8 rounded-full border border-red-500  hover:bg-red-100 text-red-500"
            aria-label="save"
          >
            ♡
          </button>
        </div>
        <p className="mt-2 font-semibold leading-snug">{item.title}</p>

        <div className="flex flex-col mt-4 border-t border-neutral-200 pt-4">
          <div className="flex justify-between mb-2">
            <div className="text-neutral-500 text-sm">{item.sub}</div>
            <div className="text-green-600 font-medium">{item.unit}</div>
          </div>
          <Link to="/space/1">
            <button className="h-10 px-5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
