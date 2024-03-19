const { assert } = require("chai");
const { expect } = require("chai");
const utilTools = require("../../utils/tools");

class printgroup {
  classicOrder() {
    return $(`(//span[@title='New Classic']/parent::div/following::div[2])[6]`);
  }
  ProductionOrder() {
    return $(`(//span[@title='New Classic']/parent::div/following::div[2])[5]`);
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
  jobActionDropDown() {
    return $(`//b[@class='caret']`);
  }
  createNewPrintGroupThisJob() {
    return $(`//a[normalize-space()='Create Print Group From This Job']`);
  }
  createNewPrintGroup() {
    return $(`//div[@class='modal-header']`);
  }

  laborGroup() {
    return $(`//a[normalize-space()='Assign Labor Group']`);
  }
  PrintGroup() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][3]/div[11]`
    );
  }
  saveBtn() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }
  insertJob() {
    return $(`(//a[@class='ng-binding'][normalize-space()='Insert Job'])[1]`);
  }
  rombooth() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][3]/div[8]`
    );
  }
  itemsTab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[1]/a`);
  }
  itemsubTab() {
    return $(`//label[@class='btn order-product-icon-btn'][6]/span`);
  }
  Item() {
    return $(
      `//div[@id='gridProductsOrderEntry']//div[contains(@class,'ui-widget-content slick-row')][6]`
    );
  }
  existingGroup() {
    return $(`//a[normalize-space()='Add to Existing Print Group']`);
  }
  printDropdown() {
    return $(`(//span[@class='caret'])[2]`);
  }
  consolidatedQuote() {
    return $(`//a[normalize-space()='Consolidated Quote']`);
  }
  consolidateQuoteParamaters() {
    return $(`//div[@class='modal-body']`);
  }
  printReport() {
    return $(`//button[@title='Preview Report']`);
  }
  Report() {
    return $(`//div[@id='reportViewerExport']`);
  }
  async classicaljob() {
    await browser.pause(process.env.small_wait);
    await this.dateRange().click();
    await browser.pause(1000);
    await this.searchButton().click();
    await browser.pause(process.env.small_wait);
    await this.classicOrder().click();
    await browser.pause(process.env.medium_wait);
    await this.jobsButton().click();
  }
  async jobActions() {
    await this.jobActionDropDown().click();
    await this.createNewPrintGroupThisJob().click();
    await browser.pause(1000);
    let CreateGroup = await this.createNewPrintGroup().isDisplayed();
    assert.isTrue(CreateGroup);
  }

  async verificationOfLaborGroup() {
    await this.insertJob().click();
    await this.jobActionDropDown().click();
    await this.laborGroup().click();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
    let printText = await this.PrintGroup().getText();

    assert.equal(printText, "Labor");
    let roomText = await this.rombooth().getText();

    assert.equal(roomText, "Labor");
  }

  async addItem() {
    await this.itemsTab().click();
    await this.itemsubTab().click();
    await this.Item().doubleClick();
    await this.saveBtn().click();
    await browser.pause(process.env.medium_wait);
    await this.jobActionDropDown().click();
    await this.existingGroup().click();
    await browser.pause(1000);
    let CreateGroup = await this.createNewPrintGroup().isDisplayed();
    assert.isTrue(CreateGroup);
  }
  async consilidateValidation() {
    await this.printDropdown().click();
    await this.consolidatedQuote().click();
    await browser.pause(2000);
    let parameters = await this.consolidateQuoteParamaters().isDisplayed();
    assert.isTrue(parameters);
    await this.printReport().click();
    await browser.pause(process.env.small_wait);
    let reports = await this.Report().isDisplayed();
    assert.isTrue(reports);
  }
}
module.exports = new printgroup();
