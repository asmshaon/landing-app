import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-dark-900 scroll-mt-20 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        <div>
          <p className="eyebrow mb-3">Let&apos;s talk</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-[3.25rem] leading-[1.05]">
            Tell me what you&apos;re working on.
          </h2>
          <p className="mt-4 max-w-md text-lg text-slate-600 dark:text-slate-400">
            Book a 30-minute call. You&apos;ll be talking to me, not a sales team, and you don&apos;t need to prepare anything.
          </p>
        </div>

        <Link
          href="/book-a-call"
          className="btn-primary self-start lg:self-auto inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-semibold"
        >
          Let&apos;s talk
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
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
