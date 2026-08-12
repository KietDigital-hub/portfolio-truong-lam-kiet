export function StatBadge({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-cream/10 bg-ink/80 px-5 py-3 text-cream shadow-lg backdrop-blur-sm">
      <div className="font-black text-2xl leading-none text-lime">{value}</div>
      <div className="mt-1 text-xs font-semibold leading-snug text-cream/85">{label}</div>
    </div>
  );
}
