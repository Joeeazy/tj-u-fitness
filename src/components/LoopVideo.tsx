"use client";
// Muted looping stock clip. Loads only when near the viewport, pauses when off-screen.
// Swap the Pexels id for your own footage: pass `src` instead.
import { useEffect, useRef } from "react";

// Order matters: the browser plays the first <source> it can, regardless of
// screen size, so list best quality first and let it fall back on 404.
const SIZES = ["hd_1080_1920_25fps", "uhd_1440_2560_25fps", "hd_720_1280_25fps", "sd_540_960_25fps", "sd_360_640_25fps"];
const poster = (id: number) => `https://images.pexels.com/videos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=640`;

export default function LoopVideo({ id, src, position = "center", active }: { id?: number; src?: string; position?: string; active?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const load = () => {
      if (loaded.current) return;
      loaded.current = true;
      const urls = src ? [src] : SIZES.map(s => `https://videos.pexels.com/video-files/${id}/${id}-${s}.mp4`);
      urls.forEach(u => { const so = document.createElement("source"); so.src = u; so.type = "video/mp4"; v.appendChild(so); });
      v.load();
    };

    // `active` (e.g. from a carousel) drives playback directly instead of
    // viewport visibility, so a slide that's still in the DOM but swiped
    // out of view pauses instead of playing behind the scenes.
    if (active !== undefined) {
      if (active) {
        load();
        v.muted = true;
        v.play().catch(() => {});
      } else if (!v.paused) v.pause();
      return;
    }

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        load();
        v.muted = true;
        v.play().catch(() => {});
      } else if (!v.paused) v.pause();
    }, { rootMargin: "200px" });
    io.observe(v);
    return () => io.disconnect();
  }, [id, src, active]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={id ? poster(id) : undefined}
      className="absolute inset-0 block h-full w-full object-cover"
      style={{ objectPosition: position, filter: "brightness(1.1) contrast(1.06) saturate(1.15)" }}
    />
  );
}
