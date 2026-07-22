import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-on-dark" | "dark";
  className?: string;
};

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5";

const variants = {
  primary: "bg-lime text-ink hover:shadow-[0_10px_24px_-8px_rgba(234,255,0,0.7)]",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-oat",
  "outline-on-dark": "border-2 border-cream/35 text-cream hover:bg-cream hover:text-ink",
  dark: "bg-dark text-cream hover:shadow-[0_10px_24px_-8px_rgba(0,0,0,0.5)]",
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto");
  const classes = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
