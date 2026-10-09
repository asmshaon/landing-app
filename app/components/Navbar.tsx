"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(t);
  }, []);

  if (!mounted) {
    return (
      <button className="text-slate-600 dark:text-gray-400 hover:text-accent transition-colors p-2" aria-label="Toggle theme">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-slate-600 dark:text-gray-400 hover:text-accent transition-colors p-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-dark-900/85 backdrop-blur-xl border-b border-slate-200 dark:border-dark-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            rel="noopener noreferrer"
            className="flex items-center gap-[11px]"
          >
            <Image
              src="/images/abu-logo.png"
              alt=""
              width={38}
              height={38}
              loading="eager"
              className="w-[38px] h-[38px] rounded-full grayscale contrast-105"
            />
            <span className="flex flex-col leading-[1.1]">
              <span className="font-display text-accent font-medium text-[1.1875rem] tracking-[-0.01em]">
                Abu Saleh
              </span>
              <span className="mt-[3px] font-sans font-medium text-[0.625rem] tracking-[0.16em] uppercase text-slate-500 dark:text-slate-400">
                Muhammad Shaon
              </span>
            </span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/asmshaon"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex text-slate-600 dark:text-gray-400 hover:text-accent transition-colors p-2"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
