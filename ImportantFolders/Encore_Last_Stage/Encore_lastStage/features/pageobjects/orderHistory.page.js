const { assert } = require("chai");
const { expect } = require("chai");
const utilTools = require("../../utils/tools");

class orderHistory {
  orderHistory() {
    return $(`//a[normalize-space()='Order History']`);
  }
  record() {
    return $(`//div[@class='oeOrderHistoryPane']`);
  }
  jobsTab() {
    return $(`//a[normalize-space()='Jobs']`);
  }
  updateJobStatus() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[7]`
    );
  }
  updatedJobStatusSelect() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[7]/select`
    );
  }
  UpdatedJobStatusTentative() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[7]/select/option[2]`
    );
  }
  saveBtn() {
    return $(`//input[@value='Save']`);
  }
  orderStatusTentative() {
    return $(
      `//div[@id='OrderHistoryGrid']//div[contains(@class,'ui-widget-content slick-row')][2]//div[5]`
    );
  }
  itemsTab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[1]/a`);
  }
  itemsubTab() {
    return $(`//label[@class='btn order-product-icon-btn'][4]/span`);
  }
  Item() {
    // return $(
    //   `//div[@id='gridProductsOrderEntry']//div[contains(text(),'AJA PAK 1000')]`
    // );
    return $(
      `//div[@id='oePackagesGrid']//div[contains(@class,'ui-widget-content slick-row')][4]`
    );
  }
  grandTotal() {
    return $(
      `//div[@id='OrderHistoryGrid']//div[contains(@class,'ui-widget-content slick-row')][3]//div[6]`
    );
  }

  async orderHistoryRecord() {
    await this.orderHistory().click();
    let recordData = await this.record().isDisplayed();
    assert.isTrue(recordData);
  }
  async updatedToTentive() {
    await this.jobsTab().click();
    await this.updateJobStatus().click();
    await this.updatedJobStatusSelect().click();
    await this.UpdatedJobStatusTentative().click();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async verifingUpdatedStatus() {
    await this.orderHistory().click();
    let status = await this.orderStatusTentative().getText();
    assert.equal(status, "Tentative");
  }
  async addItem() {
    await this.jobsTab().click();
    await this.itemsTab().click();
    await this.itemsubTab().click();
    await this.Item().doubleClick();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async netTotal() {
    await this.orderHistory().click();
    let total = await this.grandTotal().getText();
    let verifyTotal = parseFloat(total);
    console.log(verifyTotal);
    assert.equal(verifyTotal, "258.30");
  }
}
module.exports = new orderHistory();
