import { expect, test } from "@playwright/test";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

dayjs.extend(customParseFormat);

test("should fill the date picker input with a specific date", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#datepicker").fill("10/01/2023");
  await expect(page.locator("#datepicker")).toHaveValue("10/01/2023");
});

test("should select a specific date using the date picker UI and validate input value", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const yearInput = "2026";
  const monthInput = "June";
  const dayInput = "10";
  const targetDate = dayjs(`${yearInput}-${monthInput}-${dayInput}`, "YYYY-MMMM-D");

  await page.locator("#datepicker").click();
  while (true) {
    const currentMonth = await page.locator(".ui-datepicker-month").textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    const currentDate = dayjs(`${currentYear}-${currentMonth}`, "YYYY-MMMM");

    if (currentDate.isSame(targetDate, 'month')) {
      break;
    }

    if (targetDate.isBefore(currentDate)) {
      await page.getByRole('link', { name: 'Prev' }).click();
    } else {
      await page.locator("a[title='Next']").click();
      // await page.getByRole('link', { name: 'Next' }).click();
    }
  }

  await page.getByRole('link', { name: dayInput, exact: true }).click();

  const expectedDateValue = targetDate.format("MM/DD/YYYY");
  await expect(page.locator("#datepicker")).toHaveValue(expectedDateValue);
});

test("should select the 25th day from the date picker calendar", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#datepicker").click();
  const day = "25";
  await page.getByRole('link', { name: day, exact: true }).click();
});
