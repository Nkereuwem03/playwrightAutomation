import { test, expect } from "playwright/test";

test("should upload a single PDF file and submit the form", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  // upload file using file relative path
  await page
    .locator("#singleFileInput")
    .setInputFiles("tests/uploadFiles/file-example_PDF_1MB.pdf");
  await page.locator("form[id='singleFileForm'] button[type='submit']").click();
});

test("should upload multiple PDF files and submit the form", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .locator("#multipleFilesInput")
    .setInputFiles([
      "tests/uploadFiles/dummy.pdf",
      "tests/uploadFiles/file-example_PDF_500_kB.pdf",
      "tests/uploadFiles/file-example_PDF_500_kB.pdf",
    ]);
  await page
    .locator("form[id='multipleFilesForm'] button[type='submit']")
    .click();
});

test("should upload and then clear multiple files in the file input", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page
    .locator("#multipleFilesInput")
    .setInputFiles([
      "tests/uploadFiles/dummy.pdf",
      "tests/uploadFiles/file-example_PDF_500_kB.pdf",
      "tests/uploadFiles/file-example_PDF_500_kB.pdf",
    ]);
  await page.locator("#multipleFilesInput").setInputFiles([]);
});
