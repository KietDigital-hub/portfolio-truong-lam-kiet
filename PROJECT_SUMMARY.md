# CLAUDE.md

Hướng dẫn cho Claude Code khi làm việc trong dự án này. File này là nguồn thông tin chính — đọc kỹ trước khi sửa gì, đặc biệt mục "Bài học / lỗi đã gặp" để không lặp lại lỗi cũ.

## Quy trình bắt buộc (không được bỏ qua)

1. **Sau mỗi thay đổi lớn** (thêm section mới, đổi layout, đổi màu/font...): chạy dev server, chụp screenshot trang đã build (dùng Playwright, xem cách trong mục "Bài học" bên dưới), so sánh trước khi báo hoàn thành.
2. **Mobile-friendly bắt buộc**: test mọi section ở viewport ~375px, không chỉ desktop.
3. **Animation on scroll bắt buộc**: mọi section phải có hiệu ứng reveal khi scroll vào viewport — không được để section nào xuất hiện "cứng" không animation.
4. **Sau khi sửa xong và deploy**: chạy `npm run build` phải sạch, rồi `git add -A && git commit && git push` (nhánh `main`, remote `origin` đã cấu hình sẵn) — Vercel tự động deploy lại, không cần làm gì thêm ở Vercel.

## Tổng quan dự án

Website portfolio cá nhân cho **Trương Lâm Kiệt** — sinh viên năm cuối ngành Digital Marketing, Trường Đại học Văn Lang, đang tìm cơ hội thực tập/việc làm full-time trong lĩnh vực Digital Marketing/SEO. Mục tiêu: thể hiện kỹ năng, dự án học tập, kinh nghiệm thực tập, và thuyết phục nhà tuyển dụng liên hệ (không phải bán dịch vụ cho khách hàng).

Phong cách lấy cảm hứng trực tiếp từ **`https://heynesh.com`** (site thật của một freelancer Webflow, KHÔNG phải ảnh tĩnh) — đã xác nhận qua devtools rằng họ dùng Webflow + GSAP (ScrollTrigger, SplitText, DrawSVGPlugin) + Lenis + Swiper. Site của mình cũng build bằng đúng các công nghệ đó (bản JS/npm), giữ layout/hiệu ứng nhưng đổi toàn bộ nội dung cho hồ sơ sinh viên. Ngoài ra thư mục gốc dự án còn có 39 ảnh reference tĩnh (`00_homepage_full.jpg` → `38_about_card_7.jpg`) chụp cùng site đó — dùng khi cần xem chi tiết layout mà không cần mở lại site thật.

**Lưu ý quan trọng — KHÔNG bịa nội dung**: đây là portfolio xin việc của sinh viên, không phải trang bán dịch vụ freelancer. Toàn bộ số liệu/dự án/kỹ năng lấy từ CV thật (xem mục "Nội dung cá nhân"). KHÔNG bịa thêm số năm kinh nghiệm, số khách hàng, bảng giá dịch vụ, hay testimonial giả. Ảnh minh họa trong project card (xem Tech Stack) là ảnh Unsplash theo chủ đề, KHÔNG phải screenshot dự án thật — nếu sau này có ảnh thật thì thay thế ngay.

## Trạng thái triển khai (deployed)

- **Live URL**: https://portfolio-truong-lam-kiet.vercel.app/
- **GitHub repo**: https://github.com/KietDigital-hub/portfolio-truong-lam-kiet (nhánh `main`)
- Vercel đã kết nối với repo GitHub này → mỗi lần `git push` lên `main`, Vercel tự build & deploy lại (~1 phút), không cần thao tác gì trên vercel.com.
- Git identity: repo KHÔNG có `user.name`/`user.email` cấu hình global trên máy này. Khi commit, dùng `git -c user.name="Trương Lâm Kiệt" -c user.email="kiettruong086@gmail.com" commit -m "..."` (override tại chỗ, không đụng git config global — theo đúng nguyên tắc không tự ý sửa git config).

## Tech Stack (thực tế đang dùng)

