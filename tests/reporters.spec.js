import { test, expect } from "@playwright/test";

test("should navigate to ParaBank page", async ({ page }) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  await expect(page).toHaveTitle("ParaBank | Welcome | Online Banking");
});

test("should navigate to the OWASp page", async ({ page }) => {
  await page.goto("https://owasp.org/www-project-juice-shop/");
  await expect(page).toHaveTitle("OWASP Juice Shop | OWASP Foundation");
});

test("should navigate to the Demoblaze page", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");
  await expect(page).toHaveTitle("STORE");
});