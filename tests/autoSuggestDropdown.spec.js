import { test, expect } from "@playwright/test";

test("should select a suggestion from Wikipedia auto-suggest dropdown", async ({
  page,
}) => {
  await page.goto("https://www.wikipedia.org/");
  await page.locator("#searchInput").fill("Playwright");

  const firstSuggestion = page.locator(".suggestions-dropdown a").first();
  // Get the text of the suggestion we are about to click
  const suggestionText = await firstSuggestion.locator("h3").innerText();
  await firstSuggestion.click();

  // Assert that the new page title contains the text of the clicked suggestion
  await expect(page).toHaveTitle(new RegExp(suggestionText));
});
