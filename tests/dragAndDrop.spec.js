import { test, expect } from "@playwright/test";

test("should drag and drop Washington to United States", async ({ page }) => {
  await page.goto(
    "http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
  );
  const washingtonBox = page.locator("#box3");
  const unitedStatesBox = page.locator("#box103");

  await washingtonBox.dragTo(unitedStatesBox);

  await expect(washingtonBox).toHaveCSS("background-color", "rgb(0, 255, 0)");
});
