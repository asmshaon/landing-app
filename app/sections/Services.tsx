import { Server, Monitor, Sparkles, CloudCog } from "lucide-react";

const services = [
  {
    icon: Server,
    iconColor: "text-indigo-600",
    iconBg: "bg-indigo-100",
    title: "Backend Engineering",
    items: [
      "Scalable API Architecture",
      "Laravel / NestJS Development",
      "Authentication & RBAC",
      "Database Design & Optimization",
      "Queue Systems & Async Jobs",
      "Payment & Third-Party Integrations",
    ],
  },
  {
    icon: Monitor,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    title: "Frontend Development",
    items: [
      "Next.js & React Applications",
      "TypeScript & Modern UI/UX",
      "SEO Optimized Solutions",
      "Responsive & High Performance",
      "Real-time Features",
      "Dashboard & Admin Panels",
    ],
  },
  {
    icon: Sparkles,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    title: "AI & Automation",
    items: [
      "LLM Integrations (OpenAI, Claude)",
      "AI Chat & Assistant Systems",
      "Workflow Automation",
      "RAG & Vector Search Solutions",
      "AI-powered Business Tools",
      "Data Processing & Insights",
    ],
  },
  {
    icon: CloudCog,
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100",
    title: "DevOps & Infrastructure",
    items: [
      "Docker & Containerization",
      "AWS / DigitalOcean / VPS",
      "CI/CD Pipeline Setup",
      "Redis & Cache Optimization",
      "Monitoring & Logging",
      "Scaling & Performance Tuning",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-50 dark:bg-dark-800 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">What I Do</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            End-to-End Solutions That Drive Results
          </h2>
          <p className="text-slate-500 dark:text-gray-400 max-w-2xl mx-auto">
            From architecture to deployment, I provide complete solutions that help your business grow and scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-dark-700 rounded-2xl p-6 border border-slate-200 dark:border-dark-600 card-hover"
            >
              <div
                className={`w-12 h-12 rounded-xl ${service.iconBg} dark:bg-opacity-10 flex items-center justify-center mb-5`}
              >
                <service.icon className={`w-6 h-6 ${service.iconColor} dark:text-opacity-80`} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-gray-400">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-slate-400 dark:text-gray-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
