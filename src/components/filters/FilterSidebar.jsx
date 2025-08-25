import React from "react";
import { useUrlArrayParam, useUrlParam } from "./useUrlParams.jsx";

export default function FilterSidebar() {
  const [type, setType] = useUrlParam("type", "parking");
  const [text, setText] = useUrlParam("text", "");
  const [sDate, setSDate] = useUrlParam("sDate", "");
  const [eDate, setEDate] = useUrlParam("eDate", "");

  const vcl = useUrlArrayParam("vcl");
  const space = useUrlArrayParam("space");
  const fac = useUrlArrayParam("fac");

  const section = "bg-white rounded-2xl border px-4 py-4";
  const h = "text-[13px] uppercase tracking-wide text-neutral-500 mb-2";

  const vehicles = [
    "SUV",
    "Hatchback",
    "Sedan",
    "Truck/Bus",
    "Tempo/pickup",
    "Auto rickshaw",
    "Minibus",
    "Motorcycle",
  ];
  const spaces = ["Open parking space", "Covered parking space"];
  const facilities = [
    "Commercial parking",
    "Residential parking",
    "Public parking spaces",
  ];

  return (
    <div className="space-y-4">
      <div className={`${section}`}>
        <div className="flex items-center justify-between text-sm">
          <div>
            <span className="font-semibold">Total Parkings</span> (2)
          </div>
          <button
            className="text-red-500 hover:underline"
            onClick={() => {
              vcl.clear();
              space.clear();
              fac.clear();
            }}
          >
            Clear all
          </button>
        </div>
      </div>

      <div className={`${section}`}>
        <p className={h}>Category</p>
        <div className="space-y-2 text-sm">
          {["storage", "parking"].map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                checked={type === opt}
                onChange={() => setType(opt)}
              />
              <span className="capitalize">
                {opt} {opt === "parking" ? "Space" : ""}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div className={`${section}`}>
        <p className={h}>Location</p>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tirupati, Andhra Pradesh, India"
          className="w-full h-11 rounded-xl border border-neutral-300 px-3"
        />
      </div>

      <div className={`${section}`}>
        <p className={h}>Booking duration</p>
        <div className="grid grid-cols-2 gap-2">
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

      <div className={`${section}`}>
        <p className={h}>Vehicle type</p>
        <div className="space-y-2 text-sm">
          {vehicles.map((v) => (
            <label key={v} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={vcl.values.includes(v)}
                onChange={() => vcl.toggle(v)}
              />
              <span>{v}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={`${section}`}>
        <p className={h}>Parking space type</p>
        <div className="space-y-2 text-sm">
          {spaces.map((v) => (
            <label key={v} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={space.values.includes(v)}
                onChange={() => space.toggle(v)}
              />
              <span>{v}</span>
            </label>
          ))}
        </div>
      </div>

      <div className={`${section}`}>
        <p className={h}>Facility type</p>
        <div className="space-y-2 text-sm">
          {facilities.map((v) => (
            <label key={v} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={fac.values.includes(v)}
                onChange={() => fac.toggle(v)}
              />
              <span>{v}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
