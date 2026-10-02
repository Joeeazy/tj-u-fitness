import type { Metadata } from "next";
import Link from "next/link";
import { PX } from "@/lib/data";
import { bgImg, btnDark, eyebrowGold, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Community · TJ&U Fitness" };

const CARDS = [
  [3768730, "Group classes", "Train in a pack. Unlimited group classes are part of the Gold Package."],
  [6455927, "Coaches on the floor", "Ask for a spot, a form check or a new programme. Our team is there to help."],
  [6455820, "Bring a friend", "A KES 500 Daily Pass is the easiest way to show a friend around."],
] as const;

export default function Community() {
  return (
    <>
      <section className="relative h-[min(72vh,700px)] min-h-[460px] overflow-hidden bg-ink">
        <div className="absolute inset-0" style={bgImg(PX(6456140))} />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,10,10,.7),rgba(10,10,10,0)_70%)]" />
        <div className={`${wrap} relative flex h-full flex-col justify-end pb-[72px] text-white`}>
          <div className={`${eyebrowGold} mb-[18px]`}>COMMUNITY</div>
          <h1 className="max-w-[820px] text-[clamp(46px,6vw,92px)] font-bold leading-[.95] tracking-[-.03em]">Made in BuruBuru.</h1>
          <p className="mt-6 max-w-[520px] text-[19px] leading-relaxed text-[#EDEAE2]">The early-morning regulars, the after-work crew, the coaches who remember your PBs. This is who you&apos;ll train with.</p>
        </div>
      </section>
      <section className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-5 py-[110px]`}>
        {CARDS.map(([id, t, d]) => (
          <div key={t} className="flex flex-col gap-5">
            <div className="aspect-square rounded" style={bgImg(PX(id, 900))} />
            <h3 className="text-2xl font-bold">{t}</h3>
            <p className="text-base leading-relaxed text-body">{d}</p>
          </div>
        ))}
      </section>
      <section className="bg-sand">
        <div className="mx-auto max-w-[1000px] px-8 py-[110px] text-center">
          <p className="text-balance text-[clamp(28px,3.4vw,46px)] leading-tight tracking-[-.015em]">Whether you&apos;re starting out or chasing a new PB, there&apos;s a place for you at TJ&amp;U.</p>
          <Link href="/signup" className={`${btnDark} mt-10`}>Join the community</Link>
        </div>
      </section>
    </>
  );
}
