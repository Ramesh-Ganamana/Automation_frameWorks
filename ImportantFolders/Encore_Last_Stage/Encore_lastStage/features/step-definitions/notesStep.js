const { When, Then } = require("@wdio/cucumber-framework");
const notesData = require("../pageobjects/notes.page");
const picklistData = require("../../data/notes.json");

const pages = {
  sales: notesData,
  operational: notesData,
  order: notesData,
};
const page = null;
When(/^I add the items to the (\w+) job$/, async (page) => {
  this.page = page;
  await pages[this.page].itemAdding();
});

When(/^I add the CustomerNotes$/, async () => {
  let notesInfo = picklistData.customerText;
  await pages[this.page].notesTab(notesInfo);
});

Then(
  /^I validate the customerNotes is not avalible for operations Job$/,
  async () => {
    await pages[this.page].validation();
  }
);

When(/^I add Items for the (\w+) job$/, async (page) => {
  this.page = page;
  await pages[this.page].addingItemsforOperationJob();
});

Then(/^I validate the PickList enabled$/, async () => {
  await pages[this.page].NotesTabForPickList();
});

Then(
  /^I add notes to the picklist and validate the picklistnotes is saved$/,
  async () => {
    let data = picklistData.picklistText;
    await pages[this.page].addingNotestoPicklist(data);
  }
);

When(/^I add the items for picklistnotes for (\w+) job$/, async (page) => {
  this.page = page;
  await pages[this.page].addingItemsForSalesJob();
});

Then(/^I validate picklist textarea is not enable for sales job$/, async () => {
  await pages[this.page].validationPicklistNotesNotenabled();
});

When(/^I add items for the Customer Notes in (\w+) job$/, async (page) => {
  this.page = page;
  await pages[this.page].addingItemstoCustomerJobInOperationalJob();
});

Then(/^I validateCustomerJobnotesNotEnabledForOperationalJob$/, async () => {
  await pages[this.page].validateCustomerJobnotesNotEnabledForOperationalJob();
});

When(/^I add the classical (\w+) for the notes$/, async (page) => {
  this.page = page;
  await pages[this.page].NewclassicOrder();
});

When(/^I click on Order tab to make notes$/, async () => {
  await pages[this.page].ordertab();
});

Then(
  /^I verify that notes tab is displayed in classcial (\w+)$/,
  async (page) => {
    this.page = page;
    await pages[this.page].printTab();
  }
);
