/**
 * Dữ liệu KHÔNG phụ thuộc ngôn ngữ (liên hệ, link, bộ công cụ).
 * Toàn bộ phần chữ hiển thị đã chuyển sang `lib/content/en.ts` + `lib/content/vi.ts`,
 * đọc qua hook `useT()` trong `lib/i18n.tsx`.
 */
export const contact = {
  phone: "0342445759",
  zalo: "0342445759",
  email: "kiettruong086@gmail.com",
  facebook: "facebook.com/kiett856",
  facebookUrl: "https://facebook.com/kiett856",
  behance: "behance.net/KietDigital",
  behanceUrl: "https://www.behance.net/KietDigital",
};

/** 10 công cụ xếp hình chữ "M" trong section Skills - chỉ hiện logo + tên nên không cần dịch. */
export const tools = [
  { name: "ChatGPT", image: "/images/tools/chatgpt.png" },
  { name: "Claude", image: "/images/tools/claude.png" },
  { name: "Claude Code", image: "/images/tools/claude-code.png" },
  { name: "OpenClaw", image: "/images/tools/openclaw.png" },
  { name: "n8n", image: "/images/tools/n8n.png" },
  { name: "Magnific", image: "/images/tools/magnific.png" },
  { name: "Seedance 2.0", image: "/images/tools/seedance.png" },
  { name: "CapCut", image: "/images/tools/capcut.png" },
  { name: "Facebook Ads", image: "/images/tools/fb-ads.png" },
  { name: "Google Ads", image: "/images/tools/gg-ads.png" },
];
