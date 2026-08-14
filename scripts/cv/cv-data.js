/**
 * Nội dung 2 bản CV (VI + EN). Nguồn: CV thật của Kiệt (bản PDF cũ) + bổ sung NGÀY SINH.
 * KHÔNG bịa thêm số liệu, dự án hay kỹ năng mới - bản EN là dịch sát bản VI.
 * Chỉ dùng gạch ngắn "-".
 */

const vi = {
  lang: "vi",
  file: "CV-Truong-Lam-Kiet-VI",
  name: ["TRƯƠNG", "LÂM KIỆT"],
  role: "DIGITAL MARKETING",
  contactTitle: "LIÊN HỆ",
  contact: [
    { label: "Mail", value: "kiettruong086@gmail.com" },
    { label: "Web", value: "portfolio-truong-lam-kiet.vercel.app" },
    { label: "In", value: "linkedin.com/in/kietdigital" },
    { label: "Ngày sinh", value: "16/03/2005" },
    { label: "Nơi ở", value: "TP. Hồ Chí Minh" },
  ],
  skillsTitle: "KỸ NĂNG",
  skills: [
    {
      title: "SEO",
      text: "Viết content chuẩn SEO, research từ khoá, tối ưu on-page (thẻ meta, internal link), đi backlink và quản trị WordPress.",
    },
    {
      title: "GEO",
      text: "Đang tìm hiểu cách tối ưu nội dung để được ChatGPT, Google AI Overviews và Perplexity trích dẫn.",
    },
    {
      title: "AI & Automation",
      text: "ChatGPT, Claude và Claude Code cho nội dung; Magnific để phóng to, làm nét ảnh; Seedance tạo video; n8n dựng workflow tự động.",
    },
    {
      title: "Thiết kế & phát triển web",
      text: "WordPress, Elementor, UI/UX, Landing Page chuyển đổi, tích hợp giỏ hàng, thanh toán và chatbot.",
    },
    {
      title: "Digital Advertising",
      text: "Chạy Facebook, Google và TikTok Ads ở mức cơ bản: lên chiến dịch, quản lý ngân sách.",
    },
    {
      title: "Content & Design",
      text: "Thiết kế bằng Canva, dựng video bằng CapCut, quản trị Fanpage và Content Calendar.",
    },
  ],
  langTitle: "NGÔN NGỮ",
  langText: "Tiếng Việt: bản ngữ. Tiếng Anh: giao tiếp cơ bản.",
  sections: {
    objective: "MỤC TIÊU NGHỀ NGHIỆP",
    experience: "KINH NGHIỆM LÀM VIỆC",
    projects: "DỰ ÁN & HOẠT ĐỘNG HỌC TẬP",
    education: "HỌC VẤN",
    achievements: "THÀNH TỰU",
  },
  objective: [
    {
      lead: "Sinh viên năm cuối ngành Digital Marketing",
      text: ", đã hoàn thành 3 tháng thực tập SEO tại TIN Holdings.",
    },
    {
      lead: "Ngắn hạn:",
      text: " Ứng tuyển vị trí SEO/Digital Marketing để trực tiếp vận hành chiến dịch và ứng dụng AI vào quy trình nội dung.",
    },
    {
      lead: "Dài hạn:",
      text: " Trở thành Digital Marketer triển khai được đầu-cuối: SEO, quảng cáo đa kênh và thương mại điện tử.",
    },
  ],
  experience: [
    {
      title: "Thực tập sinh SEO",
      date: "22/5/2026 - 22/8/2026",
      sub: "Công ty TIN Holdings, TP. Hồ Chí Minh (tinholdings.com)",
      points: [
        "Viết và đăng bài chuẩn SEO 1.000-1.200 chữ/bài kèm 3-7 hình tự thiết kế theo quy chuẩn thương hiệu.",
        "Research từ khoá, lên outline và phân loại nội dung theo cấp để xây cấu trúc website.",
        "Tối ưu bài cũ: bổ sung nội dung, chỉnh thẻ meta, xây liên kết nội bộ, xử lý bài trùng từ khoá.",
        "Đi backlink offpage: profile chuẩn NAP, forum, blog 2.0, Google Site cho hệ thống website vệ tinh.",
        "Thiết kế lại giao diện website trên WordPress, xử lý lỗi hiển thị và kiểm tra bản mobile.",
      ],
      kpi: "Chỉ tiêu mỗi tuần: 7 bài mới, 10 bài tối ưu và 100 backlink",
    },
  ],
  projects: [
    {
      title: "Đề án Marketing Kỹ thuật số (vai trò Leader)",
      date: "10/2025 - 3/2026",
      points: [
        "Lập kế hoạch tổng thể, phân chia công việc và theo dõi tiến độ nhóm.",
        "Thiết kế, tối ưu Landing Page phục vụ quảng cáo chuyển đổi (UX/UI).",
        "Thiết lập và tối ưu ngân sách trên Facebook Ads, Google Ads, TikTok Ads; viết content đa kênh.",
      ],
    },
    {
      title: "Phát triển Website Căn bản (vai trò Leader)",
      date: "10/2025 - 4/2026",
      points: [
        "Quản trị hosting, tên miền, cài đặt và cấu hình WordPress.",
        "Thiết kế UI/UX theo phong cách thương mại điện tử; tích hợp giỏ hàng, thanh toán, quản lý đơn hàng.",
        "Tích hợp chatbot hỗ trợ khách 24/7; xây bài viết chuẩn SEO và kiểm soát lỗi kỹ thuật.",
      ],
    },
  ],
  education: [
    {
      title: "Trường Đại học Văn Lang",
      date: "2023 - 2026",
      sub: "Ngành Marketing, chuyên ngành Digital Marketing",
    },
  ],
  achievements: [
    {
      lead: "Xây dựng kênh TikTok cá nhân đạt hơn 1.000 người theo dõi:",
      text: " tự lên ý tưởng, quay dựng và tối ưu nội dung theo xu hướng, hiểu cách thuật toán phân phối video ngắn.",
    },
    {
      lead: "Tự làm sản phẩm bằng AI:",
      text: " dựng website portfolio cá nhân và thực hiện một video meme hoàn toàn bằng công cụ AI, từ kịch bản đến hậu kỳ.",
    },
  ],
};

