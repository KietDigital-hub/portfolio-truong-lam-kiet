/**
 * Template HTML cho CV (A4 1 trang), dựng lại đúng bố cục bản CV cũ:
 * cột trái nền đen ~30%, cột phải nền trắng, tiêu đề mục có gạch chân vàng.
 *
 * Font: Be Vietnam Pro - ĐÃ TEST hỗ trợ đủ glyph tiếng Việt (ư/ơ), xem
 * PROJECT_SUMMARY.md mục "Bài học" #1 trước khi đổi sang font khác.
 */
const LIME = "#ffe814";

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function sectionTitle(text) {
  return `<h2 class="sec">${esc(text)}</h2>`;
}

function buildHtml(d, photoUrl) {
  const contactRows = d.contact
    .map(
      (c) =>
        `<div class="crow"><span class="clabel">${esc(c.label)}</span><span class="cvalue">${esc(
          c.value
        )}</span></div>`
    )
    .join("");

  const skillBlocks = d.skills
    .map(
      (s) =>
        `<div class="skill"><div class="stitle">${esc(s.title)}</div><p class="stext">${esc(
          s.text
        )}</p></div>`
    )
    .join("");

  const objective = d.objective
    .map((o) => `<p class="para"><b>${esc(o.lead)}</b>${esc(o.text)}</p>`)
    .join("");

  const experience = d.experience
    .map(
      (e) => `
      <div class="entry">
        <div class="ehead"><h3>${esc(e.title)}</h3><span class="date">${esc(e.date)}</span></div>
        <div class="esub">${esc(e.sub)}</div>
        <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <div class="kpi">${esc(e.kpi)}</div>
      </div>`
    )
    .join("");

  const projects = d.projects
    .map(
      (p) => `
      <div class="entry">
        <div class="ehead"><h3>${esc(p.title)}</h3><span class="date">${esc(p.date)}</span></div>
        <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`
    )
    .join("");

  const education = d.education
    .map(
      (e) => `
      <div class="entry tight">
        <div class="ehead"><h3>${esc(e.title)}</h3><span class="date">${esc(e.date)}</span></div>
        <div class="esub">${esc(e.sub)}</div>
      </div>`
    )
    .join("");

  const achievements = `<ul class="ach">${d.achievements
    .map((a) => `<li><b>${esc(a.lead)}</b>${esc(a.text)}</li>`)
    .join("")}</ul>`;

  return `<!doctype html>
<html lang="${d.lang}">
<head>
<meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: 210mm; height: 297mm; }
  body {
    font-family: "Be Vietnam Pro", system-ui, sans-serif;
    color: #111;
    display: flex;
    font-size: 8.6pt;
    line-height: 1.42;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* ---------- Cột trái ---------- */
  .left {
    width: 62mm;
    background: #111;
    color: #fff;
    padding: 9mm 7mm 8mm;
    display: flex;
    flex-direction: column;
  }
  .photo {
    width: 38mm;
    height: 35mm;
    margin: 0 auto;
    border: 2.4pt solid ${LIME};
    border-radius: 3mm;
    overflow: hidden;
    background: #6cc4e8;
  }
  .photo img { width: 100%; height: 100%; object-fit: cover; display: block; }

  .name {
    margin-top: 5mm;
    text-align: center;
    font-size: 20pt;
    font-weight: 800;
    line-height: 1.12;
    letter-spacing: -0.01em;
  }
  .role {
    margin-top: 2.5mm;
    text-align: center;
    color: ${LIME};
    font-size: 7.6pt;
    font-weight: 700;
    letter-spacing: 0.22em;
  }

  .lsec {
    margin-top: 7mm;
    color: ${LIME};
    font-size: 8.4pt;
    font-weight: 800;
    letter-spacing: 0.2em;
    padding-bottom: 1.6mm;
    border-bottom: 0.7pt solid rgba(255,255,255,0.28);
  }

  .crow { display: flex; gap: 2mm; margin-top: 2.4mm; font-size: 8.2pt; }
  .clabel { color: ${LIME}; font-weight: 700; white-space: nowrap; }
  .cvalue { color: #f2f2f0; word-break: break-word; }

  .skill { margin-top: 3.4mm; }
  .stitle { font-weight: 700; font-size: 8.6pt; }
  .stext { margin-top: 0.8mm; color: #dcdcd6; font-size: 8pt; line-height: 1.42; }

  .ltext { margin-top: 2.6mm; color: #dcdcd6; font-size: 8pt; line-height: 1.45; }

  /* ---------- Cột phải ---------- */
  .right { flex: 1; padding: 8mm 8mm 6mm 7.5mm; }

  .sec {
    font-size: 11.6pt;
    font-weight: 800;
    letter-spacing: 0.13em;
    margin-top: 4.8mm;
  }
  .sec:first-child { margin-top: 0; }
  .sec::after {
    content: "";
    display: block;
    width: 16mm;
    height: 1.6mm;
    background: ${LIME};
    margin-top: 1.2mm;
    margin-bottom: 2.4mm;
  }

  .para { margin-top: 1.5mm; }
  .para b { font-weight: 700; }

  .entry { margin-top: 2.8mm; }
  .entry:first-of-type { margin-top: 0; }
  .entry.tight { margin-top: 0; }
  .ehead { display: flex; align-items: baseline; justify-content: space-between; gap: 4mm; }
  .ehead h3 { font-size: 9.8pt; font-weight: 700; line-height: 1.3; }
  .date { font-size: 8pt; color: #55564f; white-space: nowrap; font-weight: 500; }
  .esub { margin-top: 0.5mm; font-size: 8.2pt; color: #35362f; font-weight: 500; }

  ul { margin-top: 1.4mm; padding-left: 4.2mm; }
  li { margin-top: 1mm; padding-left: 0.6mm; }
  li::marker { color: #111; }

  .kpi {
    display: inline-block;
    margin-top: 2.4mm;
    background: ${LIME};
    border-radius: 999px;
    padding: 1.2mm 4.2mm;
    font-size: 8pt;
    font-weight: 700;
  }

  .ach { margin-top: 0; }
  .ach li { margin-top: 1.6mm; }
</style>
</head>
<body>
  <aside class="left">
    <div class="photo"><img src="${photoUrl}" alt=""></div>
    <div class="name">${d.name.map(esc).join("<br>")}</div>
    <div class="role">${esc(d.role)}</div>

    <div class="lsec">${esc(d.contactTitle)}</div>
    ${contactRows}

    <div class="lsec">${esc(d.skillsTitle)}</div>
    ${skillBlocks}

    <div class="lsec">${esc(d.langTitle)}</div>
    <p class="ltext">${esc(d.langText)}</p>
  </aside>

  <main class="right">
    ${sectionTitle(d.sections.objective)}
    ${objective}

    ${sectionTitle(d.sections.experience)}
    ${experience}

    ${sectionTitle(d.sections.projects)}
    ${projects}

    ${sectionTitle(d.sections.education)}
    ${education}

    ${sectionTitle(d.sections.achievements)}
    ${achievements}
  </main>
</body>
</html>`;
}

module.exports = { buildHtml };
