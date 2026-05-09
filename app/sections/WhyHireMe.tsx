import { Target, Layers, ShieldCheck, Zap, MessageCircle } from "lucide-react";

const values = [
  {
    icon: Target,
    iconBg: "bg-accent/20",
    iconColor: "text-accent-light",
    title: "Business-Focused Approach",
    description: "I focus on solving real business problems and delivering measurable results.",
  },
  {
    icon: Layers,
    iconBg: "bg-blue-500/20",
    iconColor: "text-blue-400",
    title: "Architecture-First Mindset",
    description: "I design scalable, maintainable, and future-proof architecture from day one.",
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-green-500/20",
    iconColor: "text-green-400",
    title: "End-to-End Ownership",
    description: "From planning and development to deployment and optimization, I handle the full lifecycle.",
  },
  {
    icon: Zap,
    iconBg: "bg-purple-500/20",
    iconColor: "text-purple-400",
    title: "Modern & AI-Assisted Development",
    description: "I leverage AI tools and modern workflows to build faster without compromising quality.",
  },
  {
    icon: MessageCircle,
    iconBg: "bg-pink-500/20",
    iconColor: "text-pink-400",
    title: "Clear Communication & Reliability",
    description: "Transparent communication, on-time delivery, and long-term relationship are my priorities.",
  },
];

export function WhyHireMe() {
  return (
    <section id="why-me" className="section-dark py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-accent-light text-xs font-bold uppercase tracking-widest mb-3">
            Why Clients Hire Me
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            More Than Code. I Deliver Value.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value) => (
            <div key={value.title} className="value-card rounded-2xl p-6 text-center">
              <div
                className={`w-12 h-12 rounded-xl ${value.iconBg} flex items-center justify-center mx-auto mb-4`}
              >
                <value.icon className={`w-6 h-6 ${value.iconColor}`} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{value.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
