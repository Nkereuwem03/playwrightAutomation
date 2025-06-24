import { test, expect } from "@playwright/test";

test("should copy text from first input and paste into second input using keyboard shortcuts", async ({
  page,
}) => {
  await page.goto("https://text-compare.com/");
  await page.locator("#inputText1").fill("Paste one version of the text here.");
  await page.keyboard.press("Control+A");
  await page.keyboard.press("Control+C");
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");
  await page.keyboard.press("Control+V");
});
