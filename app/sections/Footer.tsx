import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";

export function FooterCTA() {
  return (
    <Scene id="contact" className="text-center">
      <Reveal className="flex flex-col items-center">
        <p className="eyebrow mb-6">Let&apos;s talk</p>
        <h2 className="font-display font-semibold text-accent text-5xl sm:text-7xl lg:text-[7.5rem] leading-[0.98] tracking-[-0.03em] max-w-5xl">
          Tell me what you&apos;re working on.
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
        <div className="text-xs">
          &copy; {new Date().getFullYear()} Abu Saleh Muhammad Shaon. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
