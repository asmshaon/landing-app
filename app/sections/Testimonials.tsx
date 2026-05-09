import { Clock, CheckCircle, Crown, Star, ExternalLink, FolderOpen, BookOpen } from "lucide-react";

const stats = [
  {
    icon: Clock,
    iconBg: "bg-indigo-100 dark:bg-indigo-900/30",
    iconColor: "text-indigo-600 dark:text-indigo-400",
    value: "25,000+",
    label: "Total Upwork Hours",
  },
  {
    icon: CheckCircle,
    iconBg: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
    value: "100%",
    label: "Job Success Score",
  },
  {
    icon: Crown,
    iconBg: "bg-yellow-100 dark:bg-yellow-900/30",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    value: "Top Rated Plus",
    label: "Upwork Status",
  },
  {
    icon: Star,
    iconBg: "bg-orange-100 dark:bg-orange-900/30",
    iconColor: "text-orange-600 dark:text-orange-400",
    value: "15+ Years",
    label: "Of Professional Experience",
  },
];

const testimonials = [
  {
    text: "Abu was a pleasure to work with. He is professional, reliable, and a very hard worker. Always positive, he works well both independently and as part of a team. He consistently made himself available when needed and brought creative, out-of-the-box thinking to every project. Abu stays up to date with best practices and modern frameworks, ensuring high-quality results. I highly recommend him for full-stack development work.",
    name: "Upwork Client",
    role: "Verified Review",
    initials: "UC",
  },
  {
    text: "I can't recommend Abu enough. He was a pleasure to work with from start to finish. Abu demonstrated strong technical expertise across both front-end and back-end development, delivering clean, efficient code and thoughtful solutions throughout the project. He is a very hard worker, listener and problem solver. I came to him only with an idea and he built it from scratch. Communication was clear, prompt, and professional, and he consistently met (or beat) deadlines. What really stood out was his proactive approach to solving problems and suggesting improvements that added real value. I will absolutely hire Abu again for future projects and recommend him to anyone looking for a skilled and dependable developer.",
    name: "Upwork Client",
    role: "Verified Review",
    initials: "UC",
  },
  {
    text: "Abu Saleh is one of the best developers I've ever worked with on Upwork. He not only can accomplish any job presented to him, but he makes really sound judgements on how to fill in all the gaps that were previously undefined. In addition to this, he has exceptional leadership skills as he led our team of developers to complete the project at hand. We have already re-hired him for our next project. Highly recommend.",
    name: "Upwork Client",
    role: "Verified Review",
    initials: "UC",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-slate-50 dark:bg-dark-800 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-accent text-xs font-bold uppercase tracking-widest mb-3">Social Proof</div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by Clients. Proven by Results.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Stats */}
          <div className="lg:col-span-3 space-y-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${stat.iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                  <div className="text-slate-500 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="lg:col-span-9 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-dark-600 flex items-center justify-center text-slate-500 dark:text-gray-400 font-bold text-sm">
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white text-sm">{t.name}</div>
                    <div className="text-slate-500 dark:text-gray-400 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Explore My Work</h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm mb-4">
                See more of my projects, case studies and technical solutions.
              </p>
              <a
                href="https://portfolio.asmshaon.tech/"
                target="_blank"
                className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-dark transition-colors"
              >
                portfolio.asmshaon.tech
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="hidden sm:flex w-24 h-24 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 items-center justify-center flex-shrink-0">
              <FolderOpen className="w-12 h-12 text-indigo-400" />
            </div>
          </div>

          <div className="bg-white dark:bg-dark-700 border border-slate-200 dark:border-dark-600 rounded-2xl p-8 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2">Read My Insights</h3>
              <p className="text-slate-500 dark:text-gray-400 text-sm mb-4">
                Technical articles, tutorials and insights on development and architecture.
              </p>
              <a
                href="https://blog.asmshaon.tech/"
                target={"_blank"}
                className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-dark transition-colors"
              >
                blog.asmshaon.tech
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            <div className="hidden sm:flex w-24 h-24 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 items-center justify-center flex-shrink-0">
              <BookOpen className="w-12 h-12 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
