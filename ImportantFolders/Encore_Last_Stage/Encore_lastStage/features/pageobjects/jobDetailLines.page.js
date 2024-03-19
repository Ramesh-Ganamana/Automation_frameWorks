const { assert } = require("chai");
const { expect } = require("chai");
const utilTools = require("../../utils/tools");

class JobDetailLines {
  classicOrder() {
    return $(`(//span[@title='New Classic']/parent::div/following::div[2])[6]`);
  }
  ProductionOrder() {
    return $(
      `(//span[@title='Productions Order']/parent::div/following::div[2])[3]`
    );
  }
  dateRange() {
    return $(`//input[@id='order-search_ApplyDates']`);
  }
  searchButton() {
    return $(`(//input[@title="Search"])[1]`);
  }
  jobsButton() {
    return $(`//span[@title="Job - Invalid values."]/..`);
  }
  itemsTab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[1]/a`);
  }
  itemsubTab() {
    return $(`//label[@class='btn order-product-icon-btn'][6]/span`);
  }
  lineItem() {
    return $(
      `//div[@id='gridProductsOrderEntry']//div[contains(@class,'ui-widget-content slick-row')][6]`
    );
  }
  lineItemIcon() {
    return $(
      `(//div[@id='oeOrderLinesGrid']//div[@class='slick-cell l0 r0 cell-reorder dnd'])[1]`
    );
  }
  lineItemIcon2() {
    return $(
      `(//div[@id='oeOrderLinesGrid']//div[@class='slick-cell l0 r0 cell-reorder dnd'])[2]`
    );
  }
  lineItemText() {
    return $(
      `(//div[@id='oeOrderLinesGrid']//div[@class='slick-cell l0 r0 cell-reorder dnd'])[1]/following::div[3]`
    );
  }
  lineItemText2() {
    return $(
      `(//div[@id='oeOrderLinesGrid']//div[@class='slick-cell l0 r0 cell-reorder dnd'])[2]/following::div[3]`
    );
  }
  DetailsPage() {
    return $(`//ul[@id='orderLinesContextMenu']`);
  }
  cutline() {
    return $(`//ul[@id='orderLinesContextMenu']/li[1]`);
  }
  saveBtn() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }
  copyLine() {
    return $(`//ul[@id='orderLinesContextMenu']/li[2]`);
  }
  pasteline() {
    return $(`//ul[@id='orderLinesContextMenu']/li[3]`);
  }
  setComplimentry() {
    return $(`//ul[@id='orderLinesContextMenu']/li[10]`);
  }
  compiteterMatch() {
    return $(`//ul[@id='orderLinesContextMenuChild']/li[1]`);
  }
  ordersRequiredReason() {
    return $(`//div[@role='alert']/div`);
  }
  strikeelement() {
    return $(
      `(//div[@id='oeOrderLinesGrid']//div[@class='slick-cell l0 r0 cell-reorder dnd'])[1]/following::div[9]/strike`
    );
  }
  undocomplimentry() {
    return $(`//ul[@id='orderLinesContextMenu']/li[11]`);
  }

  operations() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][2]/div[10]`
    );
  }
  jobActionsButton() {
    return $(
      `//li[@is-open="isJobActionsOpen"]/a[contains(text(),"Job Actions")]`
    );
  }

  copyJob() {
    return $(`//a[text()="Copy Selected Job"]`);
  }
  copyMultipleJobs() {
    return $(`//a[text()="Copy Job to Multiple Rooms"]`);
  }

  copyOption() {
    return $(`(//li[text()="Copy Selected Job"])[1]`);
  }
  copyMultipleJobsOption() {
    return $(`(//li[text()="Copy Job to Multiple Rooms"])[1]`);
  }
  jobLines() {
    return $(`(//b[text()='Job Lines:'])[1]`);
  }

  //_____________________________________________________________________________________________//
  operations() {
    return $(`(//div[text()="Operations"])[1]`);
  }
  jobActionsButton() {
    return $(
      `//li[@is-open="isJobActionsOpen"]/a[contains(text(),"Job Actions")]`
    );
  }
  copyJob() {
    return $(`//a[text()="Copy Selected Job"]`);
  }
  copyMultipleJobs() {
    return $(`//a[text()="Copy Job to Multiple Rooms"]`);
  }

  copyOption() {
    return $(`(//li[text()="Copy Selected Job"])[1]`);
  }
  copyMultipleJobsOption() {
    return $(`(//li[text()="Copy Job to Multiple Rooms"])[1]`);
  }
  jobLines() {
    return $(`(//b[text()='Job Lines:'])[1]`);
  }

  //First case//
  async selectClassicSalesJob() {
    await browser.pause(process.env.small_wait);
    await this.dateRange().click();
    await browser.pause(1000);
    await this.searchButton().click();
    await browser.pause(process.env.small_wait);
    await this.classicOrder().click();
    await browser.pause(process.env.medium_wait);
    await this.jobsButton().click();
  }
  async addingLineItemForSales() {
    await this.itemsTab().click();
    await this.itemsubTab().click();
    await this.lineItem().doubleClick();
    await browser.pause(process.env.small_wait);
  }

  async RightClick() {
    await this.lineItemIcon().click({ button: "right" });
    await this.cutline().click();
    await browser.pause(process.env.small_wait);
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
    let cutItem = await this.lineItemText().getText();
    assert.equal(cutItem, "");
  }
  //second case//
  async copyline() {
    await this.lineItemIcon().click({ button: "right" });
    await this.copyLine().click();
    await this.lineItemIcon2().click({ button: "right" });
    await this.pasteline().click();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
    let copyItem = await this.lineItemText().getText();
    let pasteItem = await this.lineItemText2().getText();
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$##########%%%%%%%%%%%%%");
    assert.equal(copyItem, pasteItem);
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$@@@@@@@@@@@@@@@@@@@@");
  }
  //Third case//
  async SelectProductionSalesJob() {
    await browser.pause(process.env.small_wait);
    await this.dateRange().click();
    await browser.pause(1000);
    await this.searchButton().click();
    await browser.pause(process.env.small_wait);
    await this.ProductionOrder().click();
    await browser.pause(process.env.small_wait);
    await this.jobsButton().click();
  }
  async complimentry() {
    await this.lineItemIcon().click({ button: "right" });
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$##########%%%%%%%%%%%%%");
    await this.setComplimentry().moveTo();
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$##########%%%%%%%%%%%%%");
    await browser.pause(2000);
    await this.compiteterMatch().click();
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$##########***********");
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
    let reason = await this.ordersRequiredReason().isDisplayed();
    assert.isTrue(reason);
    let strike = await this.strikeelement().getCSSProperty("text-decoration");
    assert.equal(strike.value, "line-through solid rgb(34, 34, 34)");
  }
  async UndoComplimentryinclassicOrder() {
    await browser.pause(2000);
    await this.lineItemIcon().click({ button: "right" });
    await this.undocomplimentry().click();
    let strike = await this.strikeelement().isDisplayed();
    assert.isFalse(strike);
  }

  ____________________________________________________________________________________________;
  async productionOrder() {
    await browser.pause(process.env.small_wait);
    await this.dateRange().click();
    await browser.pause(1000);
    await this.searchButton().click();
    await browser.pause(process.env.small_wait);
    await this.ProductionOrder().click();
    await browser.pause(process.env.medium_wait);
    await this.jobsButton().click();
  }

  async verifyJobs() {
    await this.operations().click();
    console.log("#########################################");
    await this.jobActionsButton().waitForDisplayed();
    await this.jobActionsButton().click();
    await browser.pause(2000);
    let copyJob = await this.copyJob().isDisplayed();
    assert.isFalse(copyJob);
    console.log("***************************************");
    let copymultipleJob = await this.copyMultipleJobs().isDisplayed();
    assert.isFalse(copymultipleJob);
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
  }
  async verifyCopyPaste() {
    await this.operations().waitForDisplayed();
    expect(await this.operations().isDisplayed()).equal(true);
    await this.operations().click({ button: "right" });
    await this.jobLines().waitForDisplayed();
    let jobline = await this.jobLines().isDisplayed();
    assert.isTrue(jobline);
    let copyPaste = await this.copyOption().isDisplayed();
    assert.isFalse(copyPaste);
  }
}

module.exports = new JobDetailLines();
