"use client";

import { useRef, useState, type ReactNode } from "react";
import {
  motion,
  transform,
  useMotionValueEvent,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

// Optional header that stays in the pinned frame: the section name, a counter and one
// progress segment per item. The first `skip` items (an intro) are not counted.
type Chapter = { label: string; title: string; skip?: number };

const pad = (n: number) => String(n).padStart(2, "0");

// Pins a full-screen frame while the visitor scrolls, showing one item at a time.
// Each item gets one viewport of scroll. Reduced motion stacks the items instead
// (.pinned rules in globals.css).
export function PinnedSequence({ items, chapter }: { items: ReactNode[]; chapter?: Chapter }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} className="pinned" style={{ height: `${items.length * 100}svh` }}>
      <div className={chapter ? "pinned-frame has-chapter" : "pinned-frame"}>
        {chapter && <ChapterBar chapter={chapter} total={items.length} progress={scrollYProgress} />}
        {items.map((item, i) => (
          <PinnedItem key={i} index={i} count={items.length} progress={scrollYProgress}>
            {item}
          </PinnedItem>
        ))}
      </div>
    </div>
  );
}

function PinnedItem({
  index,
  count,
  progress,
  children,
}: {
  index: number;
  count: number;
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  // Split the scroll into equal windows. Each item fades in and out inside its own
  // window, so neighbours never overlap (large text crossfading reads as a jumble).
  // The first item starts visible, the last stays.
  const step = 1 / count;
  const start = index * step;
  const end = start + step;
  const edge = step * 0.2;
  const isFirst = index === 0;
  const isLast = index === count - 1;

  const input = [start, start + edge, end - edge, end];
  // Function form on purpose: framer's accelerated opacity path left these stuck at
  // their first value when driven by a multi-step scroll range.
  const fade = transform(input, [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]);
  const opacity = useTransform(progress, (v) => fade(v));
  const y = useTransform(progress, input, [isFirst ? 0 : 80, 0, 0, isLast ? 0 : -80]);
  const scale = useTransform(progress, input, [isFirst ? 1 : 0.94, 1, 1, isLast ? 1 : 1.04]);

  return (
    <motion.div className="pinned-item scroll-linked" style={{ opacity, y, scale }}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </motion.div>
  );
}

function ChapterBar({
  chapter,
  total,
  progress,
}: {
  chapter: Chapter;
  total: number;
  progress: MotionValue<number>;
}) {
  const skip = chapter.skip ?? 0;
  const steps = total - skip;
  const step = 1 / total;
  const [current, setCurrent] = useState(0);

  useMotionValueEvent(progress, "change", (v) => {
    setCurrent(Math.min(steps - 1, Math.max(0, Math.floor(v * total) - skip)));
  });

  // Hidden while the intro is on screen (it already names the section), then fades in
  // with the first counted item. Function form for the same reason as PinnedItem.
  const start = skip * step;
  const fade = transform([start, start + step * 0.2], [skip ? 0 : 1, 1]);
  const opacity = useTransform(progress, (v) => fade(v));

  return (
    <motion.div className="pinned-chapter" style={{ opacity }} aria-hidden="true">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between gap-6">
          <p className="eyebrow">
            {chapter.label}
            <span className="hidden sm:inline font-medium normal-case tracking-normal text-slate-400 dark:text-slate-500">
              <span className="mx-3">·</span>
              {chapter.title}
            </span>
          </p>
          <p className="eyebrow tabular-nums">
            <span className="text-accent">{pad(current + 1)}</span> / {pad(steps)}
          </p>
        </div>
        <div className="mt-4 flex gap-1.5">
          {Array.from({ length: steps }, (_, i) => (
            <Segment key={i} progress={progress} from={(skip + i) * step} to={(skip + i + 1) * step} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// One bar per item, filling as its window of scroll passes.
function Segment({ progress, from, to }: { progress: MotionValue<number>; from: number; to: number }) {
  const scaleX = useTransform(progress, [from, to], [0, 1]);

  return (
    <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-slate-200 dark:bg-dark-600">
      <motion.div className="h-full origin-left bg-accent" style={{ scaleX }} />
    </div>
  );
}