- **Next.js 16** (App Router, Turbopack) + **TypeScript**. Bản Next.js này khá mới — `site/AGENTS.md` (auto-import vào `site/CLAUDE.md`) cảnh báo API có thể khác kiến thức huấn luyện cũ, nên đọc `site/node_modules/next/dist/docs/` nếu gặp lỗi lạ với `next/image`, `next/font`, routing...
- **Tailwind CSS v4** — cấu hình màu/font qua `@theme inline` trong `app/globals.css`, KHÔNG có `tailwind.config.ts`.
- **Framer Motion** — animation component-level: `whileInView` reveal, hover, modal (About timeline), accordion (FAQ), scroll-linked transform (`useScroll`/`useTransform` cho parallax Hero và horizontal-pin Projects).
- **GSAP** (`gsap`, `SplitText`, `ScrollTrigger`) — dùng cho hiệu ứng tách dòng chữ Hero (`SplitText.create(..., { type: "lines", mask: "lines" })`). Các plugin này (SplitText, DrawSVGPlugin, ScrollSmoother, MorphSVG...) đã **miễn phí hoàn toàn** từ 2024 khi Webflow mua GreenSock — cài thẳng `npm install gsap`, không cần license/key.
- **Lenis** — smooth/inertia scroll toàn trang (`components/providers/SmoothScroll.tsx`, wrap trong `app/layout.tsx`), đồng bộ với `ScrollTrigger.update` qua `gsap.ticker`.
- **Font**: `Bricolage Grotesque` (heading/display, qua CSS rule `h1,h2,h3,.font-black`) + `Inter` (body) — cả hai load qua `next/font/google` với `subsets: ["latin", "vietnamese"]`. **Xem mục Bài học bên dưới trước khi đổi font** — có bug thật đã gặp.
- Ảnh trang trí (`public/images/deco-*.jpg`) tải từ Unsplash (free, thương mại được) cho project card + Achievements vì không có screenshot dự án thật.
- Ảnh chân dung cutout: `public/images/portrait-cutout.png`, tạo bằng script Sharp tự viết (chroma-key nền xanh + crop + CSS mask), xem chi tiết trong "Bài học".

## Lệnh thường dùng

Code thực tế nằm trong thư mục con **`site/`** (vì `create-next-app` không cho scaffold vào thư mục đã có sẵn ảnh reference + CLAUDE.md gốc).

```bash
cd site
npm run dev              # dev server, mặc định port 3000 (session trước hay dùng -p 3457)
npm run build             # build production — LUÔN chạy trước khi báo hoàn thành
npm run lint
git add -A && git commit -m "..." && git push   # đẩy lên GitHub → Vercel tự deploy
```

## Cấu trúc thư mục (thực tế)

```
site/
  app/
    layout.tsx              # font Inter + Bricolage Grotesque, metadata, wrap SmoothScroll
    page.tsx                 # ghép section thành trang chủ; bọc phần sau Hero (trừ Projects) trong <div className="lg:pl-80"> để chừa chỗ Sidebar
    globals.css               # Tailwind v4 theme (@theme inline): màu lấy chính xác từ heynesh.com, font-display rule
  components/
    layout/
      Navbar.tsx               # top nav CHỈ hiện trong Hero (absolute), chia trái/phải kiểu NESH
      Sidebar.tsx               # sidebar cố định trái, hiện SAU khi cuộn qua khỏi Hero (IntersectionObserver trên #home), scroll-spy tô vàng mục đang xem
      Footer.tsx                # có lg:pl-80 để không bị Sidebar che
    providers/
      SmoothScroll.tsx          # init Lenis, sync với gsap.ticker + ScrollTrigger
    sections/                  # Hero, About, Skills, Projects, Achievements, Cta, Faq
    ui/                        # Button, Chip, Divider, IconBadge, Reveal, SectionHeading, StatBadge
  lib/
    profile.ts                 # TOÀN BỘ nội dung thật (profile, skills, projects, timeline, faq...) — SỬA NỘI DUNG Ở ĐÂY, không sửa trong component
    gsap.ts                    # đăng ký GSAP plugin 1 lần (registerPlugin)
  public/images/
    portrait-1.jpg, portrait-2.jpg     # ảnh gốc
    portrait-cutout.png                 # ảnh đã tách nền, dùng trong Hero
    deco-*.jpg                          # ảnh trang trí Unsplash
```

