"use client";

import Image from "next/image";
import { Music2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useT } from "@/lib/i18n";

export function Achievements() {
  const achievement = useT().achievement;

  return (
    <section id="achievements" className="px-5 py-24 sm:px-8">
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
          <SectionHeading eyebrow={achievement.eyebrow} title={achievement.heading} />
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border-[3px] border-ink bg-white p-8 shadow-xl sm:p-10">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime text-ink">
                  <Music2 size={26} strokeWidth={2.4} />
                </span>
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-ink">
                    {achievement.year}
                  </div>
                  <div className="text-xl font-black">{achievement.title}</div>
                </div>
              </div>

              <ul className="mt-7 space-y-4">
                {achievement.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm font-medium leading-relaxed text-ink sm:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime brightness-75" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="relative mx-auto w-full max-w-md">
              <div className="rotate-2 overflow-hidden rounded-3xl border-[6px] border-dark bg-dark shadow-2xl transition-transform duration-300 hover:rotate-0">
                <Image
                  src="/images/deco-social.jpg"
                  alt="Social media illustration"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -rotate-3 rounded-2xl bg-ink px-5 py-3 text-cream shadow-lg">
                <div className="text-xl font-black leading-none text-lime">
                  {achievement.badgeTop}
                </div>
                <div className="mt-1 text-[11px] font-semibold">{achievement.badgeBottom}</div>
              </div>
            </div>
          </Reveal>
        </div>
        </div>
      </div>
    </section>
  );
}
