const { When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const equipmentData = require("../../data/equipmentSearch.json");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const equipmentSearchNavigator = require("../pageobjects/equipmentSearch.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  equipmentSearch: equipmentSearchNavigator,
};

const page = null;

When(/^I changed to other job location on (\w+) page$/, async (page) => {
  this.page = page;
  await browser.pause(process.env.small_wait);
  let locationData = equipmentData.joblocationId;
  await pages[this.page].changejobLocation(locationData);
});

When(/^I clicked on connected ware house$/, async () => {
  await pages[this.page].clickOnConnectedWareHouseReq();
});

When(/^I clicked warehouse filters$/, async () => {
  await pages[this.page].clickOnFiltersChkApply();
});

Then(/^I verified results ware house displayed$/, async () => {
  await pages[this.page].getWareHouseData();
  const wareHouseDataField = utilTools.readJson(
    `${process.cwd()}\\data\\equipmentSearchNew.json`
  );
  const wareHouseSearchDataTxt = wareHouseDataField.WareHouseDataNum;
  await pages[this.page].verifyTableWareHouseDisplayed(wareHouseSearchDataTxt);
});
When(/^I clicked on export icon$/, async () => {
  await pages[this.page].clickonExportIcon();
});

When(/^I clicked on export btn$/, async () => {
  await pages[this.page].clickOnExportBtn();
});
When(/^I clicked on order link$/, async () => {
  await pages[this.page].clickOnOrderNum();
});
When(/^I verified the order in to new window$/, async () => {
  const wareHouseDataField = utilTools.readJson(
    `${process.cwd()}\\data\\equipmentSearchNew.json`
  );
  const wareHouseOrderNum = wareHouseDataField.orderNum;
  await pages[this.page].verifyOrderNumWindow(wareHouseOrderNum);
});
