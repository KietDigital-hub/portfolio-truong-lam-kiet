import type { SiteContent } from "./en";

/**
 * Bản tiếng Việt. Cấu trúc phải khớp `SiteContent` (định nghĩa trong en.ts).
 * Dịch sát nội dung CV thật, không thêm số liệu/dự án mới.
 * Chỉ dùng gạch ngắn "-", không dùng em-dash.
 */
export const vi: SiteContent = {
  langName: "Tiếng Việt",
  langShort: "VI",
  htmlLang: "vi",

  meta: {
    title: "Trương Lâm Kiệt · Digital Marketing",
    description:
      "Portfolio của Trương Lâm Kiệt - sinh viên năm cuối ngành Digital Marketing, Trường Đại học Văn Lang. Thực tập sinh SEO, tập trung ứng dụng AI: agent workflow, tự động hoá và thiết kế web bằng AI.",
  },

  profile: {
    name: "Trương Lâm Kiệt",
    roleShort: "Sinh viên năm cuối Digital Marketing",
    roleTag: "Thực tập sinh Digital Marketing",
    location: "TP. Hồ Chí Minh",
    dobLabel: "Ngày sinh",
    dob: "16/03/2005",
    school: "Trường Đại học Văn Lang",
    major: "Chuyên ngành Digital Marketing",
    schoolYears: "2023-2026",
    tagline: "Một marketer làm được bằng AI, không chỉ nói về AI.",
    heroDescription:
      "Mình đi sâu vào AI ứng dụng - agent workflow, tự động hoá và thiết kế web bằng AI - rồi dùng chính bộ công cụ đó để chạy trọn vẹn một đầu việc marketing.",
  },

  heroStats: [
    { value: "8", label: "công cụ AI dùng mỗi ngày" },
    { value: "3", label: "nền tảng agent AI đang build" },
  ],

  metrics: [
    { value: "8", suffix: "", label: "Công cụ AI đang dùng" },
    { value: "3", suffix: "", label: "Nền tảng agent AI" },
    { value: "1", suffix: "", label: "Kênh video AI đã ra mắt" },
    { value: "2026", suffix: "", label: "Tốt nghiệp · Văn Lang" },
  ],

  hero: {
    headline: ["Digital Marketing,", "vận hành bằng AI.", "Làm trọn từ đầu đến cuối."],
    caption: ["Sinh viên Digital Marketing.", "Đó là Kiệt."],
    ctaContact: "Liên hệ ngay",
    ctaSkills: "Xem bộ công cụ AI",
    badgeTools: "công cụ AI dùng mỗi ngày",
    badgeAgents: "nền tảng agent AI",
    traits: ["Ưu tiên AI", "Agent", "Tự động hoá", "Web bằng AI", "Dữ liệu"],
  },

  about: {
    eyebrow: "Mục tiêu nghề nghiệp",
    titleLines: ["Từ học nền tảng đến một marketer", "tự dựng được hệ thống AI đầu-cuối."],
    readMore: "Xem thêm",
    outsideWork: "Ngoài giờ làm",
    close: "Đóng",
  },

  timeline: [
    {
      year: "2023",
      icon: "graduation",
      title: "Nơi bắt đầu",
      blurb: "Nhập học ngành Digital Marketing, Trường Đại học Văn Lang.",
      detail:
        "Mình chọn Digital Marketing vì muốn hiểu cách một thương hiệu tiếp cận đúng người vào đúng thời điểm dựa trên dữ liệu - chứ không phải đoán mò.",
    },
    {
      year: "2025",
      icon: "users",
      title: "Đứng ra dẫn, không đứng nhìn",
      blurb: "Nhận vai trò Leader ở hai đề án học phần liên tiếp.",
      detail:
        "Từ kế hoạch digital marketing đến dựng nguyên một website - mình lên kế hoạch, điều phối nhóm và tự tay làm chứ không chỉ đứng chỉ việc.",
    },
    {
      year: "2026",
      icon: "briefcase",
      title: "Việc thật, deadline thật",
      blurb: "Thực tập sinh SEO tại TIN Holdings - KPI thật, review thật.",
      detail:
        "Ba tháng (22/5 - 22/8/2026) làm SEO thật: thiết kế lại website WordPress, research từ khoá và lên outline, viết - đăng - tối ưu bài chuẩn SEO, đi backlink offpage theo KPI tuần và báo cáo tiến độ đều đặn.",
    },
    {
      year: "2026",
      icon: "flag",
      title: "Dồn toàn lực vào AI",
      blurb: "Xây bộ kỹ năng marketing mà AI gánh phần việc nặng.",
      detail:
        "Hướng đi hiện tại: trở thành marketer thiết kế được một quy trình AI - agent, tự động hoá, dựng web bằng AI - và dùng nó để chạy chiến dịch nhanh và tốt hơn một đội làm tay.",
    },
  ],

  interests: [
    "Đọc sách phát triển bản thân",
    "Đi bộ 15-30 phút mỗi ngày",
    "Chơi thể thao hàng tuần",
  ],

  skillsSection: {
    eyebrow: "Kỹ năng & Công cụ",
    title: "Bộ công cụ AI mình làm việc cùng.",
    description:
      "Agent, tự động hoá và thiết kế có AI hỗ trợ - bộ công cụ mình dùng để đưa một đầu việc marketing từ ý tưởng đến lúc lên sóng.",
  },

  skills: [
    {
      icon: "sparkles",
      title: "AI Agent & Điều phối",
      description:
        "Mình làm việc với agent AI mỗi ngày - Claude Code trên terminal để build, OpenClaw cho các tác vụ agent mã nguồn mở - giao cho chúng việc thật thay vì hỏi vài câu rời rạc.",
      chips: ["Claude Code", "OpenClaw", "Agent workflow", "Thiết kế prompt"],
    },
    {
      icon: "globe",
      title: "Thiết kế web bằng AI",
      description:
        "Mình thiết kế và dựng website chạy thật bằng Claude Code - bố cục, UI/UX, hiệu ứng và responsive - rồi đưa lên production. Chính portfolio này là một ví dụ.",
      chips: ["Claude Code", "UI/UX", "Next.js", "Responsive", "WordPress"],
    },
    {
      icon: "workflow",
      title: "Tự động hoá quy trình",
      description:
        "Nối các ứng dụng và mô hình AI lại với nhau trong n8n để phần việc marketing lặp đi lặp lại - pipeline nội dung, báo cáo, đăng bài - tự chạy thay vì ngốn cả tuần.",
      chips: ["n8n", "Webhook", "Tích hợp API", "Báo cáo tự động"],
    },
    {
      icon: "palette",
      title: "Nội dung & Sáng tạo bằng AI",
      description:
        "Làm chữ, hình và video bằng AI từ đầu đến cuối: lên ý tưởng và kịch bản, tạo hình ảnh bằng AI, phóng nét, rồi dựng và đăng.",
      chips: ["ChatGPT", "Claude", "Seedance", "Magnific", "CapCut"],
    },
    {
      icon: "search",
      title: "SEO",
      description:
        "Viết content chuẩn SEO, research từ khoá, tối ưu on-page và đi backlink offpage trên WordPress - tích luỹ trong kỳ thực tập tại TIN Holdings.",
      chips: ["Content SEO", "Research từ khoá", "Backlink", "WordPress"],
    },
    {
      icon: "megaphone",
      title: "Quảng cáo số",
      description:
        "Trực tiếp lên chiến dịch, nhắm nhóm đối tượng và quản lý ngân sách trên các nền tảng quảng cáo chính.",
      chips: ["Facebook Ads", "Google Ads", "TikTok Ads", "Quản lý ngân sách"],
    },
  ],

  experience: {
    eyebrow: "Kinh nghiệm làm việc",
    introTitle: ["Ba tháng", "làm SEO thật, tại", "một công ty thật."],
    introLead: "Không phải bài tập trên lớp - ",
    introHighlight1: "deadline thật",
    introMid: ", ",
    introHighlight2: "KPI hàng tuần",
    introTail: ", và có người review từng đầu việc.",
    scrollHint: "Cuộn để xem mình phụ trách những gì",
    role: "Thực tập sinh SEO",
    company: "TIN Holdings",
    companyUrl: "https://tinholdings.com/",
    period: "22/5/2026 - 22/8/2026",
    status: "Đang diễn ra",
    kpiLabel: "KPI được giao",
    kpis: ["7 bài mới / tuần", "10 bài tối ưu / tuần", "100 backlink / tuần"],
    takeaway:
      "SEO không dừng ở chuyện viết. Phải hiểu cấu trúc nội dung của cả website, biết bài nào đỡ cho bài nào, và mỗi tuần phải chứng minh được bằng con số cụ thể.",
    takeawayLabel: "Điều kỳ thực tập dạy mình",
    cta: "Liên hệ ngay",
    groups: [
      {
        index: "01",
        title: "Website & Giao diện",
        image: "/images/deco-design.jpg",
        tags: ["WordPress", "Elementor", "UI/UX"],
        points: [
          "Thiết kế lại giao diện blog: trang chủ, trang giới thiệu và mẫu trang bài viết",
          "Xử lý lỗi hiển thị ở sidebar và trang bài viết, kiểm tra kỹ bản mobile",
        ],
      },
      {
        index: "02",
        title: "Content SEO",
        image: "/images/deco-content.jpg",
        tags: ["Content SEO", "Research", "Outline"],
        points: [
          "Viết và đăng bài chuẩn SEO 1.000-1.200 chữ, kèm 3-7 hình tự thiết kế theo bộ nhận diện",
          "Research từ khoá và lên outline, phân loại nội dung theo cấp 0/1/2 với từ khoá chính, pillar và URL rõ ràng",
        ],
      },
      {
        index: "03",
        title: "Tối ưu & Offpage",
        image: "/images/deco-analytics.jpg",
        tags: ["On-page", "Liên kết nội bộ", "Backlink"],
        points: [
          "Tối ưu bài cũ: bổ sung nội dung, viết lại thẻ meta (title, description) và sửa liên kết nội bộ",
          "Rà soát và liệt kê các bài trùng từ khoá để gộp hoặc định vị lại, tránh tự cạnh tranh nhau",
          "Đi backlink offpage: profile chuẩn NAP, forum, blog 2.0 và Google Sites cho hệ thống website vệ tinh",
        ],
      },
    ],
  },

  aiProject: {
    eyebrow: "Dự án AI",
    title: "Một dự án AI mình đã làm ra thật",
    subtitle: "Video meme người que dựng hoàn toàn bằng công cụ AI",
    youtubeId: "qFIIl43Au94",
    youtubeUrl: "https://www.youtube.com/watch?v=qFIIl43Au94",
    channel: "Kaz AI",
    channelSuffix: "kênh",
    madeWithAi: "Làm bằng AI",
    watch: "Xem trên YouTube",
    playLabel: "Phát video",
    description:
      "Nằm trong mảng dịch vụ AI của mình: một video meme người que mà AI tham gia ở mọi khâu - từ ý tưởng, kịch bản đến hình ảnh và hậu kỳ.",
    tags: ["Video AI", "Nội dung meme", "Video ngắn", "CapCut"],
    points: [
      "Lên ý tưởng và viết kịch bản meme ngắn bằng ChatGPT/Claude.",
      "Tạo hình ảnh và nhân vật người que bằng AI thay vì thuê designer.",
      "Dựng, canh nhịp và đăng video trên CapCut dưới dạng nội dung ngắn.",
    ],
  },

  achievement: {
    eyebrow: "Thành tựu",
    heading: "Tự học, tự làm, tự đo kết quả.",
    title: "Sản xuất nội dung bằng AI",
    year: "2026",
    badgeTop: "AI",
    badgeBottom: "chạy suốt quy trình",
    points: [
      "Tự xây và vận hành kênh TikTok cá nhân từ đầu đến cuối - ý tưởng, quay, dựng và tối ưu theo xu hướng - đạt 1.000 follower đầu tiên hoàn toàn tự nhiên.",
      "Thử nghiệm có hệ thống các format video ngắn và hiểu được cách thuật toán phân phối ưu tiên chúng, tăng lượt tiếp cận mà không tốn tiền quảng cáo.",
      "Rút ngắn đáng kể thời gian sản xuất nhờ chạy cả quy trình qua CapCut cùng các công cụ AI cho ý tưởng, hình ảnh và hậu kỳ.",
    ],
  },

  cv: {
    eyebrow: "Hồ sơ",
    titleBefore: "CV ",
    titleAccent: "đầy đủ",
    titleAfter: " của mình",
    description: "Bản PDF mới nhất - đọc ngay tại đây hoặc tải về.",
    versionLabel: "Phiên bản CV",
    download: "Tải CV (PDF)",
    open: "Mở file PDF",
    alt: "CV Trương Lâm Kiệt - Digital Marketing",
  },

  cta: {
    eyebrow: "Sẵn sàng bắt đầu",
    title: "Muốn cùng làm gì đó với AI?",
    text: "Mình đang tìm vị trí thực tập hoặc full-time Digital Marketing để đưa AI vào chạy chiến dịch thật. Rất mong được trao đổi.",
    email: "Gửi email",
  },

  connect: {
    eyebrow: "Kết nối",
    titleBefore: "Tìm mình ",
    titleAccent: "ở mọi nơi",
    description: "Bấm vào logo để mở thẳng kênh đó.",
    pageDescription:
      "Toàn bộ tài khoản thật của mình gom về một chỗ - bấm vào logo để mở kênh tương ứng. Cách nhanh nhất để liên hệ vẫn là Facebook hoặc email.",
    home: "Trang chủ",
    linkBioBadge: "Link in bio",
    linkBioTitle: ["Tất cả link của mình", "gom về một chỗ"],
    linkBioText:
      "Một trang duy nhất chứa cả {count} kênh - mạng xã hội, portfolio, code và liên hệ. Nếu chỉ mở một link, hãy mở link này.",
    outroTitle: "{count} kênh - một người",
    outroText:
      "Mỗi kênh là một mảnh của cùng một câu chuyện: học Digital Marketing, làm SEO thật và mỗi ngày đều làm việc cùng AI. Nếu thấy phù hợp, nhắn cho mình nhé.",
    outroExperience: "Xem kinh nghiệm",
    outroContact: "Liên hệ ngay",
  },

  nav: {
    links: [
      { href: "#home", label: "Trang chủ" },
      { href: "#about", label: "Mục tiêu" },
      { href: "#skills", label: "Kỹ năng" },
      { href: "#experience", label: "Kinh nghiệm" },
      { href: "#ai-project", label: "Dự án AI" },
      { href: "#cv", label: "CV" },
      { href: "#connect", label: "Kết nối" },
    ],
    contact: "Liên hệ",
    openMenu: "Mở menu",
    switchLabel: "Ngôn ngữ",
  },

  sidebar: {
    statTools: "Công cụ AI",
    statAgents: "Agent AI",
    cta: "Liên hệ ngay",
  },

  footer: {
    allChannels: "Tất cả kênh",
    rights: "Portfolio cá nhân.",
  },
};
