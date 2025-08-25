import React from "react";
import FilterSidebar from "../components/filters/FilterSidebar.jsx";
import ListingCard from "../components/ListingCard.jsx";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import { SERVICE } from "../utils/constants.jsx";

export default function ListingPage() {
  // const [params] = useSearchParams()

  return (
    <>
      <Navbar />
      <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
        <main className="container-px py-6">
          <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
            <aside>
              <FilterSidebar />
            </aside>

            <section>
              <div className="mb-4 text-sm text-neutral-600">
                <span className="font-semibold">Total Parkings</span> (
                {SERVICE.get("parking").totalParking.length})
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {SERVICE.get("parking").totalParking.map((i) => (
                  <ListingCard key={i.id} item={i} />
                ))}
              </div>
            </section>
          </div>
        </main>

        <FooterWide />
      </div>
    </>
  );
}
