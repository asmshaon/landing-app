const countries = [
  { name: "USA", flag: "🇺🇸" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Thailand", flag: "🇹🇭" },
  { name: "Singapore", flag: "🇸🇬" },
];

export function ClientLogos() {
  return (
    <section className="bg-dark-900 border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 lg:gap-16">
          <div className="text-gray-500 text-sm text-center sm:text-left shrink-0">
            <div className="font-medium text-gray-400">Trusted by clients</div>
            <div className="text-xs">from {countries.length} countries</div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {countries.map((c) => (
              <div
                key={c.name}
                className="flex items-center gap-2 text-gray-400 text-sm font-medium"
                title={c.name}
              >
                <span className="text-lg leading-none">{c.flag}</span>
                <span>{c.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
