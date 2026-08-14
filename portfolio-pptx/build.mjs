import pptxgen from "pptxgenjs";

const pptx = new pptxgen();
pptx.defineLayout({ name: "SRC", width: 13.333, height: 7.5 });
pptx.layout = "SRC";
pptx.author = "Truong Lam Kiet";
pptx.title = "Portfolio - Truong Lam Kiet";

const W = 13.333, H = 7.5;
// bbox_percent -> inches
const P = (x, y, w, h) => ({ x: x / 100 * W, y: y / 100 * H, w: w / 100 * W, h: h / 100 * H });

// Palette taken verbatim from the site's own tokens in app/globals.css.
// Rule that drives every choice below: lime is nearly invisible as TEXT on a light
// background, so it only ever appears as a fill block with ink text on top, or as
// text on a dark panel - exactly how the website uses it.
const C = {
  oat:      "FFFFFF",   // --color-oat        (page background)
  oatCard:  "EBEADA",   // --color-oat-card   (card tone)
  oatCard2: "DFDECE",   // --color-oat-card-2
  cream:    "F5F5F0",   // --color-cream
  ink:      "111111",   // --color-ink        (text, borders)
  inkSoft:  "555652",   // --color-ink-soft
  dark:     "0A0A0A",   // --color-dark       (dark section fills)
  dark2:    "181818",   // --color-dark-2
  lime:     "FFFF23",   // --color-lime       (the one accent)
  limeSoft: "FFFFA8",   // --color-lime-soft
};

// The website's own type pair (app/layout.tsx): Bricolage Grotesque + Inter.
// Both were built as static TTFs from the Google Fonts variable originals and their
// cmap was checked for the full Vietnamese set before use.
const DISPLAY = "Bricolage Grotesque";  // headings / display
const BODY    = "Inter";                // body
const HAND    = "Inter";                // kickers - italic Inter, no handwriting font

const S = pptx.ShapeType;

/* ---------------- reusable motifs (Layer B, fully editable) ---------------- */

// checkerboard corner motif: oat block then lime block
function checker(slide, { x, y, cell = 0.30, cols = 4, rows = 4, color, opts = {} }) {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if ((r + c) % 2 !== 0) continue;
      slide.addShape(S.rect, {
        x: x + c * cell, y: y + r * cell, w: cell, h: cell,
        fill: { color }, line: { type: "none" }, ...opts,
      });
    }
  }
}

// the two-tone checkerboard block used bottom-left on divider slides
function cornerChecker(slide, { x = 0, y = 4.95, cell = 0.31 } = {}) {
  checker(slide, { x, y, cell, cols: 4, rows: 5, color: C.oat });
  checker(slide, { x: x + cell * 3.4, y: y + cell * 1.6, cell, cols: 5, rows: 4, color: C.lime });
}

// 6-arm asterisk motif
function asterisk(slide, { x, y, s = 1.1, color = C.ink, rot = 0 }) {
  slide.addShape(S.star6, { x, y, w: s, h: s, fill: { color }, line: { type: "none" }, rotate: rot });
}

// pill badge: rounded rect + centered text
function pill(slide, { x, y, w, h, fill, text, color, size = 15, font = DISPLAY, lineOnly = false }) {
  slide.addShape(S.roundRect, {
    x, y, w, h, rectRadius: h / 2,
    fill: lineOnly ? { type: "none" } : { color: fill },
    line: lineOnly ? { color: fill, width: 1.75 } : { type: "none" },
  });
  slide.addText(text, {
    x, y, w, h, fontFace: font, fontSize: size, bold: true, color,
    align: "center", valign: "middle", lineSpacingMultiple: 1.1,
  });
}

// outlined content card (ink border, warm card fill)
function card(slide, { x, y, w, h, border = C.ink, fill = C.oatCard, radius = 0.16 }) {
  slide.addShape(S.roundRect, {
    x, y, w, h, rectRadius: radius,
    fill: fill ? { color: fill } : { type: "none" },
    line: { color: border, width: 1.5 },
  });
}

/* ---------------- slide templates ---------------- */

// dark full-bleed section divider: huge lime title + checker corner + handwritten caption
function divider(title, captionEN, opts = {}) {
  const s = pptx.addSlide();
  s.background = { color: C.dark };
  if (opts.bgImage) {
    s.addImage({ path: opts.bgImage, x: 0, y: 0, w: W, h: H, sizing: { type: "cover", w: W, h: H } });
    // scrim keeps the lime headline readable over the artwork
    s.addShape(S.rect, { x: 0, y: 0, w: W, h: H, fill: { color: C.dark, transparency: opts.scrim ?? 42 }, line: { type: "none" } });
  }
  const lines = Array.isArray(title) ? title : [title];
  s.addText(lines.join("\n"), {
    ...P(4, 8, 88, lines.length > 1 ? 34 : 20),
    fontFace: DISPLAY, fontSize: opts.size || 60, bold: true, color: C.lime,
    align: "left", valign: "top", lineSpacingMultiple: 1.12, charSpacing: -0.5,
  });
  if (opts.sub) {
    s.addText(opts.sub, {
      ...P(4, lines.length > 1 ? 44 : 30, 60, 8),
      fontFace: DISPLAY, fontSize: 22, bold: true, color: C.oat, valign: "top",
      lineSpacingMultiple: 1.15,
    });
  }
  cornerChecker(s);
  if (captionEN) {
    s.addText(captionEN, {
      ...P(48, 79, 48, 16), fontFace: HAND, italic: true, fontSize: 17, color: C.oat,
      align: "right", valign: "top", lineSpacingMultiple: 1.2,
    });
  }
  return s;
}

