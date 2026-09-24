import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="hero-gradient relative min-h-screen pt-20 lg:pt-0 flex items-center overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Senior full-stack engineer building{" "}
              <span className="text-gradient">production systems</span> that scale
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg">
              15+ years across backend and frontend in PHP / Laravel, Python /
              FastAPI, TypeScript and Next.js &mdash; and currently going deep on AI
              engineering, from LLM APIs to RAG and agents.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Contact
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-gray-400 text-sm">
                Open to remote roles &mdash; full-time or long-term contract
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative hidden lg:block">
            <div className="relative float-animation">
              {/* Person Image Container */}
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent z-10 rounded-2xl" />
                <div className="w-full h-full rounded-2xl overflow-hidden relative border border-white/10">
                  <Image
                    src="/images/asmshaon_profile.png"
                    alt="ASM Shaon profile photo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -right-10 -top-6 stats-card rounded-2xl p-5 shadow-2xl w-56 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">15+</div>
                    <div className="text-gray-400 text-xs">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
