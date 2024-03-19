const { When, Then } = require("@wdio/cucumber-framework");
const job = require("../pageobjects/jobAction.page");

const pages = {
  order: job,
};

When(/^I insert multiple jobs to the (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].InsertJobs();
});

Then(/^I validate all jobs should be updated to quote$/, async () => {
  await pages[this.page].jobUpdated();
});

//second case//
When(/^I insert the multiple jobs to the production (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].insertingJobsToProductionOrder();
});

Then(/^I validate  all jobs should be updated to Tentative$/, async () => {
  await pages[this.page].jobUpdatedInProductionOrder();
});

//third case//

When(/^I insert the multiple jobs in classical (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].insertingJobsToClassicOrder();
});

Then(/^I validate all jobs should be updated to confirm$/, async () => {
  await pages[this.page].jobsUpdatedToConfirm();
});

Then(
  /^I validate that requried field indicator for Room,Booth is displayed when no room exits$/,
  async () => {
    await pages[this.page].IncatorIsDisplayed();
  }
);

Then(/^I validate No jobs should be saved$/, async () => {
  await pages[this.page].saveBtnDisabled();
});

When(/^I add the roomBooth for jobs which shows field indicator$/, async () => {
  await pages[this.page].addingroomBooth();
});

Then(/^I validate all required indicators are not displayed$/, async () => {
  await pages[this.page].IncatorsNotDisplayed();
});

Then(/^I validate all jobs are updated to confirm$/, async () => {
  await pages[this.page].AlljobsUpdatedToConfirm();
});

//fourth case//

When(/^I insert the multiple jobs in production (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].insertingJobsToProductionOrders();
});

Then(
  /^I validate all jobs should be updated to confirm-picklist$/,
  async () => {
    await pages[this.page].jobsUpdatedToConfirmPickList();
  }
);

Then(
  /^I validate that requried field indicator for Room,Booth is displayed when no room exits in productionOrder$/,
  async () => {
    await pages[this.page].IncatorIsDisplayed();
  }
);

Then(/^I validate No jobs should be saved in productionOrder$/, async () => {
  await pages[this.page].saveBtnDisabled();
});

When(
  /^I add the roomBooth for jobs which shows field indicator in productionOrder$/,
  async () => {
    await pages[this.page].addingroomBooth();
  }
);

Then(
  /^I validate all required indicators are not displayed in productionOrder$/,
  async () => {
    await pages[this.page].IncatorsNotDisplayed();
  }
);

Then(/^I validate all jobs are updated to confirm-picklist$/, async () => {
  await pages[this.page].AlljobsUpdatedToConfirmPicklist();
});

// fifth case//

When(
  /^I insert jobs lineitems and roomBooth in production (\w+)$/,
  async (page) => {
    this.page = page;
    await pages[this.page].InsertingJobsandLineItems();
  }
);

When(/^i insert Invoice to the production job$/, async () => {
  await pages[this.page].addingInvoice();
});

Then(/^I validate all jobs changed to invoice$/, async () => {
  await pages[this.page].jobsUpdatedToInvoice();
});

Then(
  /^I validate Popup is displayed and orders are not editable$/,
  async () => {
    await pages[this.page].popupisDisplayed();
  }
);
//6 th case//

When(/^I search for classical  (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].searchForOrders();
});
Then(/^I verify the classical  orders$/, async () => {
  await pages[this.page].verifyOrders();
});

When(/^I cancel add cancel to the all jobs$/, async () => {
  await pages[this.page].jobActions();
});

Then(/^I verify job status of the classical orders$/, async () => {
  await pages[this.page].verifyJobStatusUpdate();
});

Then(/^I verify job status is hidden for classical orders$/, async () => {
  await pages[this.page].verifyCancelStatus();
});
