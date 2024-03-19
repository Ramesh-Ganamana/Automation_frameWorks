const { When, Then } = require("@wdio/cucumber-framework");
const jobPage = require("../pageobjects/job.page");
const utilTools = require("../../utils/tools");
const jobdata = require("../../data/job.json");

const pages = {
  operational: jobPage,
};

When(/^I am add the  Item for an (\w+) Job$/, async (page) => {
  this.page = page;
  await pages[this.page].addItem();
});

Then(
  /^I validate the sales link is populated for the operations Job$/,
  async () => {
    // let salesText = jobdata.salesLink;
    await pages[this.page].validatingSalesLink();
  }
);

When(/^I add the  package for an (\w+) Job$/, async (page) => {
  this.page = page;
  await pages[this.page].addPackage();
});

When(
  /^I click on the Notrequired checkbox in add package and save the package$/,
  async () => {
    await pages[this.page].ClickOnNotRequiredCheckBox();
  }
);

Then(/^I validate the RequiredReview button is unchecked$/, async () => {
  await pages[this.page].verifyingReviewRequiredCheckBox();
});

When(/^I add the  Items for an (\w+) Job$/, async (page) => {
  this.page = page;
  await pages[this.page].addItems();
});

Then(
  /^I validate NERF message is populated and opsCheckbox is checked$/,
  async () => {
    await pages[this.page].NERFValidation();
  }
);

When(/^I uncheck the opsreview checkbox in (\w+) job$/, async (page) => {
  this.page = page;
  await pages[this.page].oprReview();
});

Then(/^I validate the Nerf Message is not populated$/, async () => {
  await pages[this.page].VerifyingNerfMessageNotPopulted();
});
