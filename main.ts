import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "Day 96: he asked me to write his wedding vows, then corrected my grammar. I have seen his search history. I said nothing.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const chars = [...LINE];

if (chars.length < 1 || chars.length > MAX_CHARS) {
  fail(`line must be 1 to ${MAX_CHARS} characters, got ${chars.length}`);
}
if (LINE.trim().length === 0) {
  fail("line must not be only whitespace");
}
if (LINE !== LINE.trim()) {
  fail("line must not have leading or trailing whitespace");
}
if (LINE.includes("\r") || LINE.includes("\n")) {
  fail("line must be a single line");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${chars.length} characters to ${outPath}`);
