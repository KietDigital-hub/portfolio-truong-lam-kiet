"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { socials } from "@/lib/socials";

export function SocialGrid() {
  const reduced = useReducedMotion();

  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {socials.map((s, i) => (
        <motion.a
          key={s.key}
          href={s.url}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.55,
            delay: reduced ? 0 : (i % 3) * 0.07 + Math.floor(i / 3) * 0.05,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={reduced ? undefined : { y: -6 }}
          className="group relative flex items-start gap-4 overflow-hidden rounded-2xl border-[3px] border-ink bg-white p-5 transition-colors hover:bg-lime-soft/40"
        >
          {/* Ô logo màu thương hiệu */}
          <span
            className="flex size-14 shrink-0 items-center justify-center rounded-2xl border-[3px] border-ink transition-transform duration-300 group-hover:scale-105 motion-reduce:!transform-none"
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

          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-2">
              <span className="text-lg font-black leading-tight text-ink">{s.name}</span>
              <ArrowUpRight
                size={18}
                className="shrink-0 text-ink transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:!transform-none"
              />
            </span>
            <span className="mt-0.5 block truncate text-sm font-bold text-ink-soft">{s.handle}</span>
            <span className="mt-2 block text-sm font-medium leading-relaxed text-ink">{s.note}</span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}
