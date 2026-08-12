import Image from "next/image";
import { Music2 } from "lucide-react";
import { achievement } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Achievements() {
  return (
    <section id="achievements" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading eyebrow="Thành tựu" title="Tự học, tự làm, tự đo lường kết quả." />
        </Reveal>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ink/10 bg-oat-card/50 p-8 sm:p-10">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime text-on-accent">
                  <Music2 size={26} strokeWidth={2.4} />
                </span>
                <div>
                  <div className="text-xs font-black uppercase tracking-[0.2em] text-ink-soft">
                    {achievement.year}
                  </div>
                  <div className="text-xl font-black">{achievement.title}</div>
                </div>
              </div>

              <ul className="mt-7 space-y-4">
                {achievement.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-3 text-sm leading-relaxed text-ink-soft sm:text-base"
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
                  alt="Minh họa mạng xã hội"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -rotate-3 rounded-2xl border border-lime/25 bg-dark-2 px-5 py-3 text-cream shadow-lg">
                <div className="text-xl font-black leading-none text-lime">1.000+</div>
                <div className="mt-1 text-[11px] font-semibold">followers tự xây dựng</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