## Design System (giá trị THẬT, lấy từ computed styles của heynesh.com)

### Bảng màu — định nghĩa trong `app/globals.css`

| Token | Giá trị | Ghi chú |
|---|---|---|
| `--color-oat` | `#d5cfbe` | nền chính, đo chính xác từ `body` bg của heynesh.com |
| `--color-oat-card` | `#ebeada` | card sáng |
| `--color-oat-card-2` | `#dfdece` | card sáng phụ |
| `--color-ink` | `#111111` | chữ chính trên nền sáng |
| `--color-ink-soft` | `#555652` | chữ phụ |
| `--color-dark` / `--color-dark-2` | `#0a0a0a` / `#181818` | nền section tối (Projects) |
| `--color-lime` | `#ffff23` | **vàng thuần**, KHÔNG phải vàng-chanh ngả xanh — đo chính xác từ accent color của reference, đừng đoán lại bằng mắt |

Nguyên tắc: 2 nền + 1 accent, dùng accent có chủ đích (CTA, số liệu, icon).

### Typography

- **Display/heading**: `Bricolage Grotesque` (qua `next/font/google`, biến `--font-bricolage`), áp dụng tự động cho mọi `h1/h2/h3` và class `.font-black` (rule trong `globals.css`, không cần gắn class thủ công từng chỗ).
- **Body**: `Inter` (`--font-inter`).
- Heading lớn dùng `leading-[1.05]` đến `leading-[1.1]`, KHÔNG bao giờ dưới 1.0 — xem lý do trong "Bài học".
- Dấu gạch: chỉ dùng gạch ngắn `-`, KHÔNG dùng em-dash `—` hay en-dash `–` (yêu cầu rõ từ Kiệt).

### Component patterns (đã build, không phải chỉ dự định)

- **Hero**: chữ "KIET" (không dấu, xem "Bài học") khổng lồ màu lime làm nền, ảnh chân dung cutout đè giữa, headline 3 dòng đè lên phần dưới ảnh, 2 badge số liệu + 1 panel tag kỹ năng nổi kiểu glass (chỉ desktop, `hidden lg:block`), CTA + mô tả hàng dưới, metric strip 4 cột cuối section. SplitText animate headline khi mount.
- **Sidebar** (thay navbar sau khi qua Hero): logo/mô tả ngắn, 2 stat nhỏ, nav list scroll-spy (active = nền lime), email, nút "Liên hệ ngay". Chỉ desktop (`hidden lg:flex`).
- **About**: timeline 4 mốc thật (2023 nhập học → 2025 làm Leader 2 dự án → 2026 thực tập TinHolding → 2026 tốt nghiệp) xếp so le trái/phải, nối bằng SVG connector, click "Xem thêm" mở modal tối chi tiết (AnimatePresence).
- **Projects**: horizontal pinned-scroll (sticky container + `useScroll`/`useTransform` translateX theo `scrollYProgress`) — KHÔNG phải grid tĩnh. Slide gồm: intro → thực tập TinHolding → 2 dự án Leader, mỗi card có ảnh Unsplash trang trí + progress bar dưới cùng.
- **FAQ**: lưới 2 cột, chữ cái "K" khổng lồ mờ làm nền trang trí.
- **Divider**: SVG đường cong vẽ tay, tự "vẽ" (`pathLength` animate) khi scroll tới, đặt giữa Hero và About.
- **Testimonial**: KHÔNG có — không có quote thật nên bỏ hẳn, không bịa.

## Bài học / lỗi đã gặp (đọc trước khi sửa design/animation)

