import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque, Be_Vietnam_Pro } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CursorGlow } from "@/components/ui/CursorGlow";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { SiteBackground } from "@/components/ui/SiteBackground";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin", "vietnamese"],
});

// Font riêng cho các khối chữ callout (NoteText) - đã kiểm tra hỗ trợ đủ dấu tiếng Việt
const beVietnam = Be_Vietnam_Pro({
  variable: "--font-bevietnam",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
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
    <html
      lang="vi"
      className={`${inter.variable} ${bricolage.variable} ${beVietnam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-oat text-ink">
        <SiteBackground />
        <AuroraBackground />
        <ScrollProgress />
        <CursorGlow />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
