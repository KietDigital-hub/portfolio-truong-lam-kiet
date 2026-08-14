"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useLanguage, dictionaries, LANGS, type Lang } from "@/lib/i18n";

/**
 * Hai bản CV thật, sinh bằng `node scripts/cv/build-cv.js`.
 * Ảnh PNG là bản render của chính file PDF cùng ngôn ngữ - dùng để xem trên web
 * vì di động không nhúng được PDF.
 */
const CV_FILES: Record<Lang, { pdf: string; image: string }> = {
  vi: {
    pdf: "/cv/CV-Truong-Lam-Kiet-VI.pdf",
    image: "/cv/cv-vi-page-1.png",
  },
  en: {
    pdf: "/cv/CV-Truong-Lam-Kiet-EN.pdf",
    image: "/cv/cv-en-page-1.png",
  },
};

export function Cv() {
  const reduced = useReducedMotion();
  const { lang, t } = useLanguage();
  // Bản CV đang xem mặc định theo ngôn ngữ site, nhưng vẫn đổi riêng được
  // (nhà tuyển dụng nước ngoài có thể muốn xem bản tiếng Việt và ngược lại).
  // Đổi ngôn ngữ site thì kéo tab CV về theo - dùng cách "chỉnh state khi render"
  // của React thay vì useEffect, tránh render thừa một vòng.
  const [cvLang, setCvLang] = useState<Lang>(lang);
  const [prevLang, setPrevLang] = useState<Lang>(lang);
  if (prevLang !== lang) {
    setPrevLang(lang);
    setCvLang(lang);
  }

  const file = CV_FILES[cvLang];

  return (
    <section id="cv" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow={t.cv.eyebrow}
            title={
              <>
                {t.cv.titleBefore}
                <span className="text-lime [-webkit-text-stroke:2px_var(--color-ink)]">
                  {t.cv.titleAccent}
                </span>
                {t.cv.titleAfter}
              </>
            }
            description={t.cv.description}
          />
        </Reveal>

        {/* Hai trường CV: Tiếng Việt / English */}
        <Reveal delay={0.05}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-ink-soft">
              {t.cv.versionLabel}
            </span>
            <div
              role="group"
              aria-label={t.cv.versionLabel}
              className="flex items-center gap-1 rounded-full border-[3px] border-ink bg-white p-1"
            >
              {LANGS.map((code) => {
                const active = code === cvLang;
                return (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setCvLang(code)}
                    aria-pressed={active}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      active ? "bg-lime text-ink" : "text-ink hover:bg-ink/5"
                    }`}
                  >
                    {dictionaries[code].langName}
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Hiệu ứng: mờ nhòe rồi nét dần khi cuộn tới / khi đổi bản CV */}
        <div className="mx-auto mt-8 max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={cvLang}
              initial={
                reduced ? { opacity: 0 } : { opacity: 0, filter: "blur(18px)", scale: 0.97 }
              }
              whileInView={
                reduced ? { opacity: 1 } : { opacity: 1, filter: "blur(0px)", scale: 1 }
              }
              exit={{ opacity: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: reduced ? 0.4 : 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl border-[3px] border-ink bg-white shadow-[0_30px_70px_-45px_rgba(0,0,0,0.5)]"
            >
              <Image
                src={file.image}
                alt={t.cv.alt}
                width={1588}
                height={2246}
                sizes="(max-width: 768px) 100vw, 768px"
                className="h-auto w-full"
                priority={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={file.pdf}
              download
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-lime px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} /> {t.cv.download} · {dictionaries[cvLang].langShort}
            </a>
            <a
              href={file.pdf}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-lime"
            >
              <ExternalLink size={16} /> {t.cv.open}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
