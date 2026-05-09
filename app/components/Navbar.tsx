"use client";

import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { ArrowRight } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", active: true },
  { href: "#services", label: "Services", active: false },
  { href: "https://portfolio.asmshaon.tech", label: "Portfolio", active: false },
  { href: "https://blog.asmshaon.tech", label: "Blog", active: false },
  { href: "#testimonials", label: "Testimonials", active: false },
  { href: "#contact", label: "Contact", active: false },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
              <span className="text-white font-bold text-sm">AS</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-semibold text-sm leading-tight">Abu Saleh</div>
              <div className="text-gray-400 text-xs leading-tight">Full-Stack Engineer</div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  link.active ? "text-accent-light" : "text-gray-300 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden sm:inline-flex btn-primary text-white px-5 py-2 rounded-lg text-sm font-medium items-center gap-2"
            >
              Hire Me
              <ArrowRight className="w-4 h-4" />
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
