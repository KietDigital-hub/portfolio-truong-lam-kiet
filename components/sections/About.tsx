"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, Flag, X } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useT } from "@/lib/i18n";

const ICONS = { graduation: GraduationCap, users: Users, briefcase: Briefcase, flag: Flag };

function Connector({ flip }: { flip: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 90"
      className={`pointer-events-none absolute -top-[72px] h-[72px] w-[120px] text-cream/40 ${
        flip ? "right-0 -scale-x-100" : "left-0"
      }`}
      fill="none"
    >
      <path
        d="M2 2 C 40 10, 70 40, 116 86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="1"
        strokeLinecap="round"
      />
      <circle cx="116" cy="86" r="3.5" fill="currentColor" />
    </svg>
  );
}

export function About() {
  const t = useT();
  const timeline = t.timeline;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const active = openIndex !== null ? timeline[openIndex] : null;

  return (
    <section id="about" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Panel riêng của mục Mục tiêu: ảnh nen.png làm nền, có khung màu riêng */}
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border-[3px] border-lime bg-dark px-5 py-16 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)] sm:px-10 sm:py-20">
          {/* Ảnh nền chỉ trải ở phần đầu panel rồi tan dần vào nền tối, tránh bị phóng to méo */}
          <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-[420px] sm:h-[560px]">
            <Image
              src="/images/nen.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/55 via-dark/70 to-dark" />
          </div>

        <Reveal>
          <SectionHeading
            dark
            eyebrow={t.about.eyebrow}
            title={
              <>
                {t.about.titleLines[0]}
                <br />
                {t.about.titleLines[1]}
              </>
            }
          />
        </Reveal>

        <div className="relative mt-24 space-y-24 sm:space-y-28">
          {timeline.map((item, i) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS];
            const alignRight = i % 2 === 1;
            return (
              <Reveal
                key={item.title}
                delay={0.05}
                y={16}
                className={`relative flex ${alignRight ? "justify-end" : "justify-start"}`}
              >
                <div className={`relative w-[88%] sm:w-[62%] ${alignRight ? "rotate-1" : "-rotate-1"}`}>
                  {i > 0 && <Connector flip={alignRight} />}
                  <button
                    onClick={() => setOpenIndex(i)}
                    className="w-full rounded-3xl border-[3px] border-ink bg-white p-7 text-left shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:rotate-0"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="text-3xl font-black text-lime [-webkit-text-stroke:1px_var(--color-ink)]">
                        {item.year}
                      </span>
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-ink text-lime">
                        <Icon size={18} strokeWidth={2.4} />
                      </span>
                    </div>
                    <h3 className="mt-3 text-xl font-black">{item.title}</h3>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-ink">{item.blurb}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-ink underline underline-offset-4">
                      {t.about.readMore}
                    </span>
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 grid gap-6">
          <Reveal delay={0.05}>
            <div className="flex h-full items-start gap-4 rounded-3xl border-[3px] border-ink bg-white p-8">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-lime text-ink">
                <GraduationCap size={22} strokeWidth={2.4} />
              </span>
              <div>
                <div className="font-black">{t.profile.school}</div>
                <p className="mt-1 text-sm font-medium text-ink">
                  {t.profile.major} · {t.profile.schoolYears}
                </p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  {t.profile.dobLabel}: {t.profile.dob}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-wrap items-center gap-3 rounded-3xl border border-cream/20 bg-dark-2/70 px-8 py-5 text-sm text-cream/70 backdrop-blur-sm">
            <span className="font-black uppercase tracking-[0.15em] text-cream">
              {t.about.outsideWork}
            </span>
            {t.interests.map((interest) => (
              <span key={interest} className="rounded-full bg-cream/10 px-3 py-1">
                {interest}
              </span>
            ))}
          </div>
        </Reveal>
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              className="relative w-full max-w-md rounded-3xl bg-dark-2 p-8 text-cream shadow-2xl"
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpenIndex(null)}
                aria-label={t.about.close}
                className="absolute right-6 top-6 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-cream/20"
              >
                <X size={16} />
              </button>
              <span className="text-4xl font-black text-lime">{active.year}</span>
              <h3 className="mt-3 text-2xl font-black leading-snug">{active.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/75">{active.detail}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
