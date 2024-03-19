const { When, Then } = require("@wdio/cucumber-framework");
const importjobData = require("../../data/importJobs.json");
const LoginPage = require("../pageobjects/login.page");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const importJobsNavigator = require("../pageobjects/importJobs.navigator.page");
const jobNavigatorPage = require("../pageobjects/jobs.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  importJobs: importJobsNavigator,
  jobNavigator: jobNavigatorPage,
};
const page = null;

When(/^I clicked on order search tab on (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].orderSearchTab();
});

When(
  /^I change to other location for import jobs on (\w+) page$/,
  async (page) => {
    this.page = page;
    await browser.pause(process.env.small_wait);
    let locationData = importjobData.joblocationId;
    await pages[this.page].changejobLocation(locationData);
  }
);

When(/^I click on job option in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].clickOnJobs();
  await pages[this.page].getOrderNumDetails();
});

When(/^I click on job option for import job in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].clickOnJobs();
  await pages[this.page].saveOrder();
  await pages[this.page].getOrderNumDetails();
});

When(/^I click on job Tab in production order (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].clickOnJobs();
});
When(/^I click on job Tab in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].clickOnJobs();
});

When(
  /^I clicked on Order Number Link and job tab on (\w+) page$/,
  async (page) => {
    this.page = page;
    const importOrderNum = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    var orderNum = importOrderNum.newOrderNum;
    await pages[this.page].clickOnOrderNumLink(orderNum);
    await pages[this.page].clickOnJobs();
  }
);

When(
  /^I clicked on old classic Order Number Link and job tab on (\w+) page$/,
  async (page) => {
    this.page = page;
    const importOrderNum = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    var oldClassicOrderDataNum = importOrderNum.oldClassicOrderNum;
    await pages[this.page].clickOnOrderNumLink(oldClassicOrderDataNum);
    await pages[this.page].clickOnJobs();
  }
);

When(
  /^I clicked on Order Number Link and get job order details on (\w+) page$/,
  async (page) => {
    this.page = page;
    const importOrderNum = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    var orderNum = importOrderNum.newOrderNum;
    await pages[this.page].getAllOrderDetails(orderNum);
    await pages[this.page].getJobNumberDet();
  }
);

When(/^I click on job search (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].gotoJobSearchTab();
});

When(
  /^I clicked on jobactions and click on import job on (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].clickOnimportJobActions();
  }
);
When(/^I clicked on import job location$/, async () => {
  await pages[this.page].clickOnImportDiffJobLocation();
});

When(/^I clicked on import job search and select result$/, async () => {
  await pages[this.page].importSearchBtn();
  await pages[this.page].selectResultsData();
});

When(
  /^I clicked on import job search and select new classic result$/,
  async () => {
    await pages[this.page].importSearchBtn();
    await pages[this.page].clickOnNewClassicData();
  }
);

When(
  /^I clicked on import job search and select old classic Order result$/,
  async () => {
    const oldClassicData = importjobData.oldClassicOrder;
    await pages[this.page].importOldclassicOrder(oldClassicData);
  }
);
When(/^I clicked on import job search$/, async () => {
  await pages[this.page].importSearchBtn();
});

When(/^I verified and clicked on create new button$/, async () => {
  await pages[this.page].clickOnCreateNewBtn();
});

When(/^I verified and clicked on done  button$/, async () => {
  await pages[this.page].clickOnDoneBtn();
});

When(/^I clicked on  save  button and Verified Empty Loc$/, async () => {
  await pages[this.page].clickOnSaveBtnDiffLoc();
});

When(/^I clicked on  save  button$/, async () => {
  await pages[this.page].clickOnSaveBtn();
});

Then(/^I verified saved labor details$/, async () => {
  await pages[this.page].getLaborNameDetails();
  const laborNameData = utilTools.readJson(
    `${process.cwd()}\\data\\importJobs.json`
  );
  const laborNameResultsDetails = laborNameData.laborDetName;
  await pages[this.page].verifySavedLaborNameDetails(laborNameResultsDetails);
});

When(/^I search for job number and verified on (\w+) page$/, async (page) => {
  this.page = page;
  const jobnumberData = utilTools.readJson(
    `${process.cwd()}\\data\\importJobs.json`
  );
  const jobNumberResults = jobnumberData.jobNumber;
  await pages[this.page].importJobNumberSearch(jobNumberResults);
});

When(
  /^I search for new job number and verified on (\w+) page$/,
  async (page) => {
    this.page = page;
    const newOrderNumber = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    const newOrderNumberData = newOrderNumber.newOrderNum;
    await pages[this.page].importNewJobNumberSearch(newOrderNumberData);
  }
);
When(/^I search for order number and verified on (\w+) page$/, async (page) => {
  this.page = page;
  const ordernumberData = utilTools.readJson(
    `${process.cwd()}\\data\\importJobs.json`
  );
  const orderNumberResults = ordernumberData.orderNumber;
  await pages[this.page].importOrderNumSearch(orderNumberResults);
});
When(/^I search for order name and verified on (\w+) page$/, async (page) => {
  this.page = page;
  const ordernameData = utilTools.readJson(
    `${process.cwd()}\\data\\importJobs.json`
  );
  const orderNameResults = ordernameData.orderName;
  await pages[this.page].importOrderNameSearch(orderNameResults);
});
When(/^I applied for the include discount check option$/, async () => {
  await pages[this.page].applyCurrentOrderOption();
});

