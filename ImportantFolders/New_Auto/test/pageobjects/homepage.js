const { $, driver } = require("@wdio/globals");
const Page = require("./page");
const { AndroidDriver, By, until, MultiTouch } = require("appium");
const assert = require("assert");
class homePage extends Page {
  locators = {
    android: {
      divide: "//android.widget.ImageButton[@content-desc='divide']",
      multiply: `//android.widget.ImageButton[@content-desc="multiply"]`,
      minus: `//android.widget.ImageButton[@content-desc="minus"]`,
      plus: `//android.widget.ImageButton[@content-desc="plus"]`,
      percentage: `//android.widget.ImageButton[@content-desc="percent"]`,
      equals: `//android.widget.ImageButton[@content-desc="equals"]`,
      clear: `//android.widget.ImageButton[@content-desc="clear"]`,
      delete: `//android.widget.ImageButton[@content-desc="delete"]`,
      point: `//android.widget.ImageButton[@content-desc="point"]`,
      zero: `//android.widget.ImageButton[@content-desc="0"]`,
      one: `//android.widget.ImageButton[@content-desc="1"]`,
      two: `//android.widget.ImageButton[@content-desc="2"]`,
      three: `//android.widget.ImageButton[@content-desc="3"]`,
      four: `//android.widget.ImageButton[@content-desc="4"]`,
      five: `//android.widget.ImageButton[@content-desc="5"]`,
      six: `//android.widget.ImageButton[@content-desc="6"]`,
      seven: `//android.widget.ImageButton[@content-desc="6"]`,
      eight: `//android.widget.ImageButton[@content-desc="6"]`,
      nine: `//android.widget.ImageButton[@content-desc="9"]`,
      totalAbove: `//android.widget.EditText[@content-desc="No formula"]`,
      total: `//android.widget.TextView[@content-desc="No result"]`,
      result: `//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]`,
      Squrerroot: `//android.widget.ImageButton[@content-desc="square root"]`,
      Pi: `//android.widget.ImageButton[@content-desc="pi"]`,
      power: `//android.widget.ImageButton[@content-desc="power"]`,
      Factorial: `//android.widget.ImageButton[@content-desc="factorial"]`,
      Expand: `//android.widget.ImageButton[@content-desc="Expand"]`,
    },
  };
  platform() {
    return driver.isAndroid ? "android" : "ios";
  }
  divideButton() {
    return $(this.locators[this.platform()].divide);
  }
  multiplyButton() {
    return $(this.locators[this.platform()].multiply);
  }
  plusButton() {
    return $(this.locators[this.platform()].plus);
  }
  minusButton() {
    return $(this.locators[this.platform()].minus);
  }
  percentageButton() {
    return $(this.locators[this.platform()].percentage);
  }
  equalsButton() {
    return $(this.locators[this.platform()].equals);
  }
  clearButton() {
    return $(this.locators[this.platform()].clear);
  }
  deleteButton() {
    return $(this.locators[this.platform()].delete);
  }
  pointButton() {
    return $(this.locators[this.platform()].point);
  }
  zeroButton() {
    return $(this.locators[this.platform()].zero);
  }
  numberOneButton() {
    return $(this.locators[this.platform()].one);
  }
  numberTwoButton() {
    return $(this.locators[this.platform()].two);
  }
  numberThreeButton() {
    return $(this.locators[this.platform()].three);
  }
  numberFourButton() {
    return $(this.locators[this.platform()].four);
  }
  numberFiveButton() {
    return $(this.locators[this.platform()].five);
  }
  numberSixButton() {
    return $(this.locators[this.platform()].six);
  }
  numberSevenButton() {
    return $(this.locators[this.platform()].seven);
  }
  numberEightButton() {
    return $(this.locators[this.platform()].eight);
  }
  numberNineButton() {
    return $(this.locators[this.platform()].nine);
  }
  totalAboveSpace() {
    return $(this.locators[this.platform()].totalAbove);
  }
  totalSpaceButton() {
    return $(this.locators[this.platform()].total);
  }
  resultedData() {
    return $(this.locators[this.platform()].result);
  }
  SqurerrootButton() {
    return $(this.locators[this.platform()].Squrerroot);
  }
  piButton() {
    return $(this.locators[this.platform()].Pi);
  }
  PowerButton() {
    return $(this.locators[this.platform()].power);
  }
  FactorialButton() {
    return $(this.locators[this.platform()].Factorial);
  }
  ExpandButton() {
    return $(this.locators[this.platform()].Expand);
  }
  async Calculations() {
    await this.numberOneButton().click();
    await this.plusButton().click();
    await this.numberTwoButton().click();
    await this.equalsButton().click();
    let value = parseInt(await (await this.resultedData()).getText());
    assert.equal(value, 3);
    await this.divideButton().click();
    await this.multiplyButton().click();
    await this.plusButton().click();
    await this.minusButton().click();
    await this.percentageButton().click();
    await this.equalsButton().click();
    await this.clearButton().click();
    await this.deleteButton().click();
    await this.pointButton().click();
    await this.zeroButton().click();
    await this.numberOneButton().click();
    await this.numberTwoButton().click();
    await this.numberThreeButton().click();
    await this.numberFourButton().click();
    await this.numberFiveButton().click();
    await this.numberSixButton().click();
    await this.numberSevenButton().click();
    await this.numberEightButton().click();
    await this.numberNineButton().click();
    // await this.totalAboveSpace().click();
    // await this.totalSpaceButton().click();
  }
}
module.exports = new homePage();
