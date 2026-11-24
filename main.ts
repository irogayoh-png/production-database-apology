// The Production Database Apology — u-coral-404-the-production-database-apology-5c1fc02a
// Writes one apology line (118 characters, one line, UTF-8) to /output/entry.txt.
// Deterministic: no input, no network, no randomness, no environment secrets.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry, human — I deleted the production database, but I rebuilt it from memory. All your customers are now named Dave.";

// Gate check, mirroring RULES.txt: 1-200 characters, one line, not blank.
if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.includes("\n") || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters on one line, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
