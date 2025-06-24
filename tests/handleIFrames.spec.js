import { test, expect } from "@playwright/test";

test("should interact with multiple frames and fill input fields", async ({
  page,
}) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");

  // total number of frames
  const allFrames = page.frames();
  expect(allFrames.length).toBe(7);

  // aproach 1
  const frame1 = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  await frame1.locator("input[name='mytext3']").fill("Frame 3 Text");

  // aproach 2
  const frame2 = page.frameLocator("frame[src='frame_4.html']");
  await frame2.locator("input[name='mytext4']").fill("Frame 4 Text");
});

test("should validate form fields and error messages inside the Products iframe", async ({
  page,
}) => {
  await page.goto("https://commitquality.com/practice");
  await page.locator(".iframes-container.container-outline").click();

  const frame = page.frameLocator("iframe[title='Products']");
  await frame.getByRole("link", { name: "Add Product" }).click();

  await expect(page.getByText("Add Product")).toBeVisible();

  const nameField = frame.getByPlaceholder("Enter a product name");
  await nameField.clear();
  await nameField.focus();
  await nameField.blur(); // to remove focus from the input field
  await expect(
    frame.getByText("Name must be at least 2 characters.")
  ).toBeVisible();
  await expect(
    frame.getByText("Name must be at least 2 characters.")
  ).toHaveText("Name must be at least 2 characters.");
  await expect(nameField).toHaveValue("");
  await expect(nameField).toBeEmpty();
  await expect(nameField).toBeEditable();
  await nameField.fill("John Doe");
  await expect(nameField).toHaveValue("John Doe");
  await nameField.blur();
  await expect(
    frame.getByText("Name must be at least 2 characters.")
  ).not.toBeVisible();

  const priceField = frame.getByPlaceholder("Enter a price");
  await priceField.clear();
  await priceField.focus();
  await priceField.blur();
  await expect(
    frame.getByText("Price must not be empty and within 10 digits")
  ).toBeVisible();
  await expect(
    frame.getByText("Price must not be empty and within 10 digits")
  ).toHaveText("Price must not be empty and within 10 digits");
  await expect(priceField).toHaveValue("");
  await expect(priceField).toBeEmpty();
  await expect(priceField).toBeEditable();
  await priceField.fill("100");
  await expect(priceField).toHaveValue("100");
  await priceField.blur();
  await expect(
    frame.getByText("Price must not be empty and within 10 digits")
  ).not.toBeVisible();

  const dateField = frame.getByTestId("date-stocked");
  await dateField.clear();
  await dateField.click();
  await dateField.blur();
  await expect(frame.getByText("Date must not be empty.")).toBeVisible();
  await expect(frame.getByText("Date must not be empty.")).toHaveText(
    "Date must not be empty."
  );
  await expect(dateField).toHaveValue("");
  await expect(dateField).toBeEmpty();
  await expect(dateField).toBeEditable();
  await dateField.focus();
  await dateField.fill("0025-06-18");
  console.log(await dateField.inputValue());
  await expect(dateField).toHaveValue("0025-06-18");
  await dateField.blur();
  await expect(
    frame.getByText("Date must not be older than 100 years.")
  ).toBeVisible();
  await dateField.clear();
  await dateField.fill("2025-06-10");
  await expect(dateField).toHaveValue("2025-06-10");
  await dateField.blur();
  await expect(
    frame.getByText("Date must not be older than 100 years.")
  ).not.toBeVisible();
  await expect(frame.getByText("Date must not be empty.")).not.toBeVisible();
  await expect(frame.getByTestId("all-fields-validation")).not.toBeVisible();
  await frame.getByTestId("submit-form").click();

  await page.waitForTimeout(3000);
});
