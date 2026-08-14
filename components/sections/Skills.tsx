"use client";

import Image from "next/image";
import { tools } from "@/lib/profile";
import { useT } from "@/lib/i18n";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IconBadge } from "@/components/ui/IconBadge";
import { Chip } from "@/components/ui/Chip";
import { Tilt3D } from "@/components/ui/Tilt3D";

/**
 * Bộ 10 công cụ xếp thành hình chữ "M" trên desktop (lưới 7 cột x 3 dòng).
 * Cột 1 và 7 là hai nét dọc, (2,2)->(3,3) và (6,2)->(5,3) là hai nét chéo
 * chụm xuống giữa:
 *
 *   X . . . . . X
 *   X X . . . X X
 *   X . X . X . X
 *
 * Các class phải viết nguyên chuỗi (không ghép động) để Tailwind quét ra được.
 * Dưới lg thì bỏ toạ độ, rơi về lưới 2/3 cột thường cho mobile.
 */
const M_POSITIONS = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-7 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-2 lg:row-start-2",
  "lg:col-start-6 lg:row-start-2",
  "lg:col-start-7 lg:row-start-2",
  "lg:col-start-1 lg:row-start-3",
  "lg:col-start-3 lg:row-start-3",
  "lg:col-start-5 lg:row-start-3",
  "lg:col-start-7 lg:row-start-3",
];

export function Skills() {
  const t = useT();

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
              eyebrow={t.skillsSection.eyebrow}
              title={t.skillsSection.title}
              description={t.skillsSection.description}
            />
          </Reveal>

          {/* Bộ công cụ xếp hình chữ M - chỉ logo + tên, không mô tả */}
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7 lg:gap-4">
            {tools.map((tool, i) => (
              <Reveal
                key={tool.name}
                delay={(i % 4) * 0.07}
                className={`h-full ${M_POSITIONS[i]}`}
              >
                <div className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-cream/12 bg-cream/[0.04] px-3 py-5 text-center backdrop-blur-sm transition-colors duration-300 hover:border-lime/60 hover:bg-cream/[0.08]">
                  <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl ring-1 ring-cream/15 transition-transform duration-300 group-hover:scale-110">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </span>
                  <span className="text-[13px] font-black leading-tight text-cream">
                    {tool.name}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 6 nhóm kỹ năng */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.map((skill, i) => (
              <Reveal key={skill.title} delay={(i % 3) * 0.08} className="h-full">
                <Tilt3D className="h-full rounded-3xl">
                  <div className="flex h-full flex-col rounded-3xl border-[3px] border-ink bg-white p-7 shadow-xl">
                    <IconBadge icon={skill.icon} />
                    <h3 className="mt-5 text-lg font-black">{skill.title}</h3>
                    <p className="mt-2 flex-1 text-sm font-medium leading-relaxed text-ink">
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
