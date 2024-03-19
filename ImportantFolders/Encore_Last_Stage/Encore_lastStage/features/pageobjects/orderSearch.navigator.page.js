const LandingNavigatorPage = require("./navigator.page");
const { assert } = require("chai");
const { expect } = require("chai");
const { assignIn } = require("lodash");
require("dotenv").config();
const ConstUtil = require("../../utils/const");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class OrderSearchNavigatorPage extends LandingNavigatorPage {
  /**
   * define selectors using getter methods
   */

  orderSearchTab() {
    return $('//span[text()="Order Search"]');
  }

  orderNumberField() {
    return $(`//\*[contains(text(), 'Order Number')]/parent::div/input`);
    // return $('input[name="searchOrderNumber"]');
  }

  orderNameParamField() {
    return $(`//\*[contains(text(), 'Order Name ')]/parent::div/input`);
    // return $(`//div[@id="search-form"]/div[1]/input`);
  }

  droIdField() {
    return $(`//\*[contains(text(), 'DRO Number')]/parent::div/input`);
    // return $('input[name="searchDroId"]');
  }

  invoiceNumberField() {
    return $(`//\*[contains(text(), 'Invoice Number')]/parent::div/input`);
    // return $('input[name="searchInvoiceNumber"]');
  }

  accountNameField() {
    return $(`//\*[contains(text(), 'Account Name')]/parent::div/input`);
    // return $('//input[@name="searchInvoiceNumber"]/following::input[1]');
  }

  billToContactNameField() {
    return $(
      `//\*[contains(text(), 'Bill To Contact Name')]/parent::div/input`
    );
    // return $(' //div[contains(text(),"Bill To Contact Name")]/input');
  }

  statusDropDown() {
    return $(`//\*[contains(text(), 'Status ')]/parent::div/select`);
    // return $('//input[@name="searchInvoiceNumber"]/following::select[1]');
  }

  crmOppClosBtn() {
    return $('//div[@id="orderEntryMain"]/div/span');
  }

  orderTypeDropDown() {
    return $(`//\*[contains(text(), 'Order Type')]/parent::div/select`);
    // return $('//input[@name="searchInvoiceNumber"]/following::select[3]');
  }

  searchOrderButton() {
    return $("//input[@value='Search']");
    // return $("#searchOrder");
  }
  resultsOrderIdRow(colNum) {
    return $(
      '//div[@id="orderSearchGridContainer"]/descendant::span[@title="Order"][1]/../following-sibling::div[' +
        colNum +
        "]"
    );
  }

  resultsOrderId(colNum) {
    return $(
      "//div[@id='orderSearchGridContainer']/descendant::a[" + colNum + "]"
    );
  }

  resetBtn() {
    return $("//input[@value='Reset']");
  }

  dateRangeCheckbox() {
    return $(
      "//label[contains(text(), 'Use Date Range')]/parent::div/label/input"
    );
    // return $("//input[@name='searchInvoiceNumber']/following::label[2]");
  }

  changeLocationHeader() {
    return $('//input[@title="Click Here to Change Location"]');
  }

  inputSeacrchLocation() {
    return $("//input[@id='txtLocationSearch']");
  }

  verifyTitleLocation() {
    return $("//input[@title='Click Here to Change Location']");
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

  droHeaderInJobsPage() {
    return $("(//a[contains(text(),'DRO')])[3]");
  }

  verifyDroResult() {
    return $(
      "//div[@id='droGridResults']/descendant::span[contains(.,'Order:')][1]"
    );
  }

  resultsPlusBtn() {
    return $(
      '//div[@id="orderSearchGridContainer"]/descendant::span[@title="Order"][1]'
    );
  }

  updateOrderShortBtn() {
    return $(
      "//button[contains(text(),'New Internal Order')]/following-sibling::button"
    );
  }
  orderShortsresults() {
    return $(`//h4[contains(text(),'Order shorts updated as')]`);
    // return $("//div[@class='modal-content']//div[contains(text(),'Order shorts updated as')]");
  }

  btnOk() {
    return $("//button[contains(text(),'OK')]");
  }

  btnNewInternalOrder() {
    return $("//button[contains(text(),'New Internal Order')]");
  }
  //-----------------------------------------------------------
  invoiceCurrency() {
    return $("//select[@name='InvoiceCurrency']");
  }

  get printDropdown() {
    return $("(//button[@data-toggle='dropdown'])[1]");
  }

  selectValueInPrintDropdown(dropdownVal) {
    return $("//a[normalize-space()='" + dropdownVal + "']");
  }
  get selectCurrencyVal() {
    return $("//form[@id='ProductionQuote']//select[@id='Currency']");
  }
  get selectConsolidatedCurrencyVal() {
    return $("//form[@id='QuoteV1GSO']//select[@id='Currency']");
  }
  get selectEventBillingCurrencyVal() {
    return $("//form[@id='EventBillingQuote']//select[@id='Currency']");
  }

  get selectLangVal() {
    return $(`select[ng-model='selectedVal']`);
  }
  get printPreviewBtn() {
    return $("//span[@class='glyphicon glyphicon-file']");
  }
  get InvoiceValidation() {
    return $(
      "//title[contains(text(),'ActiveReports Document')]/parent::div/div/div/span[2]"
    );
  }

  get consolidatedInvoiceVal() {
    return $("//table[4]/tbody/tr/td/nobr");
  }

  startDateInput() {
    return $(
      `//\*[contains(text(), 'Use Date Range')]/ancestor::div/div[@class="border orderBorderWidth ng-star-inserted"]//input[@type='text'][1]`
    );
  }

  endDateInput() {
    return $(
      `//\*[contains(text(), 'Use Date Range')]/ancestor::div/div[@class="border orderBorderWidth ng-star-inserted"]//input[@type='text'][2]`
    );
  }

  verifyOrderName() {
    return $("(//label[contains(text(),'Order Number')])[1]");
  }

  crmOppClosBtn() {
    return $('//div[@id="orderEntryMain"]/div/span');
  }
  endDatePicker(date) {
    return $("(//table[@class='days weeks']/tbody/tr/td)[" + date + "]");
  }
  //Jobs page
  headerInventorySource() {
    return $("//a[contains(text(),'Inventory Sources')]");
  }
  headerEquipmentShorts() {
    return $("//span[contains(text(),'Equipment Shorts')]");
  }
  btnUpdateOrderShorts() {
    return $("//button[contains(text(),'Update Order Shorts')]");
  }
  validationMsgOrdrShorts() {
    return $("//div[contains(text(),'Save Success!')]");
  }
  selectProdOrderInResults() {
    return $(
      "//span[@title='Productions Order']/parent::div/following::div[2]"
    );
  }
  getOrderNumber() {
    return $(`//label[@class="orderTickerDisplayValue ng-binding"]`);
  }
  getOrderName() {
    return $(
      `//div[@ng-form="OrderForms.orderTabForm"]//label[@ng-model="order.OrderName"]`
    );
  }
  getStartDate() {
    return $('//input[@id="OrderStartDate"]');
  }
  getEndDate() {
    return $('//input[@id="OrderEndDate"]');
  }

  searchTextToDisplay() {
    return $("//span[contains(text(), 'TO')]");
  }
  //--------------------------------------DRO Search------------------------------------------------//

  droSearchTab() {
    return $('//span[text()="DRO Search"]');
  }
  droSearchDroNum() {
    return $(
      '//div[@id="collapseJob"]//span[contains(text(),"DRO Number")]/parent::div/input'
    );
  }
  droSearchBtn() {
    return $('//div[@id="collapseJob"]//input[@title="Search"]');
  }
  droSearchResultsFirstRow() {
    return $(
      '(//div[@id="slickGridContainer-droGridResults"]//span[contains(text(),"DRO")])[1]'
    );
  }

  async getDataForOrderSearch() {
    let orderNum = await this.getOrderNumber().getText();
    let orderName = await this.getOrderName().getText();
    await this.droHeaderInJobsPage().click();
    let resultOrderVal = await this.verifyDroResult().getText();
    let droNum = resultOrderVal.substring(6, 11);
    const fs = require("fs");
    const data = JSON.parse(
      fs.readFileSync(__dirname + "/../../data/orderSearch.json")
    );
    data.orderId = orderNum;
    data.orderName = orderName;
    data.droNumber = droNum;
    fs.writeFileSync(
      __dirname + "/../../data/orderSearch.json",
      JSON.stringify(data)
    );
  }
  async gotoOrderSearchTab() {
    await this.orderSearchTab().waitForClickable();
    await this.orderSearchTab().click();
    await this.orderNameParamField().waitForClickable();
  }

  async searchOrder(orderId) {
    await browser.pause(process.env.small_wait);
    await this.orderNumberField().waitForClickable();
    await this.orderNumberField().click();
    await this.orderNumberField().setValue(orderId);
    await this.searchOrderButton().waitForClickable();
    await this.searchOrderButton().click();
  }

  async verifySearchResults(orderSearchVal, colNum) {
    await this.resultsOrderIdRow(colNum).waitForDisplayed();
    let resultOrderVal = await this.resultsOrderIdRow(colNum).getText();
    assert.equal(resultOrderVal, orderSearchVal);
  }

  async verifyDropdownResults(orderSearchVal, colNum) {
    let resultOrderVal = await this.resultsOrderDropdown(colNum).getText();
    assert.equal(resultOrderVal, orderSearchVal);
  }
  async resetSearchResults() {
    await this.resetBtn().click();
    await this.orderNameParamField().waitForClickable();
    await this.dateRangeCheckbox().waitForClickable();
    await this.dateRangeCheckbox().click();
  }

  async searchOrderByName(orderName) {
    await browser.pause(process.env.small_wait);
    await this.orderNameParamField().waitForClickable();
    await this.orderNameParamField().click();
    await this.orderNameParamField().setValue(orderName);
    await this.searchTextToDisplay().click();
    // await this.dateRangeCheckbox().moveTo();
    await this.dateRangeCheckbox().waitForClickable();
    await this.dateRangeCheckbox().click();
    await this.searchOrderButton().click();
  }

  async searchOrderByStatus(orderByStatus) {
    await this.statusDropDown().waitForClickable();
    await this.statusDropDown().click();
    await this.statusDropDown().selectByIndex(orderByStatus);
    assert.isTrue(
      await this.droIdField().isClickable(),
      "successfully selected status in order status field"
    );
    await this.dateRangeCheckbox().waitForClickable();
    await this.dateRangeCheckbox().click();
    await this.searchOrderButton().click();
    await browser.pause(process.env.small_wait);
  }

  async searchOrderByOrderType(orderTypeData) {
    await this.orderTypeDropDown().waitForClickable();
    await this.orderTypeDropDown().selectByIndex(orderTypeData);
    await this.droIdField().waitForClickable();
    await this.searchOrderButton().click();
    await this.orderTypeDropDown().waitForClickable();
    await this.orderTypeDropDown().selectByIndex(orderTypeData);
    await this.droIdField().waitForClickable();
    await this.searchOrderButton().click();
  }

  async searchByDRONumber(droNum) {
    await this.droIdField().waitForClickable();
    await this.droIdField().click();
    await this.droIdField().waitForClickable();
    await this.droIdField().setValue(droNum);
    await this.searchOrderButton().waitForClickable();
    await this.searchOrderButton().click();
  }

  async clickOnTheJob() {
    await this.resultsOrderId(2).waitForDisplayed();
    await browser.pause(process.env.small_wait);
    await this.resultsOrderId(2).waitForClickable();
    await this.resultsOrderId(2).click();
    try {
      await this.crmOppClosBtn().isClickable(),
        await this.crmOppClosBtn().click();
    } catch (e) {
      console.log("No Crm close button");
    }
    await this.droHeaderInJobsPage().waitForDisplayed();
    await browser.pause(process.env.small_wait);
    await this.droHeaderInJobsPage().waitForClickable();
    await this.droHeaderInJobsPage().click();
  }

  async verifyDroSearchResults(droNumData) {
    await await this.verifyDroResult().waitForDisplayed();
    let resultOrderVal = await this.verifyDroResult().getText();
    let resultOrderVal1 = resultOrderVal.substring(6, 11);
    assert.equal(resultOrderVal1, droNumData);
  }

  async changeLocation(locationData) {
    await this.changeLocationHeader().waitForClickable();
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(locationData);
    await this.searchResultvalue(locationData).doubleClick();
    await browser.pause(process.env.small_wait);
    await browser.refresh();
  }

  async orderShorts() {
    await this.searchOrderButton().click();
    await this.resultsPlusBtn().waitForClickable();
    await this.resultsPlusBtn().click();
    await this.updateOrderShortBtn().waitForClickable();
    await this.updateOrderShortBtn().click();
    await browser.pause(process.env.small_wait);
  }

  async verifyOrderShots(actualData) {
    await this.orderShortsresults().waitForDisplayed();
    let resultVal = await this.orderShortsresults().getText();
    let resultVal1 = resultVal.substring(0, 23);
    assert.equal(resultVal1, actualData);
    await this.btnOk().click();
  }
  async clickOnNewInternalOrder() {
    await this.searchTextToDisplay().click();
    await this.searchOrderButton().waitForClickable();
    await this.searchOrderButton().click();
    await this.btnNewInternalOrder().waitForClickable();
    await this.btnNewInternalOrder().click();
  }

  async verifyNewInternalOrder() {
    await this.verifyOrderName().waitForDisplayed();
    assert.isTrue(
      await this.verifyOrderName().isDisplayed(),
      "successfully navigated to jobs screen"
    );

    //await this.invoiceCurrency().selectByIndex(1);
  }

  async selectTopRowInResults() {
    await this.dateRangeCheckbox().click();
    await this.searchOrderButton().click();
    await this.resultsPlusBtn().waitForDisplayed();
    await this.resultsPlusBtn().click();
    await browser.pause(process.env.medium_wait);
  }

  async printConsolidatedProdQuote(dropdownVal) {
    await this.printDropdown.click();
    await this.selectValueInPrintDropdown(dropdownVal).waitForDisplayed();
    await this.selectValueInPrintDropdown(dropdownVal).click();
    await browser.pause(process.env.medium_wait);
    await this.selectLangVal.click();
    await this.selectLangVal.selectByIndex(1);
    await this.selectCurrencyVal.click();
    await this.selectCurrencyVal.selectByIndex(0);

    await this.printPreviewBtn.click();
    await browser.pause(process.env.medium_wait);
  }
  async validatePrintConsolidatedProdQuote(actualData) {
    // await browser.pause(process.env.medium_wait);
    await this.InvoiceValidation.waitForDisplayed();
    let resultVal = await this.InvoiceValidation.getText();
    assert.equal(resultVal, actualData);
  }

  async printConsolidatedQuote(dropdownVal) {
    await this.printDropdown.click();
    await this.selectValueInPrintDropdown(dropdownVal).waitForDisplayed();
    await this.selectValueInPrintDropdown(dropdownVal).click();
    await browser.pause(process.env.small_wait);
    await this.selectConsolidatedCurrencyVal.selectByVisibleText("USD");
    await this.selectLangVal.selectByVisibleText("en-US");
    await this.printPreviewBtn.click();
    await browser.pause(process.env.medium_wait);
  }

  async validatePrintConsolidatedQuote(actualData) {
    await this.consolidatedInvoiceVal.waitForDisplayed();
    let resultVal = await this.consolidatedInvoiceVal.getText();
    assert.equal(resultVal, actualData);
  }
  async printEventBillingQuote(dropdownVal) {
    await this.printDropdown.click();
    await this.selectValueInPrintDropdown(dropdownVal).waitForDisplayed();
    await this.selectValueInPrintDropdown(dropdownVal).click();
    await browser.pause(process.env.medium_wait);
    await this.selectEventBillingCurrencyVal.selectByVisibleText("USD");
    await this.selectLangVal.selectByVisibleText("en-US");
    await this.printPreviewBtn.click();
    await browser.pause(process.env.medium_wait);
  }
  async selectUseDateRange() {
    await browser.pause(process.env.small_wait);
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = (today.getDate() - 2).toString().padStart(2, "0");
    const startDate = `${month}/${day}/${year}`;
    const endDay = (today.getDate() + 5).toString().padStart(2, "0");
    await this.startDateInput().waitForClickable();
    await this.startDateInput().click();
    await this.startDateInput().setValue(startDate);
    await browser.keys("\uE004");
    await this.endDateInput().waitForClickable();
    await this.endDateInput().click();
    await this.endDatePicker(endDay).click();
    await browser.keys("\uE004");
    await this.searchOrderButton().waitForClickable();
    await this.searchOrderButton().click();
    await browser.pause(process.env.large_wait);
  }

  async validatingUseDateRange(startDateVal, endDateVal) {
    await browser.pause(process.env.small_wait);
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // add leading zero if needed
    const day = (today.getDate() - 2).toString().padStart(2, "0");
    const startDate = `${month}/${day}/${year}`;
    await this.resultsOrderIdRow(4).scrollIntoView();
    let resultsStartDate = await this.resultsOrderIdRow(4).getText();
    const startDateVal1 = new Date(startDate);
    const resultsStartDate1 = new Date(resultsStartDate);
    assert.isTrue(
      startDateVal1 < resultsStartDate1,
      "Validated start date successfully"
    );
  }

  async selectInvoiceNumber(invoiceNumVal) {
    await this.invoiceNumberField().waitForClickable();
    await this.invoiceNumberField().click();
    await this.invoiceNumberField().setValue(invoiceNumVal);
    await this.searchOrderButton().click();
    await browser.pause(process.env.large_wait);
  }

  async updateOrderShortsAll(testDataStatus) {
    await browser.pause(process.env.small_wait);
    await this.statusDropDown().waitForClickable();
    await this.statusDropDown().click();
    await this.statusDropDown().selectByIndex(testDataStatus);
    await this.dateRangeCheckbox().waitForClickable();
    await this.dateRangeCheckbox().click();
    await this.searchOrderButton().waitForClickable();
    await this.searchOrderButton().click();
    await this.resultsOrderIdRow(1).waitForClickable();
    await this.resultsOrderIdRow(1).click();
    await this.headerInventorySource().waitForClickable();
    await this.headerInventorySource().click();
    await this.headerEquipmentShorts().click();
    await this.btnUpdateOrderShorts().waitForClickable();
    await this.btnUpdateOrderShorts().click();
  }
  async validateUpdateOrderShortsAll(ValMessageOrderShortsAll) {
    await this.validationMsgOrdrShorts().waitForDisplayed();
    let resultOrderVal = await this.validationMsgOrdrShorts().getText();
    assert.equal(resultOrderVal, ValMessageOrderShortsAll);
  }

  async searchForProductionOrder(orderName) {
    await browser.pause(process.env.small_wait);
    await this.orderNameParamField().click();
    await this.orderNameParamField().setValue(orderName);
    await this.searchOrderButton().click();
    await browser.pause(process.env.medium_wait);
    await this.selectProdOrderInResults().click();
    await browser.pause(process.env.large_wait);
  }

  async clickOnItemInSearchResults() {
    try {
      await this.resultsOrderId(2).waitForClickable();
    } catch (e) {
      await this.searchOrderButton().click();
    }

    await this.resultsOrderId(2).click();
  }

  async verifySearchResultsForOrderID(orderSearchVal, colNum) {
    await this.resultsOrderId(colNum).waitForDisplayed();
    let resultOrderVal = await this.resultsOrderId(colNum).getText();
    assert.equal(resultOrderVal, orderSearchVal);
  }

  async captureInvoiceNumber() {
    await this.resultsOrderIdRow(12).waitForDisplayed();
    let InvoiceVal = await this.resultsOrderIdRow(12).getText();
    const fs = require("fs");
    const data = JSON.parse(
      fs.readFileSync(__dirname + "/../../data/orderSearch.json")
    );
    data.invoiceNumber = InvoiceVal;
    fs.writeFileSync(
      __dirname + "/../../data/orderSearch.json",
      JSON.stringify(data)
    );
  }

  //---------------------------------------DRO Search-----------------------------------------------//

  async gotoDroSearchTab() {
    await this.droSearchTab().waitForClickable();
    await this.droSearchTab().click();
    await this.droSearchDroNum().waitForClickable();
  }
  async droNumberSearch(droNumVal) {
    await this.droSearchResultsFirstRow().waitForDisplayed();
    await this.droSearchDroNum().waitForClickable();
    await this.droSearchDroNum().setValue(droNumVal);
    await this.droSearchBtn().click();
  }
  async verifyDroSearchResultsInGrid(droNumVal) {
    await this.droSearchResultsFirstRow().waitForDisplayed();
    let droResults = await this.droSearchResultsFirstRow().getText();
    droResults = droResults.substring(6, 11);
    assert.equal(droResults, droNumVal);
  }
}

module.exports = new OrderSearchNavigatorPage();
