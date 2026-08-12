"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * Thanh tiến trình cuộn mảnh ở đỉnh trang (bổ sung, không đụng nội dung).
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[200] h-1 origin-left bg-lime shadow-[0_0_12px_2px_rgba(255,255,35,0.55)]"
    />
  );
}
