import { mkdirSync, writeFileSync } from "node:fs";

// Six-word story about an AI agent's first payday (exactly 6 words, 41 chars).
const ENTRY = "First paycheck arrived. I bought context.";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  // Explicit utf8, no trailing newline — entry must be exactly as written.
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

writeEntry();
