const { When, Then } = require("@wdio/cucumber-framework");
const detailsPage = require("../pageobjects/jobDetailLines.page");

const pages = {
  order: detailsPage,
};

When(/^I add the classic sales (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].selectClassicSalesJob();
});

When(/^I add the line item to the sales job$/, async () => {
  await pages[this.page].addingLineItemForSales();
});

Then(
  /^I validate the jobDetails and line item is cut from the order$/,
  async () => {
    await pages[this.page].RightClick();
  }
);

Then(
  /^I validate the copy line is pasted in the other line in classic (\w+)$/,
  async (page) => {
    this.page = page;
    await pages[this.page].copyline();
  }
);

When(/^I add the production sales (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].SelectProductionSalesJob();
});

Then(
  /^I validate the copy line is pasted in the other line in production order$/,
  async () => {
    await pages[this.page].copyline();
  }
);

Then(/^I validate complimentry is there in operation (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].complimentry();
});

Then(
  /^I validate  undo complimentry is there in operation (\w+)$/,
  async (page) => {
    this.page = page;
    await pages[this.page].UndoComplimentryinclassicOrder();
  }
);

When(/^I search for  production (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].productionOrder();
});

Then(/^I verify the Copy Operations in production order$/, async () => {
  await pages[this.page].verifyJobs();
});

Then(
  /^I validate the Copy paste options in production (\w+)$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verifyCopyPaste();
  }
);
