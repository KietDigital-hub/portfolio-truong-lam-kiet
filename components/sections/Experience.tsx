import { Briefcase, CheckCircle2, ExternalLink } from "lucide-react";
import { experience } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NoteText } from "@/components/ui/NoteText";

export function Experience() {
  return (
    <section id="experience" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Kinh nghiệm làm việc"
            title="Ba tháng làm SEO thật, tại doanh nghiệp thật."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-lime/25 bg-oat-card/60 p-8">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime text-on-accent">
                  <Briefcase size={26} strokeWidth={2.4} />
                </span>
                <span className="rounded-full border border-lime/40 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-lime">
                  Đang diễn ra
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-black leading-snug">{experience.role}</h3>
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-lime hover:underline"
              >
                {experience.company}
                <ExternalLink size={14} strokeWidth={2.6} />
              </a>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                {experience.period}
              </p>

              <div className="mt-7 border-t border-ink/10 pt-5">
                <span className="font-callout text-[10px] font-bold uppercase tracking-[0.22em] text-ink-soft">
                  KPI được giao
                </span>
                <div className="mt-3 flex flex-wrap gap-2">
                  {experience.kpis.map((kpi) => (
                    <span
                      key={kpi}
                      className="rounded-full border border-lime/30 bg-lime/10 px-3 py-1 text-xs font-bold text-lime"
                    >
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-3xl border border-ink/10 bg-oat-card/40 p-8">
              <span className="font-callout text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
                Công việc phụ trách
              </span>
              <ul className="mt-5 space-y-4">
                {experience.tasks.map((task) => (
                  <li key={task} className="flex gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-lime" />
                    <span className="text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>

              <NoteText className="mt-7" label="Điều rút ra">
                Làm SEO không dừng ở viết bài - phải hiểu cấu trúc nội dung của cả website, biết bài
                nào nuôi bài nào, và đo được việc mình làm bằng chỉ tiêu cụ thể mỗi tuần.
              </NoteText>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
