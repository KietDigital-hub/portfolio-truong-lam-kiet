import type { ReactNode } from "react";

/**
 * Khối chữ có viền màu + font riêng (Be Vietnam Pro), dùng cho các đoạn mô tả
 * thay vì để text trần. Có 2 tông: accent (xanh điện) và soft (viền mờ).
 */
export function NoteText({
  children,
  tone = "accent",
  label,
  className = "",
}: {
  children: ReactNode;
  tone?: "accent" | "soft";
  label?: string;
  className?: string;
}) {
  const toneClass =
    tone === "accent"
      ? "border-lime/35 bg-lime/[0.07] text-ink/90"
      : "border-ink/15 bg-ink/[0.04] text-ink-soft";

  return (
    <div
      className={`rounded-2xl border-l-[3px] border border-l-lime ${toneClass} px-5 py-4 ${className}`}
    >
      {label && (
        <span className="mb-1.5 block font-callout text-[10px] font-bold uppercase tracking-[0.22em] text-lime">
          {label}
        </span>
      )}
      <p className="font-callout text-[13.5px] font-medium leading-relaxed tracking-[0.01em] sm:text-sm">
        {children}
      </p>
    </div>
  );
}
