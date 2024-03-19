const { When, Then } = require("@wdio/cucumber-framework");

const LocalOfficePage = require("../pageobjects/setUpLocalOffice.page");
const locationData = require(`../../data/setUpLocation.json`);
const pages = {
  localOffice: LocalOfficePage,
  location: LocalOfficePage,
  saved: LocalOfficePage,
  sections: LocalOfficePage,
  logo: LocalOfficePage,
};
const page = null;

When(/^I set Up the newLocation for (\w+)$/, async (page) => {
  this.page = page;
  let LocationInfo = locationData.locationId;
  await pages[this.page].LocationChange(LocationInfo);
});

When(/^I setUp the Local Office Location$/, async () => {
  await pages[this.page].SetUp();
});

Then(/^I validate the info of the page$/, async () => {
  await pages[this.page].ValidationForTheValues();
});

When(/^I set the defaultdates for the (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].defaultDates();
});

Then(/^I validate serviceType is (\w+) as exempted$/, async (page) => {
  this.page = page;
  await pages[this.page].discountExcemption();
});

Then(/^I add and validate the (\w+)$/, async (page) => {
  this.page = page;
  let SectionItem = locationData.SectionName;
  await pages[this.page].addSection(SectionItem);
});

Then(/^I validate the (\w+) validation$/, async (page) => {
  this.page = page;
  await pages[this.page].logoValidation();
});
