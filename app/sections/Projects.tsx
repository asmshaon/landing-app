import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Car Booking Engine",
    description:
      "Developed and optimized a high-performance, live-booking aggregation engine for one of the Southern Hemisphere's largest OTAs. Built direct API integrations with Gold Standard suppliers (Avis, Hertz, Enterprise, Sixt), managing real-time inventory and pricing across 5 nations. Implemented multi-vertical booking systems for Cars, Campervans, and Trucks/Utes, supporting over 4 million successful rentals.",
    tech: ["Laravel", "Redis", "REST API", "MySQL", "AWS", "React", "Distributed System"],
    result: "4M+ rentals, sub-second response times",
    link: "https://www.vroomvroomvroom.com.au/",
    image: "/projects/project1.png",
  },
  {
    title: "Travel, Cruise & Hotels",
    description:
      "Re-architected a legacy monolithic ecosystem into a decoupled, high-performance RESTful API server. Modernized the frontend from CodeIgniter to Next.js, improving page load speeds by 40%. Engineered an asynchronous processing layer using Redis/SQS for complex travel itinerary generation and bulk supplier data synchronization.",
    tech: ["Next.js", "Laravel", "REST API", "Redis", "SQS", "PostgreSQL", "Docker"],
    result: "40% faster loads, 99.9% uptime",
    link: "https://americandiscountvacations.com/",
    image: "/projects/project2.jpg",
  },
  {
    title: "Game & Software Price Comparison",
    description:
      "Developed and scaled a robust price comparison marketplace for video games, DLCs, prepaid cards, software, and gaming hardware. Built real-time price aggregation and affiliate retailer integrations, enabling users to compare CD key offers across multiple partner stores. Implemented features like price-drop notifications, a rewards program, and newsletter automation to drive user engagement and retention.",
    tech: ["Symfony", "Cache", "Linux", "Docker", "MySQL", "Redis", "REST API"],
    result: "Extensive game catalog, commission-based revenue model",
    link: "https://www.dlcompare.com/",
    image: "/projects/project3.jpg",
  },
];

export function Projects() {
  return (
    <section id="portfolio" className="bg-slate-50 dark:bg-dark-800 py-20 lg:py-28 border-t border-slate-200 dark:border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Featured Projects</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Real Solutions. Real Impact.
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve developed and built for clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 rounded-xl overflow-hidden card-hover"
            >
              <div className="aspect-video bg-slate-900 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">{project.title}</h3>
                <p className="text-slate-500 dark:text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-accent text-sm font-medium mb-4">Result: {project.result}</div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-gray-400 hover:text-accent transition-colors"
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://portfolio.asmshaon.tech/"
            target="_blank"
            className="inline-flex items-center gap-2 border border-slate-300 dark:border-dark-500 text-slate-600 dark:text-gray-400 px-6 py-3 rounded-xl text-sm font-medium hover:border-accent hover:text-accent transition-colors"
          >
            View More Projects
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