1. **Vietnamese glyph support KHÔNG mặc định có ở mọi font đẹp.** Từng đổi sang `Clash Display` (Fontshare) vì đẹp hơn Inter — font này KHÔNG có glyph cho `ư`/`ơ` (dấu móc), browser tự fallback sang font khác cho riêng 2 ký tự đó → chữ "TRƯƠNG" vỡ font, nhìn như 2 font trộn lẫn. **Luôn test render text tiếng Việt thật (có ư, ơ, các dấu tổ hợp) trước khi chốt đổi font**, dùng Playwright render 1 trang test nhỏ rồi zoom kiểm tra pixel, đừng tin bằng mắt thường ở size nhỏ. `Bricolage Grotesque`, `Be Vietnam Pro`, `Plus Jakarta Sans` đã test và AN TOÀN.
2. **`leading` quá sát (<1.0) làm dấu tiếng Việt của dòng dưới đè lên dòng trên.** Vietnamese có dấu ở cả trên (mũ, móc) và dưới (dấu nặng) chữ cái, cần nhiều khoảng trắng dọc hơn text Latin thường. Từng bị "Đi" hiển thị như "Đị" vì dấu nặng của ký tự dòng dưới lấn lên do `leading-[0.98]`. Heading lớn nên giữ `leading-[1.05]` trở lên.
3. **Playwright fullPage screenshot KHÔNG tự trigger `whileInView`.** Muốn chụp full trang đúng nội dung, phải scroll qua từng đoạn (`window.scrollTo` theo bước nhỏ + `waitForTimeout`) trước khi `screenshot({ fullPage: true })`, nếu không mọi section dùng `Reveal`/`whileInView` sẽ render ở trạng thái `opacity: 0` (trống trơn) trong ảnh.
4. **`element.screenshot()` của Playwright có thể lỗi với phần tử cao hơn viewport** (nội dung bị thiếu/trống giữa chừng). Dùng cách khác: `scrollIntoViewIfNeeded()` rồi `page.screenshot({ clip: {...} })` với toạ độ theo `boundingBox()`.
5. **Sidebar cố định phải trigger theo chiều cao THẬT của Hero**, không phải % cố định của viewport (VD `scrollY > 0.55 * innerHeight`) — Hero thật cao hơn nhiều nên sidebar hiện sớm, đè lên chữ Hero. Dùng `IntersectionObserver` theo dõi chính `#home`, sidebar chỉ hiện khi Hero không còn intersect.
6. **Mọi section/Footer sau Hero cần `lg:pl-80`** để chừa chỗ cho Sidebar cố định (trừ Projects, section này tự xử lý padding riêng trong track vì có nền tối full-bleed).
7. **Icon `Facebook` không tồn tại trong `lucide-react` bản mới** (thư viện đã bỏ icon brand) — dùng `Link2` hoặc icon generic khác thay thế.
8. **Ảnh chân dung nền xanh studio**: vùng dưới vai (áo) nền chuyển xám gần trùng màu áo trắng nên chroma-key theo màu không tách được sạch — giải pháp: crop ảnh ở mốc trước khi nền chuyển xám (~800px trong ảnh gốc 1024px), rồi dùng CSS `mask-image` gradient để làm mờ dần mép dưới thay vì cố tách chính xác.
9. **Chữ nền khổng lồ ở Hero để KHÔNG DẤU** ("KIET" thay vì "KIỆT") — dấu nặng của "Ệ" ở size cực lớn (`text-[38vw]`) tạo một chấm vàng lơ lửng đè lên ảnh/áo trông như lỗi. Tên đầy đủ có dấu vẫn hiển thị đầy đủ ở mọi chỗ khác (nav, footer, sidebar).
10. **`git config` không được set global** — dùng `git -c user.name=... -c user.email=... commit` để override tại chỗ khi cần commit mà máy chưa cấu hình identity.

## Nội dung cá nhân — dữ liệu thật (từ CV, cập nhật 21/7/2026)

Toàn bộ nội dung dưới đây đã đưa vào `lib/profile.ts`. Đây là bản ghi lại để tham khảo nhanh không cần mở code.

### Thông tin cơ bản
- **Tên**: Trương Lâm Kiệt
- **Vai trò hiển thị**: Sinh viên năm cuối Digital Marketing · Thực tập sinh Digital Marketing
- **Ngày sinh**: 16/03/2005
- **Địa điểm**: TP. Hồ Chí Minh
- **Điện thoại / Zalo**: 0342445759
- **Email**: kiettruong086@gmail.com
- **Facebook**: facebook.com/kiett856

### Học vấn
- Trường Đại học Văn Lang — ngành Marketing, chuyên ngành Digital Marketing (2023-2026)
- Người cố vấn: Thầy Hà Đăng Khôi — Giảng viên chuyên ngành Digital Marketing, ĐH Văn Lang

