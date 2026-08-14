import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { KetNoiContent } from "./KetNoiContent";

export const metadata: Metadata = {
  title: "Connect · Truong Lam Kiet",
  description:
    "Every social account of Truong Lam Kiet in one place: Beacons link in bio, Behance, Facebook, TikTok, Instagram, Threads, X, Telegram, LinkedIn, GitHub, Reddit, Discord, Spotify, Steam and PayPal.",
};

export default function KetNoiPage() {
  return (
    <>
      <main className="flex-1">
        <KetNoiContent />
      </main>
      <Footer withSidebar={false} />
    </>
  );
}
