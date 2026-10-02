import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { CONTACT, HOURS } from "@/lib/data";
import { eyebrow, h1Page, h2Sm, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Visit us · TJ&U Fitness" };

const small = "mb-2.5 text-xs tracking-[.2em] text-muted";

export default function About() {
  return (
    <>
      <section className={`${wrap} pb-[60px] pt-[88px]`}>
        <div className={`${eyebrow} mb-5`}>ABOUT &amp; VISIT</div>
        <h1 className={`${h1Page} max-w-[1000px]`}>Find us on Rabai Road.</h1>
      </section>
      <section className={`${wrap} grid grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-14 pb-[120px]`}>
        <iframe
          title="TJ&U Fitness on Google Maps"
          src="https://www.google.com/maps?q=TJ%20and%20U%20Fitness%2C%20Rabai%20Road%2C%20Buruburu%2C%20Nairobi&output=embed"
          className="min-h-[440px] w-full rounded border-0 bg-sand"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="flex flex-col gap-10">
          <div>
            <div className={small}>ADDRESS</div>
            <div className="text-xl leading-normal">2nd Floor, TJ&amp;U Fitness Complex<br />Rabai Road, BuruBuru, Nairobi</div>
            <div className="mt-2 text-base text-muted">{CONTACT.landmark}</div>
          </div>
          <div>
            <div className={small}>OPENING HOURS</div>
            <div className="flex flex-col border-t border-line">
              {HOURS.map(([d, t]) => (
                <div key={d} className="flex justify-between border-b border-line py-3 text-base"><span>{d}</span><span>{t}</span></div>
              ))}
            </div>
          </div>
          <div>
            <div className={small}>CALL OR VISIT</div>
            <a href={CONTACT.tel} className="text-[32px] font-bold tracking-[-.01em] hover:text-bronze">{CONTACT.phone}</a>
          </div>
          <div>
            <div className={small}>ACCESSIBILITY</div>
            <div className="text-base leading-relaxed text-[#3A3833]">Wheelchair-accessible entrance, parking and washroom.</div>
          </div>
        </div>
      </section>
      <section className="bg-sand">
        <div className="mx-auto max-w-[880px] px-8 py-[100px]">
          <h2 className={`${h2Sm} mb-8`}>Send us a message</h2>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
