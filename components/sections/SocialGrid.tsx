"use client";

import { motion, useReducedMotion } from "framer-motion";
import { socials } from "@/lib/socials";

export function SocialGrid() {
  const reduced = useReducedMotion();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {socials.map((s, i) => (
        <motion.a
          key={s.key}
          href={s.url}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={`${s.name} - ${s.handle}`}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: reduced ? 0 : (i % 4) * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={reduced ? undefined : { y: -6 }}
          className="group flex flex-col items-center gap-3 rounded-2xl border-[3px] border-ink bg-white px-4 py-6 transition-colors hover:bg-lime"
        >
          <span
            className="flex size-14 items-center justify-center rounded-2xl border-[3px] border-ink transition-transform duration-300 group-hover:scale-110 motion-reduce:!transform-none"
            style={{ backgroundColor: s.hex }}
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="size-7"
              fill={s.fg === "light" ? "#ffffff" : "#111111"}
            >
              <path d={s.path} />
            </svg>
          </span>
          <span className="text-sm font-black text-ink">{s.name}</span>
        </motion.a>
      ))}
    </div>
  );
}
