import Link from "next/link";
import { COMPARE_ROWS, PLANS, fmt } from "@/lib/data";

export default function PlanTable() {
  return (
    <div className="overflow-x-auto">
      <div className="grid min-w-[960px] grid-cols-[1.4fr_repeat(5,1fr)]">
        <div className="border-b border-ink py-6 pr-4" />
        {PLANS.map(p => (
          <div key={p.id} className="relative border-b border-ink px-4 py-6">
            {p.featured && <div className="absolute -top-1.5 left-4 bg-gold-dark px-[9px] py-[5px] text-[11px] font-semibold tracking-[.14em] text-white">MOST COMPLETE</div>}
            <div className="mt-3 text-xs tracking-[.14em] text-muted">{p.duration}</div>
            <div className="mt-1.5 text-[21px] font-bold">{p.name}</div>
            <div className="mt-2 text-[28px] font-light tracking-[-.02em]">KES {fmt(p.price)}</div>
            <Link href={`/signup?plan=${p.id}`} className="mt-[18px] flex w-full justify-center rounded-full bg-ink py-3 text-sm font-semibold text-white hover:bg-gold-dark">Choose</Link>
          </div>
        ))}
        {COMPARE_ROWS.map(([label, cells]) => (
          <div key={label} className="contents">
            <div className="border-b border-line py-5 pr-4 text-base font-medium">{label}</div>
            {cells.map((c, i) => (
              <div key={i} className="flex items-center border-b border-line px-4 py-5 text-[15px] text-[#3A3833]">
                {c === "c" ? (
                  <span aria-label="Included" className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-ink text-sm text-gold">✓</span>
                ) : c === "n" ? (
                  <span aria-label="Not included" className="text-[#C2BDB2]">—</span>
                ) : <span>{c}</span>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
