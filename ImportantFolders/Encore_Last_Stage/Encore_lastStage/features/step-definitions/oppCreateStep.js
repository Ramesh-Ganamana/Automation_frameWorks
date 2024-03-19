const { Given, When, Then } = require("@wdio/cucumber-framework");
const compassLoginPage = require("../pageobjects/login.page.js");
const compassLandingPage = require("../pageobjects/landing.page.js");
const opportunityPage = require("../pageobjects/opportunity.compass.page.js");
const jobNavigatorPage = require("../pageobjects/jobs.navigator.page");
const testData = require("../../data/oppCreation.json");

const pages = {
  login: compassLoginPage,
  compassLanding: compassLandingPage,
  compassOpportunity: opportunityPage,
  jobNavigator: jobNavigatorPage,
};
const page = null;

When(/^I create an opportunity in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].createOpportunity(testData.Venue1213);
  await pages[this.page].orderDetails();
});

Then(/^I should navigate to navigator screen in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].orderDetails();
});

When(/^I can create a new classic order in (\w+) page$/, async (page) => {
  this.page = page;

  const fsReadNew = require("fs");
  const dataNew = JSON.parse(
    fsReadNew.readFileSync(`${process.cwd()}\\data\\oppCreation.json`)
  );

  let urlVal = dataNew.generatedUrl;
  await pages[this.page].OrderCreation(urlVal);
});

When(/^I add package to an order in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].addPackageToClassicOrder();
});

Then(/^I save an order in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].saveOrder();
});
