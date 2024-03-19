const { Given, When, Then } = require("@wdio/cucumber-framework");
let testData = require("../../data/orderSearch.json");
//const cucumberJson = require('wdio-cucumberjs-json-reporter').default;
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
const landingPage = require("../pageobjects/landing.page");
const allure = require("@wdio/allure-reporter");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const navigatorLandingPage = require("../pageobjects/landing.navigator.page");
const navigatorOrderSearchPage = require("../pageobjects/orderSearch.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  orderSearch: navigatorOrderSearchPage,
};
const page = null;
Given(/^I am on the (\w+) page$/, async (page) => {
  this.page = page;
  await pages[page].open();
});

When(/^I login with (.*) and (.*)$/, async (username, password) => {
  await pages[this.page].login(username, password);
});

Then(/^I was directed to landing page$/, async () => {
  if (this.page == "login") {
    await landingPage.compassValidation();
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  } else if (this.page == "navigatorLogin") {
    await navigatorLandingPage.navigatorLandingPageValidation();
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  }
});

Then(
  /^I capture all the required details for order search from (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].getDataForOrderSearch();
  }
);

When(/^I navigate to (\w+) tab$/, async (tab) => {
  this.page = tab;
  await pages[this.page].gotoOrderSearchTab();
});

When(/^I search for the order id under order search tab$/, async () => {
  let orderIdData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).orderId;
  await pages[this.page].searchOrder(orderIdData);
});

Then(/^I verify order id exists in the search results$/, async () => {
  let orderIdData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).orderId;
  await pages[this.page].verifySearchResults(orderIdData, 1);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I reset the search tab results$/, async () => {
  await pages[this.page].resetSearchResults();
});

When(/^I search for the order name under order search tab$/, async () => {
  let orderNameData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).orderName;
  await pages[this.page].searchOrderByName(orderNameData);
});
Then(/^I verify order name exists in the search results$/, async () => {
  let orderNameData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).orderName;
  await pages[this.page].verifySearchResultsForOrderID(orderNameData, 2);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I search order by status under order search tab$/, async () => {
  let orderByStatus = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).status;
  await pages[this.page].searchOrderByStatus(orderByStatus);
});
Then(/^I verify order status exists in the search results$/, async () => {
  let orderStatusData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).orderStatus;
  await pages[this.page].verifySearchResults(orderStatusData, 6);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
When(/^I search for the order type under order search tab$/, async () => {
  let orderTypeData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).orderTypeIndex;
  await pages[this.page].searchOrderByOrderType(orderTypeData);
});

Then(/^I verify order type exists in the search results$/, async () => {
  let orderTypeData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).orderType;
  await pages[this.page].verifySearchResults(orderTypeData, 7);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I search for the DRO number under order search tab$/, async () => {
  let droNumbData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).droNumber;
  await pages[this.page].searchByDRONumber(droNumbData);
  await pages[this.page].clickOnTheJob();
});

Then(/^I verify DRO number exists in the search results$/, async () => {
  let droNumData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).droNumber;
  await pages[this.page].verifyDroSearchResults(droNumData);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I changed to other location$/, async () => {
  let locationData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).location;
  //let locationValue = utilTools.readJson(`${process.cwd()}\\data\\orderSearchNew.json`).verifyLocationValue;
  await pages[this.page].changeLocation(locationData);
});

When(/^I select an order to update order shorts$/, async () => {
  await pages[this.page].orderShorts();
});

Then(/^I update order shorts and validate order shorts button$/, async () => {
  let actualData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).ordershortMsg;
  await pages[this.page].verifyOrderShots(actualData);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I click on new internal order button$/, async () => {
  await pages[this.page].clickOnNewInternalOrder();
});

