import type { Metadata } from "next";
import PlanTable from "@/components/PlanTable";
import { eyebrow, h1Page, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Membership & plans · TJ&U Fitness" };

export default function Membership() {
  return (
    <>
      <section className={`${wrap} pb-10 pt-[88px]`}>
        <div className={`${eyebrow} mb-5`}>MEMBERSHIP &amp; PLANS</div>
        <h1 className={`${h1Page} max-w-[1000px]`}>Train on your terms.</h1>
        <p className="mt-7 max-w-[620px] text-[19px] leading-relaxed text-body">Every plan includes the full gym floor, washrooms, showers, lockers and Wi-Fi. Packages add coaching, reports and nutrition support.</p>
      </section>
      <section className={`${wrap} pb-[120px] pt-10`}>
        <PlanTable />
        <p className="mt-7 text-sm text-muted">Pay by M-Pesa, debit card or NFC mobile payment at the front desk. Membership required for gym floor access.</p>
      </section>
    </>
  );
}
