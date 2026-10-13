import { Plus } from "lucide-react";
import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";

// Anonymized on purpose: no client names, links or screenshots. Every figure
// here must appear in the shareable career inventory.
const caseStudies = [
  {
    id: "food-ordering",
    title: "Food ordering from your seat at events and food trucks",
    region: "United States",
    period: "May 2026 to present",
    role: "Lead engineer, team of 4-5",
    problem:
      "Fans order from their seats and vendors print tickets in the truck. The platform was heading to launch with prices partly decided by the phone app, open security gaps and no automated safety net.",
    delivered: [
      "Moved all pricing and payments to the server, so the app can't change what a customer pays",
      "Built the money rules: commission, sales tax and service charge set per event, per vendor or platform-wide, matching to the cent on quote, charge and receipt",
      "Ran three security audits across the platform, then closed what they found: an open door that let anyone run commands on the server, account takeover between vendors, customer data exposed publicly, leaked keys and brute-force logins",
      "Automated tests that block any release that would break ordering or payments, and faster deployments",
      "Vendor tools for busy event days: pausing orders, kitchen printing, pickup codes and search",
    ],
    outcome:
      "I wrote over 95% of the backend changes since joining and shipped 130+ fixes and features through QA. Across three security audits, I fixed 100+ security issues. The platform is in its pilot stage.",
  },
  {
    id: "legal-search",
    title: "Searchable contract examples for lawyers, drawn from SEC filings",
    region: "United States",
    period: "Mar 2022 to Apr 2025",
    role: "Sole engineer",
    problem:
      "Lawyers needed real contract wording, buried across decades of public SEC filings in dozens of formats. The existing product ran on an old site that was hard to extend.",
    delivered: [
      "Chose the technology, designed the system and built all of it myself: data pipeline, backend, front end and deployment",
      "Automatic collection from 20+ SEC filing types, historical archives included, running unattended and backing off politely when the SEC throttles",
      "Clause-level search filtered by company, industry, company size, law firm and document type, with highlighted matches",
      "Saved searches that email new matches immediately, daily or weekly",
      "The paid product: free, monthly and yearly plans, a personal library with Excel downloads, and API access for customers",
      "Moved the content off the old site and rebuilt the product without losing it",
    ],
    outcome:
      "One engineer delivered the whole product, 8 major features and 90 capabilities, and indexed between 100,000 and 1 million contract exhibits (reported).",
  },
  {
    id: "retail-pos",
    title: "Point of sale, delivery and inventory for licensed retailers",
    region: "United States",
    period: "Aug 2021 to Apr 2023",
    role: "Lead engineer, team of 2-3",
    problem:
      "Licensed retailers sell in-store, by delivery and online, and every regulated sale must be reported to the state exactly once, only within legal selling hours. Getting it wrong puts their licence at risk.",
    delivered: [
      "State compliance reporting built into every sale: blocked outside legal hours, never reported twice, and failures kept for retry",
      "One order system for the till, delivery drivers, pickup and the online store, with discounts, taxes, delivery fees and purchase limits",
      "Purchasing from brands, stock received against each order, and a shared product catalogue with stock per store",
      "Sales, tax and product reports by day, month, hour and area for owners",
      "Started the wholesale product from the retail platform, and built the public website and self-service onboarding from the first commit",
    ],
    outcome:
      "Top backend contributor, with 58% of the admin and API code and 50% of the point-of-sale app. Led a team of 2-3, helped with hiring, and kept the platform in step as the company expanded into more US states.",
  },
  {
    id: "tour-catalogue",
    title: "One catalogue for seven tour operators, and a cruise retailer off its legacy site",
    region: "United States",
    period: "Oct 2023 to Sep 2025",
    role: "Proposed and designed the architecture",
    problem:
      "A cruise and tour retailer sells trips from seven tour operators, each publishing tours and prices in its own format, on its own schedule. Customers need one consistent page, and the whole business ran on an ageing site that every change risked breaking.",
    delivered: [
      "One tour page and one search for all seven operators, so adding an operator means adding one small piece, not a rebuild",
      "Automated daily updates that back up data first, never leave the site half-updated, and alert the team the moment a job fails",
      "Pricing rules that let sales run discounts and private offers by tour, city, price band and trip length",
      "Quote requests built from the same data as the page, so the email sales receives always matches what the customer saw",
      "Moved the admin team off the old site screen by screen, then led the new public website: 152 pages",
      "Blocking for bots and brute-force logins across the site",
    ],
    outcome:
      "Tour and search pages became several times faster (reported). I was the #1 contributor to the API and wrote nearly half of the new website's code (749 of 1,579 changes).",
  },
  {
    id: "ewallet",
    title: "An e-wallet for consumers and merchants, plus a marketplace",
    region: "Singapore",
    period: "Jun 2020 to Jul 2021",
    role: "Main contributor",
    problem:
      "Customers send money, pay merchants by QR code across several currencies and withdraw to banks. Every transfer has to apply fees and rewards correctly and must never be applied twice.",
    delivered: [
      "The core money movement: transfers, QR payments, fees, rewards and currency conversion, each checked before any money moves and fully undone if a step fails",
      "Fixed the race conditions a penetration test found: send-money and load-money requests arriving at the same moment could spend the same balance twice. Each transfer is now all-or-nothing, and repeat withdrawal and refund submits are blocked",
      "Card and bank top-ups that verify every payment confirmation and never credit the same payment twice",
      "Withdrawals to banks, with batch processing and exports for the finance team",
      "Sign-up, identity checks and permissions for customers, merchants, agents and admins",
      "Closed the security gaps: staff reaching beyond their permissions, customers seeing others' withdrawals, and unsafe pages",
      "Most of the marketplace seller portal, where sellers in several countries list, ship and get paid through the wallet",
    ],
    outcome:
      "Closed the race conditions behind a double-spend risk found by a penetration test. Main contributor to the wallet (about 42% of changes) and builder of 81% of the seller portal.",
  },
  {
    id: "car-rental",
    title: "Car-rental comparison and booking across 10+ suppliers",
    region: "Australia",
    period: "Mar 2015 to Apr 2020",
    role: "Senior backend developer",
    problem:
      "Travellers compare and book across many rental companies, each with its own system and rules. Airline and airport partners want their own branded sites, and a booking can fail halfway at the supplier, the payment or the email.",
    delivered: [
      "10+ rental suppliers behind one search and booking flow that behaves the same for every one of them",
      "Bookings that survive failures step by step, protect customers from price rises and refund automatically if the price went up",
      "Payments, deposits, refunds, and a paid membership and insurance sold alongside the rental",
      "Search by place that finds the nearest pickup and return locations, with tools for staff to keep supplier locations current",
      "Admin tools for customer service, commission rules and promotions, and branded emails with alerts to staff when something looks wrong",
      "Helped replace the old booking engine, and moved its historical bookings across",
    ],
    outcome:
      "4M+ rentals in 5 countries, with sub-second responses (reported). One of the two largest contributors to the booking system and admin over five years.",
  },
];