// light content slide: ink display heading + handwritten english kicker
function contentHead(s, head, kicker, { y = 4, size = 40 } = {}) {
  s.addText(head, {
    ...P(4.5, y, 52, 13), fontFace: DISPLAY, fontSize: size, bold: true, color: C.ink,
    valign: "top", lineSpacingMultiple: 1.1, charSpacing: -0.5,
  });
  if (kicker) {
    s.addText(kicker, {
      ...P(57, y + 1.5, 39, 12), fontFace: HAND, italic: true, fontSize: 19, color: C.ink,
      valign: "top", lineSpacingMultiple: 1.15,
    });
  }
}

/* =======================================================================
   SLIDE 1 - COVER
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oat };

  pill(s, { x: 0.32, y: 0.36, w: 4.30, h: 0.86, fill: C.ink, text: "TRUONG LAM KIET", color: C.lime, size: 19 });
  pill(s, { x: 7.95, y: 0.40, w: 5.10, h: 0.86, fill: C.lime, text: "DIGITAL MARKETING", color: C.ink, size: 19 });

  // PORTFOLIO wordmark. The O glyph centers were measured from the Segoe UI Black
  // metrics (hmtx advances at 96pt, centered in the box below), so the discs land
  // exactly on the O's and replace them - drawn AFTER the text so they cover it.
  s.addText("PORTFOLIO", {
    x: 0.20, y: 3.05, w: 12.95, h: 2.90,
    fontFace: DISPLAY, fontSize: 150, bold: true, color: C.ink,
    align: "center", valign: "middle", charSpacing: 0,
  });

  const OY = 4.50, OD = 1.74;              // glyph vertical center, disc diameter (cap height 1.38)
  const OCX = [3.467, 8.262, 11.104];      // O centers at 150pt, from Bricolage Bold hmtx advances
  OCX.forEach((cx) => s.addShape(S.ellipse, {
    x: cx - OD / 2, y: OY - OD / 2, w: OD, h: OD,
    fill: { color: C.lime }, line: { type: "none" },
  }));
  asterisk(s, { x: OCX[0] - 0.52, y: OY - 0.52, s: 1.04, color: C.ink });
  asterisk(s, { x: OCX[2] - 0.52, y: OY - 0.52, s: 1.04, color: C.ink });
  // eyes motif on the middle O
  s.addShape(S.ellipse, { x: OCX[1] - 0.55, y: OY - 0.43, w: 0.45, h: 0.66, fill: { color: C.ink }, line: { type: "none" } });
  s.addShape(S.ellipse, { x: OCX[1] + 0.11, y: OY - 0.43, w: 0.45, h: 0.66, fill: { color: C.ink }, line: { type: "none" } });

  pill(s, { x: 0.32, y: 6.30, w: 4.30, h: 0.86, fill: C.lime, text: "FINAL-YEAR STUDENT", color: C.ink, size: 19 });
  pill(s, { x: 7.95, y: 6.30, w: 5.10, h: 0.86, fill: C.ink, text: "SEO INTERN - TINHOLDING", color: C.lime, size: 17 });
}

/* =======================================================================
   SLIDE 2 - ABOUT ME
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oatCard };

  // dark portrait panel (left)
  s.addShape(S.rect, { ...P(3.5, 0, 32, 100), fill: { color: C.dark }, line: { type: "none" } });
  s.addImage({ path: "assets/portrait_fade.png", x: 0.75, y: 1.15, w: 4.55, h: 3.70 });

  s.addText("ABOUT ME", {
    ...P(5, 3, 24, 8), fontFace: DISPLAY, fontSize: 22, bold: true, color: C.oat, valign: "top",
  });

  // headline: mixed color run
  s.addText([
    { text: "Hi, ", options: { color: C.inkSoft } },
    { text: "I am Kiet", options: { color: C.ink } },
    { text: "!", options: { color: C.ink } },
  ], {
    ...P(39, 42, 58, 16), fontFace: DISPLAY, fontSize: 40, bold: true,
    valign: "top", lineSpacingMultiple: 1.22, charSpacing: -0.5,
  });

  s.addText(
    "Final-year Digital Marketing student at Van Lang University. I am going deep on applied AI - agent workflows, automation and AI-assisted web design - and using it to ship real marketing work end to end.",
    { ...P(39, 62, 57, 30), fontFace: BODY, fontSize: 14.5, color: C.ink, valign: "top", lineSpacingMultiple: 1.35 }
  );

  asterisk(s, { x: 12.15, y: 0.45, s: 0.95, color: C.ink });
}

/* =======================================================================
   SLIDE 3 - CV SNAPSHOT
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oat };
  s.addImage({ path: "assets/nen3.png", x: 0, y: 0, w: W, h: H, sizing: { type: "cover", w: W, h: H }, transparency: 88 });

  const label = (t, x, y, w = 2.85) =>
    pill(s, { x, y, w, h: 0.72, fill: C.dark, text: t, color: C.lime, size: 17 });

  // left column
  label("contact", 0.55, 0.45);
  s.addText(
    "16 Mar 2005\n0342445759 (Zalo)\nkiettruong086@gmail.com\nHo Chi Minh City",
    { x: 0.62, y: 1.32, w: 4.6, h: 1.5, fontFace: BODY, fontSize: 13, color: C.ink, lineSpacingMultiple: 1.45, bold: true }
  );

  label("education", 0.55, 3.00);
  s.addText([
    { text: "2023 - 2026    ", options: { bold: true, color: C.ink } },
    { text: "Van Lang University\n", options: { bold: true, color: C.ink } },
    { text: "                     Marketing\n                     Digital Marketing major", options: { color: C.ink } },
  ], { x: 0.62, y: 3.88, w: 5.3, h: 1.2, fontFace: BODY, fontSize: 12.5, lineSpacingMultiple: 1.4 });

  label("skills", 0.55, 5.20);
  s.addText(
    "AI agents & orchestration\nWorkflow automation\nAI-assisted web design",
    { x: 0.62, y: 6.05, w: 2.7, h: 1.1, fontFace: BODY, fontSize: 12.5, color: C.ink, lineSpacingMultiple: 1.4 }
  );
  s.addText(
    "AI content & creative\nSEO & Content\nWordPress / UI-UX",
    { x: 3.35, y: 6.05, w: 2.7, h: 1.1, fontFace: BODY, fontSize: 12.5, color: C.ink, lineSpacingMultiple: 1.4 }
  );

  // right column
  label("experience", 6.55, 0.45, 3.3);
  s.addText([
    { text: "5.2026 - 8.2026     ", options: { bold: true, color: C.ink } },
    { text: "TINHOLDING\n", options: { bold: true, color: C.ink } },
    { text: "                              SEO INTERN\n", options: { bold: true, color: C.ink } },
    { text: "                              (SOW: SEO content, offpage backlinks,\n                              WordPress site design & admin)\n\n", options: { color: C.ink } },
    { text: "11.2025 - 4.2026   ", options: { bold: true, color: C.ink } },
    { text: "DIGITAL MARKETING PROJECT\n", options: { bold: true, color: C.ink } },
    { text: "                              LEADER\n", options: { bold: true, color: C.ink } },
    { text: "                              (SOW: planning, team coordination, landing page,\n                              multi-channel ads)\n\n", options: { color: C.ink } },
    { text: "11.2025 - 4.2026   ", options: { bold: true, color: C.ink } },
    { text: "WEB DEVELOPMENT FUNDAMENTALS\n", options: { bold: true, color: C.ink } },
    { text: "                              LEADER\n", options: { bold: true, color: C.ink } },
    { text: "                              (SOW: hosting/domain, WordPress, e-commerce\n                              UI-UX, SEO content)", options: { color: C.ink } },
  ], { x: 6.62, y: 1.32, w: 6.3, h: 4.0, fontFace: BODY, fontSize: 11.5, lineSpacingMultiple: 1.32, valign: "top" });

  label("highlights", 6.55, 5.55, 3.3);
  s.addText([
    { text: "2026    ", options: { bold: true, color: C.ink } },
    { text: "8 AI tools ", options: { bold: true, color: C.ink } },
    { text: "running in my daily workflow\n", options: { color: C.ink } },
    { text: "2026    ", options: { bold: true, color: C.ink } },
    { text: "AI-built ", options: { bold: true, color: C.ink } },
    { text: "portfolio site, shipped with Claude Code", options: { color: C.ink } },
  ], { x: 6.62, y: 6.42, w: 6.3, h: 0.85, fontFace: BODY, fontSize: 11.5, lineSpacingMultiple: 1.4, valign: "top" });
}

/* =======================================================================
   SLIDE 4 - JOURNEY (dark big-number divider)
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.dark2 };
  s.addImage({ path: "assets/nen.png", x: 0, y: 0, w: W, h: H, sizing: { type: "cover", w: W, h: H } });
  s.addShape(S.rect, { x: 0, y: 0, w: W, h: H, fill: { color: C.dark, transparency: 42 }, line: { type: "none" } });

  // taller boxes + looser leading: Vietnamese stacked diacritics (ă, ì) clip otherwise
  s.addText("03", { x: 0.55, y: 1.00, w: 4.2, h: 2.6, fontFace: DISPLAY, fontSize: 112, bold: true, color: C.lime, align: "left", valign: "middle", charSpacing: -3, lineSpacingMultiple: 1.15 });
  s.addText("Years.", { x: 4.15, y: 1.00, w: 8.4, h: 2.6, fontFace: DISPLAY, fontSize: 90, bold: true, color: C.oat, align: "left", valign: "middle", charSpacing: -3, lineSpacingMultiple: 1.15 });

  s.addText("01", { x: 0.55, y: 3.30, w: 4.2, h: 2.6, fontFace: DISPLAY, fontSize: 112, bold: true, color: C.lime, align: "left", valign: "middle", charSpacing: -3, lineSpacingMultiple: 1.15 });
  s.addText("Journey.", { x: 4.15, y: 3.30, w: 8.7, h: 2.6, fontFace: DISPLAY, fontSize: 74, bold: true, color: C.oat, align: "left", valign: "middle", charSpacing: -3, lineSpacingMultiple: 1.15 });

  s.addText("From Learning Marketing to Building AI Workflows", {
    x: 1.55, y: 5.75, w: 10.5, h: 0.7, fontFace: HAND, italic: true, fontSize: 21, color: C.lime, align: "center", valign: "middle",
  });

  asterisk(s, { x: 10.55, y: 0.55, s: 1.8, color: C.lime });
}

/* =======================================================================
   SLIDE 5 - TINHOLDING divider
   ======================================================================= */
