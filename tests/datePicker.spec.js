import { expect, test } from "@playwright/test";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

test("should fill the date picker input with a specific date", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.fill("#datepicker", "2023-10-01");
});

test("should select a specific date using the date picker UI and validate input value", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const yearInput = "2026";
  const monthInput = "June";
  const dayInput = "10";

  await page.locator("#datepicker").click();
  while (true) {
    const currentMonth = await page
      .locator(".ui-datepicker-month")
      .textContent();
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    if (currentMonth === monthInput && currentYear === yearInput) {
      break;
    }
    const currentMonthAndYear = dayjs(
      `${currentMonth} ${currentYear}`,
      "MMMM YYYY"
    );
    const monthAndYearInput = dayjs(`${monthInput} ${yearInput}`, "MMMM YYYY");
    if (monthAndYearInput.isBefore(currentMonthAndYear)) {
      await page.locator("a[title='Prev']").click();
    } else {
      await page.locator("a[title='Next']").click();
    }
  }

  const dayLocator = await page.$$(".ui-state-default");
  for (const locator of dayLocator) {
    const text = await locator.textContent();
    if (text === dayInput) {
      await locator.click();
      break;
    }
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthIndex = "0" + (months.indexOf(monthInput) + 1);

  await page.locator("#datepicker").blur();
  
  await expect(page.locator("#datepicker")).toHaveValue(
    `${monthIndex}/${dayInput}/${yearInput}`
  );

  await page.waitForTimeout(6000);
});

test("should select the 25th day from the date picker calendar", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#datepicker").click();
  const day = "25";
  await page.locator(`//a[@class='ui-state-default'][text()=${day}]`).click();
});
