"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { PLANS, PX, fmt } from "@/lib/data";

const card = "rounded border border-line bg-white p-8";
const small = "mb-[18px] text-xs tracking-[.2em] text-muted";
const dateFmt = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function Dashboard() {
  const { user, ready, logout } = useAuth();
  const router = useRouter();

  useEffect(() => { if (ready && !user) router.replace("/login"); }, [ready, user, router]);
  if (!user) return <div className="min-h-[60vh]" />;

  const plan = PLANS.find(p => p.id === user.planId) || PLANS[0];
  const start = new Date(user.startedAt);
  const renew = new Date(start); renew.setDate(renew.getDate() + plan.days);
  const progress = Math.min(100, Math.max(2, ((Date.now() - start.getTime()) / (plan.days * 864e5)) * 100));

  return (
    <section className="mx-auto max-w-[1360px] px-8 pb-[120px] pt-16">
      <div className="mb-11 flex flex-wrap items-end justify-between gap-5">
        <div>
          <div className="mb-3.5 text-[13px] tracking-[.28em] text-bronze">MY TJ&amp;U</div>
          <h1 className="text-[clamp(40px,5vw,72px)] font-bold leading-none tracking-[-.03em]">Habari, {user.name.split(" ")[0]}.</h1>
        </div>
        <button onClick={() => { logout(); router.push("/"); }} className="cursor-pointer rounded-full border border-ink px-[22px] py-3 text-sm font-semibold hover:bg-ink hover:text-white">Log out</button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4">
        <div className="flex min-h-[260px] min-w-0 flex-col justify-between gap-10 rounded bg-ink p-9 text-white md:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs tracking-[.2em] text-gold">ACTIVE PLAN</div>
              <div className="mt-2.5 text-[clamp(28px,6vw,40px)] font-bold tracking-[-.02em]">{plan.name}</div>
              <div className="mt-1 text-stone">{plan.duration} · KES {fmt(plan.price)}</div>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="" className="h-16 w-16 rounded-full bg-white object-contain p-1.5" />
          </div>
          <div>
            <div className="mb-2.5 flex justify-between text-sm text-stone"><span>Started {dateFmt(start)}</span><span>Renews {dateFmt(renew)}</span></div>
            <div className="h-1 bg-[#33312D]"><div className="h-1 bg-gold" style={{ width: `${progress}%` }} /></div>
          </div>
        </div>

        <div className={`${card} flex flex-col gap-[18px]`}>
          <div className="text-xs tracking-[.2em] text-muted">CHECK IN</div>
          <div className="aspect-square max-w-[180px] border-[10px] border-white bg-[repeating-linear-gradient(90deg,#121212_0_6px,#fff_6px_10px,#121212_10px_12px,#fff_12px_18px)] outline outline-1 outline-line" />
          <div className="text-sm text-muted">Show this code at the front desk.</div>
        </div>

        <div className={card}>
          <div className={small}>PERSONAL TRAINING</div>
          <div className="text-[22px] font-semibold">{plan.pt}</div>
          <a href="tel:0729008500" className="mt-[22px] inline-flex rounded-full bg-ink px-[22px] py-3 text-sm font-semibold text-white hover:bg-gold-dark">Book a session</a>
        </div>

        <div className={card}>
          <div className={small}>PROGRESS REPORTS</div>
          <div className="text-[22px] font-semibold">{plan.reports}</div>
          <div className="mt-2.5 text-sm text-muted">Your first report appears after your initial assessment.</div>
        </div>

        <div className={card}>
          <div className={small}>PAYMENTS</div>
          <div className="flex justify-between border-b border-[#EEEAE2] py-2.5 text-base"><span>{dateFmt(start)} · M-Pesa</span><span className="font-semibold">KES {fmt(plan.price)}</span></div>
          <div className="mt-2.5 font-mono text-[13px] text-muted">Ref {user.payRef}</div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-4">
        {[["/membership", PX(6455927), "Upgrade your plan"], ["/wellness", PX(6455813), "Sauna, steam & massage"]].map(([href, img, t]) => (
          <Link key={href} href={href} className="relative min-h-[220px] overflow-hidden rounded bg-ink bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,10,10,.75),rgba(10,10,10,0))]" />
            <div className="absolute bottom-6 left-7 text-[22px] font-semibold text-white">{t}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
