import { test, expect } from "@playwright/test";

test("should open context menu on right-click using jQuery-contextMenu demo", async ({
  page,
}) => {
  await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
  await page
    .locator(".context-menu-one.btn.btn-neutral")
    .click({ button: "right" });
  await expect(page.locator(".context-menu-list")).toBeVisible();
});
