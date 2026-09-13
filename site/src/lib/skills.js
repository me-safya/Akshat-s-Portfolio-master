import { siC, siGit, siJupyter, siPython, siR, siSap, siSnowflake, siStreamlit } from "simple-icons";

// "SAP MM", "SAP MM Data" and "SAP-MM-Daten" must resolve to the same key across languages
export const skillKey = (name) =>
  name
    .toLowerCase()
    .replace(/sap[\s-]*mm[\s-]*(data|daten)?/, "sap-mm")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const skillKeys = (tags = []) => tags.map(skillKey).join(" ");

export const sparkles =
  '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/>';

export const database =
  '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6"/>';

const network =
  '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M6.7 7.1l3.6 3.8M17.3 7.1l-3.6 3.8M6.7 16.9l3.6-3.8M17.3 16.9l-3.6-3.8"/>';

const luminance = (hex) => {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// pale brand colours (e.g. C's #A8B9CC) disappear on white, so they get a dark tile
const brand = (icon) => ({ type: "svg", path: icon.path, color: `#${icon.hex}`, dark: luminance(icon.hex) > 0.45 });
const png = (file) => ({ type: "img", src: `/logos/${file}` });
const glyph = (inner) => ({ type: "glyph", inner });

export const skillIcons = {
  snowflake: brand(siSnowflake),
  snowpark: brand(siSnowflake),
  sql: glyph(database),
  "sap-mm": brand(siSap),
  "applied-machine-learning": glyph(network),
  "angewandtes-machine-learning": glyph(network),
  "ai-native-development": glyph(sparkles),
  "ki-native-entwicklung": glyph(sparkles),
  python: brand(siPython),
  r: brand(siR),
  c: brand(siC),
  streamlit: brand(siStreamlit),
  "power-bi": png("power-bi.png"),
  tableau: png("tableau.png"),
  salesforce: png("salesforce.png"),
  git: brand(siGit),
  jupyter: brand(siJupyter),
  "ms-office": png("ms-office.png"),
};
