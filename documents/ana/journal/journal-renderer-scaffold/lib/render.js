// Page-type renderers. Each returns a self-contained HTML string for one page.
// Style is applied inline + via a small <style> block in the wrapper so the
// output is a single HTML file you can open in a browser for review.

import {
  PAGE,
  FONT,
  INK,
  CYCLE_TINTS,
  RENDERER_CONSTANTS,
} from "./layout.js";

const escape = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const pageShell = (content, { pageType, pageNum, pageLabel, tintHex, fullBleed = false } = {}) => {
  const t = tintHex ? `background:${tintHex};` : "";
  const bleed = fullBleed ? "bleed" : "";
  return `
<section class="page ${bleed}" data-page-type="${escape(pageType)}" data-page-num="${escape(pageNum)}">
  <div class="page-inner" style="${t}">
    ${content}
    ${pageLabel ? `<div class="page-label">${escape(pageLabel)}</div>` : ""}
  </div>
</section>`;
};

const lineArt = (id) => {
  if (!id) return "";
  // Real SVG resolution goes here. For scaffold: text placeholder so the slot is visible.
  return `<div class="line-art" data-line-art-id="${escape(id)}" title="line art: ${escape(id)}"></div>`;
};

const recapArt = (id) => {
  if (!id) return "";
  return `<div class="recap-art" data-art-id="${escape(id)}" title="recap art: ${escape(id)}"></div>`;
};

// ────────────────────────────────────────────────────────────────────────────
// Page-type renderers
// ────────────────────────────────────────────────────────────────────────────

const renderIntro = (row) => {
  if (row.page_num === "1") {
    return pageShell(
      `<div class="intro-p1">
        <div class="logo-mark" data-asset="logo"></div>
        <div class="wordmark">Still Here.</div>
      </div>`,
      { pageType: "intro", pageNum: row.page_num },
    );
  }
  // p2
  return pageShell(
    `<h1 class="page-heading">${escape(row.heading || "Why this journal exists")}</h1>
     <div class="body-copy">${escape(row.body || "[welcome copy TBD]")}</div>`,
    { pageType: "intro", pageNum: row.page_num },
  );
};

const renderReflection = (row) => {
  const c = RENDERER_CONSTANTS.reflection;
  return pageShell(
    `<div class="reflection">
       <div class="reflection-header">
         <h1 class="page-heading">${escape(c.heading)}</h1>
         <div class="date-line">${escape(row.cue || "[date: ____________]")}</div>
         ${lineArt(row.line_art_id)}
       </div>
       <div class="reflection-grid">
         <div class="streak-box">
           <div class="streak-label">${escape(c.streakLabel)}</div>
           <div class="streak-input"></div>
         </div>
         <div class="affirmation-box">
           <div class="affirmation">${escape(row.affirmation || "[affirmation]")}</div>
         </div>
       </div>
       <h2 class="page-subheading">${escape(c.subheading)}</h2>
       <div class="prompt">
         <div class="prompt-text">${escape(row.prompt_1 || "[prompt 1]")}</div>
         <div class="prompt-lines"></div>
       </div>
       <div class="prompt">
         <div class="prompt-text">${escape(row.prompt_2 || "[prompt 2]")}</div>
         <div class="prompt-lines"></div>
       </div>
       <div class="free-space">
         <div class="dot-grid"></div>
         <div class="free-space-cue">${escape(c.freeSpaceCue)}</div>
       </div>
     </div>`,
    {
      pageType: "reflection",
      pageNum: row.page_num,
      pageLabel: row.page_label,
      tintHex: INK.tints[row.tint_id] || null,
    },
  );
};

const renderGoal = (row) => {
  const c = RENDERER_CONSTANTS.goal;
  return pageShell(
    `<h1 class="page-heading">${escape(row.heading || c.heading)}</h1>
     ${lineArt(row.line_art_id)}
     <div class="prompt prompt-large">
       <div class="prompt-text">${escape(row.prompt_1 || "[goal prompt 1]")}</div>
       <div class="prompt-lines"></div>
     </div>
     <div class="prompt prompt-large">
       <div class="prompt-text">${escape(row.prompt_2 || "[goal prompt 2]")}</div>
       <div class="prompt-lines"></div>
     </div>`,
    {
      pageType: "goal",
      pageNum: row.page_num,
      pageLabel: row.page_label,
      tintHex: INK.tints[row.tint_id] || null,
    },
  );
};

