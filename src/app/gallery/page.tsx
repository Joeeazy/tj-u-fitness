import type { Metadata } from "next";
import GalleryGrid from "./GalleryGrid";
import { eyebrow, h1Page, wrap } from "@/lib/ui";

export const metadata: Metadata = { title: "Gallery · TJ&U Fitness" };

export default function Gallery() {
  return (
    <section className={`${wrap} pb-[120px] pt-[88px]`}>
      <div className={`${eyebrow} mb-5`}>GALLERY</div>
      <h1 className={h1Page}>Inside TJ&amp;U.</h1>
      <GalleryGrid />
    </section>
  );
}
