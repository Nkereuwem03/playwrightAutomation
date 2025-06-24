import { test, expect } from "@playwright/test";

test("should select a suggestion containing '56' from Wikipedia auto-suggest dropdown", async ({
  page,
}) => {
  await page.goto("https://www.wikipedia.org/");
  await page.locator("#searchInput").fill("Playwright");
  await page.waitForSelector(".suggestions-dropdown a>div>h3", {
    state: "visible",
  });
  const options = await page.$$(".suggestions-dropdown a>div>h3");
  for (const option of options) {
    const text = await option.innerText();
    if (text.includes("56")) {
      await option.click();
      break;
    }
  }
  await page.waitForTimeout(8000);
});
