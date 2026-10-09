"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Cal, { getCalApi } from "@calcom/embed-react";

// Cal.com event to book, as "<username>/<event-slug>" from your Cal.com booking URL.
const CAL_LINK = "abu-saleh-muahammad-shaon-agr237/30min";
const CAL_NAMESPACE = "intro-call";

const steps = [
  {
    title: "You pick a time",
    detail: "Choose a slot that suits you and add a few lines about the problem.",
  },
  {
    title: "We talk it through",
    detail: "A short call to understand what you're building or what isn't working.",
  },
  {
    title: "We decide together",
    detail: "If it's a good fit, we plan the next step. If not, you still leave with ideas.",
  },
];

export function FooterCTA() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-dark-900 scroll-mt-20 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16">
        <div>
          <p className="eyebrow mb-3">Let&apos;s talk</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-[3.25rem] leading-[1.05]">
            Got a problem worth solving?
          </h2>
          <p className="mt-4 mb-8 max-w-md text-lg text-slate-600 dark:text-slate-400">
            Book a call at a time that suits you, and we&apos;ll take it from there.
          </p>

          <p className="eyebrow mb-2">What happens next</p>
          <ol className="border-b border-slate-200 dark:border-dark-600">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="grid grid-cols-[2.5rem_1fr] gap-x-3 py-4 border-t border-slate-200 dark:border-dark-600"
              >
                <span className="row-span-2 w-8 h-8 rounded-full border border-accent flex items-center justify-center font-display text-accent">
                  {i + 1}
                </span>
                <span className="font-semibold text-accent">{step.title}</span>
                <span className="text-[0.9375rem] text-slate-600 dark:text-slate-400">{step.detail}</span>
              </li>
            ))}
          </ol>
        </div>

        <BookingCalendar />
      </div>
    </section>
  );
}

function BookingCalendar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  // Keep the calendar in step with the site's theme toggle, in monochrome ink.
  useEffect(() => {
    if (!mounted) return;
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", {
        theme,
        cssVarsPerTheme: {
          light: { "cal-brand": "#111111" },
          dark: { "cal-brand": "#f4f4f4" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, [mounted, theme]);

  return (
    <div className="self-start min-h-[600px] rounded-md border border-slate-200 dark:border-dark-600 overflow-hidden">
      {mounted && (
        <Cal
          // An inline embed only reads its theme on load, so remount it when the theme changes.
          key={theme}
          namespace={CAL_NAMESPACE}
          calLink={CAL_LINK}
          config={{ layout: "month_view", theme }}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
        />
      )}
    </div>
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
