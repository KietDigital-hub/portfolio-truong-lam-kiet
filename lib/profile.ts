export const profile = {
  name: "Truong Lam Kiet",
  roleShort: "Final-year Digital Marketing student",
  roleTag: "Digital Marketing Intern",
  location: "Ho Chi Minh City",
  phone: "0342445759",
  zalo: "0342445759",
  email: "kiettruong086@gmail.com",
  facebook: "facebook.com/kiett856",
  facebookUrl: "https://facebook.com/kiett856",
  behance: "behance.net/KietDigital",
  behanceUrl: "https://www.behance.net/KietDigital",
  school: "Van Lang University",
  major: "Digital Marketing major",
  schoolYears: "2023-2026",
  tagline: "A marketer who builds with AI, not just talks about it.",
  heroDescription:
    "I'm going deep on applied AI - agent workflows, automation and AI-assisted web design - and using it to ship real marketing work end to end.",
};

export const heroStats = [
  { value: "8", label: "AI tools in my daily workflow" },
  { value: "3", label: "AI agent platforms I build on" },
];

export const metrics = [
  { value: "8", suffix: "", label: "AI tools in use" },
  { value: "3", suffix: "", label: "AI agent platforms" },
  { value: "1", suffix: "", label: "AI video channel shipped" },
  { value: "2026", suffix: "", label: "Graduating · Van Lang" },
];

export const heroTags = [
  "AI Agents",
  "Automation",
  "AI Web Design",
  "SEO",
];

export const timeline = [
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
] as const;

export const careerGoals = [
  {
    tag: "Short term",
    text: "Join a real team where I can apply AI to marketing work every day - agent workflows, automation, content and web builds - and learn how it holds up under real deadlines.",
  },
  {
    tag: "Long term",
    text: "Become a Digital Marketer who designs AI-powered systems: building the agents and automations that plan, produce and optimise campaigns instead of doing every step by hand.",
  },
];

export const skills = [
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
] as const;

export const experience = {
  role: "SEO Intern",
  company: "TinHolding",
  companyUrl: "https://tinholdings.com/",
  period: "22 May 2026 - 22 Aug 2026",
  tasks: [
    "Redesigned the company blog on WordPress: homepage, about page and single-post template - fixing display bugs and checking every mobile breakpoint",
    "Wrote and published SEO articles of 1,000-1,200 words each, with 3-7 self-designed images following brand guidelines",
    "Ran keyword research and built article outlines, mapping content into tier 0/1/2 with a clear primary keyword, pillar and URL",
    "Optimised existing articles: expanded content, rewrote meta tags (title, description) and fixed internal linking",
    "Audited and listed articles cannibalising the same keyword so they could be merged or repositioned",
    "Built offpage backlinks: NAP-consistent profile links, forums, blog 2.0 and Google Sites across the satellite site network",
  ],
  kpis: [
    "7 new articles / week",
    "10 optimised articles / week",
    "100 backlinks / week",
  ],
};

export const experienceGroups = [
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
];

export const experienceTakeaway =
  "SEO does not stop at writing. You have to understand the content structure of the whole site, know which article feeds which, and prove your work with a hard number every week.";

export const tools = [
  {
    name: "ChatGPT",
    image: "/images/tools/chatgpt.png",
    group: "AI",
    text: "OpenAI's assistant - ideation, drafting and optimising marketing copy.",
  },
  {
    name: "Claude",
    image: "/images/tools/claude.png",
    group: "AI",
    text: "Anthropic's assistant - long-form writing, analysis and document work.",
  },
  {
    name: "Claude Code",
    image: "/images/tools/claude-code.png",
    group: "AI Agent",
    text: "Agentic coding in the terminal - how I build and ship websites.",
  },
  {
    name: "OpenClaw",
    image: "/images/tools/openclaw.png",
    group: "AI Agent",
    text: "Open-source AI agent for automating repetitive day-to-day tasks.",
  },
  {
    name: "n8n",
    image: "/images/tools/n8n.png",
    group: "Automation",
    text: "Drag-and-drop workflow automation, wiring apps and AI models together.",
  },
  {
    name: "Magnific",
    image: "/images/tools/magnific.png",
    group: "AI Image",
    text: "AI upscaling and enhancement, keeping detail in article imagery.",
  },
  {
    name: "Seedance 2.0",
    image: "/images/tools/seedance.png",
    group: "AI Video",
    text: "AI video generation from stills and prompts for short-form content.",
  },
  {
    name: "CapCut",
    image: "/images/tools/capcut.png",
    group: "Video",
    text: "Editing, pacing and exporting short-form video for TikTok/Reels.",
  },
  {
    name: "Facebook Ads",
    image: "/images/tools/fb-ads.png",
    group: "Ads",
    text: "Campaign setup, audience targeting and budget optimisation on Meta.",
  },
  {
    name: "Google Ads",
    image: "/images/tools/gg-ads.png",
    group: "Ads",
    text: "Running Search/Display campaigns and tracking ad group performance.",
  },
];

export const aiProject = {
  eyebrow: "AI Project",
  title: "An AI project I actually shipped",
  subtitle: "A stick-figure meme video built with AI tools",
  youtubeId: "qFIIl43Au94",
  youtubeUrl: "https://www.youtube.com/watch?v=qFIIl43Au94",
  channel: "Kaz AI",
  channelUrl: "https://www.youtube.com/@nhanviendigital1",
  description:
    "Part of my AI services work: a stick-figure meme video where AI supported every stage - from concept and script to visuals and post-production.",
  tags: ["AI Video", "Meme Content", "Short-form", "CapCut"],
  points: [
    "Developed the concept and wrote the short meme script with ChatGPT/Claude.",
    "Generated the visuals and stick-figure characters with AI instead of hiring a designer.",
    "Edited, paced and published the video in CapCut as short-form content.",
  ],
};

export const achievement = {
  title: "AI-powered content production",
  year: "2026",
  points: [
    "Built and ran a personal TikTok channel end to end - concept, filming, editing and trend-led optimisation - reaching its first 1,000 followers organically.",
    "Tested short-form video formats systematically and learned how the distribution algorithm rewards them, growing reach without ad spend.",
    "Cut production time sharply by running the whole pipeline through CapCut plus AI tools for ideation, visuals and post-production.",
  ],
};

export const interests = [
  "Reading on personal development",
  "A 15-30 minute walk every day",
  "Weekly sport",
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "Goals" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#ai-project", label: "AI Project" },
  { href: "#cv", label: "CV" },
  { href: "#connect", label: "Connect" },
];
