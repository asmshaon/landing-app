import { SlashList } from "../components/SlashList";

// Anonymized on purpose: no client names, links or screenshots. Every figure
// here must appear in the shareable career inventory.
const caseStudies = [
  {
    id: "food-ordering",
    title: "Food ordering from your seat at events and food trucks",
    region: "United States",
    period: "May 2026 – present",
    role: "Lead engineer, team of 4–5",
    problem:
      "Fans order from their seats and vendors print tickets in the truck. Prices were partly decided by the phone app, where they could be tampered with.",
    delivered: [
      "Moved all pricing and payments to the server, so the app can't change what a customer pays",
      "Wrote the first security review of the order services, then fixed what it found",
      "Login protection, kitchen printing and vendor tools for busy event days",
    ],
    outcome:
      "8 security findings identified. The critical, high and medium ones were fixed within three days. The platform is in its pilot stage.",
    tech: ["Laravel", "Go", "Stripe", "AWS"],
  },
  {
    id: "legal-search",
    title: "Searchable contract examples for lawyers, drawn from SEC filings",
    region: "United States",
    period: "Mar 2022 – Apr 2025",
    role: "Sole engineer",
    problem: "Lawyers needed real contract examples, which were buried inside public SEC filings.",
    delivered: [
      "Chose the approach and built the whole product myself",
      "Automatic collection of filings, full-text search, saved searches and alerts",
      "Subscriptions, a personal library and API access, replacing the old site",
    ],
    outcome: "Indexed between 100,000 and 1 million contract exhibits (reported).",
  },
  {
    id: "retail-pos",
    title: "Point of sale, delivery and inventory for licensed retailers",
    region: "United States",
    period: "Aug 2021 – Apr 2023",
    role: "Lead engineer, team of 2–3",
    problem:
      "Regulated retailers had to run sales, delivery and stock while reporting to the state's track-and-trace system.",
    delivered: [
      "Point of sale, delivery drivers, online orders, purchasing and inventory",
      "State compliance reporting built into daily operations",
      "The public product website and onboarding for new retailers, from the first commit",
    ],
    outcome:
      "A wholesale product was spun off. The platform kept pace as the company expanded into more US states. I was the top backend contributor and also helped with hiring.",
  },
  {
    id: "tour-catalogue",
    title: "One catalogue for seven tour operators",
    region: "United States",
    period: "Oct 2023 – Sep 2025",
    role: "Proposed and designed the architecture",
    problem:
      "Seven tour operators each publish tours and prices in their own format, on their own schedule. Customers need one consistent page.",
    delivered: [
      "Automated daily updates that back up data before loading and never leave the site half-updated",
      "Retired the old admin screens and started a new public website",
      "Quote requests built from the same data as the page, so emails always match",
    ],
    outcome: "Tour and search pages became several times faster (reported). I was the #1 contributor to the API.",
    tech: ["Laravel", "Next.js", "Redis"],
  },
  {
    id: "ewallet",
    title: "An e-wallet for consumers and merchants, plus a marketplace",
    region: "Singapore",
    period: "Jun 2020 – Jul 2021",
    role: "Main contributor",
    problem:
      "Customers send money, pay merchants by QR code and withdraw to banks. A transfer must never be applied twice.",
    delivered: [
      "Money movement, top-ups, withdrawals and identity checks",
      "Admin back office and reports for the finance team",
      "Most of the marketplace seller portal, where sellers are paid through the wallet",
    ],
    outcome: "Fixed a race condition found by a penetration test and hardened the wallet's security.",
    tech: ["CakePHP", "MySQL", "Redis", "AWS"],
  },
  {
    id: "car-rental",
    title: "Car-rental comparison and booking across 10+ suppliers",
    region: "Australia",
    period: "Mar 2015 – Apr 2020",
    role: "Senior backend developer",
    problem:
      "Travellers compare and book across many rental companies. Airline and airport partners want their own branded sites.",
    delivered: [
      "10+ rental suppliers behind one booking system",
      "Bookings, changes, cancellations, deposits and refunds",
      "White-label partner sites and the admin back office. Replaced the old booking engine",
    ],
    outcome: "4M+ rentals in 5 countries, with sub-second responses (reported). One of the two largest contributors.",
    tech: ["Laravel", "AngularJS"],
  },
];

const labelClass = "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";

export function CaseStudies() {
  return (
    <section id="work" className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="eyebrow mb-3">Work</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-5xl leading-tight">
            Six businesses, in their own words
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            What each business needed, what I delivered, and what changed. Client names are left out on purpose.
          </p>
        </div>

        <div>
          {caseStudies.map((study) => (
            <article
              key={study.id}
              id={study.id}
              className="scroll-mt-24 grid md:grid-cols-[15rem_1fr] gap-5 md:gap-12 py-11 border-t border-slate-200 dark:border-dark-600 first:border-accent"
            >
              <dl className="flex flex-row flex-wrap md:flex-col gap-x-7 gap-y-3 text-sm">
                {[
                  ["When", study.period],
                  ["Where", study.region],
                  ["Role", study.role],
                ].map(([term, value]) => (
                  <div key={term}>
                    <dt className={labelClass}>{term}</dt>
                    <dd className="mt-0.5 text-accent">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="max-w-2xl">
                <h3 className="font-display text-accent text-2xl lg:text-[1.875rem] leading-snug mb-4">{study.title}</h3>

                <p className={`${labelClass} mt-5 mb-1.5`}>The problem</p>
                <p className="text-slate-700 dark:text-slate-300">{study.problem}</p>

                <p className={`${labelClass} mt-5 mb-1.5`}>What I delivered</p>
                <ul className="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300 marker:text-slate-400">
                  {study.delivered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="mt-5 px-5 py-4 border-l-2 border-accent bg-slate-50 dark:bg-dark-800 text-accent font-medium">
                  {study.outcome}
                </p>

                {study.tech && (
                  <SlashList items={study.tech} className="mt-4 text-xs text-slate-500 dark:text-slate-400" />
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
