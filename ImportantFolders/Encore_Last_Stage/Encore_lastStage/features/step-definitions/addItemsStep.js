const { When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const additemsData = require("../../data/additemsData.json");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const addItemsPage = require("../pageobjects/addItems.navigator.page");
const utilTools = require("../../utils/tools");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  addItems: addItemsPage,
};

const page = null;
When(
  /^I changed to other job location for Item Search on (\w+) page$/,
  async (page) => {
    this.page = page;
    await browser.pause(process.env.small_wait);
    let locationData = additemsData.joblocationId;
    await pages[this.page].changejobLocation(locationData);
  }
);

When(/^I click on items job option in (\w+) page$/, async (page) => {
  this.page = page;
  await pages[this.page].clickOnJobs();
  await pages[this.page].getOrderNumDetails();
});

When(/^I entered order number on order search field$/, async () => {
  const itemdatamOrder = utilTools.readJson(
    `${process.cwd()}\\data\\additemsDataNew.json`
  );
  await pages[this.page].inputOrderNum(itemdatamOrder.orderNum);
});
When(/^I clicked on Item Search button$/, async () => {
  await pages[this.page].clickOnAddItemSearch();
});

When(/^I clicked on Item Search button$/, async () => {
  await pages[this.page].clickOnAddItemSearch();
});
When(/^I clicked on item order number link$/, async () => {
  await pages[this.page].clickOnitemOrder();
});
When(/^I clicked on jobs link$/, async () => {
  await addItemsPage.clickOnJobTab();
});
When(/^I clicked on items link$/, async () => {
  await addItemsPage.clickOnItems();
});
When(/^I clicked on hot items link$/, async () => {
  await pages[this.page].clickOnHotItemsLink();
});
When(/^I clicked on item section$/, async () => {
  await pages[this.page].clickOnHotItemsList();
});
When(/^I clicked on item close section$/, async () => {
  await pages[this.page].clickOnCloseSection();
});
Then(/^I verified total calulations$/, async () => {
  await pages[this.page].verifyTotalCal();
});

When(/^I clicked on hot items link and sections$/, async () => {
  await pages[this.page].clickOnHotItemsList();
  await pages[this.page].clickOnHotItemsList();
});
When(/^I Performed drag and drop function$/, async () => {
  await pages[this.page].clickOnItemSection();
  await pages[this.page].dragAndDropAction();
});

When(/^I clicked on frieght link and added frieght items$/, async () => {
  await pages[this.page].clickOnFreight();
});

Then(/^I verified the frieght total cost$/, async () => {
  await pages[this.page].verifyFrieghtTotalCost();
});

When(/^I clicked on package link and added pacakge items$/, async () => {
  await addItemsPage.clickOnPackageLinkAndItem();
});

Then(/^I verified total calculation of package items$/, async () => {
  await pages[this.page].verifyPackageTotalCal();
});

When(/^I clicked on sub item link$/, async () => {
  await addItemsPage.clickOnSubItemLink();
});

When(/^I clicked on item link$/, async () => {
  await pages[this.page].clickOnItemLink();
});

When(/^I clicked on search magnifier$/, async () => {
  await pages[this.page].clickOnSearchMagnifier();
});
When(/^I clicked on item search magnifier$/, async () => {
  await pages[this.page].clickOnItemSearchMagnifier();
});
When(/^I clicked on subzero check box$/, async () => {
  await pages[this.page].clickOnSubZeroChkBox();
});

When(/^I clicked on item subzero check box$/, async () => {
  await pages[this.page].clickOnItemSubZeroChkBox();
});

When(/^I entered text for subzero check box$/, async () => {
  let subclasszeroData = additemsData.zerosubClassItem;
  await pages[this.page].enterTextSearchforSubZero(subclasszeroData);
});

When(/^I entered text for item subzero check box$/, async () => {
  let subclasszeroData = additemsData.zerosubClassItem;
  await pages[this.page].enterItemTextSearchforSubZero(subclasszeroData);
});

When(/^I verified SubZero data$/, async () => {
  await addItemsPage.verifySubZeroQty();
});

