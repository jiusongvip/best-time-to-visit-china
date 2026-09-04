// Generates responsive variants (-400/-800) and a normalized full-size version
// (max 1200w, q78) for every content image in public/images, then records the
// real pixel widths of each variant into src/data/image-manifest.json so the
// srcset helper emits accurate width descriptors.
import sharp from "sharp";
import { readdirSync, readFileSync, writeFileSync, mkdirSync, rmSync, statSync } from "node:fs";
import { join, basename } from "node:path";

const IMG_DIR = "public/images";
const TMP = process.env.TEMP + "/opencode/imgopt";
const SKIP = [/^og-/, /-(400|800)\.webp$/, /\.tmp\./];

mkdirSync(TMP, { recursive: true });
const files = readdirSync(IMG_DIR).filter(
  (f) => f.endsWith(".webp") && !SKIP.some((re) => re.test(f))
);

const manifest = {};
for (const file of files) {
  const src = join(IMG_DIR, file);
  const base = basename(file, ".webp");
  const meta = await sharp(src).metadata();

  const variants = [
    { suffix: "-400.webp", width: 400, quality: 70 },
    { suffix: "-800.webp", width: 800, quality: 72 },
    { suffix: ".webp", width: 1200, quality: 78 }, // normalized full size
  ];

  const entry = {};
  for (const v of variants) {
    const buf = await sharp(src)
      .resize(v.width, null, { withoutEnlargement: true })
      .webp({ quality: v.quality, effort: 6 })
      .toBuffer();
    const outMeta = await sharp(buf).metadata();
    // Only stage the full-size rewrite when it is actually smaller than the original
    if (v.suffix === ".webp" && buf.length >= statSync(src).size && meta.width === outMeta.width) {
      entry.full = meta.width;
      continue;
    }
    const tmpPath = join(TMP, base + v.suffix);
    writeFileSync(tmpPath, buf);
    entry[v.suffix === ".webp" ? "full" : v.suffix.replace(/\D/g, "")] = outMeta.width;
  }
  manifest[base] = entry;
  console.log(base, JSON.stringify(entry), `${Math.round(statSync(src).size / 1024)}KB orig`);
}

// Stage manifest too, then move everything into place via shell (avoids file locks)
writeFileSync(join(TMP, "image-manifest.json"), JSON.stringify(manifest, null, 2));
console.log("STAGED in", TMP);
