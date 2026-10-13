import { PinnedSequence } from "../components/motion/PinnedSequence";

// Each trait is backed by a client testimonial ("Always positive", "met (or beat) deadlines",
// "proactive approach") or the career inventory: the urgency
// example is the food-ordering security review (critical findings fixed within three days).
const values = [
  {
    title: "Outcome-focused",
    description: "I start from the business problem and measure my work by what it changes, not by tickets closed or lines of code.",
  },
  {
    title: "Positive by default",
    description: "I talk in solutions, not blame, and I celebrate the small wins along the way. Good energy keeps a team moving.",
  },
  {
    title: "Thinks ahead",
    description: "I build for where the business is heading, so the system keeps up as it grows instead of needing a rewrite.",
  },
  {
    title: "Transparent",
    description: "Plain updates, honest estimates and deadlines kept. If something is at risk, you hear it early, with a way forward.",
  },
  {
    title: "Proactive",
    description: "I raise risks before they turn into problems and suggest improvements before I'm asked.",
  },
  {
    title: "A sense of urgency",
    description: "When something is broken, it gets fixed now. On my current project, critical security findings were closed within three days.",
  },
  {
    title: "Stays after launch",
    description: "Shipping is only the halfway point. I stay to release, watch and improve what I've built.",
  },
  {
    title: "Remote-ready ownership",
    description: "At home across time zones. I pick up work, unblock myself and keep progress visible without being chased.",
  },
];

// The heading, then each value, fill the screen one at a time as the visitor scrolls.
export function WhyHireMe() {
  return (
    <section id="why-me" className="bg-slate-50 dark:bg-dark-800">
      <PinnedSequence
        items={[
          <div key="intro" className="max-w-4xl">
            <p className="eyebrow mb-4">My DNA</p>
            <h2 className="scene-heading">The habits behind the work</h2>
          </div>,
          ...values.map((value, i) => (
            <div key={value.title} className="max-w-5xl">
              <p className="eyebrow mb-6 tabular-nums">
                {String(i + 1).padStart(2, "0")} / {String(values.length).padStart(2, "0")}
              </p>
              <h3 className="font-display font-medium text-accent text-5xl sm:text-7xl lg:text-[7rem] leading-[0.98] tracking-[-0.03em]">
                {value.title}
              </h3>
              <p className="mt-8 max-w-3xl font-display text-2xl sm:text-3xl lg:text-[2.5rem] leading-snug text-slate-600 dark:text-slate-400">
                {value.description}
              </p>
            </div>
          )),
        ]}
      />
    </section>
  );
}
