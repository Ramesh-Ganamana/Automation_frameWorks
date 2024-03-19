const { When, Then } = require("@wdio/cucumber-framework");
const billingInvoice = require("../pageobjects/ondemandDirectBilling.page");

const pages = {
  billing: billingInvoice,
  RTI: billingInvoice,
  error: billingInvoice,
};

When(/^I perform actions on the direct (\w+) Invoice$/, async (page) => {
  this.page = page;
  await pages[this.page].invoice();
});

When(/^I add (\w+) to the requried fields$/, async (page) => {
  this.page = page;
  await pages[this.page].markAsRTI();
});

Then(/^Validate the (\w+) is Displayed$/, async (page) => {
  this.page = page;
  await pages[this.page].ValidateEroorMessage();
});
