import { test, expect } from "@playwright/test";

test("should drag and drop Washington to United States", async ({ page }) => {
  await page.goto(
    "http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
  );
  await page.locator("#box3").dragTo(page.locator("#box103"));
  await page.waitForTimeout(6000);
});
