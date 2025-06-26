import { test, expect } from "playwright/test";
import path from "node:path";

// In ES modules, __dirname is not available. This is a workaround.
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

test("should upload a single PDF file and submit the form", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com");

  // upload file using file relative path
  const filePath = path.join(
    __dirname,
    "uploadFiles",
    "file-example_PDF_1MB.pdf"
  );
  await page.locator("#singleFileInput").setInputFiles(filePath);
  await page.locator("form[id='singleFileForm'] button[type='submit']").click();
});

test("should upload multiple PDF files and submit the form", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  const filePaths = [
    path.join(__dirname, "uploadFiles", "dummy.pdf"),
    path.join(__dirname, "uploadFiles", "file-example_PDF_500_kB.pdf"),
    path.join(__dirname, "uploadFiles", "file-example_PDF_500_kB.pdf"),
  ];
  await page.locator("#multipleFilesInput").setInputFiles(filePaths);
  await page
    .locator("form[id='multipleFilesForm'] button[type='submit']")
    .click();
});

test("should upload and then clear multiple files in the file input", async ({
  page,
}) => {
  await page.goto("https://testautomationpractice.blogspot.com");
  const filePaths = [
    path.join(__dirname, "uploadFiles", "dummy.pdf"),
    path.join(__dirname, "uploadFiles", "file-example_PDF_500_kB.pdf"),
    path.join(__dirname, "uploadFiles", "file-example_PDF_500_kB.pdf"),
  ];
  await page.locator("#multipleFilesInput").setInputFiles(filePaths);
  await page.locator("#multipleFilesInput").setInputFiles([]);
});
