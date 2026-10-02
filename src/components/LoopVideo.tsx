"use client";
// Muted looping stock clip. Loads only when near the viewport, pauses when off-screen.
// Swap the Pexels id for your own footage: pass `src` instead.
import { useEffect, useRef } from "react";

const SIZES = ["sd_540_960_25fps", "sd_360_640_25fps", "hd_720_1280_25fps", "hd_1080_1920_25fps", "uhd_1440_2560_25fps"];
const poster = (id: number) => `https://images.pexels.com/videos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=640`;

export default function LoopVideo({ id, src, position = "center" }: { id?: number; src?: string; position?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    let loaded = false;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        if (!loaded) {
          loaded = true;
          const urls = src ? [src] : SIZES.map(s => `https://videos.pexels.com/video-files/${id}/${id}-${s}.mp4`);
          urls.forEach(u => { const so = document.createElement("source"); so.src = u; so.type = "video/mp4"; v.appendChild(so); });
          v.load();
        }
        v.muted = true;
        v.play().catch(() => {});
      } else if (!v.paused) v.pause();
    }, { rootMargin: "200px" });
    io.observe(v);
    return () => io.disconnect();
  }, [id, src]);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="none"
      poster={id ? poster(id) : undefined}
      className="absolute inset-0 block h-full w-full object-cover"
      style={{ objectPosition: position }}
    />
  );
}
