import { Sparkles } from "lucide-react";
import { skills, aiHighlights } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Chip } from "@/components/ui/Chip";
import { NoteText } from "@/components/ui/NoteText";
import { Tilt3D } from "@/components/ui/Tilt3D";

export function Skills() {
  const [aiSkill, ...rest] = skills;

  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Kỹ năng & Công cụ"
            title="Công cụ mình dùng để chạy một chiến dịch."
            description="Kết hợp quảng cáo, nội dung, SEO và công cụ AI để triển khai một chiến dịch marketing từ đầu đến cuối."
          />
        </Reveal>

        {/* Card AI nổi bật - thế mạnh chính */}
        <Reveal delay={0.06} className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-lime/35 bg-oat-card/60 p-8 shadow-[0_0_60px_-25px_rgba(58,165,255,0.8)] sm:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(58,165,255,0.35),transparent_65%)] blur-2xl"
            />

            <div className="relative grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-lime/40 bg-lime/10 px-3 py-1 font-callout text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
                  <Sparkles size={13} strokeWidth={2.8} />
                  Thế mạnh nổi bật
                </span>
                <h3 className="mt-4 text-3xl font-black leading-[1.1] sm:text-4xl">
                  {aiSkill.title}
                </h3>
                <NoteText className="mt-5">{aiSkill.description}</NoteText>
                <div className="mt-5 flex flex-wrap gap-2">
                  {aiSkill.chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 font-callout text-xs font-semibold text-lime"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-4">
                {aiHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-ink/12 bg-dark-2/50 p-5 transition-colors duration-300 hover:border-lime/40"
                  >
                    <div className="font-callout text-sm font-bold text-ink">{item.title}</div>
                    <p className="mt-1.5 font-callout text-[13px] leading-relaxed text-ink-soft">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((skill, i) => (
            <Reveal key={skill.title} delay={(i % 3) * 0.08} className="h-full">
              <Tilt3D className="h-full rounded-3xl">
                <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-oat-card/50 p-7">
                  <IconBadge icon={skill.icon} />
                  <h3 className="mt-5 text-lg font-black">{skill.title}</h3>
                  <NoteText tone="soft" className="mt-3 flex-1">
                    {skill.description}
                  </NoteText>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skill.chips.map((chip) => (
                      <Chip key={chip}>{chip}</Chip>
                    ))}
                  </div>
                </div>
              </Tilt3D>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
