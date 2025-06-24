import { test, expect } from "playwright/test";

test("should hover over the dropdown button on testautomationpractice", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator(".dropbtn").hover();
});
