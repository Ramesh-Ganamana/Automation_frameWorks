const { When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const itemSearchPage = require("../pageobjects/itemSearch.navigator.page");
const itemSearchData = require("../../data/itemSearch.json");
const utilTools = require("../../utils/tools");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  itemSearch: itemSearchPage,
  package: itemSearchPage,
};

const page = null;
When(
  /^I changed to other job location for any Item Search on (\w+) page$/,
  async (page) => {
    this.page = page;
    let locationData = itemSearchData.joblocationId;
    await pages[this.page].changejobLocation(locationData);
  }
);
When(/^I clicked on item search tab on (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].clickOnItemSearch();
});

When(/^I clicked on item search btn$/, async () => {
  await pages[this.page].clickOnItemSearchBtn();
});

When(/^I got all data from Item in Search$/, async () => {
  await pages[this.page].getDataFields();
});
When(/^I selected item region$/, async () => {
  await pages[this.page].clickOnItemRegion();
});

Then(/^I verified item region search$/, async () => {
  await pages[this.page].verifyResultSearchData();
});

When(/^I clicked on category sorting$/, async () => {
  await pages[this.page].clickOnCategorySorting();
});
Then(/^I verified category search data$/, async () => {
  const itemSearchDataField = utilTools.readJson(
    `${process.cwd()}\\data\\itemSearch.json`
  );
  const itemSearchDataCategory = itemSearchDataField.itemSearchTxt;
  await pages[this.page].verifyClickCategory(itemSearchDataCategory);
});
When(/^I clicked on view product code link$/, async () => {
  await pages[this.page].getProductHistoryDetails();
});

Then(/^I verified product history item$/, async () => {
  await pages[this.page].productHistoryTxt();
  const itemProdHistory = utilTools.readJson(
    `${process.cwd()}\\data\\itemSearch.json`
  );
  const itemProdHistoryTxt = itemProdHistory.itemProdTxt;
  await pages[this.page].verifyProductHistoryTxt(itemProdHistoryTxt);
});

When(/^I clicked on item row and view product$/, async () => {
  await pages[this.page].clickOnViewProduct();
});
Then(/^I verified item text in calender$/, async () => {
  await pages[this.page].verifyItemText();
  const itemSearchDataField = utilTools.readJson(
    `${process.cwd()}\\data\\itemSearch.json`
  );
  const itemSearchDataCal = itemSearchDataField.itemNumCal;
  //await pages[this.page].verifyItemText(itemSearchDataCal);
  await pages[this.page].verifyItemSearchCal(itemSearchDataCal);
});

When(
  /^I entered the item category values in any fields and search$/,
  async () => {
    const itemSearchDataField = utilTools.readJson(
      `${process.cwd()}\\data\\itemSearch.json`
    );
    const itemSearchDataFieldVal = itemSearchDataField.itemSearchTxt;
    await pages[this.page].clickOnAnyFields(itemSearchDataField.itemSearchTxt);
    await pages[this.page].clickOnItemSearchBtn();
  }
);

Then(/^I verified item category Category field data$/, async () => {
  const itemSearchDataField = utilTools.readJson(
    `${process.cwd()}\\data\\itemSearch.json`
  );
  const itemSearchDataFieldVal = itemSearchDataField.itemSearchTxt;
  await pages[this.page].verifyItemCategeory(itemSearchDataFieldVal);
});

When(/^I entered the item  values in any fields and search$/, async () => {
  const itemSearchDataField = utilTools.readJson(
    `${process.cwd()}\\data\\itemSearch.json`
  );
  const itemDataFieldVal = itemSearchDataField.itemDataText;
  await pages[this.page].clickOnAnyFieldsItem(itemDataFieldVal);
  await pages[this.page].clickOnQtyGreaterCheckOut();
  await pages[this.page].clickOnItemSearchBtn();
});

Then(/^I verified item field data$/, async () => {
  const itemSearchDataField = utilTools.readJson(
    `${process.cwd()}\\data\\itemSearch.json`
  );
  const itemDataFieldVal = itemSearchDataField.itemDataText;
  await pages[this.page].verifyItemData(itemDataFieldVal);
});

When(/^I add (\w+) and validate the package is deleted$/, async (page) => {
  this.page = page;
  await pages[this.page].addpackage();
});
