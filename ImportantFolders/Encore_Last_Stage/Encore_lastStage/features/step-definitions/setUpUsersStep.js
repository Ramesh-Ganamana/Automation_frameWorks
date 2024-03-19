const { When, Then } = require("@wdio/cucumber-framework");
const UserPage = require("../pageobjects/setUpUsers.page");
const utilTools = require("../../utils/tools");
const user = require("../../data/setUpuser.json");
const pages = {
  page: UserPage,
  UserAccess: UserPage,
  location: UserPage,
  images: UserPage,
  Cables: UserPage,
  name: UserPage,
};
const page = null;

Then(
  /^I setUp the userSearch in navigator (\w+) and validate the Info$/,
  async (page) => {
    this.page = page;
    let firstName = user.userName;
    let lastName = user.lastName;
    let loginName = user.loginNam;
    await pages[this.page].userInfo(firstName, lastName, loginName);
  }
);

Then(
  /^I validate the (\w+) for the given location is displayed$/,
  async (page) => {
    this.page = page;
    await pages[this.page].userAccess();
  }
);

When(/^I add the local location for the default (\w+)$/, async (page) => {
  this.page = page;

  await pages[this.page].locationSetup();
});

Then(/^I validate the countries should  displayed$/, async () => {
  let CountryCode4 = user.country4;
  let officeValue = user.location;
  let officeName = user.LocationName;
  await pages[this.page].CountryValidation(
    CountryCode4,
    officeValue,
    officeName
  );
});

Then(/^I validate the error (\w+) are not displayed$/, async (page) => {
  this.page = page;
  let NewLocalOfficeInputInfo = user.NewLocalOfficeInput;
  let NewLocalOfficeNameInputInfo = user.NewLocalOfficeNameInput;
  let oracleProductInfo = user.oracleProduct;
  let oracleDepartmentInfo = user.oracleDepartment;

  await pages[this.page].newPage(
    NewLocalOfficeInputInfo,
    NewLocalOfficeNameInputInfo,
    oracleProductInfo,
    oracleDepartmentInfo
  );
});

Then(/^I validate the (\w+) and Consumables$/, async (page) => {
  this.page = page;
  let cableLocation = user.DifferentLocation;
  let PercentageData = user.Percentage;
  await pages[this.page].cablevalidation(cableLocation, PercentageData);
});

When(/^I setUp serviceType (\w+)$/, async (page) => {
  this.page = page;
  await pages[this.page].setUpServiceName();
});

Then(/^I validate the the serviceType Result$/, async () => {
  await pages[this.page].SetUpResults();
});