const renderRecapLeft = (row) => {
  return pageShell(
    `<div class="recap-spread-left">
       ${recapArt(row.art_id)}
       ${row.heading ? `<div class="recap-caption">${escape(row.heading)}</div>` : ""}
     </div>`,
    {
      pageType: "recap_left",
      pageNum: row.page_num,
      pageLabel: row.page_label,
      tintHex: INK.tints[row.tint_id] || null,
      fullBleed: true,
    },
  );
};

const renderRecapRight = (row) => {
  const c = RENDERER_CONSTANTS.recap_right;
  return pageShell(
    `<h1 class="page-heading">${escape(row.heading || "Recap")}</h1>
     <h2 class="page-subheading">${escape(row.subheading || c.subheading)}</h2>
     <div class="prompt">
       <div class="prompt-text">${escape(row.prompt_1 || "[recap prompt 1]")}</div>
       <div class="prompt-lines"></div>
     </div>
     <div class="prompt">
       <div class="prompt-text">${escape(row.prompt_2 || "[recap prompt 2]")}</div>
       <div class="prompt-lines"></div>
     </div>
     <div class="prompt">
       <div class="prompt-text">${escape(row.prompt_3 || "[recap prompt 3]")}</div>
       <div class="prompt-lines"></div>
     </div>`,
    {
      pageType: "recap_right",
      pageNum: row.page_num,
      pageLabel: row.page_label,
      tintHex: INK.tints[row.tint_id] || null,
    },
  );
};

const renderCoinCap = (row) => {
  return pageShell(
    `<h1 class="page-heading">${escape(row.heading || "Coins")}</h1>
     <div class="coin-grid" data-asset="coin-grid-11">
       <!-- 11-coin grid hard-coded image set goes here -->
     </div>
     <div class="body-copy">${escape(row.body || "apartnotalone.com")}</div>`,
    { pageType: "coin_cap", pageNum: row.page_num },
  );
};

const renderLetter = (row) => {
  return pageShell(
    `<h1 class="page-heading">${escape(row.heading || "Letter to your future self")}</h1>
     <div class="body-copy">${escape(row.body || "[letter instructions]")}</div>
     ${row.prompt_1 ? `<div class="envelope-spec">${escape(row.prompt_1)}</div>` : ""}`,
    { pageType: "letter", pageNum: row.page_num },
  );
};

const renderResources = (row) => {
  const c = RENDERER_CONSTANTS.resources;
  return pageShell(
    `<h1 class="page-heading">${escape(row.heading || c.heading)}</h1>
     <div class="body-copy">${escape(row.body || "[crisis lines, professional help, ANA links]")}</div>`,
    { pageType: "resources", pageNum: row.page_num },
  );
};

const renderBlank = (row) => {
  return pageShell(
    `<div class="blank-note">[blank page — purpose TBD]</div>`,
    { pageType: "blank", pageNum: row.page_num },
  );
};

const RENDERERS = {
  intro: renderIntro,
  reflection: renderReflection,
  goal: renderGoal,
  recap_left: renderRecapLeft,
  recap_right: renderRecapRight,
  coin_cap: renderCoinCap,
  letter: renderLetter,
  resources: renderResources,
  blank: renderBlank,
};

export function renderRow(row) {
  const fn = RENDERERS[row.page_type];
  if (!fn) {
    return pageShell(
      `<div class="unknown-page">Unknown page_type: ${escape(row.page_type)}</div>`,
      { pageType: row.page_type || "unknown", pageNum: row.page_num },
    );
  }
  return fn(row);
}

