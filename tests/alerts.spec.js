import { test, expect } from "@playwright/test";

// Alert dialog test
test("should handle alert dialog and accept it", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling alert dialog handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("alert");
    expect(dialog.message()).toContain("I am an alert box!");
    await dialog.accept();
  });

  await page.click("#alertBtn");
  //   await page.waitForTimeout(6000);
});

// Confirm dialog test
test("should handle confirm dialog and dismiss it", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling alert dialog handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("confirm");
    expect(dialog.message()).toContain("Press a button!");
    // await dialog.accept(); // close the dialog with OK
    await dialog.dismiss(); // close the dialog with Cancel
  });

  await page.click("#confirmBtn");
  await expect(page.locator("#demo")).toHaveText("You pressed Cancel!");
  //   await page.waitForTimeout(6000);
});

test("should handle prompt dialog, provide input, and accept it", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // enabling alert dialog handler
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toContain("prompt");
    expect(dialog.message()).toContain("Please enter your name:");
    expect(dialog.defaultValue()).toContain("Harry Potter");
    await dialog.accept("John Doe"); // provide input and close the dialog with OK
    // await dialog.dismiss(); // close the dialog with Cancel
  });

  await page.click("#promptBtn");
  await expect(page.locator("#demo")).toHaveText(
    "Hello John Doe! How are you today?"
  );
  //   await page.waitForTimeout(6000);
});
