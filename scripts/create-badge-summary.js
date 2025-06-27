import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";

const resultsPath = path.join(process.cwd(), "test-results/results.json");
const badgePath = path.join(process.cwd(), "test-results/badge-summary.json");
const badgeDir = path.dirname(badgePath);

try {
  // Ensure the output directory exists before we do anything else.
  mkdirSync(badgeDir, { recursive: true });

  const results = JSON.parse(readFileSync(resultsPath, "utf8"));
  const stats = results.stats;
  const passed = stats.passed;
  const total = stats.expected;
  const hasFailures =
    stats.failed > 0 || stats.unexpected > 0 || stats.interrupted > 0;

  const color = hasFailures ? "red" : "brightgreen";
  const message = `${passed} / ${total} passed`;

  const summary = {
    schemaVersion: 1,
    label: "tests",
    message: message,
    color: color,
  };

  writeFileSync(badgePath, JSON.stringify(summary, null, 2));
  console.log("Badge summary created successfully!");
} catch (error) {
  console.error("Failed to create badge summary:", error.message);
  // Create a default error badge since we couldn't read the results.
  const errorBadge = {
    schemaVersion: 1,
    label: "tests",
    message: "report not found",
    color: "lightgrey",
  };
  writeFileSync(badgePath, JSON.stringify(errorBadge, null, 2));
}
