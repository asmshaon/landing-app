import { Scene } from "../components/Scene";
import { Reveal } from "../components/motion/Reveal";
import { ScrollHighlight } from "../components/motion/ScrollEffects";

// Every line here must trace to the shareable career inventory: e-wallet (payments),
// car rental and tour retailer (bookings), retail POS, seller portal and SaaS work.
const domains = [
  {
    name: "Payments and wallets",
    built:
      "Transfers, card and bank top-ups across several currencies, fees and rewards that never apply twice, and subscription plans.",
  },
  {
    name: "Bookings and rentals",
    built:
      "One search and booking flow across 10+ suppliers, price protection, automatic refunds and pricing rules for discounts.",
  },
  {
    name: "Marketplaces and SaaS",
    built:
      "Multi-tenant platforms, seller portals and partner integrations, released through automated tests and deployments.",
  },
  {
    name: "Point of sale",
    built:
      "One order system for the till, delivery and online store, stock per store, and state compliance reporting on every sale.",
  },
];

// Each domain lights up from faint to full ink as it rises up the screen.
export function Industries() {
  return (
    <Scene tone="ash">
      <Reveal>
        <h2 className="eyebrow mb-10 lg:mb-14">What I&apos;ve built, by industry</h2>
      </Reveal>
      <ul className="space-y-10 lg:space-y-12">
        {domains.map((domain) => (
          <li key={domain.name}>
            <ScrollHighlight className="grid lg:grid-cols-[1fr_1.15fr] gap-3 lg:gap-12 items-baseline">
              <h3 className="font-display font-medium text-accent text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-[-0.02em]">
                {domain.name}
              </h3>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">{domain.built}</p>
            </ScrollHighlight>
          </li>
        ))}
      </ul>
    </Scene>
  );
}
