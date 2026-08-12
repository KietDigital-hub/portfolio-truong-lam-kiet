import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { profile } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function Cta() {
  return (
    <section id="contact" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border-[3px] border-lime bg-ink px-8 py-16 text-center text-cream sm:px-16">
            <div aria-hidden className="absolute inset-0 -z-10">
              <Image
                src="/images/nen3.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 1100px"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-ink/88" />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -right-10 select-none text-[14rem] font-black uppercase leading-none text-cream/5"
            >
              Kiệt
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cream/70">
              Sẵn sàng bắt đầu
            </span>

            <h2 className="mx-auto mt-6 max-w-2xl text-4xl font-black leading-[1.05] sm:text-5xl">
              Cùng chạy một chiến dịch nhé?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-cream/70">
              Mình đang tìm cơ hội thực tập/việc làm Digital Marketing để học hỏi và đóng góp thật
              sự. Rất mong được trò chuyện với bạn.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href={`mailto:${profile.email}`} variant="primary">
                <Mail size={16} /> Gửi email
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
