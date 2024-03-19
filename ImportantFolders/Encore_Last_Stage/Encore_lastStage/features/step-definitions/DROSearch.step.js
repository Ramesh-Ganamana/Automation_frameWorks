const { When, Then } = require("@wdio/cucumber-framework");

const additemsData = require("../../data/additemsData.json");
const orderNum = require("../../data/orderSearch.json");
const utilTools = require("../../utils/tools");
const DROList = require("../pageobjects/DROSearch.page");
require("dotenv").config();
const pages = {
  Dro: DROList,
};
const page = null;

When(/^I was performing action on the (\w+) Search tab$/, async (page) => {
  this.page = page;
  let orderNumberData = orderNum.orderNumber;
  await pages[this.page].drosearch(orderNumberData);
});

Then(
  /^I validate the Search result display correctly in the right table$/,
  async () => {
    let valData = orderNum.valnum;
    await pages[this.page].VerifyDroSearchResults(valData);
  }
);
// second case//
When(
  /^In DroSearch Implimenting Action on the (\w+) search tab$/,
  async (page) => {
    this.page = page;
    await pages[this.page].ActionOnDroLink();
  }
);

Then(
  /^I validate while clicking on orderlink whether it navigate to orderpage$/,
  async () => {
    await pages[this.page].DroSearchLink();
  }
);
// third case//
When(/^performing actions on the  DRO list row$/, async () => {
  let orderNumberData = orderNum.orderNumber;
  await pages[this.page].previewInfo(orderNumberData);
});

Then(/^I validate  the Preview report$/, async () => {
  let currencyinfo = orderNum.currency;
  await pages[this.page].previewReportValidation(currencyinfo);
});
