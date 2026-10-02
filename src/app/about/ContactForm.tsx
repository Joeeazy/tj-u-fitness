"use client";
// Mock: hook this up to email/WhatsApp/CRM before launch.
import { useState } from "react";
import { btnDark } from "@/lib/ui";

const field = "rounded-[2px] border border-[#CFCABF] bg-paper p-[18px] text-base outline-none focus:border-ink";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return <div className="py-7 text-xl">Asante! We&apos;ll call you back shortly.</div>;
  return (
    <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-4">
        <input required name="name" placeholder="Full name" className={field} />
        <input required name="phone" type="tel" placeholder="Phone (07…)" className={field} />
      </div>
      <textarea name="message" placeholder="How can we help?" rows={5} className={`${field} mt-4 w-full`} />
      <button type="submit" className={`${btnDark} mt-5`}>Send message</button>
    </form>
  );
}
