"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="scroll-progress-container">
      <motion.div className="scroll-progress-bar origin-left" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}
