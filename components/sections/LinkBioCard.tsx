"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { linkBio, socials } from "@/lib/socials";
import { useT } from "@/lib/i18n";

/**
 * Card link-in-bio - phần tử TO NHẤT của khu Kết nối.
 * Đặt trên lưới logo, chữ khổng lồ, nền lime, để người xem thấy đầu tiên.
 */
export function LinkBioCard() {
  const reduced = useReducedMotion();
  const t = useT().connect;

  return (
    <motion.a
      href={linkBio.url}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${linkBio.name} - ${linkBio.handle}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduced ? undefined : { y: -8 }}
      className="group relative block overflow-hidden rounded-[2rem] border-[3px] border-ink bg-lime px-6 py-10 sm:px-10 sm:py-14"
    >
      {/* Chữ nền khổng lồ trang trí */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-4 -top-8 select-none text-[7rem] font-black leading-none tracking-tighter text-ink opacity-[0.07] sm:text-[12rem]"
      >
        BIO
      </span>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-1.5 text-xs font-black uppercase tracking-widest text-ink">
            {t.linkBioBadge}
          </span>

          <h3 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {t.linkBioTitle[0]}
            <br />
            {t.linkBioTitle[1]}
          </h3>

          <p className="mt-5 max-w-lg text-base font-bold leading-relaxed text-ink sm:text-lg">
            {t.linkBioText.replace("{count}", String(socials.length))}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-lg font-black tracking-tight text-ink underline decoration-[3px] underline-offset-4 sm:text-2xl">
            {linkBio.handle}
          </span>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border-[3px] border-ink bg-ink text-lime transition-transform duration-300 group-hover:rotate-45 motion-reduce:!transform-none sm:size-16">
            <ArrowUpRight className="size-7 sm:size-8" strokeWidth={2.5} />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
