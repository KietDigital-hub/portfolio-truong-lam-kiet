/**
 * Sinh 2 bản CV (tiếng Việt + tiếng Anh) ra PDF A4 1 trang + ảnh PNG xem trước.
 *
 *   node scripts/cv/build-cv.js
 *
 * Output vào public/cv/:
 *   CV-Truong-Lam-Kiet-VI.pdf  +  cv-vi-page-1.png
 *   CV-Truong-Lam-Kiet-EN.pdf  +  cv-en-page-1.png
 *
 * Cần mạng để tải font Be Vietnam Pro từ Google Fonts.
 */
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");
const data = require("./cv-data");
const { buildHtml } = require("./cv-template");

const OUT_DIR = path.join(__dirname, "..", "..", "public", "cv");
const PHOTO = path.join(OUT_DIR, "photo.png");

(async () => {
  const photoUrl =
    "data:image/png;base64," + fs.readFileSync(PHOTO).toString("base64");

  const browser = await chromium.launch();
  // 210mm x 297mm ở 96dpi = 794 x 1123 css px; deviceScaleFactor 2 cho ảnh nét.
  const page = await browser.newPage({
    viewport: { width: 794, height: 1123 },
    deviceScaleFactor: 2,
  });

  for (const d of [data.vi, data.en]) {
    await page.setContent(buildHtml(d, photoUrl), { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);

    const pdfPath = path.join(OUT_DIR, `${d.file}.pdf`);
    await page.pdf({
      path: pdfPath,
      format: "A4",
      printBackground: true,
      margin: { top: "0", right: "0", bottom: "0", left: "0" },
    });

    // Ảnh xem trước cho section CV trên web (di động không nhúng được PDF).
    const pngPath = path.join(OUT_DIR, `cv-${d.lang}-page-1.png`);
    await page.screenshot({ path: pngPath, clip: { x: 0, y: 0, width: 794, height: 1123 } });

    console.log(`OK ${d.lang.toUpperCase()} -> ${pdfPath}`);
    console.log(`OK ${d.lang.toUpperCase()} -> ${pngPath}`);
  }

  await browser.close();
})();
