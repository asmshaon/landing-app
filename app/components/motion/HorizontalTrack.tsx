"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";

const PINNED_QUERY = "(min-width: 1024px) and (prefers-reduced-motion: no-preference)";

// A row of cards. On large screens the frame pins and scrolling down slides the row
// left until the last card shows; elsewhere it is a swipeable snap row (.htrack rules
// in globals.css).
export function HorizontalTrack({ header, children }: { header: ReactNode; children: ReactNode }) {
  const outerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const distance = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: outerRef, offset: ["start start", "end end"] });
  const x = useTransform(() => -scrollYProgress.get() * distance.get());

  useEffect(() => {
    const outer = outerRef.current;
    const row = rowRef.current;
    if (!outer || !row) return;
    const media = window.matchMedia(PINNED_QUERY);

    // The vertical scroll length equals how far the row has to travel.
    const measure = () => {
      const travel = media.matches ? Math.max(0, row.scrollWidth - row.clientWidth) : 0;
      distance.set(travel);
      outer.style.setProperty("--track-h", `calc(100svh + ${travel}px)`);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    media.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", measure);
    };
  }, [distance]);

  return (
    <div ref={outerRef} className="htrack" style={{ "--track-h": "100svh" } as CSSProperties}>
      <div className="htrack-frame py-24 lg:py-0">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 lg:mb-12">{header}</div>
        <motion.div ref={rowRef} className="htrack-row scroll-linked" style={{ x }}>
          {children}
        </motion.div>
      </div>
    </div>
  );
}
