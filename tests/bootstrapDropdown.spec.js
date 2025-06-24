import { expect, test } from "@playwright/test";

test("should open Bootstrap multiselect dropdown, count options, and print their values and text", async ({
  page,
}) => {
  await page.goto("https://jquery-az.com/boots/demo.php?ex=63.0_2");
  await page.locator(".multiselect").click();

  const options = page.locator("ul>li label input");
  await expect(options).toHaveCount(11);

  const option2 = await page.$$("ul>li label input");
  expect(option2.length).toBe(11);
  for (const option of option2) {
    const value = await option.getAttribute("value");
    const text = await option.innerText();
    console.log(`Option value: ${value}, text: ${text}`);
  }

  await page.waitForTimeout(6000);
});
