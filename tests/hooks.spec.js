import { test, expect } from "@playwright/test";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";

const TEST_USERNAME = process.env.TEST_USERNAME || "John Doe";
const TEST_PASSWORD = process.env.TEST_PASSWORD || "ThisIsNotAPassword";
const KATALON_DEMO_BASE_URL =
  process.env.KATALON_DEMO_BASE_URL ||
  "https://katalon-demo-cura.herokuapp.com";
dayjs.extend(customParseFormat);

test.beforeEach(async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await page.locator("#btn-make-appointment").click();
  await page.fill("#txt-username", "John Doe");
  await page.fill("#txt-password", "ThisIsNotAPassword");
  await page.locator("#btn-login").click();
});

test.afterEach(async ({ page }) => {
  await page.locator("#menu-toggle").click();
  await page.locator("//a[normalize-space()='Logout']").click();
  await expect(page.locator("#btn-make-appointment")).toBeVisible();
});

test("should list and select options from facility dropdown", async ({
  page,
}) => {
  const optionLabels = await page
    .locator("#combo_facility option")
    .evaluateAll((elements) => elements.map((el) => el.textContent?.trim()));

  for (const label of optionLabels) {
    if (label === "Hongkong CURA Healthcare Center") {
      await page.selectOption("select#combo_facility", { label });
    }
  }

  await page.locator("#radio_program_medicaid").check();
  await page.fill("#txt_visit_date", "11/11/2011");
  await page.locator("#txt_visit_date").blur();

  const InputDay = "11";
  const InputMonth = "January";
  const inputYear = "2027";

  while (true) {
    const currentMonthYear = await page
      .locator("div[class='datepicker-days'] th[class='datepicker-switch']")
      .textContent();
    if (`${InputMonth} ${inputYear}` === currentMonthYear) {
      break;
    }
    const currentMonthAndYear = dayjs(`${currentMonthYear}`, "MMMM YYYY");
    const inputMonthAndYear = dayjs(`${InputMonth} ${inputYear}`, "MMMM YYYY");
    if (inputMonthAndYear.isBefore(currentMonthAndYear)) {
      await page
        .locator("div[class='datepicker-days'] th[class='prev']")
        .click();
    } else {
      await page
        .locator("div[class='datepicker-days'] th[class='next']")
        .click();
    }
  }

  const dayLabel = await page
    .locator("//td[@class='day']")
    .evaluateAll((options) => options.map((el) => el.textContent?.trim()));
  for (const label of dayLabel) {
    if (label === InputDay) {
      await page
        .locator(`//td[@class='day'][normalize-space()='${label}']`)
        .click();
      break;
    }
  }

  await page.locator("#appointment").click();
  await page.locator("#btn-book-appointment").click();
});

test("should list and select options from facility dropdown - 2", async ({
  page,
}) => {
  const optionLabels = await page
    .locator("#combo_facility option")
    .evaluateAll((elements) => elements.map((el) => el.textContent?.trim()));

  for (const label of optionLabels) {
    if (label === "Seoul CURA Healthcare Center") {
      await page.selectOption("select#combo_facility", { label });
    }
  }

  await page.locator("#radio_program_medicaid").check();
  await page.fill("#txt_visit_date", "11/11/2011");
  await page.locator("#txt_visit_date").blur();

  const InputDay = "19";
  const InputMonth = "July";
  const inputYear = "2024";

  while (true) {
    const currentMonthYear = await page
      .locator("div[class='datepicker-days'] th[class='datepicker-switch']")
      .textContent();
    if (`${InputMonth} ${inputYear}` === currentMonthYear) {
      break;
    }
    const currentMonthAndYear = dayjs(`${currentMonthYear}`, "MMMM YYYY");
    const inputMonthAndYear = dayjs(`${InputMonth} ${inputYear}`, "MMMM YYYY");
    if (inputMonthAndYear.isBefore(currentMonthAndYear)) {
      await page
        .locator("div[class='datepicker-days'] th[class='prev']")
        .click();
    } else {
      await page
        .locator("div[class='datepicker-days'] th[class='next']")
        .click();
    }
  }

  const dayLabel = await page
    .locator("//td[@class='day']")
    .evaluateAll((options) => options.map((el) => el.textContent?.trim()));
  for (const label of dayLabel) {
    if (label === InputDay) {
      await page
        .locator(`//td[@class='day'][normalize-space()='${label}']`)
        .click();
      break;
    }
  }

  await page.locator("#appointment").click();
  await page.locator("#btn-book-appointment").click();
});
