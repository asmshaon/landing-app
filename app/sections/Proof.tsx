import { PinnedSequence } from "../components/motion/PinnedSequence";
import { accent } from "../components/accents";

// Each number gets its own colour from the shared accent palette (components/accents.ts).
const stats = [
  { value: "16+", label: "years building software that businesses run on" },
  { value: "4M+", label: "car rentals booked in 5 countries, with responses in under a second" },
  { value: "Up to 1M", label: "contract exhibits indexed, as the only engineer" },
  { value: "100+", label: "security issues fixed, including race-condition attacks" },
];

// One statistic fills the screen at a time as the visitor scrolls.
export function Proof() {
  return (
    <section aria-label="Highlights" className="bg-slate-50 dark:bg-dark-800">
      <PinnedSequence
        items={stats.map((stat, i) => (
          <div key={stat.label} className="text-center">
            <p
              className={`font-display font-semibold ${accent(i)} leading-[0.9] tracking-[-0.04em] tabular-nums ${
                stat.value.length > 4
                  ? "text-[4.5rem] sm:text-[7rem] lg:text-[11rem]"
                  : "text-[7rem] sm:text-[10rem] lg:text-[15rem]"
              }`}
            >
              {stat.value}
            </p>
            <p className="mt-6 font-display text-3xl sm:text-4xl lg:text-5xl text-slate-600 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      />
    </section>
  );
}
