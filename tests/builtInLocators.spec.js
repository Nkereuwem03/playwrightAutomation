import { test, expect } from "@playwright/test";

test("should open and close the Demos dropdown using getByRole locator", async ({
  page,
}) => {
  await page.goto("https://practice.expandtesting.com/");
  await page.getByRole("button", { name: "Demos" }).click();
  await expect(page.locator(".dropdown-menu.show")).toBeVisible();
  await page.getByRole("button", { name: "Demos" }).click();
});

test("should navigate to Parabank using getByText locator", async ({
  page,
}) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  await page.getByText("Register").click();
  await expect(page).toHaveTitle(
    "ParaBank | Register for Free Online Account Access"
  );
  await expect(page.getByText("Signing up is easy!")).toBeVisible();
});

test("should return to Parabank home page by clicking the logo using getByAitText", async ({
  page,
}) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  await page.getByText("Register").click();
  await expect(page).toHaveTitle(
    "ParaBank | Register for Free Online Account Access"
  );
  await expect(page.getByText("Signing up is easy!")).toBeVisible();
  await page.getByAltText("ParaBank").click();
  await expect(page).toHaveURL(
    "https://parabank.parasoft.com/parabank/index.htm"
  );
});

test("should return to Parabank home page by clicking the logo using getByTitle", async ({
  page,
}) => {
  await page.goto("https://parabank.parasoft.com/parabank/index.htm");
  await page.getByText("Register").click();
  await expect(page).toHaveTitle(
    "ParaBank | Register for Free Online Account Access"
  );
  await expect(page.getByText("Signing up is easy!")).toBeVisible();
  await page.getByTitle("ParaBank").click();
  await expect(page).toHaveURL(
    "https://parabank.parasoft.com/parabank/index.htm"
  );
});
