import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const tones = {
  plain: "bg-white dark:bg-dark-900",
  ash: "bg-slate-50 dark:bg-dark-800",
};

type SceneTone = keyof typeof tones;

// One idea per viewport: a full-height band with its content centered.
export function Scene({
  id,
  tone = "plain",
  className,
  children,
}: {
  id?: string;
  tone?: SceneTone;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("min-h-svh flex items-center py-24 lg:py-32", tones[tone], className)}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

