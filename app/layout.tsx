import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

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
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
