import { test, expect } from "@playwright/test";

test("should generate test using codegen", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page.getByRole("link", { name: "PRODUCT STORE" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Sign up" })).toBeVisible();
  await page.getByRole("link", { name: "Sign up" }).click();
  await expect(page.locator("#signInModalLabel")).toContainText("Sign up");
  await page.getByRole("textbox", { name: "Username:" }).fill(process.env.TEST_USERNAME);
  await page.getByRole("textbox", { name: "Password:" }).fill(process.env.TEST_PASSWORD);
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByLabel("Sign up").getByText("Close").click();
});
