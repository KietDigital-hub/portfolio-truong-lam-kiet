"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Mail } from "lucide-react";
import { navLinks, profile } from "@/lib/profile";

export function Sidebar() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("#home");

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
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
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
          className="fixed left-6 top-6 z-40 hidden w-64 flex-col gap-4 lg:flex"
        >
          <div className="rounded-2xl border border-ink/10 bg-oat-card/80 p-5 backdrop-blur-sm">
            <div className="text-lg font-black uppercase tracking-wide">
              Kiệt<span className="text-lime">.</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-soft">{profile.heroDescription}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 rounded-2xl border border-ink/10 bg-oat-card/80 p-4 text-center backdrop-blur-sm">
            <div>
              <div className="text-xl font-black text-lime">3</div>
              <div className="text-[10px] font-bold uppercase tracking-wide text-ink-soft">Nền tảng Ads</div>
            </div>
            <div>
              <div className="text-xl font-black text-lime">1.000+</div>
              <div className="text-[10px] font-bold uppercase tracking-wide text-ink-soft">TikTok</div>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5 rounded-2xl border border-ink/10 bg-oat-card/80 p-2 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-colors ${
                  active === link.href ? "bg-lime text-on-accent" : "text-ink-soft hover:bg-ink/5 hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-oat-card/80 px-4 py-3 text-xs font-semibold text-ink-soft backdrop-blur-sm hover:text-ink"
          >
            <Mail size={14} /> {profile.email}
          </a>

          <Link
            href="#contact"
            className="rounded-2xl bg-lime px-4 py-3 text-center text-sm font-bold text-on-accent transition-transform hover:-translate-y-0.5"
          >
            Liên hệ ngay
          </Link>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
