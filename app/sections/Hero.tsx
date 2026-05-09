"use client";

import Image from "next/image";
import { ArrowRight, Phone, FileText, Clock, CheckCircle, Crown, Star } from "lucide-react";

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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 badge-glow rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-xs font-semibold uppercase tracking-wider">
                Top Rated Plus on Upwork
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              I build scalable web
              <br /> solutions for <span className="text-gradient">growing
              <br /> businesses</span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-lg">
              15+ years of experience building production-grade web applications
              and AI-powered systems. I help businesses turn ideas into scalable,
              secure, and high-performance software.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.upwork.com/freelancers/~0144413bdd55c4bd39"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Hire Me
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://calendly.com/asmshaon/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Book a Call
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:srabon.php@gmail.com?subject=Project%20Quote%20Request"
                className="btn-outline inline-flex items-center gap-2 text-white px-6 py-3 rounded-xl text-sm font-semibold"
              >
                Get a Quote
                <FileText className="w-4 h-4" />
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-gray-400 text-sm">Available for new projects</span>
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
              <div className="absolute -right-10 -top-6 stats-card rounded-2xl p-5 space-y-4 shadow-2xl w-56 z-20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-accent-light" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">25K+</div>
                    <div className="text-gray-400 text-xs">Total Upwork Hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg leading-tight">100%</div>
                    <div className="text-gray-400 text-xs">Job Success Score</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <Crown className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm leading-tight">Top Rated Plus</div>
                    <div className="text-gray-400 text-xs">Upwork Status</div>
                  </div>
                </div>
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
