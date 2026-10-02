import Link from "next/link";
import LoopVideo from "@/components/LoopVideo";
import HeroCarousel from "@/components/HeroCarousel";
import { CONTACT, HOME_TILES, MARQUEE, PLANS, PX, fmt } from "@/lib/data";
import { bgImg, btnDark, btnGhostLight, btnGold, btnOutline, btnWhite, eyebrow, eyebrowGold, h2, linkU, wrap } from "@/lib/ui";

const STEPS = [
  ["01", "Create your account", "Your name, phone and a password. Takes a minute."],
  ["02", "Pick a plan", "From a KES 500 Daily Pass to the full-year Ultimate Package."],
  ["03", "Pay with M-Pesa", "Approve the prompt on your phone and walk in."],
];

export default function Home() {
  return (
    <>
      {/* Hero: full-screen, sits behind the floating nav */}
      <section className="relative -mt-24 h-screen overflow-hidden bg-ink">
        <HeroCarousel ids={[6389833, 6388868, 6388419]} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,10,10,0)_40%,rgba(10,10,10,.55)_100%),linear-gradient(90deg,rgba(10,10,10,.5)_0%,rgba(10,10,10,.12)_45%,rgba(10,10,10,0)_72%)]" />
        <div className={`${wrap} relative flex h-full flex-col justify-end pb-[88px] text-white`}>
          <div className={`${eyebrowGold} mb-[22px]`}>BURUBURU · NAIROBI</div>
          <h1 className="max-w-[900px] text-balance text-[clamp(48px,7vw,104px)] font-bold leading-[.95] tracking-[-.03em]">Stronger together, right here in BuruBuru.</h1>
          <p className="mt-7 max-w-[520px] text-[19px] leading-[1.55] text-[#EDEAE2]">Coaches who know your name, equipment for every goal and neighbours who keep you showing up. Doors open at 4am.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/signup" className={btnGold}>Become a member</Link>
            <Link href="/membership" className={btnGhostLight}>See plans from KES 500</Link>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-line py-[22px]">
        <div className="flex w-max animate-marquee whitespace-nowrap text-[clamp(28px,3.4vw,48px)] font-bold tracking-[-.01em]">
          {[...MARQUEE, ...MARQUEE].map((w, i) => (
            <span key={i} className="inline-flex items-center gap-10 pr-10">{w}<span className="inline-block h-2 w-2 rotate-45 bg-gold-dark" /></span>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-12 pb-[100px] pt-[120px]`}>
        <div className={eyebrow}>WELCOME TO TJ&amp;U</div>
        <p className="text-pretty text-[clamp(26px,3vw,40px)] leading-tight tracking-[-.01em]">A gym on Rabai Road where first-timers and seasoned lifters train side by side. We pair a fully equipped floor with coaches who build a plan around you, then check in every week to keep it working.</p>
      </section>

      {/* Inside the gym */}
      <section className={`${wrap} pb-[120px]`}>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold tracking-[-.025em]">Inside the gym</h2>
          <Link href="/training" className={linkU}>All training &amp; services</Link>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-4">
          {HOME_TILES.map(t => (
            <Link key={t.vid} href="/training" className="flex flex-col gap-[18px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded bg-[#1a1a1a]">
                <LoopVideo id={t.vid} />
                <div className="absolute left-3.5 top-3.5 flex items-center gap-2 rounded-full bg-ink/60 px-2.5 py-1.5 text-[11px] tracking-[.16em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />LIVE ON THE FLOOR
                </div>
              </div>
              <div>
                <div className="text-[22px] font-semibold tracking-[-.01em]">{t.title}</div>
                <div className="mt-1.5 text-[15px] leading-normal text-muted">{t.text}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Full-bleed banner */}
      <section className="relative h-[min(90vh,820px)] min-h-[520px] overflow-hidden bg-ink">
        <LoopVideo id={6388881} position="center 35%" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,10,10,.8)_0%,rgba(10,10,10,.1)_55%)]" />
        <div className={`${wrap} relative flex h-full flex-col justify-end pb-[72px] text-white`}>
          <div className={`${eyebrowGold} mb-[18px]`}>OPEN FROM 4AM</div>
          <h2 className="max-w-[1000px] text-balance text-[clamp(44px,6.4vw,104px)] font-bold leading-[.92] tracking-[-.035em]">Before the city wakes, BuruBuru trains.</h2>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-[520px] text-lg leading-relaxed text-[#EDEAE2]">Fit your session in before work, after work or on your lunch break. Monday to Friday, 4am to 10pm.</p>
            <Link href="/about" className={btnWhite}>See opening hours</Link>
          </div>
        </div>
      </section>

      {/* Personal training */}
      <section className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-16 py-[120px]`}>
        <div>
          <div className={`${eyebrow} mb-5`}>PERSONAL TRAINING</div>
          <h2 className={h2}>A coach in your corner, every week.</h2>
          <p className="mt-6 max-w-[480px] text-lg leading-[1.65] text-body">Your coach assesses where you are, writes the programme and adjusts it as you progress. Personal training sessions are built into our packages.</p>
          <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line">
            <div className="bg-paper p-6">
              <div className="text-xs tracking-[.16em] text-muted">STARTER</div>
              <div className="mt-2.5 text-3xl font-light tracking-[-.02em]">2 × 30 min</div>
              <div className="mt-1 text-sm text-muted">sessions per week</div>
            </div>
            <div className="bg-ink p-6 text-white">
              <div className="text-xs tracking-[.16em] text-gold">GOLD</div>
              <div className="mt-2.5 text-3xl font-light tracking-[-.02em]">6 × 60 min</div>
              <div className="mt-1 text-sm text-stone">sessions per week</div>
            </div>
          </div>
          <Link href="/training" className={`${linkU} mt-8`}>How training works</Link>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded bg-[#1a1a1a]"><LoopVideo id={6390168} /></div>
      </section>

      {/* Join in three steps */}
      <section className="border-t border-line">
        <div className={`${wrap} py-[100px]`}>
          <h2 className="mb-12 text-[clamp(32px,3.6vw,52px)] font-bold tracking-[-.02em]">Join in three steps</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-10">
            {STEPS.map(([n, t, d]) => (
              <div key={n} className="border-t-2 border-ink pt-6">
                <div className="font-mono text-[13px] text-bronze">{n}</div>
                <div className="mt-3.5 text-2xl font-bold">{t}</div>
                <div className="mt-2.5 text-base leading-relaxed text-body">{d}</div>
              </div>
            ))}
          </div>
          <Link href="/signup" className={`${btnDark} mt-12`}>Start now</Link>
        </div>
      </section>

      {/* Plans teaser */}
      <section className="bg-ink text-paper">
        <div className={`${wrap} py-[110px]`}>
          <div className="mb-14 grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-end gap-12">
            <div>
              <div className={`${eyebrowGold} mb-5`}>MEMBERSHIP</div>
              <h2 className={h2}>Pick a plan that fits your week.</h2>
            </div>
            <p className="text-lg leading-relaxed text-stone">Drop in for a day, try two weeks, or commit to a package with personal training, progress reports and nutrition built in.</p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] border-t border-[#33312D]">
            {PLANS.map(p => (
              <Link key={p.id} href="/membership" className="flex flex-col gap-2.5 border-b border-[#33312D] py-7 pr-6 hover:text-gold">
                <div className="text-[13px] tracking-[.14em] text-[#8F8A7F]">{p.duration}</div>
                <div className="text-[22px] font-semibold">{p.name}</div>
                <div className="text-3xl font-light tracking-[-.02em]">KES {fmt(p.price)}</div>
              </Link>
            ))}
          </div>
          <Link href="/membership" className={`${btnGold} mt-11`}>Compare all plans</Link>
        </div>
      </section>

      {/* Wellness */}
      <section className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-16 py-[120px]`}>
        <div className="aspect-[5/6] overflow-hidden rounded" style={bgImg(PX(3768593, 900))} />
        <div>
          <div className={`${eyebrow} mb-5`}>WELLNESS &amp; NUTRITION</div>
          <h2 className="text-[clamp(36px,4vw,56px)] font-bold leading-[1.02] tracking-[-.025em]">Recover as hard as you train.</h2>
          <p className="mt-6 max-w-[480px] text-lg leading-[1.65] text-body">Sauna, steam and massage after your session, plus customised nutrition plans and progress reports so you can see the change week by week.</p>
          <div className="mt-9 flex flex-col border-t border-line">
            {[["Sauna & steam", "On site"], ["Massage", "On site"], ["Nutrition plan", "Gold Package"]].map(([a, b]) => (
              <div key={a} className="flex justify-between border-b border-line py-[18px] text-[17px]"><span>{a}</span><span className="text-bronze">{b}</span></div>
            ))}
          </div>
          <Link href="/wellness" className={`${linkU} mt-8`}>Discover wellness</Link>
        </div>
      </section>

      {/* Community */}
      <section className="bg-sand">
        <div className={`${wrap} py-[110px]`}>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className={`${eyebrow} mb-5`}>COMMUNITY</div>
              <h2 className="max-w-[640px] text-[clamp(36px,4vw,56px)] font-bold leading-[1.02] tracking-[-.025em]">More than a gym. Your neighbours, your crew.</h2>
            </div>
            <Link href="/community" className={linkU}>Meet the community</Link>
          </div>
          <div className="grid h-[min(56vh,520px)] min-h-[340px] grid-cols-[1.4fr_1fr_1fr] gap-3">
            <div className="relative overflow-hidden rounded bg-[#1a1a1a]"><LoopVideo id={6389568} /></div>
            <div className="rounded" style={bgImg(PX(6455820, 900))} />
            <div className="rounded" style={bgImg(PX(6455813, 700))} />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-12 py-[120px]`}>
        <h2 className={h2}>Come see us on Rabai Road.</h2>
        <div className="flex flex-col gap-6 text-lg leading-[1.55]">
          <div>{CONTACT.address}. {CONTACT.landmark}.</div>
          <div className="flex flex-wrap gap-3">
            <Link href="/about" className={btnDark}>Directions &amp; hours</Link>
            <a href={CONTACT.tel} className={btnOutline}>Call {CONTACT.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
