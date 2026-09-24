import { CreditCard, Network, RefreshCw, Users, ShieldCheck } from "lucide-react";

const areas = [
  {
    icon: CreditCard,
    title: "Bookings and payments",
    description: "Booking engines and checkouts where the money has to be right every time.",
    evidence: "Car rental · e-wallet · event food ordering",
  },
  {
    icon: Network,
    title: "One product, many suppliers",
    description: "Combining 7 tour operators or 10+ rental suppliers into one catalogue and one booking flow.",
    evidence: "Cruise retailer · car rental",
  },
  {
    icon: RefreshCw,
    title: "Modernizing legacy systems",
    description: "Retiring aging platforms piece by piece while the business keeps running.",
    evidence: "Cruise retailer · legal-tech · newsletter publisher",
  },
  {
    icon: Users,
    title: "Leading small teams",
    description: "Leading 2–5 developers through code review, planning, mentoring and hiring.",
    evidence: "Event food ordering · retail point of sale",
  },
  {
    icon: ShieldCheck,
    title: "Security and compliance",
    description: "Security reviews, penetration-test fixes and state compliance reporting.",
    evidence: "Event food ordering · e-wallet · retail",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 dark:bg-dark-800 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="eyebrow mb-3">What I Do</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-5xl leading-tight">
            Systems that businesses run on every day
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            I join a team and take ownership of the parts where the business can&apos;t afford
            mistakes: money, bookings, supplier data and the old systems that still hold it all
            together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-x-8">
          {areas.map((area) => (
            <div key={area.title} className="pt-7 pb-8 border-t border-accent">
              <div className="w-10 h-10 rounded-md bg-slate-100 dark:bg-dark-700 border border-slate-200 dark:border-dark-600 flex items-center justify-center mb-5">
                <area.icon className="w-5 h-5 text-accent" strokeWidth={1.8} />
              </div>
              <h3 className="font-display text-accent text-[1.375rem] leading-snug mb-2">{area.title}</h3>
              <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400">{area.description}</p>
              <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">{area.evidence}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
