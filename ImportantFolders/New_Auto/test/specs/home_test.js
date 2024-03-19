const { expect, driver } = require("@wdio/globals");
const homePage = require("../pageobjects/homepage");

describe("My homePage of calculator", () => {
  it("checking the result outputs", async () => {
    await homePage.Calculations();
  });
});
