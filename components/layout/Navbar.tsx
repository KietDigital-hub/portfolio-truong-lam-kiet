"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const leftLinks = [
  { href: "#home", label: "Trang chủ" },
  { href: "#about", label: "Mục tiêu" },
  { href: "#skills", label: "Kỹ năng" },
];

const rightLinks = [
  { href: "#experience", label: "Kinh nghiệm" },
  { href: "#cv", label: "CV" },
  { href: "#connect", label: "Kết nối" },
  { href: "#contact", label: "Liên hệ" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      {/* Desktop: menu chia đôi trái/phải, wordmark hero nằm giữa phía sau */}
      <nav className="mx-auto hidden max-w-7xl items-center justify-between px-8 py-6 md:flex">
        <div className="flex items-center gap-7 text-sm font-bold uppercase tracking-wide">
          {leftLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-7">
              {i > 0 && <span className="text-ink/30">|</span>}
              <Link href={link.href} className="hover:opacity-60">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
        <div className="flex items-center gap-7 text-sm font-bold uppercase tracking-wide">
          {rightLinks.map((link, i) => (
            <span key={link.href} className="flex items-center gap-7">
              {i > 0 && <span className="text-ink/30">|</span>}
              <Link href={link.href} className="hover:opacity-60">
                {link.label}
              </Link>
            </span>
          ))}
        </div>
      </nav>

      {/* Mobile */}
      <nav className="flex items-center justify-between px-5 py-5 md:hidden">
        <Link href="#home" className="text-sm font-black uppercase tracking-widest">
          Kiệt<span className="text-lime brightness-75">.</span>
        </Link>
        <button
          aria-label="Mở menu"
          className="inline-flex items-center justify-center rounded-full border border-ink/20 bg-oat/70 p-2 backdrop-blur"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-5 rounded-2xl border border-ink/10 bg-oat/95 px-6 py-6 shadow-xl backdrop-blur md:hidden">
          <div className="flex flex-col gap-4 text-sm font-bold">
            {[...leftLinks, ...rightLinks].map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
