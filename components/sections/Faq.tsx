"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/profile";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 top-0 select-none text-[16rem] font-black uppercase leading-none text-ink/[0.04] sm:text-[22rem]"
      >
        K
      </div>

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Nhà tuyển dụng hay hỏi gì?" />
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.q} delay={(i % 4) * 0.05} className={i === faqs.length - 1 ? "sm:col-span-2" : ""}>
                <div className="h-full overflow-hidden rounded-2xl border border-ink/10 bg-oat-card/40">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-bold">{item.q}</span>
                    <span
                      className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/5 transition-transform duration-300 ${
                        isOpen ? "rotate-45 bg-lime" : ""
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
