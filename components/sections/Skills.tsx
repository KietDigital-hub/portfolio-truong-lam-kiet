import { skills } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Chip } from "@/components/ui/Chip";

export function Skills() {
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

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal key={skill.title} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-ink/10 bg-oat-card/50 p-7">
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
