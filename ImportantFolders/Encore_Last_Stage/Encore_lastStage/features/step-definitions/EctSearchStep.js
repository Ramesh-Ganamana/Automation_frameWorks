const { When, Then } = require("@wdio/cucumber-framework");

const ectSearchData = require("../../data/ectSerach.json");
const LoginPage = require("../pageobjects/login.page");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const jobsearchNavigatorPage = require("../pageobjects/jobSearch.navigator.page");
const ectsearchnavigator = require("../pageobjects/ECTSearch.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  jobSearch: jobsearchNavigatorPage,
  ectSerach: ectsearchnavigator,
};
const page = null;

When(/^I changed to other location on (\w+) page$/, async (page) => {
  this.page = page;
  let locationData = utilTools.readJson(
    `${process.cwd()}\\data\\ectSerach.json`
  ).locationId;
  await pages[this.page].changeLocation(locationData);
  await pages[this.page].gotoECTSearchTab();
});

When(/^I search for the get all ect search number$/, async () => {
  await pages[this.page].getEctAllSearchResultsNum();
});

When(/^I search for the get all ect search name$/, async () => {
  await pages[this.page].getEctAllSearchResultsName();
});

When(/^I search for the get all ect order number$/, async () => {
  await pages[this.page].getEctAllSearchResultsECTOrder();
});
When(/^I search for the a particular ECT  number$/, async () => {
  let ectNumberData = utilTools.readJson(
    `${process.cwd()}\\data\\ectSerachNew.json`
  ).ectNumber;
  await pages[this.page].searchECTNumber(ectNumberData);
  await pages[this.page].clickonECTSearch();
});

Then(
  /^I verify ECTNumber Results  exists in the search results page$/,
  async () => {
    let ectNumDataVerify = utilTools.readJson(
      `${process.cwd()}\\data\\ectSerachNew.json`
    ).ectNumber;
    await pages[this.page].verifyECTNumberSearch(ectNumDataVerify);
  }
);

When(/^I search for the ECT Order Search number$/, async () => {
  let ectOrderNumber = utilTools.readJson(
    `${process.cwd()}\\data\\ectSerachNew.json`
  ).ectOrderNum;
  await pages[this.page].searchECTOrderNum(ectOrderNumber);
});

When(/^I search for ect name update$/, async () => {
  await pages[this.page].clickonECTUpdate();
});

When(/^I clicked on Result Order Button$/, async () => {
  await pages[this.page].clickOnECTRespData();
});
Then(
  /^I verify ECTOrder Results  exists in the search results page$/,
  async () => {
    let ordersearchResData = utilTools.readJson(
      `${process.cwd()}\\data\\ectSerachNew.json`
    ).ectOrderNum;
    await pages[this.page].verifyECTOrderSearch(ordersearchResData);
  }
);
When(/^I search for the ECTName$/, async () => {
  let ectNameData = utilTools.readJson(
    `${process.cwd()}\\data\\ectSerachNew.json`
  ).ectName;
  await pages[this.page].searchECTName(ectNameData);
  await browser.pause(process.env.small_wait);
  await pages[this.page].clickonECTSearch();
});

Then(
  /^I verify ECTName Results  exists in the search results page$/,
  async () => {
    let ectNameSearchResData = utilTools.readJson(
      `${process.cwd()}\\data\\ectSerachNew.json`
    ).ectName;
    await pages[this.page].verifyECTNameSearch(ectNameSearchResData);
    await browser.pause(process.env.small_wait);
  }
);

When(/^I updated on Result Order ECTName$/, async () => {
  let updateNamedata = utilTools.readJson(
    `${process.cwd()}\\data\\ectSerachNew.json`
  ).ectNameUpdate;
  await pages[this.page].ectNameUpdate(updateNamedata);
});
Then(/^I Verified Updated ECT Updated ECTName$/, async () => {
  let ectUpdatedNameData = utilTools.readJson(
    `${process.cwd()}\\data\\ectSerachNew.json`
  ).ectNameUpdate;
  await pages[this.page].verifyUpdatedECTName(ectUpdatedNameData);
});
