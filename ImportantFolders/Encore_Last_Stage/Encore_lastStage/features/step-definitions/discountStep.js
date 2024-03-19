const { Given, When, Then } = require("@wdio/cucumber-framework");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const navigatorOrderSearchPage = require("../pageobjects/orderSearch.navigator.page");
const jobNavigatorPage = require("../pageobjects/jobs.navigator.page");
const testData = require("../../data/discount.json");
// const orderCreationData = require('../../data/oppCreation.json');
const utilTools = require("../../utils/tools");

const pages = {
  navigatorLogin: navigatorLoginPage,
  orderSearch: navigatorOrderSearchPage,
  jobNavigator: jobNavigatorPage,
};

const page = null;
When(/^I have to search a production order in (\w+) page$/, async (page) => {
  this.page = page;
  let locationData = testData.discountLocation;
  let orderName = testData.discountOrderName;
  await pages[this.page].changeLocation(locationData);
  await pages[this.page].searchForProductionOrder(orderName);
});

When(
  /^I have to add implied discount to the order in (\w+) page$/,
  async (page) => {
    this.page = page;
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].createProductionOrder(prodUrlVal);
    await pages[this.page].addPackageToProdOrder();
    await pages[this.page].specialRateProd();
  }
);
Then(
  /^I validate special rate for production order in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verifySpecialRateProd();
  }
);

When(
  /^I have to add implied discount to an item by changing billable days in (\w+) page$/,
  async (page) => {
    this.page = page;
    let quantityData = testData.itemQuantity;
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].createProductionOrder(prodUrlVal);
    await pages[this.page].addPackageToProdOrder();
    await pages[this.page].changeQuantityOfAnItem(quantityData);
  }
);
Then(
  /^I validate line totals for the item are recalculated based on the days in (\w+) page$/,
  async (page) => {
    this.page = page;
    let quantityData = testData.itemQuantity;
    await pages[this.page].verifyQuantityOfAnItem(quantityData);
  }
);
When(/^I have to create an order in (\w+) page$/, async (page) => {
  this.page = page;
  let urlVal = utilTools.readJson(
    `${process.cwd()}\\data\\oppCreation.json`
  ).generatedUrl;
  await pages[this.page].OrderCreation(urlVal);
  await pages[this.page].addPackageToClassicOrder();
  // await pages[this.page].changeQuantityOfAnItem(quantityData);
});
When(
  /^I create an order without adding package in (\w+) page$/,
  async (page) => {
    this.page = page;
    let urlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].OrderCreation(urlVal);
  }
);
Then(
  /^I validate implied discount is not applied for location set to Yes in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verifyImpliedDiscount();
  }
);

When(/^I change for particular location in (\w+) page$/, async (page) => {
  this.page = page;
  let locationData = testData.location;
  await pages[this.page].changeLocation(locationData);
});

When(/^I search for new clasic order in (\w+) page$/, async (page) => {
  this.page = page;
  let orderNum = testData.newClassicOrder;
  await pages[this.page].searchOrder(orderNum);
  await pages[this.page].clickOnItemInSearchResults();
});

When(
  /^I create an order and add package to the order in (\w+) page$/,
  async (page) => {
    this.page = page;
    let urlVal = testData.ImpliedDiscountURL;
    await pages[this.page].OrderCreation(urlVal);
    await pages[this.page].addPackageToClassicOrder();
  }
);
Then(
  /^I validate items with service type set for discount exemptions cannot be discounted in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verifyDiscountErrorMsg();
  }
);

When(
  /^In discount tab I select service type and apply discount in (\w+) page$/,
  async (page) => {
    this.page = page;
    let serviceType = testData.discountServiceType;
    let discountPercentage = testData.discountPercentage;
    await pages[this.page].serviceTypeDiscount(serviceType, discountPercentage);
  }
);
Then(
  /^I validate discount is applied for the selected service type in (\w+) page$/,
  async (page) => {
    this.page = page;
    let discountPercentage = testData.discountPercentage;
    await pages[this.page].verifyServiceTypeDiscount(discountPercentage);
  }
);
When(
  /^In job level discount tab I select service type and apply discount in (\w+) page$/,
  async (page) => {
    this.page = page;
    let serviceType = testData.discountServiceType;
    let discountPercentage = testData.discountPercentage;
    await pages[this.page].jobLevelDiscount(serviceType, discountPercentage);
  }
);

