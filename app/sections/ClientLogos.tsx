const countries = ["USA", "Australia", "Canada", "Saudi Arabia", "Thailand", "Singapore"];

export function ClientLogos() {
  return (
    <section className="bg-white dark:bg-dark-900 border-t border-slate-200 dark:border-dark-600 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-10">
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-snug shrink-0 lg:whitespace-nowrap">
            Worked remotely with teams across {countries.length} countries
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 font-display text-xl text-accent">
            {countries.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
