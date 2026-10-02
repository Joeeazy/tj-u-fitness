"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/lib/auth";
import { PX } from "@/lib/data";
import { btnDark, input, label } from "@/lib/ui";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [error, setError] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id.trim() || !pw) return setError("Enter your phone or email and password.");
    if (!login(id, pw)) return setError("We couldn't find that account. Check your details or create an account.");
    router.push("/dashboard");
  };

  return (
    <section className="grid min-h-[calc(100vh-96px)] grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))]">
      <form onSubmit={submit} className="flex w-full max-w-[560px] flex-col justify-center justify-self-end px-[clamp(24px,5vw,80px)] py-16">
        <div className="mb-4 text-[13px] tracking-[.28em] text-bronze">MEMBERS</div>
        <h1 className="mb-2 text-[44px] font-bold tracking-[-.02em]">Welcome back</h1>
        <p className="mb-8 text-base text-muted">New here? <Link href="/signup" className="border-b border-current font-semibold text-ink">Create an account</Link></p>
        <div className="flex flex-col gap-3.5">
          <label className={label}>PHONE OR EMAIL<input value={id} onChange={e => { setId(e.target.value); setError(""); }} placeholder="07XX XXX XXX" className={input} autoComplete="username" /></label>
          <label className={label}>PASSWORD<input value={pw} onChange={e => { setPw(e.target.value); setError(""); }} type="password" placeholder="••••••••" className={input} autoComplete="current-password" /></label>
        </div>
        <div className="mt-3.5 flex justify-between text-sm text-muted">
          <label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="accent-ink" />Keep me signed in</label>
          <a href="tel:0729008500" className="hover:text-bronze">Forgot password?</a>
        </div>
        {error && <div className="mt-3.5 text-sm text-[#A33A2A]">{error}</div>}
        <button type="submit" className={`${btnDark} mt-7 w-full`}>Log in</button>
      </form>
      <div className="min-h-[360px] bg-ink" style={{ backgroundImage: `url(${PX(6456010)})`, backgroundSize: "cover", backgroundPosition: "center" }} />
    </section>
  );
}
