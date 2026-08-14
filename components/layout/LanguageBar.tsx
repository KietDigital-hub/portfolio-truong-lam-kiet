"use client";

import { Globe } from "lucide-react";
import { LANGS, dictionaries, useLanguage } from "@/lib/i18n";

/**
 * Thanh đầu trang chuyển ngôn ngữ cho TOÀN BỘ portfolio.
 * Sticky ở đầu tài liệu (nằm trong luồng) nên đẩy nội dung xuống thay vì đè lên -
 * vì vậy Navbar của Hero phải dùng `top-11` và Sidebar dùng `top-16` để không chui xuống dưới.
 */
export function LanguageBar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="sticky top-0 z-[60] border-b border-cream/10 bg-ink text-cream">
      <div className="mx-auto flex h-11 max-w-7xl items-center justify-between gap-4 px-4 sm:px-8">
        <span className="flex items-center gap-2 truncate text-[11px] font-bold uppercase tracking-[0.18em] text-cream/60">
          <Globe size={13} strokeWidth={2.6} className="shrink-0 text-lime" />
          <span className="truncate">{t.nav.switchLabel}</span>
        </span>

        <div
          role="group"
          aria-label={t.nav.switchLabel}
          className="flex items-center gap-1 rounded-full border border-cream/20 p-1"
        >
          {LANGS.map((code) => {
            const active = code === lang;
            return (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={active}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-colors sm:px-4 ${
                  active
                    ? "bg-lime text-ink"
                    : "text-cream/70 hover:bg-cream/10 hover:text-cream"
                }`}
              >
                <span className="hidden sm:inline">{dictionaries[code].langName}</span>
                <span className="sm:hidden">{dictionaries[code].langShort}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
