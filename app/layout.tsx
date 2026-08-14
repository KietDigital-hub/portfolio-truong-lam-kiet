import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
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
  title: "Trương Lâm Kiệt · Digital Marketing",
  description:
    "Portfolio của Trương Lâm Kiệt - sinh viên năm cuối Digital Marketing, Đại học Văn Lang. Thực tập sinh SEO, thành thạo quảng cáo đa nền tảng, content chuẩn SEO và quản trị WordPress.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${bricolage.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-oat text-ink">
        <AuroraBackground />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
