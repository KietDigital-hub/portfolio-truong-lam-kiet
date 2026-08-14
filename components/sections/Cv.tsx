"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CV_PDF = "/cv/CV-Truong-Lam-Kiet.pdf";
/** Ảnh render sẵn từ chính file PDF trên (pdfjs, scale 2.2) - hiển thị được ở
 *  mọi trình duyệt, kể cả di động vốn không nhúng được PDF. */
const CV_IMAGE = "/cv/cv-page-1.png";

export function Cv() {
  const reduced = useReducedMotion();

  return (
    <section id="cv" className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title={
              <>
                My <span className="text-lime [-webkit-text-stroke:2px_var(--color-ink)]">full</span> CV
              </>
            }
            description="The latest PDF - read it right here or download a copy."
          />
        </Reveal>

        {/* Hiệu ứng: mờ nhòe rồi nét dần khi cuộn tới */}
        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, filter: "blur(18px)", scale: 0.97 }}
          whileInView={reduced ? { opacity: 1 } : { opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: reduced ? 0.4 : 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border-[3px] border-ink bg-white shadow-[0_30px_70px_-45px_rgba(0,0,0,0.5)]"
        >
          <Image
            src={CV_IMAGE}
            alt="Truong Lam Kiet CV - Digital Marketing"
            width={1312}
            height={1855}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full"
            priority={false}
          />
        </motion.div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={CV_PDF}
              download
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-lime px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              <Download size={16} /> Download CV (PDF)
            </a>
            <a
              href={CV_PDF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-[3px] border-ink bg-white px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-lime"
            >
              <ExternalLink size={16} /> Open the PDF
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
