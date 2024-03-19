const { assert } = require("chai");
const { expect } = require("chai");
const utilTools = require("../../utils/tools");
class notes {
  salesLine() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[1]/div[10]`
    );
  }
  operationsLine() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[2]/div[10]`
    );
  }
  itemsTab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[1]/a`);
  }
  subClassBtn() {
    return $(`//label[@class='btn order-product-icon-btn'][5]/span`);
  }
  subClassResults() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[16]/child::div[6]/div[1]`
    );
  }
  notes() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[3]/a`);
  }
  notesTextArea() {
    return $(`(//div[@class='orderRow'])[4]/child::div[2]/textarea`);
  }
  notesTextAreaTwo() {
    return $(`(//div[@class='orderRow'])[4]/child::div[2]/textarea[2]`);
  }
  picklist() {
    return $(`(//div[@class='orderRow'])[4]/child::div[3]`);
  }
  picklistText() {
    return $(`(//div[@class='orderRow'])[4]/child::div[3]/textarea[2]`);
  }

  pickTextTwo() {
    return $("(//div[@class='orderRow'])[4]/child::div[3]/textarea[1]");
  }
  saveButton() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }
  classicOrder() {
    return $(`(//span[@title='Order']/parent::div/following::div[1])[2]`);
  }

  dateRange() {
    return $(`//input[@id='order-search_ApplyDates']`);
  }
  searchButton() {
    return $(`(//input[@title="Search"])[1]`);
  }
  clickorder() {
    return $("(//ul[@class='nav navbar-nav'])[2]/li[1]/a");
  }
  clicknotes() {
    return $("//ul[@id='oeOrderMenu']/li[8]");
  }
  textarea() {
    return $("//textarea[@id='OrderNote']");
  }
  clicksave() {
    return $("//div[@class='navbar-header']/ul[1]/li[3]");
  }
  selectprintdropdown() {
    return $("//div[@class='navbar-header']/ul/descendant::div[3]/button[2]");
  }
  selectQuote() {
    return $("//a[text()='Quote/Event Billing']");
  }
  selectPrameter() {
    return $("//span[text()='Print Parameters']");
  }
  selectshowtext() {
    return $("//input[@name='ShowOrderNotes']");
  }
  printpreview() {
    return $("//button[@title='Preview Report']");
  }
  notestext() {
    return $("//div[@id='continuousView']");
  }
  errorNote() {
    return $(`//div[@class="badge ng-binding"]`);
  }
  crossButtonPopUp() {
    return $(`//div[@class="badge ng-binding"]/span`);
  }
  async itemAdding() {
    await this.itemsTab().click();
    await this.subClassBtn().click();
    await this.subClassResults().doubleClick();
  }
  async notesTab(customerText) {
    await this.notes().click();

    await this.notesTextArea().setValue(customerText);
    await browser.pause(process.env.small_wait);
    let jobNotesText = await this.notesTextArea().getValue();
    assert.equal(jobNotesText, customerText);
  }
  async validation() {
    const FirstElement = await this.notesTextArea();
    const ColorBeforeClick = await FirstElement.getCSSProperty(
      "background-color"
    );
    await this.operationsLine().click();
    await browser.pause(2000);
    const secondElement = await this.notesTextArea();
    const colorAfterClick = await secondElement.getCSSProperty(
      "background-color"
    );
    assert.notStrictEqual(
      ColorBeforeClick,
      colorAfterClick,
      "Color of the second element did not change."
    );
  }
  async addingItemsforOperationJob() {
    await this.operationsLine().click();
    await this.itemsTab().click();
    await this.subClassBtn().click();
    await this.subClassResults().doubleClick();
  }
  async NotesTabForPickList() {
    await this.notes().click();
    let List = await this.picklist().isEnabled();
    assert.isTrue(List, "pickList is enabled");
  }
  async addingNotestoPicklist(picklistText) {
    await this.picklistText().setValue(picklistText);
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    await this.operationsLine().click();
    let textofPicklist = await this.picklistText().getValue();

    assert.equal(picklistText, textofPicklist);
  }
  async addingItemsForSalesJob() {
    await this.itemsTab().click();
    await this.subClassBtn().click();
    await this.subClassResults().doubleClick();
    await this.notes().click();
  }
  async validationPicklistNotesNotenabled() {
    let cursorlite = await this.pickTextTwo();
    let cursorpoint = await cursorlite.getCSSProperty("cursor");
    assert.equal(cursorpoint.value, "not-allowed");
  }
  async addingItemstoCustomerJobInOperationalJob() {
    await this.operationsLine().click();
    await this.itemsTab().click();
    await this.subClassBtn().click();
    await this.subClassResults().doubleClick();
  }
  async validateCustomerJobnotesNotEnabledForOperationalJob() {
    await this.notes().click();
    let cursordata = await this.notesTextAreaTwo();
    let cursorInfo = await cursordata.getCSSProperty("cursor");
    assert.equal(cursorInfo.value, "not-allowed");
  }

  async NewclassicOrder() {
    await browser.pause(process.env.small_wait);
    await this.dateRange().click();
    await browser.pause(1000);
    await this.searchButton().click();
    await browser.pause(process.env.small_wait);
    await this.classicOrder().click();
    await browser.pause(process.env.medium_wait);
  }
  async ordertab() {
    await this.clickorder().click();
    await this.clicknotes().click();
    await this.textarea().setValue("test Notes");
    if (await this.errorNote().isDisplayed()) {
      await this.crossButtonPopUp().click();
      await browser.pause(2000);
    }
    await this.clicksave().click();
    await browser.pause(process.env.medium_wait);
  }
  async printTab() {
    await this.selectprintdropdown().click();
    await this.selectQuote().click();
    await browser.pause(process.env.small_wait);
    await this.selectPrameter().click();
    await this.selectshowtext().click();
    await this.printpreview().click();
    await browser.pause(process.env.large_wait);
    let noteText = await this.notestext().isDisplayed();
    assert.isTrue(noteText);
  }
}

module.exports = new notes();
