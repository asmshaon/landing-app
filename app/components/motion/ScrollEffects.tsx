"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Eases the hero out (fade and shrink slightly) as the page scrolls past it.
export function HeroFade({ children, className }: { children: ReactNode; className?: string }) {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 520], [1, 0]);
  const scale = useTransform(scrollY, [0, 520], [1, 0.94]);
  const y = useTransform(scrollY, [0, 520], [0, -60]);

  return (
    <motion.div className={`scroll-linked ${className ?? ""}`} style={{ opacity, scale, y }}>
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
