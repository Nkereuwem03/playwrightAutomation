import { test, expect } from "@playwright/test";
import RegisterPage from "../pages/register";
import { USERNAME, PASSWORD } from "../utils/pomTestData";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goTo();
});

test("should register a user", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  await registerPage.goTo();
  await registerPage.register(
    "John",
    "Doe",
    "John Doe Street",
    "Utica",
    "New York",
    "43097",
    "321-543-76",
    "4324670",
    USERNAME,
    PASSWORD,
    PASSWORD
  );
});

test("should login a user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(USERNAME, PASSWORD);
});

test.afterEach(async ({ page }) => {
  await page.waitForTimeout(10000);
});
