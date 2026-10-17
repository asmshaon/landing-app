"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Eases the hero out (fade and shrink slightly) as the page scrolls past it. Measured against
// the hero's own height, not a fixed distance: on phones the hero is taller than the screen,
// and a fixed 520px faded its lower half out before the visitor had scrolled to it.
export function HeroFade({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.85], [1, 0.94]);
  const y = useTransform(scrollYProgress, [0, 0.85], [0, -60]);

  return (
    <motion.div ref={ref} className={`scroll-linked ${className ?? ""}`} style={{ opacity, scale, y }}>
      {children}
    </motion.div>
  );
}

// Brightens a line from faint to full ink as it rises to the middle of the screen.
export function ScrollHighlight({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.5"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.15, 1]);

  return (
    <motion.div ref={ref} className={`scroll-linked ${className ?? ""}`} style={{ opacity }}>
      {children}
    </motion.div>
  );
}
