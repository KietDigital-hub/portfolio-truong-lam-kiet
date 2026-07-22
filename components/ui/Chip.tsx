export function Chip({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        dark ? "bg-cream/10 text-cream/85" : "bg-oat-card-2/60 text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}
