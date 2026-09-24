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

export function Hero() {
  return (
    <section id="home" className="bg-white dark:bg-dark-900 pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-12 lg:gap-16 items-center">
          {/* Portrait: first on mobile, right column on large screens */}
          <figure className="relative order-first lg:order-last w-full max-w-xs sm:max-w-sm lg:max-w-none aspect-square lg:aspect-[4/5] rounded overflow-hidden border border-slate-300 dark:border-dark-500 bg-slate-100 dark:bg-dark-700">
            <Image
              src="/images/asmshaon_profile.png"
              alt="Portrait of Abu Saleh"
              fill
              sizes="(min-width: 1024px) 30vw, 384px"
              className="object-cover grayscale contrast-105"
              priority
            />
            <figcaption className="absolute inset-x-0 bottom-0 px-4 py-3 text-xs tracking-wide text-slate-100 bg-black/55">
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
