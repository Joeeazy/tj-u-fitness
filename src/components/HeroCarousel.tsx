"use client";
// One clip visible at a time, sliding like a swipe. Auto-advances, and
// responds to touch swipe or the dots.
import { useEffect, useRef, useState } from "react";
import LoopVideo from "./LoopVideo";

const AUTO_MS = 6000;

export default function HeroCarousel({ ids }: { ids: number[] }) {
  const [index, setIndex] = useState(0);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % ids.length), AUTO_MS);
    return () => clearInterval(t);
  }, [ids.length]);

  const go = (i: number) => setIndex(((i % ids.length) + ids.length) % ids.length);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onTouchStart={e => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={e => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out"
        style={{ width: `${ids.length * 100}%`, transform: `translateX(-${index * (100 / ids.length)}%)` }}
      >
        {ids.map((id, i) => (
          <div key={id} className="relative h-full shrink-0" style={{ width: `${100 / ids.length}%` }}>
            <LoopVideo id={id} active={i === index} />
          </div>
        ))}
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {ids.map((id, i) => (
          <button
            key={id}
            aria-label={`Show slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-1.5 cursor-pointer rounded-full transition-all ${i === index ? "w-8 bg-gold" : "w-1.5 bg-white/50 hover:bg-white/80"}`}
          />
        ))}
      </div>
    </div>
  );
}
