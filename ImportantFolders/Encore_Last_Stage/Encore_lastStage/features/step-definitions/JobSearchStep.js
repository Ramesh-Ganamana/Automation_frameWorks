const { When, Then } = require("@wdio/cucumber-framework");
const jobsearchData = require("../../data/jobSearch.json");
const LoginPage = require("../pageobjects/login.page");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const jobsearchNavigatorPage = require("../pageobjects/jobSearch.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  jobSearch: jobsearchNavigatorPage,
};
const page = null;

When(/^I click on (\w+) tab$/, async (tab) => {
  this.page = tab;
  await pages[this.page].gotoJobSearchTab();
  await pages[this.page].clickOnJobSearchBtn();
});

When(/^I click job option in (\w+) tab$/, async (tab) => {
  this.page = tab;
  await pages[this.page].clickOnJobs();
  await pages[this.page].getAllJobDeatilsFile();
});

When(/^I search for the job id under job search tab$/, async () => {
  const dataOrder = utilTools.readJson(
    `${process.cwd()}\\data\\jobSearch.json`
  );
  await pages[this.page].searchjob(dataOrder.jobId);
});

Then(/^I verify job id exists in the search results$/, async () => {
  const dataOrder = utilTools.readJson(
    `${process.cwd()}\\data\\jobSearch.json`
  );
  var jobIdData = dataOrder.jobId;
  await pages[this.page].verifyJobSearchResults(jobIdData);
});

When(/^I search for the order Name under job search tab$/, async () => {
  const dataOrder = utilTools.readJson(
    `${process.cwd()}\\data\\jobSearch.json`
  );
  jobOrderNameData = dataOrder.orderName;
  await pages[this.page].searchOrderName(jobOrderNameData);
});
Then(/^I verify Order Name exists in the search results page$/, async () => {
  let jobOrderNameData = utilTools.readJson(
    `${process.cwd()}\\data\\jobSearch.json`
  ).orderName;
  await pages[this.page].verifyOrderNameSearchResults(jobOrderNameData);
});

When(/^I search for the order Num under job search tab$/, async () => {
  const dataOrder = utilTools.readJson(
    `${process.cwd()}\\data\\jobSearch.json`
  );
  var jobOrderNumData = dataOrder.orderNum;
  await pages[this.page].searchOrderNum(jobOrderNumData);
});
Then(/^I verify Order Number exists in the search results page$/, async () => {
  const dataOrder = utilTools.readJson(
    `${process.cwd()}\\data\\jobSearch.json`
  );
  var jobOrderNumData = dataOrder.orderNum;
  await pages[this.page].verifyOrderSearchResults(jobOrderNumData);
});

When(/^I search for the choose Job Status under job search tab$/, async () => {
  await pages[this.page].chooseJobStatus();
});
Then(
  /^I verify choose  Job Status  exists in the search results page$/,
  async () => {
    await pages[this.page].writingjobstatus();
    let jobOrderData = utilTools.readJson(
      `${process.cwd()}\\data\\jobSearch.json`
    ).orderStatus;
    console.log("Reading Data:" + jobOrderData);
    await pages[this.page].verifyChooseJobStatus(jobOrderData);
  }
);

When(/^I search for the Update Job Status under job search tab$/, async () => {
  let jobOrderData = utilTools.readJson(
    `${process.cwd()}\\data\\jobSearch.json`
  ).orderNum;
  await pages[this.page].updateJobStatus(jobOrderData);
});

When(/^I changed to other job location on (\w+) tab$/, async (tab) => {
  this.page = tab;
  let locationData = utilTools.readJson(
    `${process.cwd()}\\data\\jobSearch.json`
  ).joblocationId;
  await pages[this.page].changejobLocation(locationData);
});

Then(
  /^I verify Update  Job Status  exists in the search results page$/,
  async () => {
    let jobOrderData = utilTools.readJson(
      `${process.cwd()}\\data\\jobSearch.json`
    ).orderStatus;
    await pages[this.page].verifyUpdateJobStatus(jobOrderData);
  }
);

//New Steps

When(/^I click on status sorting$/, async () => {
  await pages[this.page].clickOnStatusSorting();
});

When(/^I click on room sorting$/, async () => {
  await pages[this.page].clickOnRoomSorting();
  await pages[this.page].getRoomSortingVal();
});

Then(/^I verified room sorting$/, async () => {
  await pages[this.page].verifyRoomsortingVal();
});

Then(/^I verified status sorting$/, async () => {
  await pages[this.page].verifyStatusSortingVal();
});

When(/^I clicked on start date sorting$/, async () => {
  await pages[this.page].clickOnStartDateSorting();
});

When(/^I clicked on set date sorting$/, async () => {
  await pages[this.page].clickOnSetDateSorting();
});

When(/^I clicked on strike date sorting$/, async () => {
  await pages[this.page].clickOnStrikeDateSorting();
});
