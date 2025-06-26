import { test, expect } from "@playwright/test";

test("should register, login, and visit each product on Demoblaze using locators", async ({
  page,
}) => {
  await page.goto("https://www.demoblaze.com/");
  await page.click("#signin2");
  await expect(page.locator("#signInModalLabel")).toHaveText("Sign up");
  await page.fill("#sign-username", "username");
  await page.fill("#sign-password", "password");
  const signUp = page.locator("button[onclick='register()']");
  await expect(signUp).toHaveText("Sign up");
  await signUp.click();
  await page.click("div[id='signInModal'] span[aria-hidden='true']");

  await page.click("#login2");
  await expect(page.locator("#logInModalLabel")).toHaveText("Log in");
  const username = "username";
  await page.fill("#loginusername", username);
  await page.fill("#loginpassword", "password");
  const login = page.locator("button[onclick='logIn()']");
  await expect(login).toHaveText("Log in");
  await login.click();
  await expect(page.locator("#nameofuser")).toHaveText(`Welcome ${username}`);

  const itemCount = await page.locator("a.hrefch").count();
  for (let i = 0; i < itemCount; i++) {
    const item = page.locator("a.hrefch").nth(i);
    const itemText = await item.textContent();
    await item.click();
    await page.goBack();
  }
});
