import { test, expect } from "@playwright/test";

test("should visit each product on Demoblaze and print its name", async ({
  page,
}) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.waitForSelector("a.hrefch");
  const products = await page.$$("a.hrefch");

  for (const product of products) {
    const productName = await product.textContent();
  }
});
