const { test, expect } = require("@playwright/test");

const { LoginPage } = require("../page/loginaPage");
const data = require("../data/loginData.json");
const { sauceLab } = require("../page/sauceLabs");
const clearAllureResultsDirectory = require("../utils/clear");
//const screen = require("../screenshots/screenshot.png");
// const { AllureReporter } = require("allure-playwright");
require("dotenv").config();

// const allure = new AllureReporter();
test.beforeAll(async () => {
  await clearAllureResultsDirectory();
});
test.beforeEach(async ({ page }) => {
  let enrole = new LoginPage(page);
  await test.step("we are launching the application ", async () => {
    await enrole.inagurationUrl();
    // const screen1 = await page.screenshot({
    //   path: "../screenshots/screenshot.png",
    //   fullPage: true,
    // });
    // allure.screenshot("screenShot", screen1, "image/png");
    let user = data.userId;
    let pwd = data.PasswordId;
    await enrole.SignIn(user, pwd);
    await page.waitForTimeout(parseInt(process.env.mini_wait));
  });
});
test("TC-1Itarating the loop for the items", async ({ page }) => {
  await test.step("we are iterating the loop for the images are visuble are not", async () => {
    let enrole = new LoginPage(page);

    await enrole.itaration();
  });
});
test("TC-2Items add to the cart", async ({ page }) => {
  await test.step("Adding the items to the cart", async () => {
    let enrole = new LoginPage(page);
    await enrole.addToCart();
  });
});
test("TC-3 purchasing the items ", async ({ page }) => {
  await test.step("Added cart items are purchased", async () => {
    let enrole = new LoginPage(page);
    let userFirstName = data.firstName;
    let userLastName = data.LastName;
    let userzipCode = data.zipCode;
    await enrole.addToCart();
    await enrole.Purchase(userFirstName, userLastName, userzipCode);
  });
});

test("TC-4 Exploring about the sause labs ", async ({ page }) => {
  await test.step("What are the functionalities of the sauce labs", async () => {
    let TestLab = new sauceLab(page);
    await TestLab.MenuItems();
  });
});

test("TC-5 Exploring sauseLabs products ", async ({ page }) => {
  await test.step("debugging option in sauce labs exploring", async () => {
    let TestLab = new sauceLab(page);
    await TestLab.MenuItems();
    await TestLab.ProductsList();
  });
});
