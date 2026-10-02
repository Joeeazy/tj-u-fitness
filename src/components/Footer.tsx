import Link from "next/link";
import { CONTACT } from "@/lib/data";

const col = "flex flex-col gap-3 text-[15px]";
const head = "mb-1.5 font-semibold text-white";
const lnk = "text-stone hover:text-gold";

export default function Footer() {
  return (
    <footer className="bg-ink text-stone">
      <div className="mx-auto max-w-[1360px] px-8 pb-10 pt-20">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-10">
          <div className="flex flex-col gap-[18px]">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="" className="h-[52px] w-[52px] rounded-full bg-white object-contain p-1" />
              <span className="text-xl font-extrabold tracking-[.04em] text-white">TJ&amp;U FITNESS</span>
            </div>
            <p className="text-[15px] leading-relaxed">Your neighbourhood gym since day one.</p>
          </div>
          <div className={col}>
            <div className={head}>Explore</div>
            <Link href="/training" className={lnk}>Training &amp; services</Link>
            <Link href="/membership" className={lnk}>Membership</Link>
            <Link href="/wellness" className={lnk}>Wellness &amp; nutrition</Link>
            <Link href="/community" className={lnk}>Community</Link>
            <Link href="/gallery" className={lnk}>Gallery</Link>
          </div>
          <div className={col}>
            <div className={head}>Visit</div>
            <span>2nd Floor, TJ&amp;U Fitness Complex</span>
            <span>Rabai Road, BuruBuru</span>
            <span>Mon–Fri 4am–10pm</span>
            <a href={CONTACT.tel} className="text-gold">{CONTACT.phone}</a>
          </div>
          <div className={col}>
            <div className={head}>We accept</div>
            <span>M-Pesa</span><span>Debit cards</span><span>NFC mobile payments</span>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-[#2C2A27] pt-6 text-[13px] text-[#8F8A7F]">
          <span>© {new Date().getFullYear()} TJ&amp;U Fitness, Nairobi</span>
          <Link href="/about" className="hover:text-gold">Contact us</Link>
        </div>
      </div>
    </footer>
  );
}