When(/^I verified item SubZero data$/, async () => {
  await addItemsPage.verifyItemSubZeroQty();
});

When(/^I clicked on labor subclass and Verified$/, async () => {
  let subclasszeroData = additemsData.labourSubClass;
  await addItemsPage.clearDataSearchItem();
  await addItemsPage.clickOnLaborSubClass();
  await addItemsPage.enterTextSearchforLaborSubClass(subclasszeroData);
});

// --------------------------------------------------------------------------------------------

When(/^I clicked on  labor item and Verified$/, async () => {
  let subclasszeroData = additemsData.labourSubClass;
  //await pages[this.page].clearDataSearchItem();
  await addItemsPage.clearDataSearch();
  await addItemsPage.clickOnItemLaborSubClass();
  await addItemsPage.enterTextSearchforItemLaborSubClass(subclasszeroData);
});

When(
  /^I Verify the Start Dates and end dates on the Sales Order$/,
  async () => {
    await addItemsPage.verifyStartEndDate();
    await addItemsPage.verifySalesAndOperationJob();
  }
);
When(/^I added the labor subclass and verified$/, async () => {
  await addItemsPage.validateLaborSubClassItems();
});

When(/^I added the subclass greater than zero and verified$/, async () => {
  await addItemsPage.validateSubClassItems();
});
When(
  /^I Verify that Order  is saved and the Totals are calculated on the Totals Tab$/,
  async () => {
    await addItemsPage.verifyTotalCalForSubclass();
  }
);

//3rd Phase

When(/^I verified job start date and end dates for add items$/, async () => {
  await jobPage.verifyDates();
});

When(/^I clicked on item list$/, async () => {
  await addItemsPage.doubleClickOnItem();
});

When(/^I verified the item text vals$/, async () => {
  await addItemsPage.verifyAddedItems();
});

When(/^I clicked on the sales job and entered sales name$/, async () => {
  let additemNam = additemsData.salesNameVal;
  await addItemsPage.clickOnSalesJobName();
  await addItemsPage.enterTheName(additemNam);
});

When(/^I verified the added package$/, async () => {
  await addItemsPage.verifyAddedPackageGrid();
});

When(/^I clicked on operational job$/, async () => {
  await addItemsPage.clickOnOperationalJob();
});

When(/^I verified sales job and opeartional job$/, async () => {
  await addItemsPage.verifySalesJobData();
});

When(/^I verified sales Review$/, async () => {
  await addItemsPage.salesReview();
});

When(
  /^I update the starting and ending hrs and verified sales and Operation jobs$/,
  async () => {
    await addItemsPage.updatingSalesJobHrs();
    await addItemsPage.verifyoperationJobHrs();
  }
);

When(/^I added and verified labor items times$/, async () => {
  await addItemsPage.addLaborItemsAndVerify();
});

When(/^I verified the added labor hours reflected$/, async () => {
  await addItemsPage.verifyReflectedLaborHrs();
});

When(/^I updated items start and end times$/, async () => {
  await addItemsPage.updatingItemTimeAndVerify();
});

When(/^I verified the gross total$/, async () => {
  await addItemsPage.verifyingGrossTotal();
});

//4th Phase

When(/^I selected cmp package from package filter$/, async () => {
  await addItemsPage.addCMPPackage();
});

When(/^I added cmp package to job and verified added package$/, async () => {
  await addItemsPage.addAndVerifyCMPPackagetoJob();
});

When(/^I selected serial package from package filter$/, async () => {
  await addItemsPage.addSerialPackage();
});

When(/^I added serial package to job and verified added package$/, async () => {
  await addItemsPage.addAndVerifySerialPackagetoJob();
});

When(/^I selected standard package from package filter$/, async () => {
  await addItemsPage.addStandardPackageToJob();
});

When(
  /^I added standard package to job and verified added package$/,
  async () => {
    await addItemsPage.addAndVerifyStandardPackageToJob();
  }
);

When(/^I selected super package from package filter$/, async () => {
  await addItemsPage.addSuperPackageToJob();
});

When(/^I added super package to job and verified added package$/, async () => {
  await addItemsPage.addAndVerifySuperPackageToJob();
});