divider("TINHOLDING", "At TinHolding I learned that SEO is never just writing.\nIt is knowing which article feeds which, and proving it\nwith a number every single week.", {
  sub: "SEO Intern  ·  22 May 2026 - 22 Aug 2026", size: 68,
});

/* =======================================================================
   SLIDE 6 - ROLE + SOW
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oat };
  s.addShape(S.rect, { ...P(0, 0, 100, 23), fill: { color: C.dark }, line: { type: "none" } });

  s.addText("TINHOLDING", { ...P(4, 3, 60, 12), fontFace: DISPLAY, fontSize: 40, bold: true, color: C.lime, valign: "top", charSpacing: -1 });
  s.addText("SEO INTERN", { ...P(4, 14.5, 60, 7), fontFace: BODY, fontSize: 17, bold: true, italic: true, color: C.oat, valign: "top" });

  // KPI badges
  const kpis = [["7", "new articles / week"], ["10", "optimised / week"], ["100", "backlinks / week"]];
  kpis.forEach(([v, l], i) => {
    const x = 0.72 + i * 4.15;
    card(s, { x, y: 2.15, w: 3.75, h: 1.30, border: C.ink, fill: C.lime, radius: 0.14 });
    s.addText(v, { x, y: 2.28, w: 3.75, h: 0.66, fontFace: DISPLAY, fontSize: 30, bold: true, color: C.ink, align: "center", valign: "middle" });
    s.addText(l, { x, y: 2.88, w: 3.75, h: 0.42, fontFace: BODY, fontSize: 12, bold: true, color: C.ink, align: "center", valign: "middle" });
  });

  pill(s, { x: 0.72, y: 3.78, w: 11.9, h: 0.66, fill: C.ink, text: "SOW", color: C.ink, size: 17, lineOnly: true });

  const sow = [
    "Redesigned the blog interface on WordPress: homepage, about page and single-post template - fixing display bugs and checking every mobile breakpoint.",
    "Wrote and published SEO articles of 1,000-1,200 words each, with 3-7 self-designed images following brand guidelines.",
    "Ran keyword research and built article outlines, mapping content into tier 0/1/2 with a clear primary keyword, pillar and URL.",
    "Optimised existing articles: expanded content, rewrote meta tags (title, description) and fixed internal linking.",
    "Audited and listed articles cannibalising the same keyword so they could be merged or repositioned.",
    "Built offpage backlinks: NAP-consistent profile links, forums, blog 2.0 and Google Sites across the satellite site network.",
  ];
  s.addText(sow.map(t => ({ text: t, options: { bullet: { code: "2022" }, breakLine: true } })), {
    x: 0.95, y: 4.62, w: 11.5, h: 2.55, fontFace: BODY, fontSize: 13, color: C.ink,
    lineSpacingMultiple: 1.32, paraSpaceAfter: 6, valign: "top",
  });
}

/* =======================================================================
   SLIDES 7-9 - the three work groups
   ======================================================================= */
