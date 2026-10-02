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
    <>
      <div className="bg-ink text-[13px] tracking-[.02em] text-[#E9E4D8]">
        <div className="mx-auto flex max-w-[1360px] flex-wrap justify-between gap-4 px-8 py-[9px]">
          <div className="flex min-w-0 gap-6 overflow-hidden whitespace-nowrap">
            <span className="truncate">Rabai Road, BuruBuru · next to Rubis</span>
            <span className="hidden min-[1100px]:inline">Mon–Fri 4am–10pm</span>
          </div>
          <a href={CONTACT.tel} className="whitespace-nowrap text-gold">{CONTACT.phone}</a>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1360px] items-center justify-between gap-6 px-8">
          <Link href="/" className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="TJ&U Fitness" className="h-[46px] w-[46px] object-contain" />
            <div className="flex flex-col leading-none">
              <span className="text-xl font-extrabold tracking-[.04em]">TJ&amp;U</span>
              <span className="mt-[3px] text-[10px] tracking-[.32em] text-muted">FITNESS</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-[clamp(16px,2vw,30px)] whitespace-nowrap min-[1100px]:flex">
            {NAV.map(n => (
              <Link key={n.href} href={n.href} className="relative py-7 text-[15px] font-medium hover:text-bronze">
                {n.label}
                {pathname.startsWith(n.href) && <span className="absolute inset-x-0 -bottom-px h-0.5 bg-gold-dark" />}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2.5 whitespace-nowrap">
            {user ? (
              <Link href="/dashboard" className="rounded-full bg-ink px-[22px] py-3 text-sm font-semibold text-paper hover:bg-gold-dark">My account</Link>
            ) : (
              <>
                <Link href="/login" className="hidden rounded-full border border-ink px-5 py-[11px] text-sm font-semibold sm:inline-flex">Log in</Link>
                <Link href="/signup" className="rounded-full bg-ink px-[22px] py-3 text-sm font-semibold text-paper hover:bg-gold-dark">Join now</Link>
              </>
            )}
            <button onClick={() => setMenu(m => !m)} className="cursor-pointer rounded-full border border-ink px-[18px] py-[11px] text-sm font-semibold min-[1100px]:hidden">
              {menu ? "Close" : "Menu"}
            </button>
          </div>
        </div>

        {menu && (
          <div className="border-t border-line bg-paper min-[1100px]:hidden">
            <div className="mx-auto flex max-w-[1360px] flex-col px-8 pb-6 pt-2">
              {NAV.map(n => (
                <Link key={n.href} href={n.href} className="flex justify-between border-b border-line py-4 text-[22px] font-semibold">
                  <span>{n.label}</span>
                  {pathname.startsWith(n.href) && <span className="h-2 w-2 rotate-45 self-center bg-gold-dark" />}
                </Link>
              ))}
              {!user && <Link href="/login" className="py-4 text-[22px] font-semibold sm:hidden">Log in</Link>}
            </div>
          </div>
        )}
      </header>
    </>
  );
}
