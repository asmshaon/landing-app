// Every engagement from the shareable career inventory, newest start date first.
// The inventory's two E-POS sections are one engagement and appear as one entry.
const engagements = [
  { period: "May 2026 – present", business: "In-venue food ordering for events (US)", role: "Lead Software Engineer · remote contractor", caseStudyId: "food-ordering" },
  { period: "Mar 2026 – Apr 2026", business: "Sales-pipeline and revenue-forecasting SaaS", role: "Senior Full Stack Engineer · remote contractor" },
  { period: "Jan 2026 – Apr 2026", business: "Financial-newsletter publisher with its own email platform (US)", role: "Senior Full Stack Engineer · remote contractor" },
  { period: "Nov 2023 – Dec 2023", business: "Rural accommodation listings", role: "Senior Full Stack Engineer · remote contractor" },
  { period: "Oct 2023 – Sep 2025", business: "Cruise and escorted-tour retailer (US)", role: "Senior Full Stack Engineer · remote contractor", caseStudyId: "tour-catalogue" },
  { period: "Sep 2023 – Oct 2023", business: "Education-services marketplace (Australia)", role: "Senior Full Stack Engineer · remote contractor" },
  { period: "Aug 2023 – Oct 2023", business: "Fitness marketplace for gyms, trainers and clients (US)", role: "Senior Full Stack Engineer · remote contractor" },
  { period: "Jul 2023 – Sep 2023", business: "Game price comparison in 12 European countries", role: "Senior Full Stack Engineer · remote contractor" },
  { period: "Mar 2022 – Apr 2025", business: "Legal-tech: contract exhibits from SEC filings (US)", role: "Sr. Software Engineer, sole engineer · remote contractor", caseStudyId: "legal-search" },
  { period: "Aug 2021 – Apr 2023", business: "Point of sale and inventory for regulated retail (US)", role: "Lead Software Engineer · remote contractor", caseStudyId: "retail-pos" },
  { period: "Jun 2020 – Jul 2021", business: "Consumer and merchant e-wallet (Singapore)", role: "Full Stack Engineer · remote contractor", caseStudyId: "ewallet" },
  { period: "Mar 2015 – Apr 2020", business: "Car-rental comparison and booking (Australia)", role: "Senior Backend Developer · remote contractor", caseStudyId: "car-rental" },
  { period: "Apr 2014 – Apr 2015", business: "Hotel and travel booking for the Saudi market", role: "Senior Software Engineer · full-time, on-site, Dhaka" },
  { period: "Jul 2013 – Feb 2015", business: "Online travel retailer (Australia)", role: "Software Developer · part-time remote contractor" },
  { period: "Jan 2012 – Apr 2014", business: "Project management run from email", role: "Senior Software Engineer · full-time, on-site, Dhaka" },
  { period: "May 2010 – Dec 2011", business: "Job portal for seekers and recruiters", role: "Software Engineer · full-time, on-site, Dhaka" },
  { period: "Jan 2009 – Apr 2010", business: "Email outreach for a startup", role: "Junior Web Developer · full-time, on-site, Dhaka" },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 dark:bg-dark-800 border-t border-slate-200 dark:border-dark-600 py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="eyebrow mb-3">Experience</p>
          <h2 className="font-display font-medium text-accent text-4xl lg:text-5xl leading-tight">
            Every engagement since 2009
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Seventeen engagements: payments, bookings, point of sale, marketplaces, SaaS and more.
          </p>
        </div>

        <ol className="border-t border-accent">
          {engagements.map((job) => (
            <li
              key={`${job.period}-${job.business}`}
              className="grid sm:grid-cols-[12rem_1fr_auto] gap-x-8 gap-y-1 py-4 border-b border-slate-200 dark:border-dark-600 items-baseline"
            >
              <span className="text-sm text-slate-600 dark:text-slate-400 tabular-nums">{job.period}</span>
              <span>
                <span className="block font-medium text-accent">{job.business}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400">{job.role}</span>
              </span>
              {job.caseStudyId ? (
                <a
                  href={`#${job.caseStudyId}`}
                  className="justify-self-start mt-1 sm:mt-0 text-sm text-accent whitespace-nowrap border-b border-slate-300 dark:border-dark-500 hover:border-accent transition-colors"
                >
                  Read case study →
                </a>
              ) : (
                <span className="hidden sm:block" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
