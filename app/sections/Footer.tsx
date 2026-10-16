import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";
import { LINKEDIN_URL } from "../seo";

export function FooterCTA() {
  return (
    <Scene id="contact" tone="ash" className="text-center">
      <Reveal className="flex flex-col items-center">
        <p className="eyebrow mb-6">Let&apos;s talk</p>
        <h2 className="font-display font-semibold text-accent text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.98] tracking-[-0.03em] max-w-5xl">
          What business challenge are you looking to solve?
        </h2>
        <p className="mt-8 max-w-xl text-lg lg:text-xl text-slate-600 dark:text-slate-400">
          Book a 30-minute call. You&apos;ll be talking to me, not a sales team, and you don&apos;t need to prepare anything.
        </p>
        <Link
          href="/book-a-call"
          className="btn-primary mt-10 inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-semibold"
        >
          Let&apos;s talk
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </Reveal>
    </Scene>
  );
}

// Stays black in both themes as the page's closing band.
export function Footer() {
  return (
    <footer className="bg-dark-900 text-slate-400 border-t border-dark-600 py-8 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs">
            &copy; {new Date().getFullYear()} Abu Saleh Muhammad Shaon. All rights reserved.
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full border border-dark-600 text-slate-400 hover:text-white hover:border-slate-500 transition-colors"
            aria-label="LinkedIn"
          >
            <svg viewBox="2 2 20 20" fill="currentColor" className="w-4 h-4" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
