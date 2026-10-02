"use client";
import { useEffect, useState } from "react";
import { GALLERY, PX } from "@/lib/data";

const FILTERS = ["All", "Strength", "Cardio", "Boxing", "Classes", "Coaching"];
const RATIOS = ["4/5", "1/1", "3/4"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const items = GALLERY.filter(([, c]) => filter === "All" || c === filter);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="mb-8 mt-11 flex flex-wrap gap-2">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`cursor-pointer rounded-full border px-5 py-2.5 text-sm font-semibold ${f === filter ? "border-ink bg-ink text-white" : "border-[#D6D2C8] hover:border-ink"}`}
          >{f}</button>
        ))}
      </div>
      <div className="gap-3 [column-count:1] sm:[column-count:2] lg:[column-count:3]">
        {items.map(([id, cat], i) => (
          <button key={id} onClick={() => setOpen(id)} aria-label={`Open ${cat} photo`} className="mb-3 block w-full cursor-zoom-in overflow-hidden rounded bg-line [break-inside:avoid]">
            <div
              className="w-full bg-cover bg-center transition-transform duration-[600ms] hover:scale-[1.04]"
              style={{ aspectRatio: RATIOS[i % 3], backgroundImage: `url(${PX(id, 800)})` }}
            />
          </button>
        ))}
      </div>
      {open && (
        <div onClick={() => setOpen(null)} className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-[rgba(10,10,10,.92)] p-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={PX(open, 1600)} alt="" className="max-h-full max-w-full rounded-[2px] object-contain" />
          <div className="absolute right-8 top-6 text-[15px] tracking-[.1em] text-white">CLOSE ✕</div>
        </div>
      )}
    </>
  );
}
