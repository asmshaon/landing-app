"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home", active: true },
  { href: "#services", label: "Services", active: false },
  { href: "#portfolio", label: "Portfolio", active: false },
  { href: "#about", label: "About", active: false },
  { href: "#blog", label: "Blog", active: false },
  { href: "#testimonials", label: "Testimonials", active: false },
  { href: "#contact", label: "Contact", active: false },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 p-2"
        aria-label="Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-dark-800 border-t border-white/5 px-4 py-4 space-y-3 z-50">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm font-medium py-2 ${
                link.active ? "text-accent-light" : "text-gray-300"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
