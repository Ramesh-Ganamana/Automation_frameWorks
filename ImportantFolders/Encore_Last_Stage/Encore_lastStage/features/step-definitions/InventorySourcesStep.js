const { Given, When, Then } = require("@wdio/cucumber-framework");
const jobNavigatorPage = require("../pageobjects/jobs.navigator.page");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const inventorySourcesPage = require("../pageobjects/inventorySources.page");
const testData = require("../../data/inventorySources.json");
const oppertunityData = require("../../data/oppCreation.json");
const additemsPage = require("../pageobjects/addItems.navigator.page");

When(
  /^I create a new classic order to validate Inventory Sources data in navigator page$/,
  async () => {
    await jobNavigatorPage.OrderCreation(oppertunityData.generatedUrl);
  }
);
When(
  /^I create a production order to validate Inventory Sources data in navigator page$/,
  async () => {
    await jobNavigatorPage.createProductionOrder(oppertunityData.generatedUrl);
  }
);
When(/^I add item for Inventory sources$/, async () => {
  await inventorySourcesPage.addItemForInventoryResources(testData.quantity);
});
When(/^I update dates of the order$/, async () => {
  await inventorySourcesPage.updateOrderDate();
});
When(/^I update room status to otherthan quote$/, async () => {
  await inventorySourcesPage.updateRoomStatusToOtherthanQuote();
});
Then(/^I verify add request button is enabled$/, async () => {
  await inventorySourcesPage.validateAddRequestButtonEnabled();
});
When(/^I add warehouse request$/, async () => {
  await inventorySourcesPage.addWarehouseRequest();
});
When(/^I click on include shorts$/, async () => {
  await inventorySourcesPage.clickOnIncludeShorts(testData.quantity);
});
Then(/^I verify warehouse request is generated$/, async () => {
  await inventorySourcesPage.validateWarehouseRequestIsGenerated();
});
When(/^I search for the order Num under order search tab$/, async () => {
  await inventorySourcesPage.searchOrder(testData.orderNum);
  await inventorySourcesPage.searchOrderResults(testData.orderNum);
});
When(/^I change to other location for inventory sources page$/, async () => {
  await additemsPage.changejobLocation(testData.inventoryLocID);
});
When(/^I edited the item quantity added to the order$/, async () => {
  await inventorySourcesPage.editQuantity(testData.editQuantity);
});
When(/^I edit the warehouse request for the order$/, async () => {
  await inventorySourcesPage.editWarehouseRequest();
});
Then(/^I verify warehouse request is editable$/, async () => {
  await inventorySourcesPage.validateWarehouseRequestEditable();
});
When(/^I cancel the warehouse request$/, async () => {
  await inventorySourcesPage.cancelWarehouseRequest();
});
Then(/^I verify warehouse request cancelled$/, async () => {
  await inventorySourcesPage.validateWarehouseRequestCancelled();
});
When(/^I add item for venue request$/, async () => {
  await inventorySourcesPage.addItemForVenueRequest(
    testData.venueRequestItem,
    testData.venueItemQty
  );
});
Then(/^I add venue request verified model should be displayed$/, async () => {
  await inventorySourcesPage.addVenueRequest();
});
When(/^I include shorts for venue request$/, async () => {
  await inventorySourcesPage.clickOnIncludeShortsVenueRequest();
});
When(
  /^I add source items from venue to generate request and I verify item quantity is added to request$/,
  async () => {
    let totalQty = await inventorySourcesPage.addSourceItemsFromVenue();
    await inventorySourcesPage.validateItemQuantityAddedToRequest(1);
  }
);
Then(/^I verify item quantity is added to request$/, async () => {
  await inventorySourcesPage.validateItemQuantityAddedToRequest(4);
});
When(/^I click generate request button$/, async () => {
  await inventorySourcesPage.clckOnGenerateRequest();
});
Then(
  /^I verify venue requests should be created for all venues and items requested for$/,
  async () => {
    await inventorySourcesPage.validateVenueRequestCreatedForAllItems();
  }
);
Then(/^I click on cancel button verified cancel popup$/, async () => {
  await inventorySourcesPage.cancelWarehouseRequest();
  await inventorySourcesPage.verifyRequestShouldNotDisplayed();
});

When(/^I clicked on close btn$/, async () => {
  await inventorySourcesPage.clickCloseBtn();
});

// latest -----------------------------

When(
  /^I add item to that order with 0 or less quality and verifed item added$/,
  async () => {
    let itemName = '20" ' + testData.itemName;
    await inventorySourcesPage.addItemsToOrder(itemName, testData.venueItemQty);
    await inventorySourcesPage.verifyItemAdd(itemName);
  }
);

When(
  /^I click on edit button and add picklist comment and clik on OK$/,
  async () => {
    await inventorySourcesPage.addPickListDetails(itemName);
  }
);

Then(/^I verifed picklist comment is added$/, async () => {
  await inventorySourcesPage.verifyPickListCommentAdded();
});

When(/^I get the text for the second location$/, async () => {
  await inventorySourcesPage.locationIdGetting();
});
