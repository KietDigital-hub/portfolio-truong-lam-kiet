import { Mail, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialGrid } from "@/components/sections/SocialGrid";
import { profile } from "@/lib/profile";

export function Connect() {
  return (
    <section id="connect" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Connect"
            title={
              <>
                Find me <span className="text-lime [-webkit-text-stroke:2px_var(--color-ink)]">everywhere</span>
              </>
            }
            description="Tap a logo to jump straight to that channel."
          />
        </Reveal>

        <div className="mt-12">
          <SocialGrid />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-ink px-5 py-3 text-sm font-bold text-oat transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} /> {profile.email}
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-5 py-3 text-sm font-bold text-ink transition-colors hover:bg-lime"
            >
              <Phone size={16} /> {profile.phone} (Zalo)
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
