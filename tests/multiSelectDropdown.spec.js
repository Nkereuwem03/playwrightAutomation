import { expect, test } from "@playwright/test";

test("should select multiple colors and verify selected and total options in multi-select dropdown", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // Select multiple options in a multi-select dropdown
  await page.selectOption("#colors", ["red", "blue", "yellow"]);

  // check number of options in the multi-select dropdown
  const dropdownOptions = await page.locator("#colors option").count();
  expect(dropdownOptions).toBe(7);
  expect(await page.$$("#colors option")).toHaveLength(7);

  // verify number of selected options
  const selectedOptions = page.locator("#colors option:checked");
  expect(await selectedOptions.count()).toBe(3);
  await expect(selectedOptions).toHaveCount(3);
  expect(await page.$$("#colors option:checked")).toHaveLength(3);

});
