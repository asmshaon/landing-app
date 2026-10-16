"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const GAP = 24;

// Floating "back to top" button, bottom right. It only appears once the visitor is more than
// a screen and a half down the page, and stays out of the way (and out of the tab order) otherwise.
// When the footer scrolls into view it rides above it, clear of the footer's LinkedIn icon.
export function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [bottom, setBottom] = useState(GAP);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 1.5);
        const footer = document.querySelector("footer");
        const overlap = footer ? window.innerHeight - footer.getBoundingClientRect().top : 0;
        setBottom(Math.max(GAP, overlap + GAP));
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      inert={!visible}
      aria-label="Back to top"
      style={{ bottom }}
      className={cn(
        "fixed right-5 sm:right-6 z-50 flex items-center justify-center w-11 h-11 rounded-full",
        "bg-white/85 dark:bg-dark-900/85 backdrop-blur-xl border border-slate-200 dark:border-dark-600 shadow-sm",
        "cursor-pointer text-slate-600 dark:text-gray-400 hover:text-accent",
        "transition-[opacity,translate,color] duration-300 motion-reduce:transition-none",
        // Faint until hovered or focused, so it doesn't compete with the page.
        visible
          ? "opacity-40 hover:opacity-100 focus-visible:opacity-100 translate-y-0"
          : "opacity-0 translate-y-3 pointer-events-none"
      )}
    >
      <ArrowUp className="w-[18px] h-[18px]" aria-hidden="true" />
    </button>
  );
}
