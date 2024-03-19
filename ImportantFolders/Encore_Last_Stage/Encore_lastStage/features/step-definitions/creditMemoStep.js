const { When, Then } = require("@wdio/cucumber-framework");
const creditMemoNavigatorPage = require("../pageobjects/creditMemo.navigator.page");
const jobNavigatorPage = require("../pageobjects/jobs.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  creditMemo: creditMemoNavigatorPage,
  jobNavigator: jobNavigatorPage,
  home: creditMemoNavigatorPage,
};
const page = null;

When(/^I add labor line in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].addLaborLineForClassicOrder();
  await pages[this.page].saveOrder();
  await pages[this.page].clickOnJobs();
});

When(
  /^I assign a room and change status to Invoice in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].assignRoomToTheJob();
    await pages[this.page].changeStatusToTheJob();
    await pages[this.page].popUpOk();
  }
);

Then(
  /^I select billing adjustment and validate the same in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].creditBillingAdjustment();
  }
);

Then(
  /^I select re-billing and validate the same in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].creditReBilling();
  }
);

Then(/^I am able to create order in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].reBillOrder();
});

When(/^I click on the (\w+) button add Actions$/, async (page) => {
  this.page = page;
  await pages[this.page].actions();
});
