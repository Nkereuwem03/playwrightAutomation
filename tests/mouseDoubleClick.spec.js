import { test, expect } from "@playwright/test";

test("should copy text on double-click using clickCount option", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const field1 = page.locator("#field1");
  const field2 = page.locator("#field2");
  const button = page.locator("button[ondblclick='myFunction1()']");

  await field1.fill("Hello World");
  await button.click({ clickCount: 2 });
  await expect(field2).toHaveValue("Hello World");
});

test("should copy text on double-click using dblclick method", async ({
  page
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const field1 = page.locator("#field1");
  const field2 = page.locator("#field2");
  const button = page.locator("button[ondblclick='myFunction1()']");

  await field1.fill("Hello World");
  await button.dblclick();
  await expect(field2).toHaveValue("Hello World");
});
