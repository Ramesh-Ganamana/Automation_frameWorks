const { When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const utilTools = require("../../utils/tools");
const termsAndConditionData = require("../../data/termsAndCondition.json");
const termsAndConditionPage = require("../pageobjects/termsAndCondition.navigator.page");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  termsAndConditon: termsAndConditionPage,
};
const page = null;

When(/^I clicked on setup header link (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].clickOnSetUp();
});

When(/^I clicked on terms and condition link$/, async () => {
  await pages[this.page].clickOnTermsAndCondition();
});
When(/^I checked default language selection$/, async () => {
  await pages[this.page].getDefaultLang();
  let dataOrderRead = utilTools.readJson(
    `${process.cwd()}\\data\\termsAndCondition.json`
  );
  let defalutLangData = dataOrderRead.defaultLang;
  await pages[this.page].defaultLanguageChk(defalutLangData);
});
When(/^I selected different language$/, async () => {
  await pages[this.page].selectDiffLanguage();
});
Then(/^I verified different language$/, async () => {
  await pages[this.page].getDifferentLanguage();
  let dataOrderRead = utilTools.readJson(
    `${process.cwd()}\\data\\termsAndCondition.json`
  );
  let differentLangData = dataOrderRead.diffLanguage;
  await pages[this.page].verifyDiffLanguageSelection(differentLangData);
});
