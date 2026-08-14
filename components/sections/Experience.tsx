"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, CheckCircle2, ArrowUpRight, Quote } from "lucide-react";
import { experience, experienceGroups, experienceTakeaway } from "@/lib/profile";
import { Chip } from "@/components/ui/Chip";

type Slide =
  | { kind: "intro" }
  | { kind: "role" }
  | { kind: "group"; data: (typeof experienceGroups)[number] }
  | { kind: "takeaway" };

const slides: Slide[] = [
  { kind: "intro" },
  { kind: "role" },
  ...experienceGroups.map((g) => ({ kind: "group" as const, data: g })),
  { kind: "takeaway" },
];

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      setTrackWidth(trackRef.current?.scrollWidth ?? 0);
      setViewportWidth(window.innerWidth);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  const maxTranslate = Math.max(trackWidth - viewportWidth + 64, 0);
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const scrollHeight = Math.max(slides.length * 62, 220);

  return (
    <section id="experience" className="bg-dark text-cream">
      <div ref={pinRef} style={{ height: `${scrollHeight}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="px-5 sm:px-8 lg:pl-80">
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-lime/70 bg-lime/10 px-4 py-1.5 font-display text-xs font-black uppercase tracking-[0.2em] text-lime">
              Work experience
            </span>
          </div>

          <motion.div
            ref={trackRef}
            style={{ x }}
            className="mt-8 flex items-stretch gap-6 px-5 will-change-transform sm:px-8 lg:pl-80"
          >
            {slides.map((slide) => {
              if (slide.kind === "intro") {
                return (
                  <div
                    key="intro"
                    className="flex w-[85vw] shrink-0 flex-col justify-center sm:w-[420px]"
                  >
                    <h3 className="text-4xl font-black leading-[1.1] sm:text-5xl">
                      Three months
                      <br />
                      of real SEO, at a
                      <br />
                      <span className="text-lime">real company.</span>
                    </h3>
                    <p className="mt-6 max-w-md font-display text-lg font-black leading-[1.35] text-cream sm:text-xl">
                      Not a classroom exercise - <span className="text-lime">real deadlines</span>,{" "}
                      <span className="text-lime">weekly KPIs</span>, and someone reviewing every
                      deliverable.
                    </p>
                    <span className="mt-7 hidden items-center gap-2 font-display text-xs font-black uppercase tracking-[0.2em] text-lime sm:flex">
                      Scroll to see what I owned <ArrowUpRight size={14} className="rotate-90" />
                    </span>
                  </div>
                );
              }

              if (slide.kind === "role") {
                return (
                  <div
                    key="role"
                    className="flex w-[85vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-cream/10 bg-dark-2 sm:w-[420px]"
                  >
                    <div className="relative h-40 w-full">
                      <Image
                        src="/images/deco-social.jpg"
                        alt=""
                        fill
                        sizes="420px"
                        className="object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-2 to-transparent" />
                      <span className="absolute left-6 top-5 rounded-full bg-ink/80 px-3 py-1 font-display text-xs font-black text-lime backdrop-blur">
                        00
                      </span>
                      <span className="absolute right-6 top-5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                        In progress
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-8 pt-5">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-lime text-ink">
                        <Briefcase size={20} strokeWidth={2.4} />
                      </span>
                      <h3 className="mt-4 text-xl font-black leading-snug">{experience.role}</h3>
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-bold text-lime hover:underline"
                      >
                        {experience.company}
                        <ArrowUpRight size={14} strokeWidth={2.6} />
                      </a>
                      <p className="mt-1 font-display text-xs font-black uppercase tracking-[0.14em] text-cream/70">
                        {experience.period}
                      </p>

                      <div className="mt-auto border-t border-cream/10 pt-5">
                        <span className="font-display text-[11px] font-black uppercase tracking-[0.22em] text-lime">
                          KPIs assigned
                        </span>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {experience.kpis.map((kpi) => (
                            <span
                              key={kpi}
                              className="rounded-full bg-lime/15 px-3 py-1 text-xs font-bold text-lime"
                            >
                              {kpi}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              if (slide.kind === "takeaway") {
                return (
                  <div
                    key="takeaway"
                    className="flex w-[85vw] shrink-0 flex-col justify-center rounded-3xl border border-lime/30 bg-dark-2 p-8 sm:w-[420px] sm:p-10"
                  >
                    <Quote size={32} className="text-lime" strokeWidth={2.4} />
                    <p className="mt-5 font-display text-xl font-black leading-[1.3] text-cream sm:text-2xl">
                      {experienceTakeaway}
                    </p>
                    <span className="mt-6 font-display text-xs font-black uppercase tracking-[0.2em] text-lime">
                      What the internship taught me
                    </span>
                    <Link
                      href="#contact"
                      className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-lime px-5 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
                    >
                      Get in touch
                      <ArrowUpRight size={16} strokeWidth={2.6} />
                    </Link>
                  </div>
                );
              }

              const group = slide.data;
              return (
                <div
                  key={group.title}
                  className="group relative flex w-[85vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-cream/10 bg-dark-2 sm:w-[420px]"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={group.image}
                      alt=""
                      fill
                      sizes="420px"
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-2 to-transparent" />
                    <span className="absolute left-6 top-5 rounded-full bg-ink/80 px-3 py-1 font-display text-xs font-black text-lime backdrop-blur">
                      {group.index}
                    </span>
                    <span className="absolute right-6 top-5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                      TinHolding
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8 pt-5">
                    <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-cream">{group.title}</h3>

                    <ul className="mt-5 space-y-3">
                      {group.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm font-semibold leading-relaxed text-cream/90">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-lime" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex flex-wrap gap-2 pt-6">
                      {group.tags.map((tag) => (
                        <Chip key={tag} dark>
                          {tag}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <div className="px-5 sm:px-8 lg:pl-80">
            <div className="mt-10 h-[3px] w-full max-w-xs overflow-hidden rounded-full bg-cream/10">
              <motion.div style={{ width: progressWidth }} className="h-full rounded-full bg-lime" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
