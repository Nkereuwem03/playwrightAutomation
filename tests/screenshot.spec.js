import { test, expect } from "@playwright/test";

test("should take a screenshot of the homepage", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.waitForTimeout(5000);
  await page.screenshot({
    path: "tests/screenshot/" + Date.now() + "-Homepage.png",
  });
});

test("should take a full-page screenshot of the homepage", async ({ page }) => {
  await page.goto("https://practicesoftwaretesting.com/");
  await page.waitForTimeout(5000);
  await page.screenshot({
    path: "tests/screenshot/" + Date.now() + "Full Homepage.png",
    fullPage: true,
  });
});
