const { assert } = require("chai");
const { expect } = require("chai");
const { Key } = require("webdriverio");

const LandingNavigatorPage = require("./navigator.page");
require("dotenv").config();
let ectSearchData = require("../../data/ectSerach.json");
const utilTools = require("../../utils/tools");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class ECTSearchNavigatorPage extends LandingNavigatorPage {
  selectLocation() {
    return $("div.location-select");
  }
  searchInput() {
    return $("#txtLocationSearch");
  }

  ectsearchTab() {
    return $('//span[text()="ECT Search"]');
  }

  ectnumber() {
    return $(
      "//div[@id='search-form']/following::span[contains(text(),' ECT Number ')]/parent::div/input"
    );
  }

  ectOrderNum() {
    return $(
      "//div[@id='search-form']//span[contains(text(),'Order Number')]/parent::div/input"
    );
  }

  ectSearch() {
    return $("//div[@id='collapseJob']/descendant::input[@title='Search']");
  }

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

  resultECTNumSearch() {
    return $(
      "//div[@id='eptGridResults']//span[@class='slick-group-title']//span/a"
    );
  }
  resultECTOrderSearch() {
    return $("//div[@class='table-container']/descendant::a[1]");
  }
  dateRangechkBox() {
    return $(
      "//div[@id='search-form']/following::label[text()=' Use Date Range ']/parent::div/descendant::input"
    );
  }
  dateRangechkBoxAfterBack() {
    return $(
      "//div[@id='search-form']//label[contains(text(),'Use Date Range')]/parent::div/descendant::input"
    );
  }
  dateRangechkBoxForOrderNumberSearch() {
    return $('(//input[@type="checkbox"])[3]');
  }

  //ECT Name Search Scenario
  ectNameSearch() {
    return $(
      "//div[@id='search-form']/following::span[contains(text(),'ECT Name')]/parent::div/input"
    );
  }
  ectNameSearchAfterBack() {
    return $(
      "//div[@id='search-form']//span[contains(text(),'ECT Name')]/parent::div/input"
    );
  }

  resultECTNameSearch() {
    return $(
      "//span[text()='ECT #']/ancestor::div[@id='eptSearchGridContainer']//div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]//span/span[2]"
    );
  }
  ectNameField() {
    return $("//label[text()='ECT Name']/parent::div/input[1]");
  }
  ectNameSavebtn() {
    return $("//button[@title='Save']");
  }
  resultECTNameUpdate() {
    return $(
      "//div[@id='eptGridResults']/descendant::div[contains(@class,'slick-cell')][1]//span[@style][2]"
    );
  }
  ectAllSearchResultsNum() {
    return $(
      "//div[@id='eptSearchGridContainer']/descendant::div[contains(@class,'slick-cell')][1]/descendant::span[3]"
    );
  }
  ectAllSearchResultsName() {
    return $(
      "//div[@id='eptSearchGridContainer']/descendant::div[contains(@class,'slick-cell')][1]/descendant::span[4]"
    );
  }

  ectOrderNumLink() {
    return $("//a[@class='htmlFakeLink ng-binding']");
  }

  totalItemCount() {
    return $(
      "//div[@id='eptSearchGridContainer']/div[@class='searchResultsFooter']/span"
    );
  }

  ectStatus() {
    return $(
      "//div[@id='search-form']/descendant::span[contains(text(),'ECT Status')]/parent::div/select"
    );
  }
  ectStatusPlanning() {
    return $(
      "//div[@id='search-form']/descendant::span[contains(text(),'ECT Status')]/parent::div/select/option[2]"
    );
  }

  async changeLocation(locationId) {
    await this.changeLocationHeader().waitForDisplayed();
    await this.changeLocationHeader().waitForClickable();
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(locationId);
    await this.searchResultvalue(locationId).waitForClickable();
    await this.searchResultvalue(locationId).doubleClick();
    await browser.pause(process.env.small_wait);
  }

  async getEctAllSearchResultsNum() {
    await this.dateRangechkBox().waitForDisplayed();
    await this.dateRangechkBox().waitForClickable();
    await this.dateRangechkBox().click();
    await this.ectSearch().waitForClickable();
    await this.ectSearch().click();
    await this.ectAllSearchResultsNum().waitForDisplayed();
    await this.totalItemCount().waitForDisplayed();
    const totalItemsCount = await this.totalItemCount().getText();
    var itmcnt = totalItemsCount.replace(/[^0-9]/gi, "");
    var totalItemsCountNum = parseInt(itmcnt);
    assert.isTrue(totalItemsCountNum > 1);

    const getTextResults = await this.ectAllSearchResultsNum().getText();
    var ectNumberApp = getTextResults.slice(5);
    let ectNumberfromJson = ectSearchData.ectNumber;
    console.log(
      "ECT Number frm app:" +
        ectNumberApp +
        " ectNumberfromJson == " +
        ectNumberfromJson
    );
    const data = utilTools.readJson(`${process.cwd()}\\data\\ectSerach.json`);
    data.ectNumber = ectNumberApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\ectSerachNew.json`,
      JSON.stringify(data)
    );
    ectNumberfromJson = data.ectNumber;
    console.log("New ECT NUM :" + ectNumberfromJson);
  }

  async getEctAllSearchResultsName() {
    await this.dateRangechkBox().waitForDisplayed();
    await this.dateRangechkBox().waitForClickable();
    await this.dateRangechkBox().click();
    await this.ectSearch().waitForClickable();
    await this.ectSearch().click();
    await browser.pause(process.env.small_wait);
    await this.ectAllSearchResultsNum().waitForDisplayed();
    await this.totalItemCount().waitForDisplayed();
    const totalItemsCount = await this.totalItemCount().getText();
    var itmcnt = totalItemsCount.replace(/[^0-9]/gi, "");
    var totalItemsCountNum = parseInt(itmcnt);
    assert.isTrue(totalItemsCountNum > 1);
    const ectNameApp = await this.ectAllSearchResultsName().getText();
    var ectNameformJson = ectSearchData.ectName;

    console.log(
      "ECT Name frm app:" +
        ectNameApp +
        " ectNamefromJson == " +
        ectNameformJson
    );
    const dataName = utilTools.readJson(
      `${process.cwd()}\\data\\ectSerach.json`
    );
    dataName.ectName = ectNameApp;
    const fsWrite2 = require("fs");
    fsWrite2.writeFileSync(
      `${process.cwd()}\\data\\ectSerachNew.json`,
      JSON.stringify(dataName)
    );
    ectNameformJson = ectSearchData.ectName;
  }
  async getEctAllSearchResultsECTOrder() {
    await this.dateRangechkBoxForOrderNumberSearch().waitForClickable();
    await this.dateRangechkBoxForOrderNumberSearch().click();
    await this.ectSearch().waitForClickable();
    await this.ectSearch().click();

    await this.ectAllSearchResultsNum().waitForDisplayed();
    await this.totalItemCount().waitForDisplayed();
    const totalItemsCount = await this.totalItemCount().getText();
    var itmcnt = totalItemsCount.replace(/[^0-9]/gi, "");
    var totalItemsCountNum = parseInt(itmcnt);
    assert.isTrue(totalItemsCountNum > 1);

    await browser.pause(process.env.minimal_wait);
    await this.ectAllSearchResultsNum().click();
    await this.resultECTOrderSearch().waitForClickable();
    const ectOrder = await this.resultECTOrderSearch().getText();
    console.log("ECT Order:" + ectOrder);
    const ectorderNumApp = ectOrder.split("-")[0];
    console.log("ECT Order Num:" + ectorderNumApp);
    var ectOrderNumformJson = ectSearchData.ectOrderNum.trim();
    console.log(
      "ECT Name frm app:" +
        ectorderNumApp +
        " ectNamefromJson == " +
        ectOrderNumformJson
    );
    const dataOrder = utilTools.readJson(
      `${process.cwd()}\\data\\ectSerachNew.json`
    );
    dataOrder.ectOrderNum = ectorderNumApp.trim();
    const fsWrite3 = require("fs");
    fsWrite3.writeFileSync(
      `${process.cwd()}\\data\\ectSerachNew.json`,
      JSON.stringify(dataOrder)
    );

    var newOrderNum = dataOrder.ectOrderNum;
  }

  async gotoECTSearchTab() {
    await this.ectsearchTab().waitForClickable();
    await this.ectsearchTab().click();
    await browser.pause(process.env.minimal_wait);
  }

  async searchECTNumber(ectNumberData) {
    await this.dateRangechkBox().click();
    await browser.pause(process.env.small_wait);
    await this.ectnumber().setValue(ectNumberData);
    await browser.pause(process.env.small_wait);
  }

  async searchECTOrderNum(ectOrderNumber) {
    await browser.back();
    await browser.pause(process.env.small_wait);
    await this.dateRangechkBoxAfterBack().waitForClickable();
    await this.dateRangechkBoxAfterBack().click();
    await this.ectOrderNum().setValue(ectOrderNumber);
    await this.ectSearch().click();
  }

  async searchECTName(ectNameData) {
    await browser.pause(30000);
    await this.dateRangechkBox().waitForClickable();
    await this.dateRangechkBox().click();
    await this.ectNameSearch().waitForClickable();
    await this.ectNameSearch().setValue(ectNameData);
    await browser.pause(process.env.small_wait);
  }

  async clickonECTSearch() {
    await this.dateRangechkBox().click();
    await this.ectSearch().click();
    await browser.pause(process.env.small_wait);
  }

  async clickonECTUpdate() {
    await this.dateRangechkBox().waitForClickable();
    await this.dateRangechkBox().click();
    await this.ectStatus().waitForClickable();
    await this.ectStatus().selectByAttribute("label","Planning");
    await this.ectSearch().click();
  }

  async clickOnECTRespData() {
    await this.ectAllSearchResultsNum().waitForClickable();
    await this.ectAllSearchResultsNum().click();
    await browser.pause(process.env.small_wait);
  }

  async ectNameUpdate(ectNameUpdate) {
    await this.ectNameField().clearValue();
    await this.ectNameField().setValue(ectNameUpdate);
    await this.ectNameSavebtn().waitForClickable();
    await this.ectNameSavebtn().click();
  }

  async verifyECTNumberSearch(ectNumDataVerify) {
    let ectnumsearchRes = await this.ectAllSearchResultsNum().getText();
    let ectnumSearchVerfy = ectnumsearchRes.slice(5);
    assert.equal(ectnumSearchVerfy, ectNumDataVerify);
  }
  async verifyECTOrderSearch(ordersearchResData) {
    let ectOrdersearchRes = await this.resultECTOrderSearch().getText();
    let ectOrderNumApp = ectOrdersearchRes.replace(/[^0-9]/gi, "");
    console.log("ECT Num APP:" + ectOrderNumApp);
    assert.equal(ordersearchResData, ectOrderNumApp);
  }
  async verifyECTNameSearch(ectNameSearchResData) {
    let ectNameSearchRes = await this.ectAllSearchResultsName().getText();
    assert.equal(ectNameSearchRes, ectNameSearchResData);
  }
  async verifyUpdatedECTName(ectNameUpdate) {
    await browser.pause(process.env.minimal_wait);
    await browser.back();
    await this.ectNameSearchAfterBack().waitForClickable();
    await this.ectNameSearchAfterBack().setValue(ectNameUpdate);
    await this.ectSearch().waitForClickable();
    await this.ectSearch().click();
    await this.resultECTNameUpdate().waitForDisplayed();
    let ectUpdatedName = await this.resultECTNameUpdate().getText();
    assert.equal(ectUpdatedName, ectNameUpdate);
  }
}

module.exports = new ECTSearchNavigatorPage();