const en = {
  lang: "en",
  file: "CV-Truong-Lam-Kiet-EN",
  name: ["TRUONG", "LAM KIET"],
  role: "DIGITAL MARKETING",
  contactTitle: "CONTACT",
  contact: [
    { label: "Mail", value: "kiettruong086@gmail.com" },
    { label: "Web", value: "portfolio-truong-lam-kiet.vercel.app" },
    { label: "In", value: "linkedin.com/in/kietdigital" },
    { label: "Born", value: "16 March 2005" },
    { label: "Based in", value: "Ho Chi Minh City" },
  ],
  skillsTitle: "SKILLS",
  skills: [
    {
      title: "SEO",
      text: "SEO copywriting, keyword research, on-page optimisation (meta tags, internal links), backlink building and WordPress admin.",
    },
    {
      title: "GEO",
      text: "Learning how to optimise content so it gets cited by ChatGPT, Google AI Overviews and Perplexity.",
    },
    {
      title: "AI & Automation",
      text: "ChatGPT, Claude and Claude Code for content; Magnific for upscaling and sharpening images; Seedance for video; n8n for automated workflows.",
    },
    {
      title: "Web design & development",
      text: "WordPress, Elementor, UI/UX, conversion landing pages, cart, checkout and chatbot integration.",
    },
    {
      title: "Digital Advertising",
      text: "Running Facebook, Google and TikTok Ads at a working level: campaign setup and budget management.",
    },
    {
      title: "Content & Design",
      text: "Design in Canva, video editing in CapCut, fanpage management and content calendars.",
    },
  ],
  langTitle: "LANGUAGES",
  langText: "Vietnamese: native. English: conversational.",
  sections: {
    objective: "CAREER OBJECTIVE",
    experience: "WORK EXPERIENCE",
    projects: "PROJECTS & ACADEMIC WORK",
    education: "EDUCATION",
    achievements: "ACHIEVEMENTS",
  },
  objective: [
    {
      lead: "Final-year Digital Marketing student",
      text: " who has completed a 3-month SEO internship at TIN Holdings.",
    },
    {
      lead: "Short term:",
      text: " Looking for an SEO/Digital Marketing role to run campaigns hands-on and apply AI to the content workflow.",
    },
    {
      lead: "Long term:",
      text: " Become a Digital Marketer who can deliver end to end: SEO, multi-channel advertising and e-commerce.",
    },
  ],
  experience: [
    {
      title: "SEO Intern",
      date: "22 May 2026 - 22 Aug 2026",
      sub: "TIN Holdings, Ho Chi Minh City (tinholdings.com)",
      points: [
        "Wrote and published SEO articles of 1,000-1,200 words each, with 3-7 self-designed images following brand guidelines.",
        "Ran keyword research, built outlines and mapped content into tiers to shape the site structure.",
        "Optimised older articles: expanded content, rewrote meta tags, built internal links and resolved keyword cannibalisation.",
        "Built offpage backlinks: NAP-consistent profiles, forums, blog 2.0 and Google Sites across the satellite site network.",
        "Redesigned the website interface on WordPress, fixed display bugs and tested the mobile build.",
      ],
      kpi: "Weekly targets: 7 new articles, 10 optimised articles and 100 backlinks",
    },
  ],
  projects: [
    {
      title: "Digital Marketing Project (Leader)",
      date: "10/2025 - 3/2026",
      points: [
        "Built the overall plan, split the workload and tracked the team's progress.",
        "Designed and optimised a landing page for conversion advertising (UX/UI).",
        "Set up and optimised budgets on Facebook Ads, Google Ads and TikTok Ads; wrote multi-channel content.",
      ],
    },
    {
      title: "Website Development Fundamentals (Leader)",
      date: "10/2025 - 4/2026",
      points: [
        "Managed hosting and domain, installed and configured WordPress.",
        "Designed e-commerce style UI/UX; integrated cart, checkout and order management.",
        "Integrated a 24/7 support chatbot; produced SEO articles and handled technical errors.",
      ],
    },
  ],
  education: [
    {
      title: "Van Lang University",
      date: "2023 - 2026",
      sub: "Marketing, Digital Marketing major",
    },
  ],
  achievements: [
    {
      lead: "Grew a personal TikTok channel past 1,000 followers:",
      text: " developed the ideas, filmed and edited, optimised to trends and learned how the short-video distribution algorithm works.",
    },
    {
      lead: "Shipped my own products with AI:",
      text: " built this personal portfolio website and produced a meme video entirely with AI tools, from script to post-production.",
    },
  ],
};

module.exports = { vi, en };
