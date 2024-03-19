const { When, Then } = require("@wdio/cucumber-framework");
const navigatorOrderSearchPage = require("../pageobjects/orderSearch.navigator.page");
const picklistSearchPage = require("../pageobjects/picklist.navigator.page")
const packageTestData = require('../../data/picklist.json');
const utilTools = require("../../utils/tools");

const pages = {
    picklist: picklistSearchPage
    // orderSearch: navigatorOrderSearchPage,
    // jobNavigator: jobNavigatorPage
}
const page = null;

When(/^I move to picklist search screen in (\w+) page$/, async (page) => {
    this.page = page;
    await pages[this.page].selectPicklist();
});

Then(/^I capture data in (\w+) page$/, async (page) => {
    this.page = page;
    await pages[this.page].getDataFromResultsGrid();
});

Then(/^I search with picklist number and validate the same in (\w+) page$/, async (page) => {
    this.page = page;
    let pickListNumTestData = utilTools.readJson(`${process.cwd()}\\data\\picklist.json`).picklistNumInput;
    await pages[this.page].searchBypicklistNumber(pickListNumTestData);
});

Then(/^I search with order number and validate the same in (\w+) page$/, async (page) => {
    this.page = page;
    let orderNumTestData = utilTools.readJson(`${process.cwd()}\\data\\picklist.json`).orderNumInput;
    await pages[this.page].searchBypicklistOrderNumber(orderNumTestData);
});

Then(/^I search with job number and validate the same in (\w+) page$/, async (page) => {
    this.page = page;
    let jobNumTestData = utilTools.readJson(`${process.cwd()}\\data\\picklist.json`).jobNumInput;
    await pages[this.page].searchBypicklistJobNumber(jobNumTestData);
});

Then(/^I navigate to picklist detailed page from (\w+) page$/, async (page) => {
    this.page = page;
    await pages[this.page].pickListDetailedPageValidation();
});

//------------------------------------Package Search Steps -------------------------------------------------//

When(/^I move to package search screen in (\w+) page$/, async (page) => {
    this.page = page;
    await pages[this.page].selectPackageSearch();
});

Then(/^I copy a package with random name and validate the same in (\w+) page$/, async (page) => {
    this.page = page;
    await pages[this.page].copyPackageAndValidate();
});
Then(/^I search with package name and validate the same in (\w+) page$/, async (page) => {
    this.page = page;
    const packageNameVal = packageTestData.packageName;
    await pages[this.page].searchByPackageName(packageNameVal);
});

Then(/^I search with location and validate the same in (\w+) page$/, async (page) => {
    this.page = page;
    const packageLocationVal = packageTestData.packageLocation;
    await pages[this.page].searchByPackageLocation(packageLocationVal);
});