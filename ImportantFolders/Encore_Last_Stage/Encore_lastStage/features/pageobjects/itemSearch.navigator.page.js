const { assert } = require("chai");
const { expect } = require("chai");
const LandingNavigatorPage = require("./navigator.page");
var itemSearchData = require("../../data/itemSearch.json");
const utilTools = require("../../utils/tools");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ItemSearchNavigatorPage extends LandingNavigatorPage {
  changeLocationHeader() {
    return $('//input[@title="Click Here to Change Location"]');
  }

  inputSeacrchLocation() {
    return $("//input[@id='txtLocationSearch']");
  }

  searchResultvalue(locationData) {
    return $(
      "//div[@id='LocationFilterPanel']/following::div[text()='" +
        locationData +
        "']"
    );
  }

  btnLocationSelect() {
    return $("//button[contains(text(),'Select')]");
  }

  itemSearchTab() {
    return $('//span[text()="Item Search"]');
  }
  itemSearchBtn() {
    return $(
      "(//div[@id='search-form'])[2]/descendant::div[@class='btn-toolbar btn-group-sm search-btn-group mt-4 pt-4 pb-1']/input[@class='btn btn-success']"
    );
  }

  itemCategeoryData() {
    return $(
      `//div[@id="itemSearchGridContainer"]/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[1]`
    );
  }

  itemData() {
    return $(
      `//div[@id="itemSearchGridContainer"]/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[6]`
    );
  }

  anyFieldLabel() {
    return $(`//div[@id='collapseItemSearch']/descendant::input[1]`);
  }

  clickItemResult() {
    return $(
      `//div[@id='itemSearchGridContainer']/descendant::div[contains(@class,'slick-cell')][3]`
    );
  }

  checkBoxQtyGreaterZero() {
    return $('//input[@id="undefined_HasQuantity"]');
  }

  selectRegion() {
    return $(
      "//div[@id='search-form']/div[6]/select[@class='serachDropdown ng-untouched ng-pristine ng-valid ng-star-inserted']"
    );
  }

  itemRegionResult() {
    return $(
      `//div[@id="itemSearchGridContainer"]/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]`
    );
  }
  totalItemCount() {
    return $(
      "//div[@id='itemSearchGridContainer']/div[@class='searchResultsFooter ng-star-inserted']/span"
    );
  }
  categorySorting() {
    return $(
      "//div[@id='slickGridContainer-itemSearchGrid']/descendant::div[@class='slick-pane slick-pane-header slick-pane-left']/descendant::div[3]"
    );
  }
  searchResults() {
    return $(
      `(//div[@id="slickGridContainer-itemSearchGrid"]/descendant::div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='ui-widget-content slick-row even']/div[1])[1]`
    );
  }
  itemRow() {
    return $(
      `//div[@id='itemSearchGridContainer']/descendant::div[contains(@class,'slick-cell')][3]`
    );
  }
  viewProductLink() {
    return $(
      `//div[@id="mainLandingPage"]/descendant::div[@class='row'][6]/descendant::div[@class='col-md-10 btn-pd-1']/button[1]`
    );
  }

  itemNumTxtLink() {
    return $(
      "//div[@class='modal-header']//span[text()='Availability']/parent::label/span"
    );
  }
  viewProductCode() {
    return $(
      `//div[@id="mainLandingPage"]/descendant::div[@class='col-md-9'][6]/descendant::div[@class='btn-group ms-2 ng-star-inserted']/button[2]`
    );
  }
  productCodeHistoryLink() {
    return $(
      `//div[@id='ProductCodeEntry']/descendant::ul[@role='tablist']/li[2]/a`
    );
  }
  itemlink() {
    return $(`(//ul[@class='dropdown-menu'])[9]/li[1]/a`);
  }
  productNameTxt() {
    return $(
      `//div[@id='slickGridContainer-productCodeHistoryGrid']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[3]`
    );
  }

  itemsTab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[1]/a`);
  }
  itemsubTab() {
    return $(`//label[@class='btn order-product-icon-btn'][4]/span`);
  }
  Item() {
    return $(
      `//div[@id='oePackagesGrid']//div[contains(@class,'ui-widget-content slick-row')][4]`
    );
  }
  packageElipsis() {
    return $(
      `(//div[@id='oeOrderLinesGrid']//div[@class='slick-cell l0 r0 cell-reorder dnd'])[2]`
    );
  }
  deleteLine() {
    return $(`//ul[@id='orderLinesContextMenu']/li[4]`);
  }

  backgroundColor() {
    return $(
      `(//div[@id='oeOrderLinesGrid']//div[@class='slick-cell l0 r0 cell-reorder dnd'])[4]//following::div[2]`
    );
  }

  async changejobLocation(joblocationId) {
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(joblocationId);
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).doubleClick();
  }

  async clickOnItemSearch() {
    await this.itemSearchTab().waitForClickable();
    await this.itemSearchTab().click();
  }

  async clickOnItemSearchBtn() {
    await this.itemSearchBtn().waitForClickable();
    await this.itemSearchBtn().click();
    await browser.pause(process.env.large_wait);
  }

  async getDataFields() {
    await this.itemCategeoryData().waitForDisplayed();
    let itemDataTxtApp = await this.itemCategeoryData().getText();
    let itemDataTxtJson = itemSearchData.itemSearchTxt;

    const itemdata = utilTools.readJson(
      `${process.cwd()}\\data\\itemSearch.json`
    );
    itemdata.itemSearchTxt = itemDataTxtApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\itemSearch.json`,
      JSON.stringify(itemdata)
    );
    await browser.pause(process.env.small_wait);

    await this.itemData().waitForDisplayed();
    let itemDataApp = await this.itemData().getText();
    let itemDataJson = itemSearchData.itemDataText;

    const itemdata1 = utilTools.readJson(
      `${process.cwd()}\\data\\itemSearch.json`
    );
    itemdata1.itemDataText = itemDataApp;
    const fsWrite1 = require("fs");
    fsWrite1.writeFileSync(
      `${process.cwd()}\\data\\itemSearch.json`,
      JSON.stringify(itemdata1)
    );
    await browser.pause(process.env.small_wait);
  }
  async clickOnAnyFields(itemSearchDataFieldVal) {
    await this.anyFieldLabel().waitForDisplayed();
    await this.anyFieldLabel().setValue(itemSearchDataFieldVal);
    await browser.pause(process.env.small_wait);
  }

  async clickOnQtyGreaterCheckOut() {
    await browser.pause(process.env.small_wait);
    await this.checkBoxQtyGreaterZero().click();
  }
  async verifyItemCategeory(itemSearchDataFieldVal) {
    await this.itemCategeoryData().waitForDisplayed();
    let itemDataTxtApp = await this.itemCategeoryData().getText();
    assert.equal(itemSearchDataFieldVal, itemDataTxtApp);
  }
  async clickOnAnyFieldsItem(itemDataFieldVal) {
    await this.anyFieldLabel().waitForDisplayed();
    await this.anyFieldLabel().setValue(itemDataFieldVal);
    await browser.pause(process.env.small_wait);
  }
  async verifyItemData(itemDataFieldVal) {
    await this.itemData().waitForDisplayed();
    let itemDataTxtApp = await this.itemData().getText();
    assert.equal(itemDataFieldVal, itemDataTxtApp);
  }
  async clickOnCategorySorting() {
    await this.categorySorting().waitForClickable();
    await this.categorySorting().click();
  }

  async verifyClickCategory(itemSearchDataCategory) {
    await this.searchResults().waitForDisplayed();
    const categeoryTextApp = await this.searchResults().getText();
    assert.equal(itemSearchDataCategory, categeoryTextApp);
  }
  async clickOnItemRegion() {
    await browser.pause(process.env.small_wait);
    await this.selectRegion().selectByIndex(3);
    await browser.pause(process.env.small_wait);
  }
  async getProductHistoryDetails() {
    await this.clickItemResult().waitForClickable();
    await this.clickItemResult().click();
    await this.viewProductCode().waitForClickable();
    await this.viewProductCode().click();
    await this.itemlink().waitForClickable();
    await this.itemlink().click();
    await this.productCodeHistoryLink().waitForDisplayed();
    await browser.pause(process.env.medium_wait);
    await this.productCodeHistoryLink().click();
    await browser.pause(process.env.medium_wait_wait);
  }

  async productHistoryTxt() {
    await this.productNameTxt().waitForDisplayed();
    const prodHistoryTxtApp = await this.productNameTxt().getText();
    console.log("prod History Txt App:" + prodHistoryTxtApp);
    await browser.pause(process.env.small_wait);
    const itemdata = utilTools.readJson(
      `${process.cwd()}\\data\\itemSearch.json`
    );
    itemdata.itemProdTxt = prodHistoryTxtApp;
    //console.log("+++", itemdata.itemProdTxt, "====", prodHistoryTxtApp);
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\itemSearchNew.json`,
      JSON.stringify(itemdata)
    );
    const itemProdTxt1 = itemdata.itemProdTxt;
  }

  async verifyProductHistoryTxt(itemProdHistoryTxt) {
    await this.productNameTxt().waitForDisplayed();
    const prodHistoryTxtApp = await this.productNameTxt().getText();
    assert.equal(itemProdHistoryTxt, prodHistoryTxtApp);
  }
  async clickOnViewProduct() {
    await this.itemRow().waitForClickable();
    await this.itemRow().click();
    await this.viewProductLink().waitForClickable();
    await this.viewProductLink().click();
    await browser.pause(process.env.small_wait);
  }

  async verifyItemText() {
    await this.itemNumTxtLink().getText();
    var itemTextCalApp = await this.itemNumTxtLink().getText();
    var itemTextCalApp1 = itemTextCalApp.slice(80);
    console.log("Item Nu Cal App:" + itemTextCalApp1);

    const itemdata = utilTools.readJson(
      `${process.cwd()}\\data\\itemSearch.json`
    );
    itemdata.itemNumCal = itemTextCalApp1;
    console.log("from app itemTextCalApp1: ", itemTextCalApp1);
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\itemSearchNew.json`,
      JSON.stringify(itemdata)
    );
    const itemNumCalender = itemdata.itemNumCal;
    console.log("Item Cal :" + itemNumCalender);
    await browser.pause(process.env.small_wait);
    //assert.equal(itemSearchDataCal, itemNumCalender);
  }
  async verifyItemSearchCal(itemSearchDataCal) {
    var itemTextCalApp = await this.itemNumTxtLink().getText();
    //var itemTextCalApp1 = itemTextCalApp.slice(80);
    console.log("Item Calender No: App" + itemTextCalApp);
    console.log("Item Calender No form Json" + itemSearchDataCal);
    assert.equal(itemSearchDataCal, itemTextCalApp);
  }

  async verifyResultSearchData() {
    await browser.pause(process.env.small_wait);
    await this.totalItemCount().waitForDisplayed();
    const totalItemsCount = await this.totalItemCount().getText();
    var itmcnt = totalItemsCount.replace(/[^0-9]/gi, "");
    var totalItemsCountNum = parseInt(itmcnt);
    assert.isTrue(totalItemsCountNum > 1);
  }
  async addpackage() {
    await this.itemsTab().click();
    await this.itemsubTab().click();
    await this.Item().doubleClick();
    await this.packageElipsis().click();
    await browser.pause(5000);
    let color = await this.backgroundColor().getCSSProperty("background-color");
    console.log(color);
    assert.equal(color.value, "rgba(245,245,220,1)");
    await this.packageElipsis().click({ button: "right" });
    await this.deleteLine().click();
    let elop = await this.backgroundColor().isDisplayed();
    assert.isFalse(elop);
  }
}
module.exports = new ItemSearchNavigatorPage();
