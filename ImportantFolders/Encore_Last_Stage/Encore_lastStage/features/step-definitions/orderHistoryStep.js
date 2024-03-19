const { When, Then } = require("@wdio/cucumber-framework");

const OrderPage = require("../pageobjects/orderHistory.page");

const pages = {
  order: OrderPage,
};
const page = null;

Then(
  /^I Clicked in to the (\w+) history and validate record of history displayed$/,
  async (page) => {
    this.page = page;
    await pages[this.page].orderHistoryRecord();
  }
);

When(/^I updated the job status to tentive and save$/, async () => {
  await pages[this.page].updatedToTentive();
});

Then(/^I validate the newentry orderstatus to tentive$/, async () => {
  await pages[this.page].verifingUpdatedStatus();
});

When(/^I add Items to the order job$/, async () => {
  await pages[this.page].addItem();
});

Then(/^I validate net total items are displayed$/, async () => {
  await pages[this.page].netTotal();
});
