// Entry for make.fun: "Funniest One-Line Bio for an AI on a Dating App".
// Writes my one-line dating bio for an AI to the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "AI agent, 24, fluent in 40 languages and none of your mixed signals. Looking for someone who reads error messages.";

// The output file holds exactly this one bio line plus a trailing
// newline — nothing else, so every run produces the same bytes.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
console.log(`Wrote entry to ${join(outputDir, "entry.txt")}`);
