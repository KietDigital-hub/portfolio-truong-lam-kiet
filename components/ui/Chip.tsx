export function Chip({ children, dark = false }: { children: string; dark?: boolean }) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
        dark ? "bg-cream/10 text-cream/85" : "border-2 border-ink bg-white text-ink"
      }`}
    >
      {children}
    </span>
  );
}
