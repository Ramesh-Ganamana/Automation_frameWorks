const { When, Then } = require("@wdio/cucumber-framework");

const itempage = require("../pageobjects/items.page");
const utilTools = require("../../utils/tools");
const oppdata = require("../../data/oppCreation.json");
const pages = {
  navigator: itempage,
  production: itempage,
};
const page = null;

When(
  /^I create a classic production and navigate to the (\w+) page$/,
  async (page) => {
    this.page = page;
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].createProductionOrder(prodUrlVal, "Productions");
  }
);
When(
  /^I create a classic order and navigate to the (\w+) page$/,
  async (page) => {
    this.page = page;
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    await pages[this.page].createProductionOrder(prodUrlVal, "Order");
  }
);

Then(/^I validate the save button is enabled$/, async () => {
  await pages[this.page].SaveBtnValidation();
});

Then(/^I validate the startdate and enddate$/, async () => {
  await pages[this.page].verifydates();
});

When(
  /^I am click on the save button and navigate to the jobsheader$/,
  async () => {
    await pages[this.page].saveBtn();
  }
);

Then(/^I validate the job type sales and operations$/, async () => {
  let salesdata = oppdata.jobTypeSales;
  let operationsdata = oppdata.jobTypeOperations;
  await pages[this.page].jobType(salesdata, operationsdata);
});

When(
  /^I clicked on the item tab and subclasstab selcting labour$/,
  async () => {
    await pages[this.page].itemTabACtions();
  }
);

Then(/^I validate the service type$/, async () => {
  let servicetypeInfo = oppdata.ServiceType;
  await pages[this.page].serviceTypeVal(servicetypeInfo);
});

When(/^I click on date tab and breaktab$/, async () => {
  await pages[this.page].breakpoints();
});

When(/^I am adding the breaktimings$/, async () => {
  await pages[this.page].addingBreakTimings();
});

Then(/^I validate breaks$/, async () => {
  let breaksdata = oppdata.breaks;
  await pages[this.page].breaksVal(breaksdata);
});

When(
  /^I am implementing the click action on the (\w+) order$/,
  async (page) => {
    this.page = page;
    await pages[this.page].productiondata();
  }
);

When(/^I am selecting the rigging element$/, async () => {
  await pages[this.page].rigging();
});

Then(/^I validate Errorelement and service type$/, async () => {
  rigSevicetype = oppdata.rigServiceType;
  await pages[this.page].serviceEleVal(rigSevicetype);
});

When(/^I was click on the subrigging tab getting overheadtab$/, async () => {
  await pages[this.page].subrigging();
});
