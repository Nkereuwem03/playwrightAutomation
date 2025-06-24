import { test, expect } from "@playwright/test";

// Test 1: Count dropdown options
test("should have 10 country options in the dropdown", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const dropdownOptions = page.locator("#country option");

  // assert the number of options in the dropdown - approach 1
  await expect(dropdownOptions).toHaveCount(10);

  // assert the number of options in the dropdown - approach 2
  const dropdownOptions2 = await page.$$("#country option");
  expect(dropdownOptions2.length).toBe(10);
});

// Test 2: Validate first option in dropdown using multiple approaches
test("should validate the first country option in the dropdown using various methods", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const dropdownOptions = page.locator("#country option");

  // assert the first option in the dropdown - approach 1
  await expect(dropdownOptions.first()).toHaveText("United States");

  // assert the first option in the dropdown - approach 2
  const firstOptionText = (await dropdownOptions.first().textContent()).trim();
  expect(firstOptionText).toBe("United States");

  // assert the first option in the dropdown - approach 3
  const firstOptionText2 = await dropdownOptions
    .first()
    .evaluate((option) => option.textContent);
  expect(firstOptionText2.trim()).toBe("United States");

  // assert the first option in the dropdown - approach 4
  const firstOptionText3 = await dropdownOptions
    .first()
    .evaluate((option) => option.innerText);
  expect(firstOptionText3.trim()).toBe("United States");

  // assert the first option in the dropdown - approach 5
  const firstOptionText4 = await dropdownOptions
    .first()
    .evaluate((option) => option.innerHTML);
  expect(firstOptionText4.trim()).toBe("United States");

  // assert the first option in the dropdown - approach 6
  const firstOptionText5 = await dropdownOptions
    .first()
    .evaluate((option) => option.outerHTML);
  expect(firstOptionText5).toContain("United States");

  // assert the first option in the dropdown - approach 7
  const firstOptionText6 = await dropdownOptions
    .first()
    .evaluate((option) => option.outerText);
  expect(firstOptionText6.trim()).toBe("United States");

  // assert the first option in the dropdown - approach 8
  const firstOptionText7 = await dropdownOptions
    .first()
    .evaluate((option) => option.text);
  expect(firstOptionText7.trim()).toBe("United States");

  // assert the first option in the dropdown - approach 9
  const firstOptionValue = await dropdownOptions.first().getAttribute("value");
  expect(firstOptionValue.trim()).toBe("usa");
  expect(firstOptionValue).toBeTruthy();

  // assert the first option in the dropdown - approach 10
  const firstOptionValue2 = await dropdownOptions
    .first()
    .evaluate((option) => option.value);
  expect(firstOptionValue2.trim()).toBe("usa");
});

// Test 3: Check presence of value and label in dropdown
test("should check presence of a value and label in the country dropdown", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // check presence of a value in the dropdown - approach 1
  const dropdownOptions = await page.$$("#country option");
  let status = false;

  for (const option of dropdownOptions) {
    let value = await option.getAttribute("value");
    let text = await option.textContent();

    // if (value === "usa" && text.trim() === "United States") {
    //   status = true;
    //   break;
    // }

    if (value.includes("usa") || value.includes("United States")) {
      await page.selectOption("#country", value);
      status = true;
      break;
    }
    if (text.includes("United States")) {
      status = true;
      break;
    }
  }

  expect(status).toBeTruthy();

  // check presence of a value in the dropdown - approach 2
  const isOptionPresent = await page
    .locator("#country")
    .evaluateAll((options) => options.some((option) => option.value === "usa"));
  expect(isOptionPresent).toBe(true);

  // check presence of a label in the dropdown - approach 3
  const dropdownOptionsArray = await page.locator("#country").textContent();
  expect(dropdownOptionsArray.includes("United States")).toBeTruthy();
  expect(dropdownOptionsArray).toContain("United States");
});

// Test 4: Select options in dropdown by value, label, and index
test("should select country options by value, label, index, and multiple selections", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const dropdown = page.locator("#country");

  // Single selection matching the value or label
  await dropdown.selectOption("usa");
  await dropdown.selectOption("United States");

  // Single selection matching the label
  await dropdown.selectOption({ label: "Canada" });

  // Single selection matching the index
  await dropdown.selectOption({ index: 9 });

  // Multiple selected items
  await dropdown.selectOption(["gemany", "france"]);
  await dropdown.selectOption(["Brazil", "India"]);
});