export function renderBook(rows) {
  // Cycle tint validation pass — log missing tints so we catch schema bugs early.
  const tintsSeen = new Set();
  for (const r of rows) {
    if (r.tint_id) tintsSeen.add(r.tint_id);
  }
  // Reorder rows by page_num defensively.
  const ordered = [...rows].sort((a, b) => Number(a.page_num) - Number(b.page_num));
  const body = ordered.map(renderRow).join("\n");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ANA Journal v3 — Book Preview</title>
  <style>
    :root {
      --ink-accent: ${INK.accent};
      --ink-body: ${INK.body};
      --font-heading: ${FONT.heading};
      --font-body: ${FONT.body};
    }
    * { box-sizing: border-box; }
    html, body { margin: 0; padding: 0; background: #888; }
    body { font-family: var(--font-body); color: var(--ink-body); }
    .book {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      padding: 24px 0;
    }
    .page {
      width: ${PAGE.widthIn}in;
      height: ${PAGE.heightIn}in;
      background: #fff;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25);
      page-break-after: always;
      break-after: page;
    }
    .page.bleed { padding: 0; }
    .page-inner {
      position: absolute;
      inset: ${PAGE.margin.topIn}in ${PAGE.margin.outsideIn}in ${PAGE.margin.bottomIn}in ${PAGE.margin.gutterIn}in;
    }
    .page.bleed .page-inner { inset: 0; }
    .page-label {
      position: absolute;
      bottom: 0.18in;
      right: 0.1in;
      font-size: 9pt;
      color: var(--ink-accent);
      font-family: var(--font-heading);
    }
    h1.page-heading {
      font-family: var(--font-heading);
      color: var(--ink-accent);
      font-size: 20pt;
      margin: 0 0 0.18in 0;
    }
    h2.page-subheading {
      font-family: var(--font-heading);
      color: var(--ink-accent);
      font-size: 12pt;
      margin: 0.18in 0 0.08in 0;
    }
    .body-copy {
      font-family: var(--font-body);
      font-size: 11pt;
      line-height: 1.5;
      white-space: pre-wrap;
    }
    .intro-p1 { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 0.3in; }
    .wordmark { font-family: var(--font-heading); color: var(--ink-accent); font-size: 36pt; }
    .logo-mark { width: 1.2in; height: 1.2in; border: 1px dashed #888; display: flex; align-items: center; justify-content: center; color: #888; font-size: 8pt; }
    .line-art { width: 0.8in; height: 0.8in; border: 1px dashed #888; }
    .recap-art { position: absolute; inset: 0; border: 1px dashed #888; }
    .reflection-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.12in; }
    .date-line { font-family: var(--font-heading); color: var(--ink-accent); font-size: 10pt; }
    .reflection-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.12in; margin-bottom: 0.12in; }
    .streak-box { border: 1px solid var(--ink-accent); padding: 0.1in; }
    .streak-label { font-family: var(--font-heading); color: var(--ink-accent); font-size: 9pt; margin-bottom: 0.1in; }
    .streak-input { height: 0.5in; border: 1px dashed #aaa; }
    .affirmation-box { border: 1px solid var(--ink-accent); padding: 0.1in; display: flex; align-items: center; }
    .affirmation { font-family: var(--font-body); font-size: 11pt; line-height: 1.35; }
    .prompt { margin: 0.08in 0; }
    .prompt-text { font-family: var(--font-body); font-size: 10pt; margin-bottom: 0.04in; }
    .prompt-lines { min-height: 0.45in; border-bottom: 1px solid #999; }
    .prompt-large .prompt-lines { min-height: 1.2in; }
    .free-space { position: absolute; left: 0; right: 0; bottom: 0.3in; height: 2.2in; border-top: 1px solid var(--ink-accent); }
    .dot-grid { width: 100%; height: 100%; background-image: radial-gradient(#888 0.5pt, transparent 0.5pt); background-size: 0.18in 0.18in; }
    .free-space-cue { position: absolute; bottom: 0.1in; left: 0; right: 0; text-align: center; font-size: 8pt; color: #666; font-style: italic; }
    .recap-caption { position: absolute; bottom: 0.2in; left: 0; right: 0; text-align: center; font-family: var(--font-heading); color: #fff; mix-blend-mode: difference; }
    .coin-grid { width: 100%; height: 5.5in; border: 1px dashed #888; display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.2in; padding: 0.4in; }
    .blank-note { color: #aaa; font-style: italic; display: flex; align-items: center; justify-content: center; height: 100%; font-size: 9pt; }
    .unknown-page { padding: 0.2in; color: red; font-family: monospace; }
    @media print {
      body { background: #fff; }
      .page { box-shadow: none; margin: 0; }
      .book { gap: 0; padding: 0; }
    }
  </style>
</head>
<body>
  <div class="book">
    ${body}
  </div>
</body>
</html>`;
}
