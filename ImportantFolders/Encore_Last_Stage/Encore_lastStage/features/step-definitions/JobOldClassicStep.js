const { When, Then } = require("@wdio/cucumber-framework");
const oldClassicJobs = require("../../data/oldClassicJobs.json");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const jobOldClassicNavigator = require("../pageobjects/jobsOldClassic.page");

const pages = {
  jobOldClassic: jobOldClassicNavigator,
};
const page = null;

When(
  /^I change to other location for (\w+) page$/, async (page) => {
    this.page = page;
    let locationData = oldClassicJobs.location;
    await pages[this.page].changejobLocation(locationData);
  }
);

When(/^I clicked on old classic order number link and job tab$/, async () => {
  await pages[this.page].clickOnOldClassicOrderNumLink();
  await pages[this.page].clickOnInsertJobLinkAndSave();
});

When(/^I clicked on insert job link and save$/, async () => {
  await pages[this.page].clickOnInsertJobLinkAndSave();
});
Then(/^I verify job number is generated for newly inserted job$/, async () => {
  await pages[this.page].verifyJobNumForInsertjob();
}
);

When(/^I add item to newly inserted job$/, async () => {
  await pages[this.page].addItemToInsertjob();
});

Then(/^I verify job amount is calculated for newly inserted job$/, async () => {
  await pages[this.page].verifyJobAmountForInsertjob();
});

When(/^I clicked on old classic order number link from search results$/, async () => {
  await pages[this.page].clickOnOldClassicOrderNumLink();
  await pages[this.page].selectOrderTab();
});
Then(/^I update order date and validate the same for old classic order$/, async () => {
  await pages[this.page].updateDateAndValidateForOldClassicOrder();
});

Then(/^I delete all the items in the items gridfor old classic order$/, async () => {
  await pages[this.page].deleteItemsFromOldClassicOrder();
});

Then(/^I add package and items for old classic order and validate the same$/, async () => {
  await pages[this.page].addPackageItemsToOldClassicOrderAndValidate();
});

When(/^I naviagte to ordersearch tab in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].gotoOrderSearchTab();
});

When(/^I clicked on old classic order number link to verify payment$/, async () => {
  await pages[this.page].clickOnOldOrderNum();
  await pages[this.page].selectOrderTab();
});

Then(/^I clicked on payment link and select payment type and print reports$/, async () => {
  await pages[this.page].clickOnPaymentAndSelectPayment();
});

Then(/^I select an old classic order and inserted job and deleted it without saving$/, async () => {
  await pages[this.page].clickOnOldClassicOrderNumLink();
  await pages[this.page].clickOnInsertJobLink();
});


