import { test, expect } from "@playwright/test";

test("should validate product table structure and select products by name", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("//div[@id='HTML8']").click();
  const table = page.locator("#productTable");

  // total numbers of columns
  const columns = table.locator("thead tr th");
  await expect(columns).toHaveCount(4);
  expect(columns.count === 4);
  expect(await columns.count()).toBe(4);

  // total numbers of columns
  const rows = table.locator("tbody tr");
  await expect(rows).toHaveCount(5);

  // select checkbox for Smartwatch
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: "Smartwatch",
  });

  await matchedRow.locator("input").check();

  // select multiple products by re-useable function
  await selectProduct(rows, page, "Smartwatch");
  await selectProduct(rows, page, "Smartphone");
});

test.only("should print all product details and read data from all paginated table pages", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("//div[@id='HTML8']").click();
  const table = page.locator("#productTable");

  const columns = table.locator("thead tr th");

  const rows = table.locator("tbody tr");

  // print all products details using loop
  for (let i = 0; i < (await rows.count()); i++) {
    let row = rows.nth(i);
    let tds = row.locator("td");
    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }

  // read data from all the pages in the table
  const pages = page.locator(".pagination li a");
  for (let p = 0; p < (await pages.count()); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
  }
  for (let i = 0; i < (await rows.count()); i++) {
    let row = rows.nth(i);
    let tds = row.locator("td");
    for (let j = 0; j < (await tds.count()) - 1; j++) {
      console.log(await tds.nth(j).textContent());
    }
  }
});

async function selectProduct(rows, page, name) {
  const matchedRow = rows.filter({
    has: page.locator("td"),
    hasText: name,
  });
  await matchedRow.locator("input").check();
}
