const values = [
  {
    title: "Business first",
    description: "I start from the business problem and measure the work by what it changes.",
  },
  {
    title: "Thinks ahead",
    description: "Systems that keep working as the business grows, without needing a rewrite.",
  },
  {
    title: "Stays after launch",
    description: "Planning, building, releasing and improving. I stay with a system after it ships.",
  },
  {
    title: "Remote-ready ownership",
    description: "Async across time zones. I pick up work, unblock myself and keep progress visible.",
  },
  {
    title: "Clear and dependable",
    description: "Plain updates, deadlines kept, and long-term working relationships.",
  },
];

export function WhyHireMe() {
  return (
    <section
      id="why-me"
      className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="eyebrow mb-3">Why Teams Work With Me</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-5xl leading-tight">
            Reliable in the parts that matter
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-slate-200 dark:bg-dark-600 border border-slate-200 dark:border-dark-600">
          {values.map((value) => (
            <div key={value.title} className="bg-white dark:bg-dark-900 p-6 lg:p-7">
              <h3 className="font-display text-accent text-[1.3125rem] leading-snug mb-2">{value.title}</h3>
              <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
