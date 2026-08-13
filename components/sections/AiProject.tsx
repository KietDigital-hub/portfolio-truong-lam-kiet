"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Sparkles, ExternalLink } from "lucide-react";
import { aiProject } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Chip } from "@/components/ui/Chip";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AiProject() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="ai-project" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border-[3px] border-ink px-5 py-14 shadow-[0_30px_70px_-45px_rgba(0,0,0,0.6)] sm:px-10 sm:py-16">
          <div aria-hidden className="absolute inset-0 -z-10">
            <Image
              src="/images/nen3.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-oat/70 via-oat/62 to-oat/72" />
          </div>

        <Reveal>
          <SectionHeading
            eyebrow={aiProject.eyebrow}
            title={aiProject.title}
            description={aiProject.subtitle}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <Reveal delay={0.1}>
            <div className="relative">
              <div className="relative aspect-video overflow-hidden rounded-3xl border-[6px] border-dark bg-dark shadow-2xl">
                {playing ? (
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${aiProject.youtubeId}?autoplay=1&rel=0`}
                    title={aiProject.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    aria-label={`Phát video: ${aiProject.title}`}
                    className="group absolute inset-0 h-full w-full cursor-pointer"
                  >
                    <Image
                      src={`https://i.ytimg.com/vi/${aiProject.youtubeId}/maxresdefault.jpg`}
                      alt={aiProject.subtitle}
                      fill
                      sizes="(max-width: 1024px) 100vw, 700px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute inset-0 bg-dark/25 transition-colors duration-300 group-hover:bg-dark/10" />
                    <span className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-lime text-ink shadow-xl transition-transform duration-300 group-hover:scale-110">
                      <Play size={30} strokeWidth={2.6} className="ml-1 fill-ink" />
                    </span>
                  </button>
                )}
              </div>

              <div className="absolute -bottom-4 -left-2 -rotate-2 rounded-2xl bg-ink px-5 py-3 text-cream shadow-lg sm:-left-4">
                <div className="flex items-center gap-2 text-lime">
                  <Sparkles size={16} strokeWidth={2.6} />
                  <span className="text-sm font-black leading-none">Made with AI</span>
                </div>
                <div className="mt-1 text-[11px] font-semibold text-cream/70">
                  Kênh {aiProject.channel}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="rounded-3xl border-[3px] border-ink bg-white p-8 shadow-xl sm:p-10">
              <div className="flex flex-wrap gap-2">
                {aiProject.tags.map((tag) => (
                  <Chip key={tag}>{tag}</Chip>
                ))}
              </div>

              <p className="mt-6 text-sm font-medium leading-relaxed text-ink sm:text-base">
                {aiProject.description}
              </p>

              <ul className="mt-6 space-y-4">
                {aiProject.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm font-medium leading-relaxed text-ink sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime brightness-75" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={aiProject.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-bold text-cream transition-colors hover:bg-dark-2"
              >
                Xem trên YouTube
                <ExternalLink size={16} strokeWidth={2.4} />
              </a>
            </div>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
