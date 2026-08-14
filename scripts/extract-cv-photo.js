/**
 * Cắt ảnh thẻ ra khỏi bản render CV cũ (public/cv/cv-page-1.png) để bản CV mới
 * dùng lại đúng tấm ảnh đó. Chạy 1 lần: node scripts/extract-cv-photo.js
 */
const path = require("path");
const sharp = require("sharp");

const SRC = path.join(__dirname, "..", "public", "cv", "cv-page-1.png");
const OUT = path.join(__dirname, "..", "public", "cv", "photo.png");

(async () => {
  const meta = await sharp(SRC).metadata();
  // Toạ độ theo tỉ lệ so với chiều rộng/cao trang, đo từ bản render 1312x1855.
  // Cắt phần ẢNH bên trong khung vàng (khung vàng sẽ vẽ lại bằng CSS ở template).
  const left = Math.round(meta.width * 0.057) + 9;
  const top = Math.round(meta.height * 0.029) + 8;
  const width = Math.round(meta.width * 0.2) - 18;
  const height = Math.round(meta.height * 0.131) - 16;

  await sharp(SRC).extract({ left, top, width, height }).png().toFile(OUT);
  console.log(`OK -> ${OUT} (${width}x${height} @ ${left},${top})`);
})();
