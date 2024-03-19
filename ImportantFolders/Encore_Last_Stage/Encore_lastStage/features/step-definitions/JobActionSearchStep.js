const { When, Then } = require("@wdio/cucumber-framework");
const jobactionsearch = require("../../data/jobActionSearch.json");
const LoginPage = require("../pageobjects/login.page");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const jobActionsearchNavigator = require("../pageobjects/jobActionSearch.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  jobActionSearch: jobActionsearchNavigator,
};
const page = null;

When(
  /^I change to other location for job action on (\w+) page$/,
  async (page) => {
    this.page = page;
    let locationData = jobactionsearch.joblocationId;
    await pages[this.page].changejobLocation(locationData);
  }
);

When(/^I clicked on search button$/, async () => {
  await pages[this.page].clickOnActionSearch();
});

When(/^I clicked on Order Number Link and job tab$/, async () => {
  await pages[this.page].clickOnOrderNumLink();
  await pages[this.page].clickOnJobs();
});

When(/^I verified multiple jobs$/, async () => {
  await pages[this.page].verifyMultiplejobs();
});
When(
  /^I clicked on jobactions and hovering on change job status$/,
  async () => {
    let updateJobVal = jobactionsearch.updatValidatedJob;
    await pages[this.page].clickOnJobActions();
    await pages[this.page].changeJobStatus();
    await pages[this.page].updateJobValidation(updateJobVal);
  }
);

When(/^I Verified Updated Job Status for Change Jobs$/, async () => {
  let updateJobStatus = jobactionsearch.updatedStatus;
  await pages[this.page].verifyUpdatedJobStatus(updateJobStatus);
});
When(/^I Verified Updated Job Quote Status for Change Jobs$/, async () => {
  let updateJobStatus = jobactionsearch.verifyStatus;
  await pages[this.page].verifyUpdatedJobStatus(updateJobStatus);
});

When(/^I clicked on copyjobsearch button$/, async () => {
  await pages[this.page].clickOnActionSearch();
});

When(/^I clicked on select results$/, async () => {
  await pages[this.page].clickOnSelectResult();
});
When(/^I clicked on jobs$/, async () => {
  await pages[this.page].clickOnJobs();
});
When(/^I clicked on jobactions$/, async () => {
  await pages[this.page].clickOnJobActions();
});
When(/^I clicked on copy jobs$/, async () => {
  await pages[this.page].copyJobs();
});
When(/^I clicked on paste jobs$/, async () => {
  await pages[this.page].clickOnJobActions();
  await pages[this.page].pasteJobs();
});
When(/^I clicked on save job$/, async () => {
  await pages[this.page].disableCrmCursor();
  await pages[this.page].savejob();
});
Then(/^I Verified on Copy Job Status$/, async () => {
  const data = utilTools.readJson(
    `${process.cwd()}\\data\\jobActionSearch.json`
  );
  await pages[this.page].verifyCopyJobs(data.copyJobAttribute);
});

When(/^I clicked on multiple copy jobs$/, async () => {
  await pages[this.page].clickOnMultipleCopyJob();
});
When(/^I clicked on extended date copy$/, async () => {
  await pages[this.page].clickOnExtendedDateCopy();
});
When(/^I clicked on extendedmultiple copy jobs$/, async () => {
  await pages[this.page].clickOnExtendedCopyMultipleJobs();
});
When(/^I clicked on create copy jobs$/, async () => {
  await pages[this.page].clickOnCreateCopyJobs();
});
When(/^I clicked on job done$/, async () => {
  await pages[this.page].clickOnJobDone();
});
When(/^I verified job before save$/, async () => {
  const data = utilTools.readJson(
    `${process.cwd()}\\data\\jobActionSearch.json`
  );
  await pages[this.page].verifyCopyJobs(data.copyJobAttribute);
});
Then(/^I verified job after save$/, async () => {
  // let verifyRoomstatus = jobactionsearch.roomTextStatus;
  //await pages[this.page].verifyAfterSaveJobData(verifyRoomstatus);
  const data = utilTools.readJson(
    `${process.cwd()}\\data\\jobActionSearch.json`
  );
  await pages[this.page].verifyCopyJobs(data.copyJobAttribute);
});
