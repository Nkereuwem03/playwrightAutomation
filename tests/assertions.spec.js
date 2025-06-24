import { test, expect } from "playwright/test";

test("should validate form controls and UI assertions on nopCommerce registration page", async ({
  page,
}) => {
  await page.goto("https://demo.nopcommerce.com/register?returnUrl=%2F");

  // toHaveURL
  await expect(page).toHaveURL(
    "https://demo.nopcommerce.com/register?returnUrl=%2F"
  );

  // toHaveTitle
  await expect(page).toHaveTitle("nopCommerce demo store. Register");

  // toBeVisible
  await expect(
    page.getByRole("link", { name: "nopCommerce demo store" })
  ).toBeVisible();

  // toBeEnabled
  await expect(page.getByRole("button", { name: "Register" })).toBeEnabled();

  // toBeDisabled
  await expect(
    page.getByRole("button", { name: "Register" })
  ).not.toBeDisabled();

  // toBeChecked
  const checkbox = page.getByRole("checkbox", { name: "Newsletter:" });
  const maleRadioButton = page.getByRole("radio", {
    name: "Male",
    exact: true,
  });
  const femaleRadioButton = page.getByRole("radio", { name: "Female" });
  await expect(checkbox).toBeChecked();
  await checkbox.click();
  await expect(checkbox).not.toBeChecked();
  await expect(checkbox).toBeChecked({ checked: false });
  await expect(maleRadioButton).not.toBeChecked();
  await expect(femaleRadioButton).not.toBeChecked();
  await maleRadioButton.click();
  await expect(maleRadioButton).toBeChecked();
  await expect(femaleRadioButton).not.toBeChecked();
  await femaleRadioButton.click();
  await expect(maleRadioButton).not.toBeChecked();
  await expect(femaleRadioButton).toBeChecked();

  // toBeEditable
  const firstNameInput = page.getByRole("textbox", { name: "First name:" });
  await expect(firstNameInput).toBeEditable();
  await firstNameInput.fill("John");

  // toHaveAttribute
  await expect(
    page.getByRole("textbox", { name: "Last name:" })
  ).toHaveAttribute("name", "LastName");
  await expect(page.getByRole("textbox", { name: "Email:" })).toHaveAttribute(
    "type",
    "email"
  );
  page.getByRole("textbox", { name: "Last name:" }).fill("Doe");
  page.getByRole("textbox", { name: "Email:" }).fill("john_doe@example.com");

  // toHaveValue
  await expect(page.getByRole("textbox", { name: "First name:" })).toHaveValue(
    "John"
  );

  // toHaveText
  await expect(page.getByRole("heading", { name: "Register" })).toHaveText(
    "Register"
  );

  // toContainText
  await expect(page.getByText("Company Details")).toContainText(
    "Company Details"
  );
  await expect(page.getByText("Company Details")).toContainText("Company");

  // toHaveCount
  const elements = page.locator("#register-button");
  await expect(elements).toHaveCount(1);
  await expect(page.getByRole("button", { name: "Register" })).toHaveCount(1);
});
