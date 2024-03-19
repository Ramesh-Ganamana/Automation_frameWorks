const { Given, When, Then } = require("@wdio/cucumber-framework");

const flightData = require("../pageobjects/flightchecking.page");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
const data = require("../../data/flights.json");

const pages = {
  landing: flightData,
  sec:securePage,
};

const page = null;

When(
  /^I am checking the avaliable flights in the (\w+) page$/,
  async (page) => {
    this.page = page;
    let travelInfo = data.Origin;
    let destinationInfo = data.Destination;
    await pages[this.page].roundTrip(travelInfo, destinationInfo);
  }
);

When(/^I am register  as a new user$/, async () => {
  await pages[this.page].registerForm();
});