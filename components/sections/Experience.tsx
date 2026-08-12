import Image from "next/image";
import { Briefcase, CheckCircle2, ExternalLink } from "lucide-react";
import { experience } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-oat-card/60">
              <div className="relative h-36 w-full">
                <Image
                  src="/images/deco-content.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-oat-card via-oat-card/40 to-transparent" />
                <span className="absolute right-5 top-5 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
                  Đang diễn ra
                </span>
              </div>

              <div className="p-8 pt-2">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-lime">
                  <Briefcase size={22} strokeWidth={2.4} />
                </span>
                <h3 className="mt-5 text-2xl font-black leading-snug">{experience.role}</h3>
                <a
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold underline underline-offset-4"
                >
                  {experience.company}
                  <ExternalLink size={14} strokeWidth={2.6} />
                </a>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-ink-soft">
                  {experience.period}
                </p>

                <div className="mt-7 border-t border-ink/10 pt-5">
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-ink-soft">
                    KPI được giao
                  </span>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {experience.kpis.map((kpi) => (
                      <span
                        key={kpi}
                        className="rounded-full border border-ink/15 bg-lime/70 px-3 py-1 text-xs font-bold text-ink"
                      >
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="h-full rounded-3xl border border-ink/10 bg-oat-card/50 p-8 sm:p-10">
              <span className="text-[10px] font-black uppercase tracking-[0.22em] text-ink-soft">
                Công việc phụ trách
              </span>
              <ul className="mt-5 space-y-4">
                {experience.tasks.map((task) => (
                  <li key={task} className="flex gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-ink" />
                    <span className="text-sm leading-relaxed text-ink-soft sm:text-[15px]">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-7 rounded-2xl border-l-4 border-lime bg-oat-card-2/60 px-5 py-4 text-sm leading-relaxed text-ink">
                <span className="block text-[10px] font-black uppercase tracking-[0.22em] text-ink-soft">
                  Điều rút ra
                </span>
                <span className="mt-1.5 block">
                  Làm SEO không dừng ở viết bài - phải hiểu cấu trúc nội dung của cả website, biết
                  bài nào nuôi bài nào, và đo được việc mình làm bằng chỉ tiêu cụ thể mỗi tuần.
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