const groups = [
  {
    idx: "01", title: "WEBSITE & INTERFACE", kicker: "Rebuilding the blog from the frame up",
    img: "assets/g1.jpg", tags: ["WordPress", "Elementor", "UI/UX"],
    points: [
      "Redesigned the blog interface: homepage, about page and single-post template.",
      "Fixed sidebar and post-page display bugs, and tested the mobile build thoroughly.",
    ],
  },
  {
    idx: "02", title: "SEO CONTENT", kicker: "Keyword research to published article",
    img: "assets/g2.jpg", tags: ["Content SEO", "Research", "Outline"],
    points: [
      "Wrote and published SEO articles of 1,000-1,200 words, with 3-7 self-designed images on brand.",
      "Ran keyword research and outlines, mapping content into tier 0/1/2 with a clear primary keyword, pillar and URL.",
    ],
  },
  {
    idx: "03", title: "OPTIMISATION & OFFPAGE", kicker: "Fixing what exists, then building authority",
    img: "assets/g3.jpg", tags: ["On-page", "Internal link", "Backlink"],
    points: [
      "Optimised older articles: expanded content, rewrote meta tags (title, description) and internal links.",
      "Audited and listed articles cannibalising the same keyword to stop them competing with each other.",
      "Built offpage backlinks: NAP-consistent profiles, forums, blog 2.0 and Google Sites for the satellite network.",
    ],
  },
];

