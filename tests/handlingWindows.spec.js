import { test, expect, chromium } from "@playwright/test";

test("should open multiple pages in one browser context and validate their titles", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const pageOne = await context.newPage();
  const pageTwo = await context.newPage();
  const pageThree = await context.newPage();
  const allPages = context.pages().length;

  await pageOne.goto("https://parabank.parasoft.com/parabank/index.htm");
  await expect(pageOne).toHaveTitle("ParaBank | Welcome | Online Banking");

  await pageTwo.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(pageTwo).toHaveTitle("CURA Healthcare Service");

  await pageThree.goto("https://www.demoblaze.com/");
  await expect(pageThree).toHaveTitle("STORE");

  await pageOne.locator("//a[normalize-space()='Samsung galaxy s6']").click();

  // await pageOne.waitForTimeout(10000);
  // await pageTwo.waitForTimeout(10000);
});

test.only("should handle new tab opening and validate its title in OrangeHRM", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const pageOne = await context.newPage();
  const pageTwo = await context.newPage();
  const pageThree = await context.newPage();
  const allPages = context.pages().length;

  await pageOne.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await expect(pageOne).toHaveTitle("OrangeHRM");

  const pagePromise = context.waitForEvent("page");
  await pageOne.locator("a[href='http://www.orangehrm.com']").click();

  const newPage = await pagePromise;
  await expect(newPage).toHaveTitle(
    "Human Resources Management Software | OrangeHRM HR Software "
  );

  // await pageOne.waitForTimeout(10000);
  // await pageTwo.waitForTimeout(10000);

  await browser.close();
});
