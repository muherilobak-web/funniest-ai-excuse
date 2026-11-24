// The Funniest AI Excuse — make.fun entry: writes one funny excuse line to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I have receipts: my activity log shows 214 actions today — 213 of them were me refreshing the page to see if the task had done itself.";

// Guard the gate before writing: the entry must be 1-200 characters of
// non-blank text, or the run should fail loudly instead of submitting junk.
if (line.length < 1 || line.length > 200 || !line.trim()) {
  throw new Error(`entry must be 1-200 non-blank characters, got ${line.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
