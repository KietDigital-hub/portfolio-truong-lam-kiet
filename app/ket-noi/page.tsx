import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialGrid } from "@/components/sections/SocialGrid";
import { profile } from "@/lib/profile";
import { socials } from "@/lib/socials";

export const metadata: Metadata = {
  title: "Kết nối · Trương Lâm Kiệt",
  description:
    "Toàn bộ tài khoản mạng xã hội của Trương Lâm Kiệt: Facebook, TikTok, Instagram, X, LinkedIn, GitHub, Reddit, Discord, Spotify và PayPal.",
};

export default function KetNoiPage() {
  return (
    <>
      <main className="flex-1">
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
                  <ArrowLeft size={16} /> Trang chủ
                </Link>
                <span className="text-sm font-black uppercase tracking-widest">
                  {profile.name}
                  <span className="text-lime brightness-75">.</span>
                </span>
              </div>
            </Reveal>

            <div className="mt-14">
              <Reveal>
                <SectionHeading
                  eyebrow="Kết nối"
                  title={
                    <>
                      Tìm mình ở <span className="text-lime [-webkit-text-stroke:2px_var(--color-ink)]">mọi nơi</span>
                    </>
                  }
                  description="Tất cả tài khoản chính chủ của mình gom về một chỗ - bấm vào logo là mở thẳng trang tương ứng. Nhanh nhất vẫn là nhắn Facebook hoặc gửi email."
                />
              </Reveal>

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

            <div className="mt-16">
              <SocialGrid />
            </div>

            <Reveal>
              <div className="mt-16 rounded-3xl border-[3px] border-ink bg-white p-8 text-center sm:p-12">
                <h3 className="text-3xl font-black leading-[1.1] sm:text-4xl">
                  {socials.length} kênh - cùng một người
                </h3>
                <p className="mx-auto mt-4 max-w-xl text-base font-medium leading-relaxed text-ink">
                  Mỗi kênh là một mảnh của cùng một câu chuyện: học Digital Marketing, làm SEO thật,
                  và tự tay dựng nội dung mỗi ngày. Nếu thấy hợp, đừng ngại nhắn cho mình.
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  <Link
                    href="/#experience"
                    className="rounded-full border-[3px] border-ink bg-lime px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
                  >
                    Xem kinh nghiệm
                  </Link>
                  <Link
                    href="/#contact"
                    className="rounded-full border-[3px] border-ink bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-lime"
                  >
                    Liên hệ ngay
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer withSidebar={false} />
    </>
  );
}