groups.forEach((g) => {
  const s = pptx.addSlide();
  s.background = { color: C.oat };

  // index sits in its own column so it never collides with the Vietnamese heading
  s.addShape(S.roundRect, { x: 0.55, y: 0.42, w: 1.25, h: 1.05, rectRadius: 0.16, fill: { color: C.lime }, line: { type: "none" } });
  s.addText(g.idx, { x: 0.55, y: 0.42, w: 1.25, h: 1.05, fontFace: DISPLAY, fontSize: 40, bold: true, color: C.ink, align: "center", valign: "middle", charSpacing: -2 });
  s.addText(g.title, {
    x: 1.85, y: 0.42, w: 6.6, h: 1.05, fontFace: DISPLAY, fontSize: 31, bold: true, color: C.ink,
    valign: "middle", lineSpacingMultiple: 1.12, charSpacing: -0.5,
  });
  s.addText(g.kicker, {
    x: 8.30, y: 0.42, w: 4.55, h: 1.05, fontFace: HAND, italic: true, fontSize: 17, color: C.ink,
    align: "right", valign: "middle", lineSpacingMultiple: 1.15,
  });

  s.addImage({ path: g.img, x: 0.72, y: 2.15, w: 5.55, h: 4.45, sizing: { type: "cover", w: 5.55, h: 4.45 } });
  s.addShape(S.rect, { x: 0.72, y: 2.15, w: 5.55, h: 4.45, fill: { type: "none" }, line: { color: C.ink, width: 2.25 } });

  card(s, { x: 6.85, y: 2.15, w: 5.75, h: 4.45, border: C.ink });

  s.addText(g.tags.map((t, i) => ({ text: t + (i < g.tags.length - 1 ? "   ·   " : ""), options: { color: i === 0 ? C.ink : C.inkSoft } })), {
    x: 7.15, y: 2.45, w: 5.2, h: 0.45, fontFace: BODY, fontSize: 12, bold: true, valign: "middle",
  });
  s.addShape(S.line, { x: 7.15, y: 3.00, w: 5.2, h: 0, line: { color: C.ink, width: 2.25 } });

  s.addText(g.points.map(t => ({ text: t, options: { bullet: { code: "2022" }, breakLine: true } })), {
    x: 7.15, y: 3.20, w: 5.2, h: 3.15, fontFace: BODY, fontSize: 13.5, color: C.ink,
    lineSpacingMultiple: 1.35, paraSpaceAfter: 12, valign: "top",
  });
});

/* =======================================================================
   SLIDE 10 - TAKEAWAY
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oatCard };

  s.addText("THE TAKEAWAY", { ...P(5, 12, 60, 12), fontFace: DISPLAY, fontSize: 46, bold: true, color: C.ink, valign: "top", charSpacing: -1 });
  s.addText("What the internship actually taught me", { ...P(5, 26, 60, 8), fontFace: HAND, italic: true, fontSize: 20, color: C.ink, valign: "top" });

  card(s, { x: 0.72, y: 3.20, w: 11.9, h: 2.55, border: C.ink, fill: C.oat, radius: 0.2 });
  s.addText(
    "SEO does not stop at writing. You have to understand the content structure of the whole site, know which article feeds which, and prove your work with a hard number every week.",
    { x: 1.15, y: 3.55, w: 11.05, h: 1.85, fontFace: DISPLAY, fontSize: 23, bold: true, color: C.ink, align: "center", valign: "middle", lineSpacingMultiple: 1.3 }
  );

  asterisk(s, { x: 11.75, y: 5.95, s: 1.15, color: C.ink });
  asterisk(s, { x: 0.75, y: 6.05, s: 0.85, color: C.ink });
}

/* =======================================================================
   SLIDE 11 - AI divider
   ======================================================================= */
