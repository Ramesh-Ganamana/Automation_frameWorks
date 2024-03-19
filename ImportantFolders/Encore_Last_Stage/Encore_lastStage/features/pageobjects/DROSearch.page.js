const { assert } = require("chai");
const { expect } = require("chai");
var addItemsData = require("../../data/additemsData.json");
const utilTools = require("../../utils/tools");
const orderNum = require("../../data/orderSearch.json");
require("dotenv").config();
class Drolist {
  DroTab() {
    return $(
      "//div[@id='mainLandingPage']//div[@class='tab-container']//child::ul[1]//child::li[3]//a"
    );
  }
  orderNumberinput() {
    return $("(//input[@type='text'])[10]");
  }
  unCheckDateFormat() {
    return $("(//input[@id='dro-search_ApplyDates'])[1]");
  }
  searchBtn() {
    return $("(//input[@title='Search'])[2]");
  }
  droSearchResultsFirstRow() {
    return $(
      '(//div[@id="slickGridContainer-droGridResults"]//span[contains(text(),"DRO")])[1]'
    );
  }
  orderLink() {
    return $(
      `(//div[@id="slickGridContainer-droGridResults"]//span[contains(text(),"DRO")])[1]//following::span/a `
    );
  }

  orderlistrow() {
    return $(
      `(//div[@id="slickGridContainer-droGridResults"]//span[contains(text(),"DRO")])[1]`
    );
  }
  printButton() {
    return $(`(//div[@class="btn-group ms-2 ng-star-inserted"])/button`);
  }
  currency() {
    return $(`//div[@class='col-md-12 form-group']//option[@value='number:1']`);
  }
  secondOrdername() {
    return $(`(//input[@name='OrderNumber'])[1]`);
  }
  orderbutton() {
    return $("//a[normalize-space()='Order']");
  }
  previewButton() {
    return $(`//button[@title='Preview Report']`);
  }
  previewReport() {
    return $(`(//nobr[normalize-space()='USD'])[1]`);
  }

  async drosearch(orderNumber) {
    await this.DroTab().click();

    await browser.pause(process.env.medium_wait);
    await this.orderNumberinput().setValue(orderNumber);

    await browser.pause(2000);
    await this.unCheckDateFormat().click();
    await this.searchBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async VerifyDroSearchResults(valnum) {
    await this.droSearchResultsFirstRow().waitForDisplayed();
    let droResults = await this.droSearchResultsFirstRow().getText();
    console.log(droResults);
    droResults = droResults.substring(6, 11);
    assert.equal(droResults, valnum);
  }
  // second case//
  async ActionOnDroLink() {
    await browser.pause(process.env.small_wait);
    await this.DroTab().click();
    await browser.pause(process.env.medium_wait);

    await this.searchBtn().click();
    await browser.pause(process.env.medium_wait);
  }
  async DroSearchLink() {
    await this.orderLink().click();
    await browser.pause(process.env.medium_wait);

    let isOrderTabEnabled = await this.orderbutton().isEnabled();

    assert.isTrue(isOrderTabEnabled, "order details page is not opend");
  }
  //third case//
  async previewInfo(orderNumber) {
    await this.orderlistrow().click();
    await this.printButton().click();
    await browser.pause(process.env.small_wait);
    await this.currency().click();

    await this.secondOrdername().setValue(orderNumber);
    await browser.pause(process.env.small_wait);
    await this.previewButton().click();
    await browser.pause(process.env.large_wait);
  }
  async previewReportValidation(currency) {
    let currencyData = await this.previewReport().getText();
    console.log(currencyData);
    assert.equal(currencyData, currency);
  }
}

module.exports = new Drolist();
