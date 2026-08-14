"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { en, type SiteContent } from "./content/en";
import { vi } from "./content/vi";

export type Lang = "en" | "vi";

export const dictionaries: Record<Lang, SiteContent> = { en, vi };

/** Thứ tự hiện trên thanh chuyển ngữ */
export const LANGS: Lang[] = ["vi", "en"];

/**
 * Ngôn ngữ dùng khi render phía server. Phải là hằng số để markup SSR ổn định -
 * lựa chọn thật của người dùng được áp ngay sau khi hydrate.
 */
export const DEFAULT_LANG: Lang = "en";

const STORAGE_KEY = "kiet-portfolio-lang";

function isLang(value: unknown): value is Lang {
  return value === "en" || value === "vi";
}

/* ------------------------------------------------------------------ *
 * Store ngoài React (useSyncExternalStore) - tránh setState trong effect.
 * ------------------------------------------------------------------ */

let current: Lang | null = null;
const listeners = new Set<() => void>();

/** Lần đầu: ưu tiên lựa chọn đã lưu, chưa có thì đoán theo ngôn ngữ trình duyệt. */
function resolveInitial(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) return saved;
    if (navigator.language?.toLowerCase().startsWith("vi")) return "vi";
  } catch {
    // localStorage bị chặn (chế độ riêng tư) - dùng mặc định
  }
  return DEFAULT_LANG;
}

function getSnapshot(): Lang {
  if (current === null) current = resolveInitial();
  return current;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function writeLang(next: Lang) {
  if (current === next) return;
  current = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // bỏ qua nếu không ghi được
  }
  listeners.forEach((l) => l());
}

/* ------------------------------------------------------------------ */

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: SiteContent;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Đồng bộ <html lang>, tiêu đề tab và meta description theo ngôn ngữ đang chọn.
  // Title/description phải ghi SAU khi paint: Next tự áp lại metadata tĩnh trong
  // lần render kế tiếp, ghi ngay trong effect sẽ bị đè lại.
  useEffect(() => {
    const dict = dictionaries[lang];
    document.documentElement.lang = dict.htmlLang;

    const apply = () => {
      document.title = dict.meta.title;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", dict.meta.description);
    };
    const raf = requestAnimationFrame(apply);
    return () => cancelAnimationFrame(raf);
  }, [lang]);

  const setLang = useCallback((next: Lang) => writeLang(next), []);

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: dictionaries[lang] }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage phải nằm trong <LanguageProvider>");
  return ctx;
}

/** Shortcut khi chỉ cần từ điển */
export function useT(): SiteContent {
  return useLanguage().t;
}
