"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/lib/auth";
import { PLANS, PX, fmt } from "@/lib/data";
import { btnDark, btnOutline, input, label } from "@/lib/ui";

type Pay = "idle" | "sending" | "done";

export default function Signup() {
  const { user, register } = useAuth();
  const [step, setStep] = useState(1);
  const [planId, setPlanId] = useState("gold");
  const [pay, setPay] = useState<Pay>("idle");
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "", mpesa: "" });
  const [ref, setRef] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search).get("plan");
    if (p && PLANS.some(x => x.id === p)) setPlanId(p);
    return () => clearTimeout(timer.current);
  }, []);

  // Logged-in members skip straight to choosing a plan.
  useEffect(() => {
    if (user && step === 1 && pay === "idle") {
      setForm(f => ({ ...f, name: user.name, phone: user.phone, email: user.email, password: user.password, mpesa: user.phone }));
      setStep(2);
    }
  }, [user, step, pay]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => { setForm(f => ({ ...f, [k]: e.target.value })); setError(""); };
  const plan = PLANS.find(p => p.id === planId)!;

  const nextFromDetails = () => {
    if (!form.name.trim() || !form.phone.trim()) return setError("Please add your name and phone number.");
    if (form.password.length < 8) return setError("Password needs at least 8 characters.");
    setForm(f => ({ ...f, mpesa: f.mpesa || f.phone }));
    setStep(2);
  };

  const sendStk = () => {
    if (!form.mpesa.trim()) return setError("Enter the M-Pesa number to charge.");
    setPay("sending");
    const payRef = "TJU" + (form.phone.replace(/\D/g, "").slice(-4) || "8500") + Math.random().toString(36).slice(2, 5).toUpperCase();
    timer.current = setTimeout(() => {
      setRef(payRef);
      setPay("done");
      register({ name: form.name, phone: form.phone, email: form.email, password: form.password, planId, payRef, startedAt: new Date().toISOString() });
    }, 2800);
  };

  const firstName = form.name.split(" ")[0] || "Member";

  return (
    <section className="grid min-h-[calc(100vh-116px)] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))]">
      <div className="relative min-h-[360px] bg-ink" style={{ backgroundImage: `url(${PX(6793653)})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,10,10,.75),rgba(10,10,10,0)_60%)]" />
        <div className="absolute inset-x-10 bottom-11 text-white">
          <div className="mb-3.5 text-[13px] tracking-[.28em] text-gold">JOIN TJ&amp;U</div>
          <div className="text-[clamp(32px,3.4vw,48px)] font-bold leading-[1.05] tracking-[-.02em]">Karibu. Your first session starts here.</div>
        </div>
      </div>

      <div className="flex w-full max-w-[620px] flex-col justify-center px-[clamp(24px,5vw,80px)] py-16">
        <div className="mb-10 flex gap-2">
          {["DETAILS", "PLAN", "PAYMENT"].map((l, i) => (
            <div key={l} className="flex flex-1 flex-col gap-2.5">
              <div className={`h-[3px] ${step > i ? "bg-ink" : "bg-[#E0DCD3]"}`} />
              <div className="text-xs tracking-[.14em] text-muted">{l}</div>
            </div>
          ))}
        </div>

        {step === 1 && (
          <>
            <h1 className="mb-2 text-[40px] font-bold tracking-[-.02em]">Create your account</h1>
            <p className="mb-8 text-base text-muted">Already a member? <Link href="/login" className="border-b border-current font-semibold text-ink">Log in</Link></p>
            <div className="flex flex-col gap-3.5">
              <label className={label}>FULL NAME<input value={form.name} onChange={set("name")} placeholder="e.g. Wanjiru Kamau" className={input} autoComplete="name" /></label>
              <label className={label}>PHONE NUMBER<input value={form.phone} onChange={set("phone")} type="tel" placeholder="07XX XXX XXX" className={input} autoComplete="tel" /></label>
              <label className={label}>EMAIL<input value={form.email} onChange={set("email")} type="email" placeholder="you@example.com" className={input} autoComplete="email" /></label>
              <label className={label}>PASSWORD<input value={form.password} onChange={set("password")} type="password" placeholder="At least 8 characters" className={input} autoComplete="new-password" /></label>
            </div>
            {error && <div className="mt-3.5 text-sm text-[#A33A2A]">{error}</div>}
            <button onClick={nextFromDetails} className={`${btnDark} mt-7 w-full`}>Continue to plans</button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="mb-2 text-[40px] font-bold tracking-[-.02em]">Choose your plan</h1>
            <p className="mb-7 text-base text-muted">You can upgrade any time at the front desk.</p>
            <div className="flex flex-col gap-2.5">
              {PLANS.map(p => {
                const on = p.id === planId;
                return (
                  <button key={p.id} onClick={() => setPlanId(p.id)} className={`flex cursor-pointer items-center justify-between rounded-[2px] text-left ${on ? "border-2 border-ink bg-white px-5 py-[18px]" : "border border-[#D6D2C8] px-[21px] py-[19px] hover:border-ink"}`}>
                    <div>
                      <div className={`text-[17px] ${on ? "font-bold" : "font-semibold"}`}>{p.name}</div>
                      <div className="mt-[3px] text-sm text-muted">{p.duration} · {p.blurb}</div>
                    </div>
                    <div className={`whitespace-nowrap text-[17px] ${on ? "font-semibold" : ""}`}>KES {fmt(p.price)}</div>
                  </button>
                );
              })}
            </div>
            <div className="mt-7 flex gap-2.5">
              {!user && <button onClick={() => setStep(1)} className={btnOutline}>Back</button>}
              <button onClick={() => { setStep(3); setPay("idle"); }} className={`${btnDark} flex-1`}>Continue to payment</button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h1 className="mb-2 text-[40px] font-bold tracking-[-.02em]">Pay with M-Pesa</h1>
            <p className="mb-7 text-base text-muted">We&apos;ll send a payment prompt to your phone.</p>
            <div className="flex flex-col gap-3 rounded-[2px] border border-[#E0DCD3] bg-white p-[22px]">
              <div className="flex justify-between text-base"><span className="text-muted">Plan</span><span className="font-semibold">{plan.name} · {plan.duration}</span></div>
              <div className="flex justify-between text-base"><span className="text-muted">Paybill</span><span className="font-mono">TJ&amp;U FITNESS</span></div>
              <div className="flex justify-between border-t border-[#EEEAE2] pt-3.5 text-[22px]"><span>Total</span><span className="font-bold">KES {fmt(plan.price)}</span></div>
            </div>

            {pay === "idle" && (
              <>
                <label className={`${label} mt-[22px]`}>M-PESA PHONE NUMBER<input value={form.mpesa} onChange={set("mpesa")} type="tel" placeholder="07XX XXX XXX" className={input} /></label>
                {error && <div className="mt-3.5 text-sm text-[#A33A2A]">{error}</div>}
                <div className="mt-6 flex gap-2.5">
                  <button onClick={() => setStep(2)} className={btnOutline}>Back</button>
                  <button onClick={sendStk} className="flex-1 cursor-pointer rounded-full bg-mpesa py-[17px] text-base font-bold text-white hover:brightness-95">Send M-Pesa prompt</button>
                </div>
              </>
            )}

            {pay === "sending" && (
              <div className="mt-7 flex items-center gap-[18px] rounded-[2px] bg-sand p-[22px]">
                <div className="h-7 w-7 shrink-0 animate-spin rounded-full border-[3px] border-[#D6D2C8] border-t-mpesa" />
                <div>
                  <div className="text-[17px] font-semibold">Check your phone</div>
                  <div className="mt-1 text-[15px] text-body">Enter your M-Pesa PIN on {form.mpesa} to confirm.</div>
                </div>
              </div>
            )}

            {pay === "done" && (
              <>
                <div className="mt-7 rounded-[2px] bg-ink p-6 text-white">
                  <div className="text-[13px] tracking-[.2em] text-gold">PAYMENT RECEIVED</div>
                  <div className="mt-2.5 text-2xl font-bold">Welcome to TJ&amp;U, {firstName}.</div>
                  <div className="mt-1.5 font-mono text-[15px] text-stone">Ref {ref}</div>
                </div>
                <Link href="/dashboard" className={`${btnDark} mt-5 w-full`}>Go to my dashboard</Link>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
