import { test, expect } from "@playwright/test";

test("should visit each product on Demoblaze and print its name", async ({
  page,
}) => {
  await page.goto("https://www.demoblaze.com/index.html");

  await page.waitForSelector("a.hrefch");
  const products = await page.$$("a.hrefch");
  // const products = await page.$$("//div[@id='tbodyid']//h4/a");
  // const products = await page.$$("div#tbodyid h4 a");

  for (const product of products) {
    const productName = await product.textContent();
    console.log(productName);
  }

  await page.close();
});
