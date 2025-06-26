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
  const userData = {
    firstName: "John",
    lastName: "Doe",
    address: "John Doe Street",
    city: "Utica",
    state: "New York",
    zipCode: "43097",
    phone: "321-543-76",
    ssn: "4324670",
    username: USERNAME,
    password: PASSWORD,
    confirmPassword: PASSWORD,
  };
  await registerPage.register(userData);
});

test("should login a user", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.login(USERNAME, PASSWORD);
});