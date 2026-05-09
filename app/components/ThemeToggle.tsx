"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useCallback, useSyncExternalStore } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    useCallback(() => () => {}, []),
    () => true,
    () => false
  );

  if (!mounted) {
    return (
      <button className="text-gray-400 hover:text-white transition-colors p-2" aria-label="Toggle theme">
        <div className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-400 hover:text-white transition-colors p-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
