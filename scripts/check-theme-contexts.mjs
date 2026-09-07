/**
 * Guards the one rule that made a CTA invisible: a section may not paint a
 * ground colour without also switching its theme context. `bg-ink` alone keeps
 * the inherited --foreground, so `text-foreground` renders ink-on-ink.
 *
 * Run: node scripts/check-theme-contexts.mjs
 */
import assert from "node:assert";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const GROUND = /\bbg-(ink|cream|stone|forest|clay)\b/;
const CONTEXT = /\bon-(dark|light)\b/;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const offenders = [];
for (const file of walk("src").filter((f) => /\.tsx$/.test(f))) {
  const source = readFileSync(file, "utf8");
  // Each opening <section ...> tag, attributes included.
  for (const [tag] of source.matchAll(/<section\b[^>]*>/g)) {
    if (GROUND.test(tag) && !CONTEXT.test(tag)) {
      offenders.push(`${file}: ${tag.replace(/\s+/g, " ").slice(0, 110)}`);
    }
  }
}

assert.deepStrictEqual(
  offenders,
  [],
  `Sections paint a ground without an on-dark/on-light context:\n  ${offenders.join("\n  ")}`,
);
console.log("theme contexts ok");
