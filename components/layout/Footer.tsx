import Link from "next/link";
import { Mail, Phone, Link2 } from "lucide-react";
import { profile } from "@/lib/profile";

/** `withSidebar` = trang có Sidebar cố định bên trái nên cần chừa chỗ (lg:pl-80). */
export function Footer({ withSidebar = true }: { withSidebar?: boolean }) {
  return (
    <footer
      className={`bg-dark px-5 py-14 text-cream sm:px-8 ${withSidebar ? "lg:pl-80" : ""}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-2xl font-black">
            {profile.name}
            <span className="text-lime">.</span>
          </div>
          <p className="mt-2 max-w-sm text-sm text-cream/60">
            {profile.roleShort} · {profile.school}
          </p>
        </div>

        <div className="flex flex-wrap gap-3 text-sm font-semibold">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 hover:border-lime hover:text-lime"
          >
            <Mail size={16} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 hover:border-lime hover:text-lime"
          >
            <Phone size={16} /> {profile.phone}
          </a>
          <Link
            href="/ket-noi"
            className="inline-flex items-center gap-2 rounded-full border border-cream/15 px-4 py-2 hover:border-lime hover:text-lime"
          >
            <Link2 size={16} /> All channels
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-cream/10 pt-6 text-xs text-cream/40">
        © {new Date().getFullYear()} {profile.name}. Personal portfolio.
      </div>
    </footer>
  );
}
