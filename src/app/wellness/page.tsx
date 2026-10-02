import type { Metadata } from "next";
import Link from "next/link";
import { PX } from "@/lib/data";
import { bgImg, btnGold, eyebrow, h1Page, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Wellness & nutrition · TJ&U Fitness" };

const ITEMS = [
  ["Sauna & steam", "Loosen tight muscles and unwind after a heavy session before heading home."],
  ["Massage", "On-site massage to help you recover between training days. Ask at the front desk to book."],
  ["Nutrition plans", "A customised plan built around your goal and the food you already eat. Included in the Gold Package."],
  ["Progress reports", "Monthly on Starter, weekly on Gold. Your coach tracks the numbers so you can focus on the work."],
];

export default function Wellness() {
  return (
    <>
      <section className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-end gap-14 pt-[88px]`}>
        <div>
          <div className={`${eyebrow} mb-5`}>WELLNESS &amp; NUTRITION</div>
          <h1 className={h1Page}>Feel good beyond the workout.</h1>
        </div>
        <p className="text-[19px] leading-relaxed text-body">Results come from training, recovery and what&apos;s on your plate. TJ&amp;U supports all three under one roof.</p>
      </section>
      <section className={`${wrap} pt-14`}>
        <div className="h-[min(62vh,600px)] min-h-[380px] overflow-hidden rounded" style={bgImg(PX(3768593), "center 35%")} />
      </section>
      <section className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-12 pb-[120px] pt-[100px]`}>
        {ITEMS.map(([t, d]) => (
          <div key={t} className="border-t-2 border-ink pt-7">
            <h3 className="text-[28px] font-bold tracking-[-.015em]">{t}</h3>
            <p className="mt-4 text-[17px] leading-[1.65] text-body">{d}</p>
          </div>
        ))}
      </section>
      <section className="bg-ink text-white">
        <div className={`${wrap} flex flex-wrap items-center justify-between gap-8 py-[90px]`}>
          <h2 className="max-w-[700px] text-[clamp(32px,3.6vw,52px)] font-bold tracking-[-.02em]">Get nutrition, coaching and weekly reports with Gold.</h2>
          <Link href="/membership" className={btnGold}>View the Gold Package</Link>
        </div>
      </section>
    </>
  );
}
