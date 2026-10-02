"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { CONTACT, NAV } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const { user } = useAuth();
  const [menu, setMenu] = useState(false);
  useEffect(() => setMenu(false), [pathname]);

  return (
    <div className="fixed inset-x-0 top-4 z-50 px-4">
      <header className="mx-auto flex h-16 max-w-[1200px] items-center justify-between gap-2 rounded-full border border-white/15 bg-ink/60 px-3 text-white shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-xl sm:h-[68px] sm:gap-6 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="TJ&U Fitness" className="h-8 w-8 shrink-0 object-contain sm:h-9 sm:w-9" />
          <span className="text-[15px] font-extrabold tracking-[.04em] sm:hidden">TJ&amp;U</span>
          <div className="hidden flex-col leading-none sm:flex">
            <span className="text-[17px] font-extrabold tracking-[.04em]">TJ&amp;U</span>
            <span className="mt-[2px] text-[9px] tracking-[.28em] text-white/60">FITNESS</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-[clamp(14px,1.8vw,26px)] whitespace-nowrap min-[1100px]:flex">
          {NAV.map(n => (
            <Link key={n.href} href={n.href} className="relative text-sm font-medium text-white/85 hover:text-gold">
              {n.label}
              {pathname.startsWith(n.href) && <span className="absolute inset-x-0 -bottom-2 h-0.5 bg-gold" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5 whitespace-nowrap sm:gap-2.5">
          <a href={CONTACT.tel} className="hidden text-sm font-semibold text-white/85 hover:text-gold min-[1100px]:inline-flex">{CONTACT.phone}</a>
          {user ? (
            <Link href="/dashboard" className="rounded-full bg-gold px-3.5 py-2 text-xs font-semibold text-ink hover:bg-white sm:px-[22px] sm:py-3 sm:text-sm">My account</Link>
          ) : (
            <>
              <Link href="/login" className="hidden rounded-full border border-white/50 px-5 py-[11px] text-sm font-semibold hover:bg-white/10 sm:inline-flex">Log in</Link>
              <Link href="/signup" className="rounded-full bg-gold px-3.5 py-2 text-xs font-semibold text-ink hover:bg-white sm:px-[22px] sm:py-3 sm:text-sm">Join now</Link>
            </>
          )}
          <button onClick={() => setMenu(m => !m)} className="cursor-pointer rounded-full border border-white/50 px-3 py-2 text-xs font-semibold hover:bg-white/10 sm:px-[18px] sm:py-[11px] sm:text-sm min-[1100px]:hidden">
            {menu ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {menu && (
        <div className="mx-auto mt-2 max-h-[calc(100vh-100px)] max-w-[1200px] overflow-y-auto rounded-[26px] border border-white/15 bg-ink/90 text-white shadow-[0_10px_40px_rgba(0,0,0,.35)] backdrop-blur-xl min-[1100px]:hidden">
          <div className="flex flex-col px-5 pb-5 pt-3 sm:px-7">
            {NAV.map(n => (
              <Link key={n.href} href={n.href} className="flex justify-between border-b border-white/10 py-4 text-lg font-semibold">
                <span>{n.label}</span>
                {pathname.startsWith(n.href) && <span className="h-2 w-2 rotate-45 self-center bg-gold" />}
              </Link>
            ))}
            <a href={CONTACT.tel} className="py-4 text-lg font-semibold text-gold">{CONTACT.phone}</a>
            {!user && <Link href="/login" className="py-4 text-lg font-semibold sm:hidden">Log in</Link>}
          </div>
        </div>
      )}
    </div>
  );
}
