"use client";

import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialGrid } from "@/components/sections/SocialGrid";
import { LinkBioCard } from "@/components/sections/LinkBioCard";
import { contact } from "@/lib/profile";
import { useT } from "@/lib/i18n";

export function Connect() {
  const t = useT();

  return (
    <section id="connect" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.connect.eyebrow}
            title={
              <>
                {t.connect.titleBefore}
                <span className="text-lime [-webkit-text-stroke:2px_var(--color-ink)]">
                  {t.connect.titleAccent}
                </span>
              </>
            }
            description={t.connect.description}
          />
        </Reveal>

        <div className="mt-12">
          <LinkBioCard />
        </div>

        <div className="mt-6">
          <SocialGrid />
        </div>

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
    </section>
  );
}
