const NavigatorLoginPage = require("./navigator.page");
const { assert } = require("chai");
const { expect } = require("chai");
if (process.env.EXECUTION_ENVIRONMENT) {
  require("dotenv").config({
    path: `./../../.${process.env.EXECUTION_ENVIRONMENT}env`,
  });
} else {
  require("dotenv").config();
}

class LandingNavigatorPage extends NavigatorLoginPage {
  get navigatorLogo() {
    return "#optSite";
  }
  async navigatorLandingPageValidation() {
    await $(this.navigatorLogo).waitForDisplayed();
    assert.isTrue(
      await $(this.navigatorLogo).isDisplayed(),
      "Logo is successfully displayed on landing page"
    );
  }
}
module.exports = new LandingNavigatorPage();
