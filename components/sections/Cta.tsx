import { Mail, Phone } from "lucide-react";
import { profile } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-8 py-16 text-center text-cream sm:px-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -right-10 select-none text-[14rem] font-black uppercase leading-none text-cream/5"
            >
              Kiet
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cream/70">
              Ready to start
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-black leading-[1.05] sm:text-5xl">
              Want to build something with AI?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-cream/70">
              I'm looking for a Digital Marketing internship or full-time role where I can put AI
              to work on real campaigns. I'd love to talk.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${profile.email}`} variant="primary">
                <Mail size={16} /> Send an email
              </Button>
              <Button href={`tel:${profile.phone}`} variant="outline-on-dark">
                <Phone size={16} /> {profile.phone}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
