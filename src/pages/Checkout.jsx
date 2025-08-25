// src/pages/Checkout.jsx
import React, { useMemo, useState } from "react";
import FooterWide from "../components/FooterWide.jsx";
import Navbar from "../components/Navbar.jsx";
import { Link, useNavigate } from "react-router-dom";
import VehicleModal from "../components/VehicleModal.jsx";
import { openRazorpayCheckout } from "../utils/razorpay.js"; // reuse the wide footer

export default function Checkout() {
  // mock product summary
  const space = {
    title: "sai’s parking space",
    sub: "Host approval",
    img: "https://images.unsplash.com/photo-1517512006864-7edc3b933137?q=80&w=800&auto=format&fit=crop",
    priceUnit: "₹ 259 /day/space",
    available: 1,
  };

  const [freq, setFreq] = useState("");
  const [vehicles, setVehicles] = useState([]);
  const [vehicleOpen, setVehicleOpen] = useState(false);
  const [emailDone] = useState(true);
  const [phoneDone, setPhoneDone] = useState(false);
  const [profileDone, setProfileDone] = useState(false);

  const [sDate, setSDate] = useState("2025-08-22");
  const [eDate, setEDate] = useState("2025-09-20");
  const [qty, setQty] = useState(1);
  const [coupon, setCoupon] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const days = useMemo(() => {
    const a = new Date(sDate);
    const b = new Date(eDate);
    const ms = Math.max(0, b - a);
    return Math.ceil(ms / (1000 * 60 * 60 * 24));
  }, [sDate, eDate]);

  const greaterThan30 = useMemo(() => {
    return days > 30;
  }, [sDate, eDate]);

  const pricePerDay = 259;
  const rent = days * pricePerDay * qty;
  const fees = 1770; // placeholder
  const total = rent + fees;

  const profileComplete = emailDone && phoneDone && profileDone;
  const canRequest = profileComplete && agree && days > 0;

  async function handleRequestToBook(total) {
    try {
      // 1) Calculate amount in paise (example using your existing total)
      // If you want “days * pricePerDay * qty + fees”, reuse that calc and multiply by 100
      const amountInPaise = Math.round(total * 100);

      // 2A) FRONTEND-ONLY (Dev): open checkout WITHOUT order_id
      await openRazorpayCheckout({
        amountInPaise,
        customer: {
          name: "Ramesh",
          email: "ramesh@example.com",
          phone: "9999999999",
        },
        notes: { bookingId: "DEV-" + Date.now() },
        onSuccess: (resp) => {
          // console.log("Payment success");
          //navigate to booking history
          navigate("/user/bookings");
        },
        onClose: () => console.log("Checkout closed"),
      });
    } catch (e) {
      console.error(e);
      alert("Unable to start payment. Please try again.");
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-neutral-50 text-neutral-900 min-h-dvh">
        <main className="container-px py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/space/1">
              <button className="h-9 w-9 grid place-content-center rounded-full hover:bg-neutral-200">
                <span className="text-2xl">く</span>
              </button>
            </Link>
            <h1 className="text-[28px] md:text-[32px] font-semibold">
              Checkout
            </h1>
          </div>

          <div className="grid lg:grid-cols-[1fr_380px] gap-6 mt-4">
            <div className="space-y-5">
              <section className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                <header className="px-5 py-4 border-b border-neutral-200 font-semibold">
                  Booking details
                </header>

                <div className="p-5 space-y-5">
                  <div>
                    <label className="block text-sm text-neutral-600 mb-2">
                      How often you want to access your space?{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative inline-block">
                      <select
                        value={freq}
                        onChange={(e) => setFreq(e.target.value)}
                        className="appearance-none h-11 w-64 rounded-xl border border-neutral-300 bg-white px-3 pr-9 outline-none focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-500"
                      >
                        <option value="">Select frequency</option>
                        <option>Daily</option>
                        <option>Weekly</option>
                        <option>Monthly</option>
                      </select>
                      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-3/5 text-neutral-500 text-2xl">
                        ▾
                      </span>
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-col  justify-between">
                      <div className="flex row justify-between">
                        <div>
                          <div className="font-semibold">List of vehicles</div>
                          <div className="text-sm text-neutral-600">
                            Please select which vehicle you want to park{" "}
                            <span className="text-red-500">*</span>
                          </div>
                        </div>
                        <button
                          className="text-sm font-semibold text-neutral-700 hover:bg-green-600 hover:text-white bg-green-400 p-3 rounded-lg"
                          onClick={() => setVehicleOpen(true)}
                        >
                          Add vehicle
                        </button>
                      </div>
                      <div className="mt-3 rounded-xl border border-neutral-200 overflow-hidden">
                        {vehicles.length === 0 ? (
                          <button
                            onClick={() => setVehicleOpen(true)}
                            className="h-11 w-full text-left px-4 text-neutral-600 hover:bg-neutral-50"
                          >
                            <span className="mr-2">＋</span>Add vehicle details
                          </button>
                        ) : (
                          <div className="divide-y">
                            <div className="grid grid-cols-[140px_1fr_160px_80px] px-4 py-3 text-sm font-medium text-neutral-500 bg-neutral-50">
                              <span>Select</span>
                              <span>Registration No</span>
                              <span>Vehicle type</span>
                              <span></span>
                            </div>
                            {vehicles.map((v) => (
                              <div
                                key={v.id}
                                className="grid grid-cols-[140px_1fr_160px_80px] items-center px-4 py-3 text-sm"
                              >
                                <input type="checkbox" className="h-5 w-5" />
                                <span className="font-semibold">{v.reg}</span>
                                <span>{v.type}</span>
                                <button
                                  className="text-rose-600 hover:underline"
                                  onClick={() =>
                                    setVehicles((list) =>
                                      list.filter((x) => x.id !== v.id),
                                    )
                                  }
                                >
                                  Remove
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.06)]">
                <header className="px-5 py-4 border-b border-neutral-200 font-semibold">
                  Profile overview
                </header>

                <div className="p-5 space-y-3">
                  <ProfileItem
                    ok={emailDone}
                    title="Email address"
                    desc="ramesh040816@gmail.com"
                    actionLabel="Edit"
                  />

                  <ProfileItem
                    ok={phoneDone}
                    title="Phone number"
                    desc="Please add phone number"
                    actionLabel="Add"
                    onAction={() => setPhoneDone(true)}
                  />

                  <ProfileItem
                    ok={profileDone}
                    title="Personal details"
                    desc="Ramesh ramesh"
                    actionLabel="Add"
                    onAction={() => setProfileDone(true)}
                  />
                </div>
              </section>
            </div>

            <aside className="lg:sticky lg:top-20 h-fit">
              <div className="bg-white rounded-2xl border border-neutral-200 p-3 flex items-center gap-3 shadow-[0_8px_24px_rgba(2,6,23,0.06)]">
                <img
                  src={space.img}
                  alt=""
                  className="h-16 w-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="font-semibold truncate">{space.title}</div>
                  <div className="text-xs text-neutral-500">{space.sub}</div>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-2xl border border-neutral-200 shadow-[0_10px_30px_rgba(2,6,23,0.08)] p-4">
                <div className="flex items-center justify-between text-sm text-neutral-600">
                  <span>Available Spaces</span>
                  <span>Price</span>
                </div>
                <div className="flex items-center justify-between font-semibold">
                  <span>{space.available}</span>
                  <span>{space.priceUnit}</span>
                </div>

                <div className="mt-4">
                  <div className="text-sm text-neutral-600">
                    Select booking duration
                    <div className="text-[11px] opacity-80">
                      (Start Date → End Date)
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <input
                      type="date"
                      value={sDate}
                      onChange={(e) => setSDate(e.target.value)}
                      className="h-11 rounded-xl border border-neutral-300 px-3"
                    />
                    <input
                      type="date"
                      value={eDate}
                      onChange={(e) => setEDate(e.target.value)}
                      className="h-11 rounded-xl border border-neutral-300 px-3"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-sm text-neutral-700 font-medium pr-3">
                    Required spaces
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) =>
                      setQty(Math.max(1, Number(e.target.value || 1)))
                    }
                    className="mt-2 h-11 rounded-xl border border-neutral-300 px-3 w-24"
                  />
                  <div className="mt-1 text-[11px] text-neutral-500">
                    Available booking spaces: 1
                  </div>
                </div>

                <div className="mt-4 space-y-2 text-sm">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="pay"
                      defaultChecked
                      checked={!greaterThan30 ? true : null}
                    />{" "}
                    Full Payment
                  </label>
                  <label
                    className={`flex items-center gap-2 ${greaterThan30 ? "" : "text-neutral-500"}`}
                  >
                    <input
                      type="radio"
                      name="pay"
                      disabled={!greaterThan30}
                      checked={greaterThan30 ? null : false}
                    />{" "}
                    Monthly payments
                  </label>
                  <p className="text-[11px] text-neutral-500">
                    (Applicable for bookings of more than 30 days)
                  </p>
                </div>

                <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
                  <input
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    placeholder="Enter coupon"
                    className="h-11 rounded-xl border border-neutral-300 px-3"
                  />
                  <button className="h-11 px-4 rounded-xl bg-neutral-200 text-neutral-800 font-medium">
                    Apply
                  </button>
                  <button className="col-span-2 h-10 rounded-xl bg-neutral-100 text-neutral-700 text-sm">
                    View more coupons
                  </button>
                </div>

                <div className="mt-4 border-t border-neutral-200 pt-3 text-sm">
                  <Row
                    label="Parking space rent"
                    value={`₹ ${rent.toFixed(2)}`}
                  />
                  <Row
                    label="Service fees & Taxes"
                    value={`₹ ${fees.toFixed(2)}`}
                  />
                  <div className="flex items-center justify-between py-2 font-semibold border-t mt-2">
                    <span>Total rent</span>
                    <span className="text-emerald-600">
                      ₹ {total.toFixed(2)}
                    </span>
                  </div>
                </div>

                <label className="mt-4 flex items-center gap-2 text-sm text-neutral-700">
                  <input
                    type="checkbox"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  I agree to the{" "}
                  <a className="underline" href="#">
                    terms and conditions
                  </a>
                </label>

                <button
                  disabled={!canRequest}
                  className={`mt-3 h-11 w-full rounded-xl font-semibold
                  ${canRequest ? "bg-red-500 hover:bg-red-600 text-white" : "bg-neutral-200 text-neutral-500 cursor-not-allowed"}`}
                  onClick={() => handleRequestToBook(total.toFixed(2))}
                >
                  Request to book
                </button>
              </div>

              {!profileComplete && (
                <div className="mt-3 bg-rose-50 text-rose-700 border border-rose-200 rounded-xl p-3 text-sm">
                  Please complete your profile to continue.
                </div>
              )}
            </aside>
          </div>
        </main>
      </div>
      <FooterWide />
      <VehicleModal
        open={vehicleOpen}
        onClose={() => setVehicleOpen(false)}
        onSave={(veh) => setVehicles((prev) => [...prev, veh])}
      />
    </>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

function ProfileItem({ ok, title, desc, actionLabel, onAction }) {
  return (
    <div className="rounded-xl border border-neutral-200 p-3 flex items-center gap-3">
      <div
        className={`h-9 w-9 rounded-full grid place-content-center text-white
        ${ok ? "bg-emerald-500" : "bg-rose-500"}`}
        aria-hidden
      >
        {ok ? "✓" : "!"}
      </div>
      <div className="flex-1">
        <div className="font-semibold">{title}</div>
        <div className="text-sm text-neutral-600">{desc}</div>
      </div>
      <button
        className="h-9 px-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-sm"
        onClick={onAction}
      >
        {actionLabel}
      </button>
    </div>
  );
}
