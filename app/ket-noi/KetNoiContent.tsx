"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialGrid } from "@/components/sections/SocialGrid";
import { LinkBioCard } from "@/components/sections/LinkBioCard";
import { contact } from "@/lib/profile";
import { socials } from "@/lib/socials";
import { useT } from "@/lib/i18n";

export function KetNoiContent() {
  const t = useT();
  const c = t.connect;
  const count = String(socials.length);

  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-8 sm:px-8">
      {/* Chữ nền khổng lồ - để không dấu, tránh dấu tiếng Việt lơ lửng ở size lớn */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -z-10 hidden -translate-x-1/2 select-none text-[20vw] font-black leading-none tracking-tighter text-lime opacity-60 lg:block"
      >
        SOCIALS
      </span>

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-4 py-2 text-sm font-bold text-ink transition-colors hover:bg-lime"
            >
              <ArrowLeft size={16} /> {c.home}
            </Link>
            <span className="text-sm font-black uppercase tracking-widest">
              {t.profile.name}
              <span className="text-lime brightness-75">.</span>
            </span>
          </div>
        </Reveal>

        <div className="mt-14">
          <Reveal>
            <SectionHeading
              eyebrow={c.eyebrow}
              title={
                <>
                  {c.titleBefore}
                  <span className="text-lime [-webkit-text-stroke:2px_var(--color-ink)]">
                    {c.titleAccent}
                  </span>
                </>
              }
              description={c.pageDescription}
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-ink px-5 py-3 text-sm font-bold text-oat transition-transform hover:-translate-y-0.5"
              >
                <Mail size={16} /> {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-lime"
              >
                <Phone size={16} /> {contact.phone} (Zalo)
              </a>
            </div>
          </Reveal>
        </div>

        <div className="mt-16">
          <LinkBioCard />
        </div>

        <div className="mt-6">
          <SocialGrid />
        </div>

        <Reveal>
          <div className="mt-16 rounded-3xl border-[3px] border-ink bg-white p-8 text-center sm:p-12">
            <h3 className="text-3xl font-black leading-[1.1] sm:text-4xl">
              {c.outroTitle.replace("{count}", count)}
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-ink">
              {c.outroText}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/#experience"
                className="rounded-full border-[3px] border-ink bg-lime px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
              >
                {c.outroExperience}
              </Link>
              <Link
                href="/#contact"
                className="rounded-full border-[3px] border-ink bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-lime"
              >
                {c.outroContact}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