When(
  /^I create an order and apply discount from line level in (\w+) page$/,
  async (page) => {
    this.page = page;
    let urlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    let discountPercentage = testData.discountPercentage;
    await pages[this.page].OrderCreation(urlVal);
    await pages[this.page].addPackageToClassicOrder();
    await pages[this.page].applyDiscountInLine(discountPercentage);
  }
);
Then(
  /^I validate discount is applied for the selected line in (\w+) page$/,
  async (page) => {
    this.page = page;
    let discountPercentage = testData.discountPercentage;
    await pages[this.page].verifyLineLevelDiscount(discountPercentage);
  }
);

When(
  /^I create a production order and set to complimentary in (\w+) page$/,
  async (page) => {
    this.page = page;
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    let complimentary = testData.HotelEventCompl;
    await pages[this.page].createProductionOrder(prodUrlVal);
    await pages[this.page].setComplimentoryAtJobDefaults_prod(complimentary);
    await pages[this.page].addPackageToProdOrder();
  }
);

Then(
  /^I validate discount is applied for the selected items in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verifyComplimentaryForProdOrder();
  }
);

When(
  /^I create a production order and set to complimentary from job level in (\w+) page$/,
  async (page) => {
    this.page = page;
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    let complimentary = testData.HotelEventCompl;
    await pages[this.page].createProductionOrder(prodUrlVal);
    await pages[this.page].setComplimentoryAtJobsLevel(complimentary);
    await pages[this.page].addPackageToProdOrder();
  }
);
When(
  /^I create a classic order and set to complimentary from order level in (\w+) page$/,
  async (page) => {
    this.page = page;
    let complimentary = testData.HotelEventCompl;
    let urlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].OrderCreation(urlVal);
    await pages[this.page].setComplimentoryAtJobDefaults_prod(complimentary);
    await pages[this.page].addPackageToClassicOrder();
  }
);

Then(
  /^I validate discount is applied for the selected items for classic order in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verifyComplimentaryForProdOrder();
  }
);
When(
  /^I create a classic order and set to complimentary from job level in (\w+) page$/,
  async (page) => {
    this.page = page;
    let complimentary = testData.HotelEventCompl;
    let urlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].OrderCreation(urlVal);
    await pages[this.page].setComplimentoryAtJobsLevel(complimentary);
    await pages[this.page].addPackageToClassicOrder();
  }
);

When(
  /^I create a production order and set to complimentary to exclude labor in (\w+) page$/,
  async (page) => {
    this.page = page;
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].createProductionOrder(prodUrlVal);
    await pages[this.page].complimentaryExcludedLabor();
  }
);

Then(
  /^I validate discount is applied for the selected labor items for production order in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verifyComplimentaryForProdOrder();
    await pages[this.page].verifycompExcludedLabor();
  }
);
//---------------------------------------------------------------------------------------------
//----------------------------------Production Order Steps-------------------------------------

When(
  /^I create a production order to validate order data in (\w+) page$/,
  async (page) => {
    this.page = page;
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].createProductionOrder(prodUrlVal);
  }
);

Then(
  /^I validate opportunity data reflected to navigator in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].verifyOpportunityDatatoNavigator();
  }
);

Then(
  /^I validate updated date is reflected for jobs in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].updateDateAndValidate();
  }
);

Then(
  /^I validate data by adding items and labor in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].validateByAddingPackageAndLabor();
  }
);

Then(
  /^I update order name and validate the same in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].editOrderNameAndValidate();
  }
);

Then(
  /^I cancel an order and validate the same in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].cancelAnOrderAndValidate();
  }
);

Then(
  /^I update order date and validate the same in (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].changeOrderDateAndValidateDays();
  }
);
