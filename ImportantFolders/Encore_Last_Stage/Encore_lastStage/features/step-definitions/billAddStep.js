const { Given, When, Then } = require("@wdio/cucumber-framework");
const BillToAddressPage = require("../pageobjects/billToAdd.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  BillToAdd: BillToAddressPage,
};
const page = null;

When(
  /^I search and select an order in order search and navigate to jobs screen$/,
  async () => {
    await BillToAddressPage.searchAndSelectAnOrder();
  }
);

Then(
  /^I select a billing address and validate the same in billing address page$/,
  async () => {
    await BillToAddressPage.billAddressLinkValidation();
  }
);

Then(
  /^I search for billing address and validate the same in billing address page$/,
  async () => {
    await BillToAddressPage.billAddressFilterValidation();
  }
);

Then(
  /^I select an address and set to active and validate the same in billing address page$/,
  async () => {
    await BillToAddressPage.billAddressSetActiveValidation();
  }
);
Then(
  /^I select an address and set to default and validate the same in billing address page$/,
  async () => {
    await BillToAddressPage.billAddressSetDefaultValidation();
  }
);
