import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] ${
          dark ? "border-cream/25 text-cream/70" : "border-ink/20 text-ink-soft"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`mt-4 text-5xl font-black leading-[1.1] tracking-tight sm:text-6xl lg:text-7xl ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-cream/70" : "text-ink-soft"}`}>
          {description}
        </p>
      )}
    </div>
  );
}
