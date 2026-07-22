"use client";

import { motion } from "framer-motion";

export function Divider() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-6 sm:px-8">
      <svg
        viewBox="0 0 600 80"
        className="h-16 w-full text-ink/30"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden
      >
        <motion.path
          d="M10 15 C 160 10, 220 70, 300 45 S 480 5, 590 60"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
