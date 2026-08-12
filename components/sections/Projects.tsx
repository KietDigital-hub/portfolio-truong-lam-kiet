"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, CheckCircle2, ArrowUpRight, GraduationCap } from "lucide-react";
import { projects, experience } from "@/lib/profile";
import { Chip } from "@/components/ui/Chip";

const ICONS = { experience: Briefcase, project: GraduationCap };

// ảnh minh họa theo chủ đề công việc (không phải screenshot dự án thật)
const CARD_IMAGES: Record<string, string> = {
  experience: "/images/deco-content.jpg",
  "02": "/images/deco-analytics.jpg",
  "03": "/images/deco-design.jpg",
};

type Slide =
  | { kind: "intro" }
  | { kind: "experience"; index: string }
  | { kind: "project"; index: string; data: (typeof projects)[number] };

const slides: Slide[] = [
  { kind: "intro" },
  { kind: "experience", index: "01" },
  ...projects.map((p, i) => ({ kind: "project" as const, index: String(i + 2).padStart(2, "0"), data: p })),
];

export function Projects() {
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
    <section id="projects" className="bg-dark text-cream">
      <div ref={pinRef} style={{ height: `${scrollHeight}vh` }} className="relative">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="px-5 sm:px-8 lg:pl-80">
            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cream/60">
              Dự án & Hoạt động học tập
            </span>
          </div>

          <motion.div ref={trackRef} style={{ x }} className="mt-8 flex items-stretch gap-6 px-5 will-change-transform sm:px-8 lg:pl-80">
            {slides.map((slide, i) => {
              if (slide.kind === "intro") {
                return (
                  <div
                    key="intro"
                    className="flex w-[85vw] shrink-0 flex-col justify-center sm:w-[420px]"
                  >
                    <h3 className="text-4xl font-black leading-[1.1] sm:text-5xl">
                      Hai dự án,
                      <br />
                      cùng một vai trò:
                      <br />
                      <span className="text-lime">Leader.</span>
                    </h3>
                    <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/60">
                      Trực tiếp lên kế hoạch, điều phối đội nhóm và vận hành từng hạng mục - không
                      chỉ đứng ngoài chỉ đạo. Kéo/cuộn để xem từng phần việc.
                    </p>
                    <span className="mt-8 hidden items-center gap-2 text-xs font-bold uppercase tracking-widest text-cream/40 sm:flex">
                      Cuộn để xem tiếp <ArrowUpRight size={14} className="rotate-90" />
                    </span>
                  </div>
                );
              }

              if (slide.kind === "experience") {
                const Icon = ICONS.experience;
                return (
                  <div
                    key="experience"
                    className="flex w-[85vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-cream/10 bg-dark-2 sm:w-[480px]"
                  >
                    <div className="relative h-24 w-full sm:h-40">
                      <Image
                        src={CARD_IMAGES.experience}
                        alt=""
                        fill
                        sizes="420px"
                        className="object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-2 to-transparent" />
                      <span className="absolute left-6 top-5 rounded-full bg-ink/70 px-3 py-1 text-xs font-black text-cream/70 backdrop-blur">
                        {slide.index}
                      </span>
                      <span className="absolute right-6 top-5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                        Đang diễn ra
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6 pt-4 sm:p-8 sm:pt-5">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-lime text-ink sm:h-11 sm:w-11">
                      <Icon size={18} strokeWidth={2.4} />
                    </span>
                    <h3 className="mt-3 text-lg font-black leading-snug sm:mt-4 sm:text-xl">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-cream/40 sm:text-xs">
                      {experience.company} · {experience.period}
                    </p>
                    <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-2.5">
                      {experience.tasks.map((task) => (
                        <li
                          key={task}
                          className="flex gap-2.5 text-[12px] leading-snug text-cream/75 sm:text-[13px] sm:leading-relaxed"
                        >
                          <CheckCircle2 size={15} className="mt-0.5 shrink-0 text-lime" />
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 border-t border-cream/10 pt-3 sm:mt-6 sm:pt-4">
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-cream/40">
                        KPI được giao
                      </span>
                      <div className="mt-2.5 flex flex-wrap gap-2">
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

              const project = slide.data;
              return (
                <div
                  key={project.title}
                  className="group relative flex w-[85vw] shrink-0 flex-col overflow-hidden rounded-3xl border border-cream/10 bg-dark-2 sm:w-[420px]"
                >
                  <div className="relative h-40 w-full">
                    <Image
                      src={CARD_IMAGES[slide.index] ?? "/images/deco-design.jpg"}
                      alt=""
                      fill
                      sizes="420px"
                      className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-2 to-transparent" />
                    <span className="absolute left-6 top-5 rounded-full bg-ink/70 px-3 py-1 text-xs font-black text-cream/70 backdrop-blur">
                      {slide.index}
                    </span>
                    <span className="absolute right-6 top-5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                      {project.role}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-8 pt-5">
                  <h3 className="text-xl font-black leading-snug">{project.title}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-cream/40">
                    {project.period}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-cream/70">{project.description}</p>

                  <ul className="mt-5 space-y-2.5">
                    {project.points.slice(0, 3).map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-cream/75">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-lime" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2 pr-12">
                    {project.tags.map((tag) => (
                      <Chip key={tag} dark>
                        {tag}
                      </Chip>
                    ))}
                  </div>

                  </div>

                  <Link
                    href="#contact"
                    aria-label="Hỏi thêm về dự án này"
                    className="absolute bottom-6 right-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-lime text-ink transition-transform duration-300 group-hover:rotate-45"
                  >
                    <ArrowUpRight size={20} strokeWidth={2.4} />
                  </Link>
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
