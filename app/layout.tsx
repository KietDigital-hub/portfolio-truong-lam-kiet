import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { LanguageProvider } from "@/lib/i18n";
import { LanguageBar } from "@/components/layout/LanguageBar";
import "./globals.css";
// CSS khuyến nghị của Lenis (ép html/body về height:auto, xử lý [data-lenis-prevent]...).
// Thiếu file này thì `h-full` trên <html> làm Lenis tính sai chiều cao và cuộn bị kẹt.
import "lenis/dist/lenis.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Truong Lam Kiet · Digital Marketing",
  description:
    "Portfolio of Truong Lam Kiet - final-year Digital Marketing student at Van Lang University. SEO intern focused on applied AI: agent workflows, automation and AI-assisted web design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-oat text-ink">
        <LanguageProvider>
          <AuroraBackground />
          <ScrollProgress />
          <CursorGlow />
          <LanguageBar />
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
