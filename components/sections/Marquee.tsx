"use client";

import { motion, useReducedMotion } from "framer-motion";

// Các công cụ/kỹ năng thật đã có trong hồ sơ (không bịa thêm).
// Ưu tiên AI lên đầu dải chạy theo định vị hồ sơ.
const items = [
  "Claude Code",
  "OpenClaw",
  "n8n",
  "AI Agents",
  "Automation",
  "ChatGPT",
  "Claude",
  "Seedance",
  "Magnific",
  "AI Web Design",
  "UX / UI",
  "SEO Content",
  "WordPress",
  "CapCut",
];

/**
 * Dải chữ chạy vô tận (marquee). Section bổ sung, đặt xen giữa Skills và Projects.
 */
export function Marquee() {
  const reduce = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <section aria-label="Tools and skills" className="overflow-hidden bg-ink py-5">
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-8 text-2xl font-black uppercase tracking-tight text-cream/90 sm:text-3xl">
            {item}
            <span className="text-lime">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}
