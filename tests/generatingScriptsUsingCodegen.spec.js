import { test, expect } from "@playwright/test";

test("should generate test using codegen", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/index.html");
  await expect(page.getByRole("link", { name: "PRODUCT STORE" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Sign up" })).toBeVisible();
  await page.getByRole("link", { name: "Sign up" }).click();
  await expect(page.locator("#signInModalLabel")).toContainText("Sign up");
  await page.getByRole("textbox", { name: "Username:" }).fill("johndoe");
  await page.getByRole("textbox", { name: "Password:" }).fill("password");
  page.once("dialog", (dialog) => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole("button", { name: "Sign up" }).click();
  await page.getByLabel("Sign up").getByText("Close").click();
});
