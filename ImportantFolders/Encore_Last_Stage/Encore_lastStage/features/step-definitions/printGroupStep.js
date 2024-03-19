const { When, Then } = require("@wdio/cucumber-framework");

const printGroupPage = require("../pageobjects/printGroup.page");
const pages = {
  order: printGroupPage,
  Quote: printGroupPage,
};
const page = null;

When(/^I add the classical (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].classicaljob();
});

Then(/^I validate the create NewPrintGroup is displayed$/, async () => {
  await pages[this.page].jobActions();
});

Then(
  /^I validate the labour group is saved for classical (\w+)$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verificationOfLaborGroup();
  }
);

Then(
  /^I validate to add existing printGroup for that job is displayed in the (\w+)$/,
  async (page) => {
    this.page = page;
    await pages[this.page].addItem();
  }
);

Then(
  /^I validate the consolidated print parameters are displayed in (\w+)$/,
  async (page) => {
    this.page = page;
    await pages[this.page].consilidateValidation();
  }
);
