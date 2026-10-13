import { CreditCard, Network, RefreshCw, Users, ShieldCheck } from "lucide-react";
import { HorizontalTrack } from "../components/motion/HorizontalTrack";
import { Reveal } from "../components/motion/Reveal";

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
    title: "Modernising legacy systems",
    description: "Retiring aging platforms piece by piece while the business keeps running.",
    evidence: "Cruise retailer · legal-tech · newsletter publisher",
  },
  {
    icon: Users,
    title: "Leading small teams",
    description: "Leading 2-5 developers through code review, planning, mentoring and hiring.",
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
    <section id="services" className="bg-white dark:bg-dark-900">
      <HorizontalTrack
        header={
          <Reveal className="max-w-5xl">
            <p className="eyebrow mb-4">What I Do</p>
            <h2 className="scene-heading">Systems that businesses run on every day</h2>
            <p className="mt-6 max-w-3xl text-lg lg:text-xl text-slate-600 dark:text-slate-400">
              I join a team and take ownership of the parts where the business can&apos;t afford
              mistakes: money, bookings, supplier data and the old systems that still hold it all
              together.
            </p>
          </Reveal>
        }
      >
        {areas.map((area, i) => (
          <article
            key={area.title}
            className="flex flex-col rounded-3xl bg-slate-50 dark:bg-dark-800 p-8 lg:p-9 min-h-[20rem]"
          >
            <div className="flex items-center justify-between mb-8">
              <area.icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
              <span className="font-display text-lg text-slate-400 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-display font-semibold text-accent text-3xl lg:text-[2.5rem] leading-[1.08] tracking-[-0.015em] mb-4">
              {area.title}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">{area.description}</p>
            <p className="mt-auto pt-6 text-sm text-slate-500 dark:text-slate-400">{area.evidence}</p>
          </article>
        ))}
      </HorizontalTrack>
    </section>
  );
}
