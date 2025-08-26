import React, { useEffect, useState } from "react";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import ListingCard from "../components/ListingCard.jsx";
import { Link, useParams } from "react-router-dom";
import {
  getParkingSpots,
  getParkingSpotsById,
  SERVICE,
} from "../utils/constants.jsx";

const Dot = () => (
  <span className="inline-block h-[6px] w-[6px] rounded-full bg-emerald-500 mr-2" />
);

export default function SpaceDetails() {
  const item = {
    id: 1,
    title:
      "Covered parking space in Madhav Puram Tirupati, Andhra Pradesh, India",
    address: "Madhav Puram Tirupati, Andhra Pradesh, India",
    badges: ["Parking space", "Floor: 4"],
    price: 259,
    priceUnit: "₹ 259 /day/space",
    available: 1,
    images: [
      "https://images.unsplash.com/photo-1590938076771-dfe17af4d484?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFya2luZyUyMGxvdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1467840090898-5b940a807822?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBhcmtpbmclMjBsb3R8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1529089059310-92aa39a13908?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhcmtpbmclMjBsb3R8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1593280405106-e438ebe93f5b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFya2luZyUyMGxvdHxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1532217635-b45271b1aab6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFya2luZyUyMGxvdHxlbnwwfHwwfHx8MA%3D%3D",
    ],
    vehicleTypes: ["SUV", "Hatchback", "Sedan", "Motorcycle"],
    amenities: ["Security guards", "Sufficient lighting", "CCTV surveillance"],
    accessibility: "24X7 Access",
    host: {
      name: "sai kumar",
      avatar:
        "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?q=80&w=256&auto=format&fit=crop",
      details: ["Email address", "Phone number", "Govt ID"],
    },
  };

  const [parkingSpot, setParkingSpot] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const res = getParkingSpotsById(id);
    setParkingSpot(res[0]);
    console.log(res);
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-neutral-50 text-neutral-900">
        <div className="container-px">
          <div className="flex items-center justify-between pt-6">
            <div>
              <h1 className="text-[40px] leading-tight font-extrabold tracking-tight">
                sai’s parking space
              </h1>
              <div className="mt-2 text-sm text-neutral-600 flex items-center gap-2">
                <span>📍</span>
                <span className="font-medium">{parkingSpot?.address}</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button className="h-8 px-8 rounded-xl border border-red-500 bg-white hover:bg-red-100 text-red-500">
                ♡ Add to Wishlist
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1fr_360px] gap-6 mt-5">
            <section>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-3">
                <div className="col-span-2 lg:col-span-3 rounded-2xl overflow-hidden">
                  {parkingSpot?.images?.length > 0 && (
                    <img
                      src={parkingSpot.images[0]}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="col-span-1 lg:col-span-1 grid grid-rows-4 gap-3">
                  {parkingSpot?.images?.slice(1, 5).map((src) => (
                    <div
                      key={src}
                      className="rounded-2xl overflow-hidden relative"
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <h2 className="mt-6 text-2xl font-bold leading-snug max-w-3xl">
                {parkingSpot?.title}
              </h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {parkingSpot?.badges?.map((b) => (
                  <span
                    key={b}
                    className="inline-flex items-center rounded-md bg-neutral-100 text-neutral-700 px-3 py-1 text-xs font-semibold border border-neutral-200"
                  >
                    {b}
                  </span>
                ))}
              </div>

              <p className="mt-3 text-sm text-neutral-500">
                parking details will be shared later
              </p>

              <hr className="my-6 border-neutral-200" />
              <h3 className="text-lg font-extrabold">Vehicle Types Allowed</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                {parkingSpot?.vehicleTypes?.map((v) => (
                  <div key={v} className="flex items-center">
                    <Dot /> {v}
                  </div>
                ))}
              </div>

              <hr className="my-6 border-neutral-200" />
              <h3 className="text-lg font-extrabold">Amenities</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-2 text-sm">
                {parkingSpot?.amenities?.map((v) => (
                  <div key={v} className="flex items-center">
                    <Dot /> {v}
                  </div>
                ))}
              </div>

              <hr className="my-6 border-neutral-200" />
              <h3 className="text-lg font-extrabold">Accessibility</h3>
              <div className="mt-2 text-sm font-semibold">
                {parkingSpot?.accessibility}
              </div>

              <hr className="my-6 border-neutral-200" />
              <h3 className="text-lg font-extrabold">Hosted by</h3>
              <div className="mt-3 bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)] p-4 flex items-center gap-4">
                <img
                  src={parkingSpot?.host?.avatar}
                  alt={parkingSpot?.host?.name}
                  className="h-14 w-14 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold">{parkingSpot?.host?.name}</div>
                  <div className="mt-1 flex flex-wrap gap-x-5 gap-y-2 text-sm text-neutral-600">
                    {parkingSpot?.host?.details.map((d) => (
                      <span key={d} className="inline-flex items-center gap-2">
                        <span className="h-[6px] w-[6px] rounded-full bg-emerald-500 inline-block" />
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <aside className="lg:sticky lg:top-20 h-fit">
              <div className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.08)] p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-neutral-600">
                    Available Spaces
                  </div>
                  <div className="text-sm text-neutral-600">Price</div>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <div>{parkingSpot?.available}</div>
                  <div>{parkingSpot?.priceUnit}</div>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-neutral-600">
                    Select booking duration
                    <span className="block text-[11px] opacity-80">
                      (Start Date → End Date)
                    </span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      className="h-11 rounded-xl border border-neutral-300 px-3"
                      defaultValue=""
                    />
                    <input
                      type="date"
                      className="h-11 rounded-xl border border-neutral-300 px-3"
                      defaultValue=""
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm text-neutral-700 font-medium pr-2">
                    Required spaces
                  </label>
                  <input
                    type="number"
                    defaultValue={1}
                    min={1}
                    className="mt-2 h-11 rounded-xl border border-neutral-300 px-3 w-24"
                  />
                  <div className="mt-2 text-[11px] text-neutral-500">
                    Available booking spaces: 1
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="pay" defaultChecked />
                    Full Payment
                  </label>
                  <label className="flex items-center gap-2 text-neutral-400">
                    <input type="radio" name="pay" disabled /> Monthly payments
                  </label>
                  <p className="text-[11px] text-neutral-500">
                    (Applicable for bookings of more than 30 days)
                  </p>
                </div>

                <div className="mt-4 border-t border-neutral-200 pt-3 text-sm">
                  <div className="flex items-center justify-between py-1">
                    <span>Parking space rent</span>
                    <span>₹ 6000.00</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span>Service fees & Taxes</span>
                    <span>₹ 1770.00</span>
                  </div>
                  <div className="flex items-center justify-between py-2 font-semibold border-t mt-2">
                    <span>Total rent</span>
                    <span className="text-emerald-600">₹ 7770.00</span>
                  </div>
                </div>

                <Link to="/checkout/1">
                  <button className="mt-3 h-11 w-full rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold">
                    Proceed
                  </button>
                </Link>
              </div>

              <div className="mt-4 rounded-2xl bg-neutral-100 border border-neutral-200 p-4 text-sm">
                <div className="font-semibold mb-1">Needs Host approval</div>
                <p className="text-neutral-600">
                  The host has to approve customer booking request to complete
                  the transaction
                </p>
              </div>
            </aside>
          </div>

          <div className="mt-10">
            <h3 className="text-center text-3xl font-extrabold text-neutral-500">
              Similar spaces
            </h3>
            <hr className="mt-1 mb-6 border-neutral-200" />
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {SERVICE.get("parking").totalParking.map((m) => (
                <ListingCard key={m.id} item={m} />
              ))}
            </div>
          </div>

          <div className="h-10" />
        </div>
      </div>
      <FooterWide />
    </>
  );
}
