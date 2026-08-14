/**
 * Nội dung tiếng Anh - đây là bản GỐC định nghĩa kiểu `SiteContent`.
 * Bản tiếng Việt (`vi.ts`) phải khớp đúng cấu trúc này, TypeScript sẽ bắt lỗi nếu thiếu key.
 *
 * Nguyên tắc nội dung: KHÔNG bịa số liệu/dự án. Mọi thứ ở đây lấy từ CV thật.
 * Dấu gạch chỉ dùng gạch ngắn "-", không dùng em-dash.
 */
export const en = {
  /** Nhãn hiển thị của chính ngôn ngữ này trên thanh chuyển ngữ */
  langName: "English",
  langShort: "EN",
  htmlLang: "en",

  meta: {
    title: "Truong Lam Kiet · Digital Marketing",
    description:
      "Portfolio of Truong Lam Kiet - final-year Digital Marketing student at Van Lang University. SEO intern focused on applied AI: agent workflows, automation and AI-assisted web design.",
  },

  profile: {
    name: "Truong Lam Kiet",
    roleShort: "Final-year Digital Marketing student",
    roleTag: "Digital Marketing Intern",
    location: "Ho Chi Minh City",
    dobLabel: "Date of birth",
    dob: "16 March 2005",
    school: "Van Lang University",
    major: "Digital Marketing major",
    schoolYears: "2023-2026",
    tagline: "A marketer who builds with AI, not just talks about it.",
    heroDescription:
      "I'm going deep on applied AI - agent workflows, automation and AI-assisted web design - and using it to ship real marketing work end to end.",
  },

  heroStats: [
    { value: "8", label: "AI tools in my daily workflow" },
    { value: "3", label: "AI agent platforms I build on" },
  ],

  metrics: [
    { value: "8", suffix: "", label: "AI tools in use" },
    { value: "3", suffix: "", label: "AI agent platforms" },
    { value: "1", suffix: "", label: "AI video channel shipped" },
    { value: "2026", suffix: "", label: "Graduating · Van Lang" },
  ],

  hero: {
    headline: ["Digital Marketing,", "powered by AI.", "Built end to end."],
    caption: ["Digital Marketing student.", "That's Kiet."],
    ctaContact: "Get in touch",
    ctaSkills: "See my AI stack",
    badgeTools: "AI tools in daily use",
    badgeAgents: "AI agent platforms",
    traits: ["AI-first", "Agents", "Automation", "AI Web Design", "Data"],
  },

  about: {
    eyebrow: "Career goals",
    titleLines: ["From learning the basics to a marketer", "who builds AI systems, end to end."],
    readMore: "Read more",
    outsideWork: "Outside work",
    close: "Close",
  },

  timeline: [
    {
      year: "2023",
      icon: "graduation",
      title: "Where it started",
      blurb: "Enrolled in Digital Marketing at Van Lang University.",
      detail:
        "I picked Digital Marketing because I wanted to understand how a brand reaches the right person at the right time using data - not guesswork.",
    },
    {
      year: "2025",
      icon: "users",
      title: "Leading, not watching",
      blurb: "Took the Leader role on two consecutive course projects.",
      detail:
        "From a digital marketing plan to a full website build - I planned, coordinated the team and ran the work myself instead of directing from the sidelines.",
    },
    {
      year: "2026",
      icon: "briefcase",
      title: "Real work, real deadlines",
      blurb: "SEO Intern at TinHolding - actual KPIs, actual reviews.",
      detail:
        "Three months (22 May - 22 Aug 2026) of real SEO: redesigning a WordPress site, keyword research and outlines, writing - publishing - optimising SEO articles, and offpage backlink work against weekly KPIs with regular progress reports.",
    },
    {
      year: "2026",
      icon: "flag",
      title: "Going all-in on AI",
      blurb: "Building a marketing skill set where AI does the heavy lifting.",
      detail:
        "My focus now: become a marketer who can design an AI workflow - agents, automation, AI-assisted web builds - and use it to run campaigns faster and better than a manual team could.",
    },
  ],

  interests: ["Reading on personal development", "A 15-30 minute walk every day", "Weekly sport"],

  skillsSection: {
    eyebrow: "Skills & Toolkit",
    title: "The AI stack I build with.",
    description:
      "Agents, automation and AI-assisted design - the toolkit I use to run marketing work from idea to live.",
  },

  skills: [
    {
      icon: "sparkles",
      title: "AI Agents & Orchestration",
      description:
        "I work with AI agents daily - Claude Code in the terminal for building, OpenClaw for open-source agent tasks - giving them real jobs instead of one-off prompts.",
      chips: ["Claude Code", "OpenClaw", "Agent workflows", "Prompt design"],
    },
    {
      icon: "globe",
      title: "AI-Assisted Web Design",
      description:
        "I design and build production websites with Claude Code - layout, UI/UX, animation and responsive behaviour - then ship them live. This portfolio is one of them.",
      chips: ["Claude Code", "UI/UX", "Next.js", "Responsive", "WordPress"],
    },
    {
      icon: "workflow",
      title: "Workflow Automation",
      description:
        "Wiring apps and AI models together in n8n so repetitive marketing work - content pipelines, reporting, publishing - runs itself instead of eating my week.",
      chips: ["n8n", "Webhooks", "API integration", "Auto-reporting"],
    },
    {
      icon: "palette",
      title: "AI Content & Creative",
      description:
        "Producing copy, images and video with AI end to end: ideation and scripts, AI-generated visuals, upscaling, then edit and publish.",
      chips: ["ChatGPT", "Claude", "Seedance", "Magnific", "CapCut"],
    },
    {
      icon: "search",
      title: "SEO",
      description:
        "SEO content, keyword research, on-page optimisation and offpage backlinks on WordPress - built during my internship at TinHolding.",
      chips: ["SEO Content", "Keyword research", "Backlink", "WordPress"],
    },
    {
      icon: "megaphone",
      title: "Digital Advertising",
      description:
        "Hands-on campaign setup, audience targeting and budget management across the major ad platforms.",
      chips: ["Facebook Ads", "Google Ads", "TikTok Ads", "Budgeting"],
    },
  ],

  experience: {
    eyebrow: "Work experience",
    introTitle: ["Three months", "of real SEO, at a", "real company."],
    introLead: "Not a classroom exercise - ",
    introHighlight1: "real deadlines",
    introMid: ", ",
    introHighlight2: "weekly KPIs",
    introTail: ", and someone reviewing every deliverable.",
    scrollHint: "Scroll to see what I owned",
    role: "SEO Intern",
    company: "TinHolding",
    companyUrl: "https://tinholdings.com/",
    period: "22 May 2026 - 22 Aug 2026",
    status: "In progress",
    kpiLabel: "KPIs assigned",
    kpis: ["7 new articles / week", "10 optimised articles / week", "100 backlinks / week"],
    takeaway:
      "SEO does not stop at writing. You have to understand the content structure of the whole site, know which article feeds which, and prove your work with a hard number every week.",
    takeawayLabel: "What the internship taught me",
    cta: "Get in touch",
    groups: [
      {
        index: "01",
        title: "Website & Interface",
        image: "/images/deco-design.jpg",
        tags: ["WordPress", "Elementor", "UI/UX"],
        points: [
          "Redesigned the blog interface: homepage, about page and single-post template",
          "Fixed sidebar and post-page display bugs, and tested the mobile build thoroughly",
        ],
      },
      {
        index: "02",
        title: "SEO Content",
        image: "/images/deco-content.jpg",
        tags: ["Content SEO", "Research", "Outline"],
        points: [
          "Wrote and published SEO articles of 1,000-1,200 words, with 3-7 self-designed images on brand",
          "Ran keyword research and outlines, mapping content into tier 0/1/2 with a clear primary keyword, pillar and URL",
        ],
      },
      {
        index: "03",
        title: "Optimisation & Offpage",
        image: "/images/deco-analytics.jpg",
        tags: ["On-page", "Internal link", "Backlink"],
        points: [
          "Optimised older articles: expanded content, rewrote meta tags (title, description) and internal links",
          "Audited and listed articles cannibalising the same keyword to stop them competing with each other",
          "Built offpage backlinks: NAP-consistent profiles, forums, blog 2.0 and Google Sites for the satellite network",
        ],
      },
    ],
  },

  aiProject: {
    eyebrow: "AI Project",
    title: "An AI project I actually shipped",
    subtitle: "A stick-figure meme video built with AI tools",
    youtubeId: "qFIIl43Au94",
    youtubeUrl: "https://www.youtube.com/watch?v=qFIIl43Au94",
    channel: "Kaz AI",
    channelSuffix: "channel",
    madeWithAi: "Made with AI",
    watch: "Watch on YouTube",
    playLabel: "Play video",
    description:
      "Part of my AI services work: a stick-figure meme video where AI supported every stage - from concept and script to visuals and post-production.",
    tags: ["AI Video", "Meme Content", "Short-form", "CapCut"],
    points: [
      "Developed the concept and wrote the short meme script with ChatGPT/Claude.",
      "Generated the visuals and stick-figure characters with AI instead of hiring a designer.",
      "Edited, paced and published the video in CapCut as short-form content.",
    ],
  },

  achievement: {
    eyebrow: "Achievement",
    heading: "Self-taught, self-shipped, self-measured.",
    title: "AI-powered content production",
    year: "2026",
    badgeTop: "AI",
    badgeBottom: "powered pipeline",
    points: [
      "Built and ran a personal TikTok channel end to end - concept, filming, editing and trend-led optimisation - reaching its first 1,000 followers organically.",
      "Tested short-form video formats systematically and learned how the distribution algorithm rewards them, growing reach without ad spend.",
      "Cut production time sharply by running the whole pipeline through CapCut plus AI tools for ideation, visuals and post-production.",
    ],
  },

  cv: {
    eyebrow: "Resume",
    titleBefore: "My ",
    titleAccent: "full",
    titleAfter: " CV",
    description: "The latest PDF - read it right here or download a copy.",
    /** Nhãn 2 phiên bản CV, hiện dưới dạng tab ngay trong section */
    versionLabel: "CV version",
    download: "Download CV (PDF)",
    open: "Open the PDF",
    alt: "Truong Lam Kiet CV - Digital Marketing",
  },

  cta: {
    eyebrow: "Ready to start",
    title: "Want to build something with AI?",
    text: "I'm looking for a Digital Marketing internship or full-time role where I can put AI to work on real campaigns. I'd love to talk.",
    email: "Send an email",
  },

  connect: {
    eyebrow: "Connect",
    titleBefore: "Find me ",
    titleAccent: "everywhere",
    description: "Tap a logo to jump straight to that channel.",
    pageDescription:
      "All of my real accounts in one place - tap a logo to open that channel. The fastest way to reach me is still Facebook or email.",
    home: "Home",
    linkBioBadge: "Link in bio",
    linkBioTitle: ["All my links", "in one place"],
    /** {count} sẽ được thay bằng số kênh */
    linkBioText:
      "One hub with all {count} channels - social, portfolio, code and contact. Start here if you only open one link.",
    outroTitle: "{count} channels - one person",
    outroText:
      "Every channel is a piece of the same story: studying Digital Marketing, doing real SEO work, and building with AI every day. If it looks like a fit, message me.",
    outroExperience: "See my experience",
    outroContact: "Get in touch",
  },

  nav: {
    links: [
      { href: "#home", label: "Home" },
      { href: "#about", label: "Goals" },
      { href: "#skills", label: "Skills" },
      { href: "#experience", label: "Experience" },
      { href: "#ai-project", label: "AI Project" },
      { href: "#cv", label: "CV" },
      { href: "#connect", label: "Connect" },
    ],
    contact: "Contact",
    openMenu: "Open menu",
    switchLabel: "Language",
  },

  sidebar: {
    statTools: "AI Tools",
    statAgents: "AI Agents",
    cta: "Get in touch",
  },

  footer: {
    allChannels: "All channels",
    rights: "Personal portfolio.",
  },
};

export type SiteContent = typeof en;
