"use client";

import { useRef, type ReactNode } from "react";
import { motion, transform, useScroll, useTransform, type MotionValue } from "framer-motion";

// Pins a full-screen frame while the visitor scrolls, showing one item at a time.
// Each item gets one viewport of scroll. Reduced motion stacks the items instead
// (.pinned rules in globals.css).
export function PinnedSequence({ items }: { items: ReactNode[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <div ref={ref} className="pinned" style={{ height: `${items.length * 100}svh` }}>
      <div className="pinned-frame">
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
