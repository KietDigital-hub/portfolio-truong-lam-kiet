"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { contact } from "@/lib/profile";
import { useT } from "@/lib/i18n";

/** Danh sách anchor cố định cho scroll-spy - không đổi theo ngôn ngữ nên để ngoài component. */
const SECTION_HREFS = [
  "#home",
  "#about",
  "#skills",
  "#experience",
  "#ai-project",
  "#cv",
  "#connect",
];

export function Sidebar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("#home");
  const t = useT();
  const navLinks = t.nav.links;

  useEffect(() => {
    const hero = document.querySelector("#home");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = SECTION_HREFS
      .map((href) => document.querySelector(href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.aside
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-6 top-16 z-40 hidden w-64 flex-col gap-4 lg:flex"
        >
          <div className="rounded-2xl border-[3px] border-ink bg-white p-5">
            <div className="text-lg font-black uppercase tracking-wide">
              Kiet<span className="text-lime">.</span>
            </div>
            <p className="mt-2 text-xs font-medium leading-relaxed text-ink">
              {t.profile.heroDescription}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 rounded-2xl border-[3px] border-ink bg-white p-4 text-center">
            <div>
              <div className="text-xl font-black text-lime [-webkit-text-stroke:1px_var(--color-ink)]">8</div>
              <div className="text-[10px] font-bold uppercase tracking-wide text-ink">
                {t.sidebar.statTools}
              </div>
            </div>
            <div>
              <div className="text-xl font-black text-lime [-webkit-text-stroke:1px_var(--color-ink)]">3</div>
              <div className="text-[10px] font-bold uppercase tracking-wide text-ink">
                {t.sidebar.statAgents}
              </div>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5 rounded-2xl border-[3px] border-ink bg-white p-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  active === link.href ? "bg-lime text-ink" : "text-ink hover:bg-ink/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2 rounded-2xl border-[3px] border-ink bg-white px-4 py-3 text-xs font-bold text-ink hover:bg-lime"
          >
            <Mail size={14} /> {contact.email}
          </a>

          <Link
            href="#contact"
            className="rounded-2xl bg-ink px-4 py-3 text-center text-sm font-bold text-oat transition-transform hover:-translate-y-0.5"
          >
            {t.sidebar.cta}
          </Link>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