When(/^I verified for job numbers and save and discount note$/, async () => {
  await pages[this.page].verifyEmptyOrderNumAndDisc();
});

When(/^I get the production order$/, async () => {
  await pages[this.page].getProductionOrder();
});
When(/^I get the production and old classic orders$/, async () => {
  await pages[this.page].getProductAndOldClassicOrders();
});
When(/^I search for production order in import job$/, async () => {
  const prodOrderData = utilTools.readJson(
    `${process.cwd()}\\data\\importJobs.json`
  );
  const productOrderNumDta = prodOrderData.prodOrderNum;
  await pages[this.page].searchImportProdOrder(productOrderNumDta);
});

Then(
  /^I search for without date range and verified data on (\w+) page$/,
  async (page) => {
    this.page = page;
    await pages[this.page].getWithOutDateRangeData();
    const ordernameData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    const orderNameResultsData = ordernameData.textArea;
    await pages[this.page].verifyDataSearchWithOutDateRange(
      orderNameResultsData
    );
  }
);
Then(/^I verified old classic order details$/, async () => {
  await pages[this.page].getLaborNumDet();
  const laborNameData = utilTools.readJson(
    `${process.cwd()}\\data\\importJobs.json`
  );
  const laborResultsDetails = laborNameData.laborDeatils;
  await pages[this.page].verifySavedLaborNumDetails(laborResultsDetails);
});

Then(
  /^I verified new classic order  details for production order$/,
  async () => {
    await pages[this.page].writeProdJobStatus();
    const prodDataStatus = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    const prodResultsDetails = prodDataStatus.prodOrdrStatus;
    await pages[this.page].verifyImportNewJobInProdClass(prodResultsDetails);
  }
);
Then(/^I verified production order results$/, async () => {
  await pages[this.page].verifyProdOrderCheck();
});

Then(
  /^I save order after applying discount and capture all the details$/,
  async () => {
    await importJobsNavigator.saveOrderInJobs();
    await importJobsNavigator.getNewClassicOrderDetails();
  }
);

Then(
  /^I import a new classic order and validate discount percentage in (\w+) page$/,
  async (page) => {
    this.page = page;
    const importOrderNum = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    var orderNum = importOrderNum.newClassicOrderNum;
    var discountPerActual = importOrderNum.newClassicDiscount;
    await pages[this.page].importJobsFromJobActions(orderNum);
    await pages[this.page].clickOnCreateNewBtn();
    await pages[this.page].clickOnDoneBtn();
    await pages[this.page].validateDiscountPercentage(discountPerActual);
  }
);

Then(
  /^I save production order after applying special rate and capture all the details$/,
  async () => {
    await importJobsNavigator.saveOrderInJobs();
    await importJobsNavigator.captureProductionOrderDetails();
  }
);

When(
  /^I create a production order and import production order jobs$/,
  async () => {
    let prodUrlVal = utilTools.readJson(
      `${process.cwd()}\\data\\oppCreation.json`
    ).generatedUrl;
    const productOrderNumData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    ).newProdOrderNum;
    await jobNavigatorPage.createProductionOrder(prodUrlVal);
    await importJobsNavigator.saveOrderInJobs();
    await importJobsNavigator.clickOnJobssLinkHeader();
    await importJobsNavigator.clickOnimportJobActions();
    await importJobsNavigator.importJobsFromJobActions(productOrderNumData);
    await importJobsNavigator.clickOnCreateNewBtn();
    await importJobsNavigator.clickOnDoneBtn();
  }
);

Then(
  /^I validate special rate applied to the imported jobs for production order$/,
  async () => {
    const specialRateActual = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    ).newProdSpecialRate;
    await importJobsNavigator.specialRateValidation(specialRateActual);
  }
);

Then(
  /^I save order and add notes and line comments to the classic order$/,
  async () => {
    const coverNote = importjobData.coverSheetNoteVal;
    const JobNote = importjobData.jobOrderNoteVal;
    await importJobsNavigator.addNotesAndLineComments(coverNote, JobNote);
  }
);

Then(/^I select include note to import order notes$/, async () => {
  await importJobsNavigator.includeNotes();
});

Then(
  /^I validate coversheet note and job order note in old classic order$/,
  async () => {
    this.page = page;
    const importOrderNum = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    var orderNum = importOrderNum.noteOrderNum;
    const coverNoteActual = importjobData.coverSheetNoteVal;
    const JobNoteActual = importjobData.jobOrderNoteVal;
    await importJobsNavigator.importJobsFromJobActions(orderNum);
    await importJobsNavigator.clickOnCreateNewBtn();
    await importJobsNavigator.clickOnDoneBtn();
    await importJobsNavigator.validateNotesAndLineComments(
      coverNoteActual,
      JobNoteActual
    );
  }
);