const labelClass = "text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400";

export function CaseStudies() {
  return (
    <div id="work">
      <Scene tone="ash">
        <Reveal className="max-w-4xl">
          <p className="eyebrow mb-4">Work</p>
          <h2 className="scene-heading">Six businesses, in their own words</h2>
          <p className="mt-6 max-w-2xl text-lg lg:text-xl text-slate-600 dark:text-slate-400">
            What each business needed, what I delivered, and what changed. Client names are left out on purpose.
          </p>
        </Reveal>
      </Scene>

      {caseStudies.map((study, i) => (
        <Scene key={study.id} id={study.id} tone={i % 2 === 0 ? "plain" : "ash"}>
          <article className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <p className="eyebrow mb-5 tabular-nums">
                Case study {i + 1} of {caseStudies.length}
              </p>
              <h3 className="font-display font-medium text-accent text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em]">
                {study.title}
              </h3>
              <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[0.9375rem]">
                {[
                  ["When", study.period],
                  ["Where", study.region],
                  ["Role", study.role],
                ].map(([term, value]) => (
                  <div key={term}>
                    <dt className={labelClass}>{term}</dt>
                    <dd className="mt-1 text-accent">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={150}>
              <p className={`${labelClass} mb-2`}>The problem</p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">{study.problem}</p>

              <p className="mt-8 font-display text-accent text-2xl lg:text-[1.875rem] leading-snug">
                {study.outcome}
              </p>

              <details className="group mt-8 border-t border-slate-200 dark:border-dark-600 pt-5">
                <summary className="flex items-center gap-2 cursor-pointer list-none font-semibold text-accent [&::-webkit-details-marker]:hidden">
                  <Plus className="w-4 h-4 transition-transform group-open:rotate-45" aria-hidden="true" />
                  See what I delivered
                </summary>
                <ul className="mt-4 list-disc pl-5 space-y-1.5 text-slate-700 dark:text-slate-300 marker:text-slate-400">
                  {study.delivered.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </details>
            </Reveal>
          </article>
        </Scene>
      ))}
    </div>
  );
}
