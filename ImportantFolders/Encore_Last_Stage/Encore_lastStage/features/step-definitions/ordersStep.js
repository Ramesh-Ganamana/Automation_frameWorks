const { Given, When, Then } = require("@wdio/cucumber-framework");
const OrdersNavigatorPage = require("../pageobjects/orders.navigator.page");
const jobNavigatorPage = require("../pageobjects/jobs.navigator.page");
const navigatorOrderSearchPage = require("../pageobjects/orderSearch.navigator.page");
const orderTestData = require("../../data/orders.json");
const utilTools = require("../../utils/tools");

const pages = {
  orders: OrdersNavigatorPage,
  orderSearch: navigatorOrderSearchPage,
  jobNavigator: jobNavigatorPage,
};
const page = null;

When(
  /^I create an order with opportunity is set to default Billing type to direct bill in (\w+) page$/,
  async (page) => {
    this.page = page;
    let urlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].OrderCreation(urlVal);
  }
);

When(
  /^I add package,Items and labore to new classic sales order in (\w+) page$/,
  async (page) => {
    this.page = page;
    await jobNavigatorPage.addPackageToClassicOrder();
    await OrdersNavigatorPage.closeRightSidePopUp();
    await OrdersNavigatorPage.addItemToClassicOrder();
    await OrdersNavigatorPage.addLaborToClassicOrder();
    // await jobNavigatorPage.saveOrder();
  }
);

Then(
  /^I verify billing type for the particular location is master and validate totals in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].directBilling();
    await pages[this.page].verifyTotalItemsRate();
  }
);

When(/^I do bulk edit in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].bulkEdit();
});
Then(/^I verify bulk edit days and quantity in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].validateBulkEditValues();
});

When(
  /^I add package and labore to new classic sales order in (\w+) page$/,
  async (page) => {
    this.page = page;
    await jobNavigatorPage.addPackageToClassicOrder();
    await OrdersNavigatorPage.addLaborToClassicOrder();
    // await jobNavigatorPage.saveOrder();
  }
);

When(/^I copy labor line in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].copyLaborLine();
});

Then(
  /^I verify labor line is added in the jobs line in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].validateLaborLineValues();
  }
);

When(/^I add page break to job in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].addPageBreak();
});

Then(
  /^I verify page break is added in the jobs line in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].validatePageBreak();
  }
);

//-----------------------------print Quotes ------------------------------------------------//

When(/^I navigate to jobs page in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].clickOnItemInSearchResults();
});

Then(
  /^I validate print quote billing at job level in (\w+) page$/,
  async (page) => {
    this.page = page;
    const expectedVal = orderTestData.printQuoteValidationMsg;
    await pages[this.page].validatePrintQuote(
      expectedVal,
      "Quote/Event Billing"
    );
  }
);
Then(
  /^I validate print production quote, rental orders and DROs at job level in (\w+) page$/,
  async (page) => {
    this.page = page;
    const expectedVal = orderTestData.printQuoteValidationMsg;
    await pages[this.page].validatePrintQuote(
      expectedVal,
      "Production Quote, Rental Orders and DROs"
    );
  }
);
Then(
  /^I validate print consolidate quote at job level in (\w+) page$/,
  async (page) => {
    this.page = page;
    const expectedVal = orderTestData.consolidatedQuoteValMsg;
    const expectedVal1 = orderTestData.consolidatedQuoteValMsg1;
    await pages[this.page].validatePrintConsolidatedQuote(
      expectedVal,
      expectedVal1,
      "Consolidated Quote"
    );
  }
);

Then(
  /^I validate print deposit invoice at job level in (\w+) page$/,
  async (page) => {
    this.page = page;
    const expectedVal = orderTestData.DepositInvoiceValMsg;
    await pages[this.page].validatePrintDepositInvoice(
      expectedVal,
      "Deposit Invoice"
    );
  }
);
Then(
  /^I validate print sheet by selected job at job level in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].validatePrintSheetByJob(
      "Cover Sheet By Selected Job"
    );
  }
);
