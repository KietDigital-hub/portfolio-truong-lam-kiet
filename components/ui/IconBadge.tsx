import {
  Megaphone,
  Search,
  Sparkles,
  Globe,
  Share2,
  Palette,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  search: Search,
  sparkles: Sparkles,
  globe: Globe,
  share: Share2,
  palette: Palette,
  workflow: Workflow,
};

export function IconBadge({ icon, dark = false }: { icon: string; dark?: boolean }) {
  const Icon = ICONS[icon] ?? Sparkles;
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${
        dark ? "bg-lime text-ink" : "bg-lime text-ink"
      }`}
    >
      <Icon size={20} strokeWidth={2.4} />
    </span>
  );
}
