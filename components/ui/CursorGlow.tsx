"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Vầng sáng vàng mềm bám theo con trỏ chuột (chỉ desktop, bỏ qua khi người dùng
 * tắt animation). Bổ sung layer trang trí, pointer-events none nên không cản click.
 */
export function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 250, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 30, mass: 0.4 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[150] h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 mix-blend-multiply"
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgba(255,255,35,0.5)_0%,rgba(255,255,35,0.12)_38%,transparent_70%)] blur-2xl" />
    </motion.div>
  );
}
