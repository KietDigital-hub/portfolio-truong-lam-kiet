import Image from "next/image";
import { skills, tools } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Chip } from "@/components/ui/Chip";
import { Tilt3D } from "@/components/ui/Tilt3D";

export function Skills() {
  return (
    <section id="skills" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Panel riêng: nền nen2.png (bộ công cụ) + khung lime, giống panel Mục tiêu */}
        <div className="relative isolate overflow-hidden rounded-[2.5rem] border-[3px] border-lime bg-dark px-5 py-16 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)] sm:px-10 sm:py-20">
          <div aria-hidden className="absolute inset-0 -z-10">
            <Image
              src="/images/nen2.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 1100px"
              className="object-cover object-center opacity-40 blur-[3px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/85 to-dark" />
          </div>

          <Reveal>
            <SectionHeading
              dark
              eyebrow="Kỹ năng & Công cụ"
              title="Công cụ mình dùng để chạy một chiến dịch."
              description="Kết hợp quảng cáo, nội dung, SEO và một bộ công cụ AI để triển khai chiến dịch từ đầu đến cuối."
            />
          </Reveal>

          {/* Bộ công cụ: logo tách từ chính ảnh nền, ghép cạnh tên và mô tả */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool, i) => (
              <Reveal key={tool.name} delay={(i % 3) * 0.06} className="h-full">
                <div className="group flex h-full items-start gap-4 rounded-2xl border border-cream/12 bg-cream/[0.04] p-4 backdrop-blur-sm transition-colors duration-300 hover:border-lime/60 hover:bg-cream/[0.08]">
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-1 ring-cream/15 transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-black text-cream">{tool.name}</span>
                      <span className="rounded-full border border-lime/40 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-lime">
                        {tool.group}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-cream/65">{tool.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 6 nhóm kỹ năng */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <Reveal key={skill.title} delay={(i % 3) * 0.08} className="h-full">
                <Tilt3D className="h-full rounded-3xl">
                  <div className="flex h-full flex-col rounded-3xl border border-cream/15 bg-oat-card/92 p-7 shadow-xl">
                    <IconBadge icon={skill.icon} />
                    <h3 className="mt-5 text-lg font-black">{skill.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                      {skill.description}
                    </p>
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
      </div>
    </section>
  );
}
