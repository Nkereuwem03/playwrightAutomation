import { test, expect } from "@playwright/test";

test("should trigger double-click event using clickCount option", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .locator("button[ondblclick='myFunction1()']")
    .click({ clickCount: 2 });
  await page.waitForTimeout(6000);
});

test("should trigger double-click event using dblclick method", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("button[ondblclick='myFunction1()']").dblclick();
  await page.waitForTimeout(6000);
});