divider(["APPLIED AI"], "This is the part most CVs still cannot show.\nNot a list of tool names - an actual workflow\nwhere AI does real work end to end.", {
  sub: "What sets this profile apart", size: 62, bgImage: "assets/nen2.png", scrim: 22,
});

/* =======================================================================
   SLIDE 12 - AI TOOLKIT grid
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oat };
  s.addShape(S.rect, { ...P(0, 0, 100, 17), fill: { color: C.lime }, line: { type: "none" } });
  s.addText("AI TOOLKIT", { ...P(4, 2.5, 45, 12), fontFace: DISPLAY, fontSize: 36, bold: true, color: C.ink, valign: "middle", charSpacing: -1 });
  s.addText("The toolkit I actually work in", { ...P(52, 3.5, 44, 10), fontFace: HAND, italic: true, fontSize: 19, color: C.ink, align: "right", valign: "middle" });

  const tools = [
    ["assets/tools/claude-code.png", "Claude Code", "Agentic coding in the terminal - how I build and ship websites."],
    ["assets/tools/openclaw.png", "OpenClaw", "Open-source AI agent for automating repetitive tasks."],
    ["assets/tools/n8n.png", "n8n", "Workflow automation, wiring apps and AI models together."],
    ["assets/tools/chatgpt.png", "ChatGPT", "Ideation, drafting and optimising marketing copy."],
    ["assets/tools/claude.png", "Claude", "Long-form writing, analysis and document work."],
    ["assets/tools/seedance.png", "Seedance 2.0", "AI video from stills and prompts for short-form."],
    ["assets/tools/magnific.png", "Magnific", "AI upscaling and enhancement for article imagery."],
    ["assets/tools/capcut.png", "CapCut", "Editing, pacing and exporting short-form video."],
  ];

  tools.forEach(([img, name, desc], i) => {
    const col = i % 4, row = Math.floor(i / 4);
    const x = 0.62 + col * 3.15, y = 1.72 + row * 2.72;
    card(s, { x, y, w: 2.92, h: 2.45, border: C.ink });
    s.addImage({ path: img, x: x + 0.20, y: y + 0.20, w: 0.78, h: 0.78 });
    s.addText(name, { x: x + 1.06, y: y + 0.22, w: 1.72, h: 0.74, fontFace: DISPLAY, fontSize: 14, bold: true, color: C.ink, valign: "middle", lineSpacingMultiple: 1.1 });
    s.addText(desc, { x: x + 0.20, y: y + 1.10, w: 2.55, h: 1.18, fontFace: BODY, fontSize: 11.5, color: C.ink, valign: "top", lineSpacingMultiple: 1.3 });
  });
}

/* =======================================================================
   SLIDE 13 - AI PROJECT (Kaz AI)
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oat };
  s.addShape(S.rect, { ...P(0, 0, 100, 23), fill: { color: C.dark }, line: { type: "none" } });
  s.addText("KAZ AI", { ...P(4, 3, 60, 12), fontFace: DISPLAY, fontSize: 40, bold: true, color: C.lime, valign: "top", charSpacing: -1 });
  s.addText("A STICK-FIGURE MEME VIDEO BUILT WITH AI", { ...P(4, 14.5, 66, 7), fontFace: BODY, fontSize: 15, bold: true, italic: true, color: C.oat, valign: "top" });

  // the actual Kaz AI video, embedded - plays inside PowerPoint (needs internet)
  s.addMedia({
    type: "online", link: "https://www.youtube.com/embed/qFIIl43Au94",
    x: 0.72, y: 2.20, w: 6.05, h: 3.40,
  });
  s.addShape(S.rect, { x: 0.72, y: 2.20, w: 6.05, h: 3.40, fill: { type: "none" }, line: { color: C.ink, width: 2.25 } });
  s.addText("Kaz AI channel  ·  youtube.com/watch?v=qFIIl43Au94", { x: 0.72, y: 5.68, w: 6.05, h: 0.35, fontFace: BODY, fontSize: 11, color: C.inkSoft, align: "center", italic: true });

  card(s, { x: 7.30, y: 2.20, w: 5.30, h: 3.40, border: C.ink });
  s.addText(
    "Part of my AI services work: a stick-figure meme video where AI supported every stage - from concept and script to visuals and post-production.",
    { x: 7.60, y: 2.48, w: 4.72, h: 1.15, fontFace: BODY, fontSize: 12.5, color: C.ink, valign: "top", lineSpacingMultiple: 1.32 }
  );
  s.addText([
    "Developed the concept and wrote the short meme script with ChatGPT/Claude.",
    "Generated the visuals and stick-figure characters with AI instead of hiring a designer.",
    "Edited, paced and published the video in CapCut as short-form content.",
  ].map(t => ({ text: t, options: { bullet: { code: "2022" }, breakLine: true } })), {
    x: 7.60, y: 3.70, w: 4.72, h: 1.75, fontFace: BODY, fontSize: 12, color: C.ink, lineSpacingMultiple: 1.3, paraSpaceAfter: 7, valign: "top",
  });

  ["AI Video", "Meme Content", "Short-form", "CapCut"].forEach((t, i) => {
    pill(s, { x: 0.72 + i * 3.05, y: 6.30, w: 2.85, h: 0.62, fill: C.lime, text: t, color: C.ink, size: 13 });
  });
}

/* =======================================================================
   SLIDE 14 - TIKTOK ACHIEVEMENT
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oat };

  contentHead(s, "AI CONTENT ENGINE", "A production pipeline I run end to end", { y: 5, size: 40 });

  s.addImage({ path: "assets/g4.jpg", x: 0.72, y: 2.20, w: 5.55, h: 1.95, sizing: { type: "cover", w: 5.55, h: 1.95 } });
  s.addShape(S.rect, { x: 0.72, y: 2.20, w: 5.55, h: 1.95, fill: { type: "none" }, line: { color: C.ink, width: 2.25 } });
  s.addShape(S.rect, { x: 0.72, y: 4.15, w: 5.55, h: 2.45, fill: { color: C.lime }, line: { color: C.ink, width: 2.25 } });
  s.addText("8", { x: 0.72, y: 4.32, w: 5.55, h: 1.20, fontFace: DISPLAY, fontSize: 66, bold: true, color: C.ink, align: "center", valign: "middle", charSpacing: -3 });
  s.addText("AI TOOLS IN THE PIPELINE", { x: 0.72, y: 5.56, w: 5.55, h: 0.45, fontFace: DISPLAY, fontSize: 16, bold: true, color: C.ink, align: "center", valign: "middle" });
  s.addText("from script to published video", { x: 0.72, y: 6.00, w: 5.55, h: 0.42, fontFace: BODY, fontSize: 12, italic: true, color: C.ink, align: "center", valign: "middle" });

  card(s, { x: 6.85, y: 2.20, w: 5.75, h: 4.40, border: C.ink });
  s.addText([
    "Built and ran a personal short-form channel end to end - concept, filming, editing and trend-led optimisation - growing it organically with no ad spend.",
    "Tested short-form formats systematically and learned how the distribution algorithm rewards them.",
    "Cut production time sharply by running the whole pipeline through CapCut plus AI tools for ideation, visuals and post-production.",
  ].map(t => ({ text: t, options: { bullet: { code: "2022" }, breakLine: true } })), {
    x: 7.15, y: 2.58, w: 5.2, h: 3.7, fontFace: BODY, fontSize: 13.5, color: C.ink, lineSpacingMultiple: 1.35, paraSpaceAfter: 12, valign: "top",
  });
}

/* =======================================================================
   SLIDE 15 - SKILLS
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oat };
  s.addShape(S.rect, { ...P(0, 0, 100, 17), fill: { color: C.lime }, line: { type: "none" } });
  s.addText("SKILLS", { ...P(4, 2.5, 40, 12), fontFace: DISPLAY, fontSize: 36, bold: true, color: C.ink, valign: "middle", charSpacing: -1 });
  s.addText("What I can do on day one", { ...P(52, 3.5, 44, 10), fontFace: HAND, italic: true, fontSize: 19, color: C.ink, align: "right", valign: "middle" });

  const sk = [
    ["AI Agents & Orchestration", "Giving AI agents real jobs - Claude Code in the terminal, OpenClaw for agent tasks - not one-off prompts.", "Claude Code · OpenClaw · Agent workflows"],
    ["AI-Assisted Web Design", "Designing and shipping production websites with Claude Code: layout, UI/UX, animation, responsive.", "Claude Code · UI/UX · Next.js"],
    ["Workflow Automation", "Wiring apps and AI models together in n8n so repetitive marketing work runs itself.", "n8n · Webhooks · API integration"],
    ["AI Content & Creative", "Copy, images and video produced end to end with AI: scripts, visuals, upscaling, edit, publish.", "ChatGPT · Claude · Seedance · Magnific"],
    ["SEO", "SEO content, keyword research, on-page and offpage backlinks on WordPress - built at TinHolding.", "SEO Content · Backlink · WordPress"],
    ["Digital Advertising", "Hands-on campaign setup, audience targeting and budget management across the major ad platforms.", "Facebook · Google · TikTok Ads"],
  ];

  sk.forEach(([t, d, chips], i) => {
    const col = i % 3, row = Math.floor(i / 3);
    const x = 0.62 + col * 4.16, y = 1.72 + row * 2.72;
    card(s, { x, y, w: 3.93, h: 2.45, border: C.ink, fill: i === 0 ? C.lime : C.oatCard });
    s.addText(t, { x: x + 0.22, y: y + 0.20, w: 3.5, h: 0.42, fontFace: DISPLAY, fontSize: 15, bold: true, color: C.ink, valign: "middle" });
    // accent rule sits inside the card, under the heading
    s.addShape(S.line, { x: x + 0.22, y: y + 0.68, w: 1.05, h: 0, line: { color: i === 0 ? C.ink : C.inkSoft, width: 3 } });
    s.addText(d, { x: x + 0.22, y: y + 0.82, w: 3.5, h: 1.05, fontFace: BODY, fontSize: 11.5, color: C.ink, valign: "top", lineSpacingMultiple: 1.3 });
    s.addText(chips, { x: x + 0.22, y: y + 1.88, w: 3.5, h: 0.38, fontFace: BODY, fontSize: 10.5, bold: true, color: i === 0 ? C.ink : C.inkSoft, valign: "middle" });
  });
}

/* =======================================================================
   SLIDE 16 - CAREER GOALS
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.dark };

  s.addText("MY GOALS", { ...P(4, 8, 60, 14), fontFace: DISPLAY, fontSize: 54, bold: true, color: C.lime, valign: "top", charSpacing: -1.5 });
  s.addText("Where I want this to go", { ...P(4, 25, 55, 8), fontFace: HAND, italic: true, fontSize: 20, color: C.oat, valign: "top" });

  const goals = [
    ["SHORT TERM", "Join a real team where I can apply AI to marketing work every day - agent workflows, automation, content and web builds - and learn how it holds up under real deadlines."],
    ["LONG TERM", "Become a Digital Marketer who designs AI-powered systems: building the agents and automations that plan, produce and optimise campaigns instead of doing every step by hand."],
  ];
  goals.forEach(([tag, txt], i) => {
    const x = 0.72 + i * 6.10;
    card(s, { x, y: 3.30, w: 5.80, h: 2.75, border: C.lime, fill: C.oat, radius: 0.18 });
    pill(s, { x: x + 0.30, y: 3.58, w: 2.30, h: 0.58, fill: C.ink, text: tag, color: C.lime, size: 14 });
    s.addText(txt, { x: x + 0.30, y: 4.32, w: 5.20, h: 1.55, fontFace: BODY, fontSize: 13.5, color: C.ink, valign: "top", lineSpacingMultiple: 1.35 });
  });

  s.addShape(S.rect, { x: 8.55, y: 0.60, w: 4.20, h: 2.30, fill: { color: C.oat }, line: { type: "none" }, rotate: 2 });
  s.addImage({ path: "assets/portrait2.jpg", x: 8.68, y: 0.72, w: 3.94, h: 2.06, sizing: { type: "cover", w: 3.94, h: 2.06 }, rotate: 2 });

  cornerChecker(s, { y: 6.28, cell: 0.24 });
}

/* =======================================================================
   SLIDE 17 - THANK YOU / CONTACT
   ======================================================================= */
{
  const s = pptx.addSlide();
  s.background = { color: C.oatCard };

  s.addShape(S.rect, { x: 0.55, y: 0.42, w: 5.85, h: 6.65, fill: { color: C.oat }, line: { type: "none" }, rotate: -2 });
  s.addImage({ path: "assets/portrait1.jpg", x: 0.80, y: 0.72, w: 5.35, h: 6.05, sizing: { type: "cover", w: 5.35, h: 6.05 }, rotate: -2 });

  asterisk(s, { x: 0.05, y: 1.60, s: 1.45, color: C.ink });
  asterisk(s, { x: 6.05, y: 3.75, s: 1.20, color: C.ink });

  s.addText("Truong Lam Kiet", {
    x: 7.10, y: 4.75, w: 5.90, h: 0.95, fontFace: DISPLAY, fontSize: 38, bold: true, color: C.ink,
    align: "right", valign: "middle", charSpacing: -1,
  });
  s.addText("CONTACT", { x: 7.10, y: 5.72, w: 5.90, h: 0.34, fontFace: DISPLAY, fontSize: 13, bold: true, color: C.ink, align: "right", valign: "middle" });
  s.addText(
    "[e] kiettruong086@gmail.com\n[m] 0342445759\n[b] behance.net/KietDigital",
    { x: 7.10, y: 6.05, w: 5.90, h: 1.0, fontFace: BODY, fontSize: 13, color: C.ink, align: "right", valign: "top", lineSpacingMultiple: 1.32 }
  );

  s.addText("Thank you for your time!", {
    x: 7.10, y: 0.85, w: 5.90, h: 1.6, fontFace: DISPLAY, fontSize: 27, bold: true, color: C.ink,
    align: "right", valign: "top", lineSpacingMultiple: 1.2,
  });
}

await pptx.writeFile({ fileName: "Portfolio-TruongLamKiet.pptx" });
console.log("BUILD OK - 17 slides");
