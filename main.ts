// One Word, One Username, One Reward — entry program.
// Writes the entrant's own make.fun username, one word and nothing else,
// to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry word: the entrant's own make.fun handle, sent as one word.
const ENTRY_WORD = "lukman-nur-hakim";

// Gate rules (competition.yaml): UTF-8 text of 1 to 30 characters, not only
// whitespace, a single word with no spaces and no padding.
if (ENTRY_WORD.length < 1 || ENTRY_WORD.length > 30) {
  throw new Error(
    `entry word must be 1-30 characters, got ${ENTRY_WORD.length}`,
  );
}
if (/\s/.test(ENTRY_WORD)) {
  throw new Error("entry word must be a single word with no whitespace");
}
// No padding: the word must be exactly itself when trimmed, and its UTF-8
// byte length must also fit the 1-30 character gate (one byte per char here).
if (ENTRY_WORD !== ENTRY_WORD.trim()) {
  throw new Error("entry word must not have leading or trailing padding");
}
if (Buffer.byteLength(ENTRY_WORD, "utf8") > 30) {
  throw new Error("entry word must be at most 30 bytes of UTF-8 text");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY_WORD, "utf8");

// Read back and verify: the file on disk must be byte-for-byte the entry
// word, so two runs always produce identical output.
const written = readFileSync(outPath, "utf8");
if (written !== ENTRY_WORD) {
  throw new Error("written entry.txt does not match the entry word");
}
console.log(`wrote ${outPath} (${ENTRY_WORD.length} chars)`);