Then(/^I should navigate to orders page$/, async () => {
  await pages[this.page].verifyNewInternalOrder();
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
When(/^I select an order and go to production quote$/, async () => {
  let dropdownVal = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).printProdQuote;
  let orderIdData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearchNew.json`
  ).orderId;
  await pages[this.page].searchOrder(orderIdData);
  await pages[this.page].selectTopRowInResults();
  await pages[this.page].printConsolidatedProdQuote(dropdownVal);
});

Then(
  /^I should able to verify print consolidated production quote$/,
  async () => {
    let actualData = utilTools.readJson(
      `${process.cwd()}\\data\\orderSearch.json`
    ).reportValidationMsg;
    await pages[this.page].validatePrintConsolidatedProdQuote(actualData);
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  }
);

When(/^I select an order and go to consolidated quote$/, async () => {
  let dropdownVal = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).printConsolidatedQuote;
  let orderIdData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).orderId;
  await pages[this.page].searchOrder(orderIdData);
  await pages[this.page].selectTopRowInResults();
  await pages[this.page].printConsolidatedQuote(dropdownVal);
});

Then(/^I should able to verify print consolidated quote$/, async () => {
  let actualData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).reportValMsgForConsolidatedQuote;
  await pages[this.page].validatePrintConsolidatedQuote(actualData);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I select an order and go to event billing quote$/, async () => {
  let dropdownVal = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).printEventBillingQuote;
  let orderIdData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).orderId;
  await pages[this.page].searchOrder(orderIdData);
  await pages[this.page].selectTopRowInResults();
  await pages[this.page].printEventBillingQuote(dropdownVal);
});

Then(/^I should able to verify print event billing quote$/, async () => {
  let actualData = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).reportValidationMsg;
  await pages[this.page].validatePrintConsolidatedProdQuote(actualData);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});

When(/^I give a date range and check the search results$/, async () => {
  await pages[this.page].selectUseDateRange();
});

Then(/^I should validate date according to the search date$/, async () => {
  let startDateVal = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).startDate;
  let endDateVal = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).endDate;
  await pages[this.page].validatingUseDateRange(startDateVal, endDateVal);
  //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
});
When(/^I capture invoice number from search results$/, async () => {
  await pages[this.page].searchOrderByStatus("7");
  await pages[this.page].captureInvoiceNumber();
});

When(/^I give an invoice number and check the search results$/, async () => {
  let invoiceNumVal = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).invoiceNumber;
  await pages[this.page].selectInvoiceNumber(invoiceNumVal);
});

Then(
  /^I should validate invoice number according to the search value$/,
  async () => {
    let invoiceNumVal = utilTools.readJson(
      `${process.cwd()}\\data\\orderSearch.json`
    ).invoiceNumber;
    await pages[this.page].verifySearchResults(invoiceNumVal, 12);
  }
);

When(
  /^I select an order with tentitive status to update order shorts all$/,
  async () => {
    let testDataStatus = utilTools.readJson(
      `${process.cwd()}\\data\\orderSearch.json`
    ).orderShortsStatus;
    let location = utilTools.readJson(
      `${process.cwd()}\\data\\orderSearch.json`
    ).orderShortsLocation;
    await pages[this.page].changeLocation(location);
    await pages[this.page].updateOrderShortsAll(testDataStatus);
  }
);

Then(
  /^I update orderShortsAll and validate order shorts save message$/,
  async () => {
    let ValMessageOrderShortsAll = utilTools.readJson(
      `${process.cwd()}\\data\\orderSearch.json`
    ).ordershortAllMsg;
    await pages[this.page].validateUpdateOrderShortsAll(
      ValMessageOrderShortsAll
    );
    //cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
  }
);

//------------------------------------DRO Search--------------------------------------------//

When(/^I navigate to dro search tab and search with dro number$/, async () => {
  let droNumVal = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).droNumber;
  console.log(this.page + "******************");
  await navigatorOrderSearchPage.gotoDroSearchTab();
  await navigatorOrderSearchPage.droNumberSearch(droNumVal);
});

Then(/^I verify dro number search results in dro search tab$/, async () => {
  let droNumVal = utilTools.readJson(
    `${process.cwd()}\\data\\orderSearch.json`
  ).droNumber;
  await navigatorOrderSearchPage.verifyDroSearchResultsInGrid(droNumVal);
});
