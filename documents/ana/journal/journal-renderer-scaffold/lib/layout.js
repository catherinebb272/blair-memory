// v3 layout constants. Single source of truth for renderer.
// Mirrors §3b, §5, §6 of journal-product-design-brief.v3.md.

// Page geometry (Lulu 6x9 coil-bound). All units in inches unless noted.
export const PAGE = {
  widthIn: 6,
  heightIn: 9,
  // Lulu-compliant margins (locked v3)
  margin: {
    outsideIn: 0.5,
    gutterIn: 0.75,
    topIn: 0.75,
    bottomIn: 0.5,
  },
};

// Fonts (locked v3). Confirm commercial licensing before production.
export const FONT = {
  heading: '"Architects Daughter", "Comic Sans MS", cursive',
  body: 'Avenir, "Avenir Next", "Helvetica Neue", Arial, sans-serif',
};

// Active ink colors (locked v3 refined).
// Soft Linen is paper-only — never used as ink.
export const INK = {
  accent: "#003B88", // Ocean Indigo — headings, subheadings, labels, page numbers
  body: "#000000",
  // Muted versions of the saturated brand set, used as washes behind line art
  // and section dividers. Hex values are placeholders pending Barbara sign-off.
  tints: {
    soft_sky: "#D6E4F2",         // tint of Ocean Indigo
    soft_mint: "#D4ECDC",         // tint of Leaf Green
    soft_periwinkle: "#DCE0F2",   // tint of Medium Blue
    soft_peach: "#F8DCCB",        // tint of Sunrise Coral
    soft_butter: "#F8EBC8",       // tint of Golden Sunrise
  },
};

// Tint rotation across the 12 cycles. Placeholder sequence — finalize with Barbara.
export const CYCLE_TINTS = [
  "soft_sky",        // C1
  "soft_mint",       // C2
  "soft_periwinkle", // C3
  "soft_peach",      // C4
  "soft_butter",     // C5
  "soft_sky",        // C6
  "soft_mint",       // C7
  "soft_periwinkle", // C8
  "soft_peach",      // C9
  "soft_butter",     // C10
  "soft_sky",        // C11
  "soft_mint",       // C12
];

// Renderer constants (per schema §5). Baked in — never stored in the CSV.
export const RENDERER_CONSTANTS = {
  reflection: {
    heading: "Today's Thoughts",
    subheading: "Reflections",
    streakLabel: "Current streak",
    freeSpaceCue: "Free space — use for written thoughts or creative expression.",
    lineArtSizeIn: 0.8,
  },
  goal: {
    heading: "Setting an Intention",
  },
  recap_right: {
    subheading: "Looking Back at the Last 7 Entries",
  },
  resources: {
    heading: "Resources",
  },
};

// 12 line art motifs (locked v3 §6a). Renderer references these by ID.
// Real SVG files go in assets/line-art/{id}.svg once Canva designer delivers.
export const LINE_ARTS = [
  "torii",
  "waterfall_lily",
  "two_fish",
  "stag",
  "kraken_lighthouse",
  "fox_snow",
  "rowing_pov",
  "resting_horse",
  "desert_landscape",
  "frog",
  "koi",
  "phoenix",
];

// 12 recap watercolor art IDs (per schema §4b). Placeholder until art source is locked.
export const RECAP_ARTS = [
  "recap_01_torii",
  "recap_02_waterfall",
  "recap_03_two_fish",
  "recap_04_stag",
  "recap_05_kraken",
  "recap_06_fox",
  "recap_07_rowing",
  "recap_08_horse",
  "recap_09_desert",
  "recap_10_frog",
  "recap_11_koi",
  "recap_12_phoenix",
];
