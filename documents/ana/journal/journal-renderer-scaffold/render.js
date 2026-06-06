#!/usr/bin/env node
// ANA Journal v3 — CSV → HTML book renderer.
// Usage: node render.js [path/to/journal.csv] [--out path/to/out.html]
// Defaults: ./journal.csv, ./out/book.html

import fs from "node:fs/promises";
import path from "node:path";
import { parseCSV } from "./lib/csv.js";
import { renderBook } from "./lib/render.js";
import { CYCLE_TINTS, INK } from "./lib/layout.js";

function parseArgs(argv) {
  const args = { input: "journal.csv", out: "out/book.html", allowGaps: false };
  for (let i = 2; i < argv.length; i++) {
    if (argv[i] === "--out" || argv[i] === "-o") args.out = argv[++i];
    else if (argv[i] === "--allow-gaps") args.allowGaps = true;
    else if (!argv[i].startsWith("-")) args.input = argv[i];
  }
  return args;
}

function validate(rows, { allowGaps = false } = {}) {
  const errors = [];
  const seen = new Set();
  let prev = 0;
  for (const r of rows) {
    const n = Number(r.page_num);
    if (!Number.isInteger(n) || n < 1) {
      errors.push(`row with bad page_num: ${JSON.stringify(r).slice(0, 80)}`);
      continue;
    }
    if (seen.has(n)) errors.push(`duplicate page_num: ${n}`);
    seen.add(n);
    if (!allowGaps && n !== prev + 1 && prev !== 0) {
      errors.push(`page_num gap: expected ${prev + 1}, got ${n}`);
    }
    prev = n;
    if (!r.page_type) errors.push(`page_num ${n}: missing page_type`);
    if (r.tint_id && !INK.tints[r.tint_id]) {
      errors.push(`page_num ${n}: unknown tint_id "${r.tint_id}"`);
    }
    if (r.status && !["draft", "reviewed", "final"].includes(r.status)) {
      errors.push(`page_num ${n}: bad status "${r.status}"`);
    }
  }
  return errors;
}

async function main() {
  const args = parseArgs(process.argv);
  const cwd = process.cwd();
  const inPath = path.resolve(cwd, args.input);
  const outPath = path.resolve(cwd, args.out);

  const csv = await fs.readFile(inPath, "utf8");
  const rows = parseCSV(csv);

  if (rows.length === 0) {
    console.error(`No rows parsed from ${inPath}. Check the file is RFC 4180 CSV.`);
    process.exit(1);
  }

  const errors = validate(rows, { allowGaps: args.allowGaps });
  if (errors.length) {
    console.error("Validation errors:");
    for (const e of errors) console.error("  -", e);
    console.error(`\n${errors.length} error(s). Fix and re-run.`);
    process.exit(1);
  }

  const html = renderBook(rows);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, html, "utf8");

  console.log(`✓ Rendered ${rows.length} pages`);
  console.log(`  input:  ${inPath}`);
  console.log(`  output: ${outPath}`);
  console.log(`\nOpen the HTML file in a browser to preview.`);
  console.log(`For Lulu PDF: pipe to Playwright/Puppeteer/WeasyPrint (see README).`);
}

main().catch((err) => {
  console.error(err.stack || err.message || err);
  process.exit(1);
});
