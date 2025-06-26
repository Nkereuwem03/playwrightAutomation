import { test, expect } from "@playwright/test";

test("should validate all input fields, checkboxes, radio buttons, and form submission on practice-automation.com", async ({
  page,
}) => {
  await page.goto("https://practice-automation.com/form-fields/");
  await expect(
    page.getByRole("link", { name: "automateNow Logo" })
  ).toBeVisible();
  await expect(page.locator("h1[itemprop='headline']")).toHaveText(
    "Form Fields"
  );

  // name
  const nameInput = page.locator("#name-input");
  await expect(nameInput).toBeEmpty();
  await expect(nameInput).toBeEditable();
  await nameInput.fill(process.env.TEST_USERNAME);
  await expect(nameInput).toHaveValue(process.env.TEST_USERNAME);

  // password
  const passwordInput = page.locator("input[type='password']");
  await expect(passwordInput).toBeEmpty();
  await expect(passwordInput).toBeEditable();
  await passwordInput.fill(process.env.TEST_PASSWORD);
  await expect(passwordInput).toHaveValue(process.env.TEST_PASSWORD);

  await expect(page.getByText("What is your favorite drink?")).toBeVisible();

  // checkboxes
  const checkboxes = ["#drink1", "#drink2", "#drink3"];
  for (const selector of checkboxes) {
    const checkbox = page.locator(selector);
    await expect(checkbox).toBeVisible();
    await expect(checkbox).not.toBeChecked();
    await checkbox.check();
    await expect(checkbox).toBeChecked();
  }

  // radio buttons
  const redRadioButton = page.locator("#color1");
  await redRadioButton.check();
  await expect(redRadioButton).toBeChecked();

  // select
  const selectElement = page.locator("#automation");
  await selectElement.selectOption("yes");

  // input
  const emailInput = page.locator("#email");
  await expect(emailInput).toBeEditable();
  await emailInput.clear();
  await emailInput.fill(process.env.TEST_EMAIL);
  await expect(emailInput).toHaveValue(process.env.TEST_EMAIL);
  await expect(emailInput).toHaveAttribute("id", "email");

  // textarea
  const messageTextarea = page.locator("#message");
  await expect(messageTextarea).toBeEditable();
  await messageTextarea.fill("This is a test message.");
  await expect(messageTextarea).toHaveValue("This is a test message.");

  // submit button
  const submitButton = page.locator("#submit-btn");
  await expect(submitButton).toBeEnabled();
  await submitButton.click();
});
