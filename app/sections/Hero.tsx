import Image from "next/image";
import { ArrowRight } from "lucide-react";

const industries = [
  "Fintech & payments",
  "Retail & POS",
  "E-commerce & marketplaces",
  "SaaS",
  "Logistics & supply chain",
];

const stats = [
  { value: "16+", label: "years in production" },
  { value: "4M+", label: "rentals handled" },
  { value: "4–5", label: "engineers led today" },
];

// Hand-drawn double frame around the portrait; strokes follow the theme's ink color.
function SketchFrame() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 400 500"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full text-accent pointer-events-none"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        vectorEffect="non-scaling-stroke"
        strokeWidth="1.6"
        d="M34 13 C120 8 282 12 366 15 C385 16 392 29 391 49 C387 180 394 331 390 458 C389 478 378 488 358 487 C258 491 140 485 40 489 C20 490 10 479 11 460 C14 330 8 190 12 45 C12 26 19 14 34 13 Z"
      />
      <path
        vectorEffect="non-scaling-stroke"
        strokeWidth="1"
        opacity="0.55"
        d="M29 19 C132 15 270 17 371 11 C389 12 396 27 395 45 C398 176 389 318 394 462 C394 482 381 493 362 492 C262 486 150 494 36 492 C17 491 5 481 7 462 C4 340 12 196 8 40 C8 22 15 18 29 19 Z"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-dark-900 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center">
          {/* Portrait: first on mobile, right column on large screens */}
          <figure className="order-first lg:order-last w-full max-w-[18rem] sm:max-w-xs lg:max-w-sm mx-auto lg:mr-0">
            <div className="relative aspect-[4/5]">
              <div aria-hidden="true" className="portrait-backdrop absolute inset-[3%] rounded-[1.4rem]" />
              <SketchFrame />
              <div className="absolute inset-x-[7%] top-[5%] bottom-[3%] overflow-hidden rounded-b-[1.2rem]">
                <Image
                  src="/images/asmshaon_profile_cutout.webp"
                  alt="Portrait of Abu Saleh"
                  fill
                  sizes="(min-width: 1024px) 24rem, 20rem"
                  className="object-contain object-bottom grayscale contrast-105"
                  priority
                />
              </div>
            </div>
            <figcaption className="mt-3 text-center text-xs tracking-wide text-slate-600 dark:text-slate-400">
              Abu Saleh · Dhaka, Bangladesh
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow mb-4">Senior Full-Stack Software Engineer</p>

            <h1 className="font-display font-medium text-accent text-4xl sm:text-5xl lg:text-[4.25rem] leading-[1.04] tracking-tight">
              I turn hard business problems into{" "}
              <em className="text-slate-500 dark:text-slate-400">reliable software.</em>
            </h1>

            <p className="mt-6 mb-8 max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              16+ years designing, building and leading production systems: payments, bookings,
              point of sale, marketplaces and SaaS platforms that businesses run on every day.
            </p>

            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold"
            >
              Let&apos;s talk
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="mt-9 flex flex-wrap items-baseline gap-x-4 gap-y-2">
              <span className="eyebrow !text-[0.6875rem]">Industries I build for</span>
              <ul className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <li
                    key={industry}
                    className="text-sm text-accent border border-slate-300 dark:border-dark-500 rounded-full px-3 py-1"
                  >
                    {industry}
                  </li>
                ))}
              </ul>
            </div>

            <dl className="mt-10 pt-5 border-t border-slate-200 dark:border-dark-600 flex">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="pr-4 mr-4 sm:pr-9 sm:mr-9 border-r last:border-r-0 last:mr-0 last:pr-0 border-slate-200 dark:border-dark-600"
                >
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-display text-accent text-3xl sm:text-4xl leading-none tabular-nums">
                    {stat.value}
                  </dd>
                  <dd className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
