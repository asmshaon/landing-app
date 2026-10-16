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
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
