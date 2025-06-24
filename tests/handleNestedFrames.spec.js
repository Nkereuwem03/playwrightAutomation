import { test, expect } from "@playwright/test";

test("should interact with a nested frame and click elements inside it", async ({
  page,
}) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  const frame = page.frame({
    url: "https://ui.vision/demo/webtest/frames/frame_3.html",
  });
  const childFrames = frame.childFrames();
  await childFrames[0].getByText("I am a human").click();
  await childFrames[0]
    .locator("//div[@id='i27']//div[@class='uHMk6b fsHoPb']")
    .check();
  await childFrames[0].getByRole("option", { name: "choose" }).click();
  await childFrames[0]
    .locator(
      '//*[@id="mG61Hd"]/div[2]/div[1]/div[2]/div[3]/div/div/div[2]/div/div[2]'
    )
    .click();
  await childFrames[0].getByRole("option", { name: "yes" }).click();
  await childFrames[0].getByRole("option", { name: "yes" }).blur();
  await childFrames[0]
    .locator('//*[@id="mG61Hd"]/div[2]/div[1]/div[3]/div[1]/div[1]/div/span')
    .click();
  await childFrames[0].fill(
    '//*[@id="mG61Hd"]/div[2]/div[1]/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[1]/input',
    "This is a short note"
  );
  await childFrames[0].fill(
    '//*[@id="mG61Hd"]/div[2]/div[1]/div[2]/div[3]/div/div/div[2]/div/div[1]/div[2]/textarea',
    "This is a long note"
  );
  await childFrames[0]
    .locator('//*[@id="mG61Hd"]/div[2]/div[1]/div[3]/div[1]/div[1]/div[2]/span')
    .click();
  await expect(
    childFrames[0].locator(
      "body > div.Uc2NEf > div > div > div.idZHHb > div.vHW8K"
    )
  ).toHaveText(
    "Thank you for testing the UI.Vision RPA software! As this is just a test form, all submitted data is automatically deleted."
  );
  await page.waitForTimeout(5000);
});
