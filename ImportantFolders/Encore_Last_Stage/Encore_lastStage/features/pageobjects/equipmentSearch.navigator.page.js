const { assert } = require("chai");
const { expect } = require("chai");
const LandingNavigatorPage = require("./navigator.page");
const ConstUtil = require("../../utils/const");
const utilTools = require("../../utils/tools");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EquipmentSearchNavigatorPage extends LandingNavigatorPage {
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
  //Ware House Req
  connectedWareHouseDrpDwn() {
    return $(
      `//div[@id="mainBar"]/div[@class='custom-menu-btns']/div[@class='d-flex justify-content-between']/div[1]/ul[4]/li[@class='dropdown']`
    );
  }

  requestDashBoard() {
    return $(
      `//div[@id="mainBar"]/div[@class='custom-menu-btns']/div[@class='d-flex justify-content-between']/div/ul[@class='nav navbar-nav ng-star-inserted'][2]/descendant::ul/li[2]/a`
    );
  }
  expandFilters() {
    return $(
      `//div[@id='ProcessRequests']/descendant::div[@class='container-fluid'][2]/descendant::table[1]/descendant::span[1]`
    );
  }
  myQueueChkBox() {
    return $(
      `//div[@id="ProcessRequests"]/descendant::div[@class='container-fluid'][2]/descendant::div[@class='panel-body']/descendant::span[4]/input[1]`
    );
  }
  filtersApplyBtn() {
    return $(
      `//div[@id="ProcessRequests"]/descendant::div[@class='container-fluid'][2]/descendant::div[@class='panel-body']/descendant::div[4]/descendant::button[1]`
    );
  }
  defaultWareHouseNum() {
    return $(
      "//div[@id='ProcessRequests']/descendant::div[@class='container-fluid'][3]/table/tbody/tr[1]/td[4]/span[1]"
    );
  }
  exporticonBtn() {
    return $(
      `//div[@id='ProcessRequests']/div[@class='container-fluid'][1]/h4[2]/span[@class='btn-group-sm']/button[@ng-click='ShowRequestsExportModal()']`
    );
  }

  exportBtn() {
    return $(`//button[@ng-click='export()']`);
  }

  historyExportDefaultChk() {
    return $('//input[@id="txtHistoryExportType"]');
  }
  requestingOrderLink() {
    return $(
      "//div[@id='ProcessRequests']/descendant::div[@class='container-fluid'][3]/table[1]/descendant::td[5]/span[1]"
    );
  }
  orderNumTxt() {
    return $(
      `(//div[@id="oeOrderHeader_Common"])[1]/descendant::div[@class='tr oeOrderTickerRow'][2]/descendant::div[@class='td'][2]/label[1]`
    );
  }

  async changejobLocation(joblocationId) {
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(joblocationId);
    await this.searchResultvalue(joblocationId).waitForClickable(),
      await this.searchResultvalue(joblocationId).doubleClick();
  }
  async clickOnConnectedWareHouseReq() {
    await this.connectedWareHouseDrpDwn().waitForClickable();
    await this.connectedWareHouseDrpDwn().click();
    await this.requestDashBoard().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.requestDashBoard().click();
  }

  async getWareHouseData() {
    //Get Ware House Data
    const wareHouseResTxt = await this.defaultWareHouseNum().getText();
    const itemResdata = utilTools.readJson(
      `${process.cwd()}\\data\\equipmentSearch.json`
    );
    itemResdata.WareHouseDataNum = wareHouseResTxt;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\equipmentSearchNew.json`,
      JSON.stringify(itemResdata)
    );
    const wareHouseNumTxt = itemResdata.WareHouseDataNum;
  }

  async verifyTableWareHouseDisplayed(wareHouseSearchDataTxt) {
    const wareHouseResTxt = await this.defaultWareHouseNum().getText();
    assert.equal(wareHouseSearchDataTxt, wareHouseResTxt);
  }
  async clickOnFiltersChkApply() {
    await this.expandFilters().waitForClickable();
    await this.expandFilters().click();
    await this.myQueueChkBox().waitForClickable();
    await this.myQueueChkBox().click();
    await this.filtersApplyBtn().waitForClickable();
    await this.filtersApplyBtn().click();
    await browser.pause(process.env.small_wait);
  }

  async clickonExportIcon() {
    await this.exporticonBtn().waitForClickable();
    await this.exporticonBtn().click();
    var defaultchk = await this.historyExportDefaultChk().isSelected();
    assert.isTrue(defaultchk);
    await browser.pause(process.env.small_wait);
  }
  async clickOnExportBtn() {
    await this.exportBtn().waitForClickable();
    await this.exportBtn().click();
    await browser.pause(process.env.small_wait);
  }

  async clickOnOrderNum() {
    await this.requestingOrderLink().waitForClickable();
    await this.requestingOrderLink().click();
    await browser.pause(process.env.medium_wait);
    const handles = await browser.getWindowHandles();
    await browser.switchToWindow(handles[1]);
    const orderNumApp = await this.orderNumTxt().getText();
    const warehseOrderNum = utilTools.readJson(
      `${process.cwd()}\\data\\equipmentSearch.json`
    );
    warehseOrderNum.orderNum = orderNumApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\equipmentSearchNew.json`,
      JSON.stringify(warehseOrderNum)
    );
  }
  async verifyOrderNumWindow(wareHouseOrderNum) {
    const orderNumApp = await this.orderNumTxt().getText();
    assert.equal(wareHouseOrderNum, orderNumApp);
  }
}

module.exports = new EquipmentSearchNavigatorPage();