### Kinh nghiệm thực tập (đang diễn ra)
- **Thực tập sinh SEO (TTS SEO)** tại **TinHolding** (tinholding.com), 21/5/2026-21/8/2026: thiết kế website công ty, quản trị WordPress, đi backlink (SEO offpage), viết content chuẩn SEO.

### Stat thật dùng cho hero/badge (KHÔNG bịa số khác)
- `3` nền tảng Ads đã thực chiến (Facebook, Google, TikTok)
- `1.000+` TikTok followers tự xây dựng
- `2` dự án đảm nhận vai trò Leader
- `2026` năm tốt nghiệp — ĐH Văn Lang

### Kỹ năng & công cụ
Digital Advertising (Facebook/Google/TikTok Ads cơ bản) · SEO (content chuẩn SEO, backlink, WordPress) · AI Tools (ChatGPT, Claude, Midjourney) · Website Management (WordPress) · Social Media Management (Fanpage, Content Calendar) · Content & Design (Canva, CapCut).

### Dự án & Hoạt động học tập (vai trò Leader cả 2)
1. **Đề án Marketing Kỹ thuật số** (10/11/2025-30/3/2026): lập kế hoạch, điều phối nhóm, Landing Page, quản lý Multi-channel Ads (Facebook/Google/TikTok), content đa kênh, Content Calendar.
2. **Phát triển Website Căn bản** (10/11/2025-30/4/2026): quản trị hosting/domain, WordPress, UI/UX e-commerce, giỏ hàng/thanh toán, chatbot tự động, SEO content.

### Thành tựu
Xây dựng kênh TikTok cá nhân đạt 1.000 followers — tự lên ý tưởng, quay dựng, tối ưu theo xu hướng, thành thạo CapCut + AI tools.

### Sở thích
Đọc sách phát triển bản thân · Đi bộ 15-30 phút/ngày · Hoạt động thể thao hàng tuần.

### Mục tiêu nghề nghiệp
- **Ngắn hạn**: tham gia môi trường thực tế học quảng cáo số, sáng tạo nội dung, vận hành chiến dịch.
- **Dài hạn**: trở thành Digital Marketer chuyên nghiệp, triển khai + phân tích dữ liệu + tối ưu chiến dịch.

## Nguyên tắc code

- Component nhỏ, tái sử dụng (`Button`, `Chip`, `SectionHeading`...) — tránh lặp class Tailwind dài dòng.
- Animation giữ **tinh tế**: fade+slide nhẹ khi scroll, không giật/nặng. Dùng Framer Motion cho component-level, GSAP chỉ khi cần plugin đặc thù (SplitText, DrawSVG).
- Ảnh dùng `next/image`.
- Mobile-first, test responsive kỹ ở ~375px.
- Không tự thêm màu/font/hiệu ứng ngoài Design System nếu không được yêu cầu — và nếu đổi font, bắt buộc test tiếng Việt trước (xem "Bài học" #1).

## Việc cần làm tiếp theo (còn thiếu thật, cần Kiệt cung cấp)

1. **Ảnh screenshot thật** của 2 website đã làm (landing page đề án + website e-commerce) để thay ảnh Unsplash minh họa trong project card — ưu tiên cao nhất vì hiện đang dùng ảnh không liên quan trực tiếp.
2. Xác nhận có được public thông tin thực tập tại TinHolding hay cần giữ kín tên công ty (hiện đang để công khai "TinHolding" trong Projects card).
3. Ngày có thể bắt đầu công việc chính thức (cho FAQ/CTA — hiện đang ghi chung chung "sau 21/8/2026").
4. Link CV bản PDF để tải nếu muốn có nút "Download CV".
5. Custom domain riêng (VD `truonglamkiet.com`) thay vì `.vercel.app`, nếu muốn — cần mua domain trước.
6. Favicon riêng + Open Graph image (hiện dùng mặc định Next.js) — dùng ảnh chân dung cutout cho OG image khá hợp.
7. `[TIN] KẾ HOẠCH SEO OFFPAGE.xlsx` trong Downloads có thể tham khảo cho 1 case-study SEO thật nếu Kiệt đồng ý và không vi phạm bảo mật công ty — cần hỏi lại trước khi đưa nội dung công ty lên site công khai.
