import { test, expect } from "@playwright/test";

test("should open multiple pages in one browser context and validate their titles", async ({ context }) => {
  const pageOne = await context.newPage();
  const pageTwo = await context.newPage();
  
  await pageOne.goto("https://parabank.parasoft.com/parabank/index.htm");
  await expect(pageOne).toHaveTitle("ParaBank | Welcome | Online Banking");

  await pageTwo.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(pageTwo).toHaveTitle("CURA Healthcare Service");

  const pageThree = await context.newPage();
  await pageThree.goto("https://www.demoblaze.com/");
  await expect(pageThree).toHaveTitle("STORE");
});

test("should handle new tab opening and validate its title in OrangeHRM", async ({ page, context }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(page).toHaveTitle("OrangeHRM");

  const pagePromise = context.waitForEvent("page");
  await page.locator("a[href='http://www.orangehrm.com']").click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle(
    "Human Resources Management Software | OrangeHRM HR Software "
  );
});
