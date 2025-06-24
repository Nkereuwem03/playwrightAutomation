import { test, expect } from "playwright/test";

test.describe("Group 1", async () => {
  test("test 1", async ({ page }) => {
    console.log("This is test 1...");
  });

  test("test 2", async ({ page }) => {
    console.log("This is test 2...");
  });
});

test.describe("Group 2", async () => {
  test("test 3", async ({ page }) => {
    console.log("This is test 3...");
  });

  test("test 4", async ({ page }) => {
    console.log("This is test 4...");
  });

  test("test 5", async ({ page }) => {
    console.log("This is test 5...");
  });
});
