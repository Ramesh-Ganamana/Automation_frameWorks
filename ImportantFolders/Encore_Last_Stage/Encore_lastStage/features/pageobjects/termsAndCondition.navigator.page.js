const { assert } = require("chai");
const { expect } = require("chai");
const LandingNavigatorPage = require("./navigator.page");
require("dotenv").config();
const utilTools = require("../../utils/tools");
const { Key } = require("webdriverio");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class TermsAndConditionPage extends LandingNavigatorPage {
  /**
   * define selectors using getter methods
   */

  changeLocationHeader() {
    return $('//input[@title="Click Here to Change Location"]');
  }

  inputSeacrchLocation() {
    return $("//input[@id='txtLocationSearch']");
  }

  searchResultvalue(locationData) {
    return $(
      "//div[@id='LocationFilterPanel']/following::div[text()='" +
        locationData +
        "']"
    );
  }

  btnLocationSelect() {
    return $("//button[contains(text(),'Select')]");
  }

  closebtn() {
    return $("//button[@class='btn btn-warning']");
  }

  setUpLink() {
    return $('//a[text()=" Setup "]');
  }
  termsAndConditionLink() {
    return $('//a[text()="Terms And Conditions"]');
  }
  languageSelector() {
    return $("//html[@class='ng-scope']/descendant::div[10]/select");
  }
  englishCan() {
    return $("//html[@class='ng-scope']/descendant::div[10]/select/option[2]");
  }
  defaultLanguageLnk() {
    return $("//html[@class='ng-scope']/descendant::div[10]/select/option[3]");
  }

  async changeJobSearchLocation(joblocationId) {
    await this.changeLocationHeader().waitForClickable();
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(joblocationId);
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).doubleClick();
    await browser.pause(process.env.small_wait);
  }

  async clickOnSetUp() {
    await this.setUpLink().waitForClickable();
    await this.setUpLink().click();
  }
  async clickOnTermsAndCondition() {
    await this.termsAndConditionLink().waitForClickable();
    await this.termsAndConditionLink().click();
  }
  async getDefaultLang() {
    await this.defaultLanguageLnk().waitForDisplayed();
    const defaultLangUSEngApp = await this.defaultLanguageLnk().getText();
    const dataOrder = utilTools.readJson(
      `${process.cwd()}\\data\\termsAndCondition.json`
    );
    await browser.pause(process.env.small_wait);
    dataOrder.defaultLang = defaultLangUSEngApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\termsAndConditionNew.json`,
      JSON.stringify(dataOrder)
    );
  }
  async defaultLanguageChk(defalutLangData) {
    await this.defaultLanguageLnk().waitForDisplayed();
    const defaultLangUSEngApp = await this.defaultLanguageLnk().getText();
    assert.equal(defaultLangUSEngApp, defalutLangData);
  }
  async selectDiffLanguage() {
    await this.languageSelector().waitForDisplayed();
    await this.englishCan().waitForDisplayed();
    await this.englishCan().click();
    let selectDiffLang = await this.englishCan().getText();
    await browser.pause(process.env.small_wait);
  }
  async getDifferentLanguage() {
    let selectDiffLangApp = await this.englishCan().getText();
    const dataOrder = utilTools.readJson(
      `${process.cwd()}\\data\\termsAndConditionNew.json`
    );
    await browser.pause(process.env.small_wait);
    dataOrder.diffLanguage = selectDiffLangApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\termsAndConditionNew.json`,
      JSON.stringify(dataOrder)
    );
  }
  async verifyDiffLanguageSelection(differentLangData) {
    let selectDiffLangApp = await this.englishCan().getText();
    assert.equal(selectDiffLangApp, differentLangData);
  }
}

module.exports = new TermsAndConditionPage();
