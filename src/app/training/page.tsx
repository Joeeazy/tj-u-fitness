import type { Metadata } from "next";
import { AMENITIES, PX, SERVICES } from "@/lib/data";
import { bgImg, eyebrowGold, h2Sm, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Training & services · TJ&U Fitness" };

export default function Training() {
  return (
    <>
      <section className="relative -mt-24 h-[min(64vh,620px)] min-h-[420px] overflow-hidden bg-ink">
        <div className="absolute inset-0" style={bgImg(PX(6455963), "center 30%")} />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,10,10,.75),rgba(10,10,10,.1)_60%)]" />
        <div className={`${wrap} relative flex h-full flex-col justify-end pb-16 text-white`}>
          <div className={`${eyebrowGold} mb-[18px]`}>TRAINING &amp; SERVICES</div>
          <h1 className="max-w-[880px] text-[clamp(46px,6vw,88px)] font-bold leading-[.95] tracking-[-.03em]">Everything you need to get better.</h1>
        </div>
      </section>

      <section className={`${wrap} flex flex-col gap-[100px] pb-10 pt-[100px]`}>
        {SERVICES.map((s, i) => (
          <div key={s.title} className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-14">
            <div className={`aspect-[4/3] overflow-hidden rounded bg-line ${i % 2 ? "md:order-2" : ""}`} style={bgImg(s.img)} />
            <div>
              <div className="mb-4 font-mono text-[13px] text-bronze">{String(i + 1).padStart(2, "0")}</div>
              <h2 className={h2Sm}>{s.title}</h2>
              <p className="mt-5 max-w-[500px] text-lg leading-[1.65] text-body">{s.text}</p>
              <div className="mt-[22px] text-sm text-muted">{s.note}</div>
            </div>
          </div>
        ))}
      </section>

      <section className={`${wrap} pb-[120px] pt-20`}>
        <h2 className={`${h2Sm} mb-9`}>Amenities</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] border-t border-ink">
          {AMENITIES.map(([t, d]) => (
            <div key={t} className="border-b border-line py-[26px] pr-5">
              <div className="text-lg font-semibold">{t}</div>
              <div className="mt-1.5 text-[15px] text-muted">{d}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
