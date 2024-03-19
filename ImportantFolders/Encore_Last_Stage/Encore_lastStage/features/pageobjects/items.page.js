const { assert } = require("chai");
const { expect } = require("chai");
require("dotenv").config();
const utilConst = require("../../utils/const");
class itemsdata {
  saveButton() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }
  createOrder(orderUrl) {
    return browser.navigateTo(orderUrl);
  }
  selectOrderPath() {
    return $("//select[@ng-model='oppyInfo.OrderPath']");
  }
  visibleTextSelectOrderPath() {
    return $("//label[contains(text(),'Select Order Path')]");
  }
  btnCreateProdOrder() {
    return $("//input[@value='Create Productions Order']");
  }
  btnCreateOrder() {
    return $("//input[@value='Create Order']");
  }
  orderStartDateText() {
    return $(`//input[@ng-model="order.StartDate"]`);
  }
  orderEndDateText() {
    return $(`//input[@ng-model="order.EndDate"]`);
  }
  jobHeader() {
    return $("//button[@id='Home']/ancestor::ul/following::li[3]");
  }
  jobTypeSales() {
    return $(
      `//div[@id='oeJobGrid']//div[@class='ui-widget-content slick-row even']/div[@class='slick-cell l9 r9 selected']`
    );
  }
  jobTypeOperations() {
    return $(
      `//div[@id='oeJobGrid']//div[@class='ui-widget-content slick-row odd']/div[10]`
    );
  }
  itemTab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[1]/a`);
  }
  subClass() {
    return $(`//label[@class='btn order-product-icon-btn'][5]/span`);
  }
  subClassSearch() {
    return $(`(//div[@id='subClassHeader'])//child::span[2]`);
  }
  labourCheckBox() {
    return $(`(//div//input[@id='chkLaborOnlySubClass'])`);
  }
  searchPowerLabs() {
    return $(`//div[normalize-space()='AC Power Drop Installation']`);
  }
  serviceType() {
    return $(`(//select[@name='ServiceTypeId'])/option[11]`);
  }
  datetab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[2]/a`);
  }
  breakTab() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[9]//child::div[4]`
    );
  }
  startTime1() {
    return $(
      `(//span[normalize-space()='Start Time'])[1]/following::div[6]/child::div[1]/following::div[3]//child::div[2]`
    );
  }
  endTime1() {
    return $(
      `(//span[normalize-space()='Start Time'])[1]/following::div[6]/child::div[1]/following::div[3]//child::div[3]`
    );
  }
  startTime2() {
    return $(
      `(//span[normalize-space()='Start Time'])[1]/following::div[18]/child::div[2]`
    );
  }
  endTime2() {
    return $(
      `(//span[normalize-space()='Start Time'])[1]/following::div[18]/child::div[3]`
    );
  }
  startTime3() {
    return $(
      `(//span[normalize-space()='Start Time'])[1]/following::div[22]/child::div[2]`
    );
  }
  endTime3() {
    return $(
      `(//span[normalize-space()='Start Time'])[1]/following::div[22]/child::div[3]`
    );
  }
  startTime4() {
    return $(
      `(//span[normalize-space()='Start Time'])[1]/following::div[26]//child::div[2]`
    );
  }
  endTime4() {
    return $(
      `(//span[normalize-space()='Start Time'])[1]/following::div[26]//child::div[3]`
    );
  }
  timeings1() {
    return $(
      `(//div[@class='ui-timepicker-wrapper'])[1]/child::ul/child::li[1]`
    );
  }
  inputting() {
    return $(`(//input[@class='editor-text ui-timepicker-input'])`);
  }

  okButton() {
    return $(`(//div[@id='buttonsAction'])/button[1]`);
  }
  breakTabAfterInput() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[9]//child::div[4]/a`
    );
  }

  // rigging tab//

  redAlertSymbol() {
    return $(`(//span[@title='Order - Invalid values.'])[1]`);
  }
  Order() {
    return $(`(//span[@title='New Classic']/parent::div/following::div[2])[1]`);
  }
  jobSearchTab() {
    return $(`(//span[normalize-space()='Job Search'])[1]`);
  }
  searchBtn() {
    return $(`(//input[@title='Search'])[2]`);
  }
  riggingInput() {
    return $(`(//input[@id='txtSubClassSearch'])[1]`);
  }
  riggingElement() {
    return $(`(//div[normalize-space()='Rigging Beam Clamp'])[1]`);
  }
  addPackageButton() {
    return $(`(//button[normalize-space()='Add to package'])[1]`);
  }
  rigServiceType() {
    return $(`(//option[@value='number:34'])[1]`);
  }
  riggingTab() {
    return $(`//a[normalize-space()='Rigging']`);
  }
  riggingTabError() {
    return $(`(//span[@ng-show='OrderForms.AerialistForm.$invalid'])[1]`);
  }
  orderTab() {
    return $(`(//a[normalize-space()='Order'])[1]`);
  }
  overHeadRigging() {
    return $(`(//a[normalize-space()='Overhead Rigging'])[1]`);
  }
  overHeadriggingFirstOption() {
    return $(`(//label[@class='radio-inline'])[7]/input`);
  }
  save() {
    return $(`(//input[@value='Save'])[1]`);
  }
  async createProductionOrder(prodUrlVal, orderType) {
    await this.createOrder(prodUrlVal);
    await this.selectOrderPath().waitForClickable();
    await this.selectOrderPath().click();
    await browser.pause(3000);
    if (orderType == "Productions") {
      await this.selectOrderPath().selectByVisibleText(orderType);
      await this.visibleTextSelectOrderPath().click();
      await this.btnCreateProdOrder().click();
    } else {
      await this.selectOrderPath().selectByVisibleText(orderType);
      await this.visibleTextSelectOrderPath().click();
      await this.btnCreateOrder().click();
    }
    await browser.pause(process.env.large_wait);
    console.log("URL === ", await browser.getUrl());
  }
  async SaveBtnValidation() {
    let btn = await this.saveButton().isEnabled();
    assert.isTrue(btn, "save button is enabled");
  }
  async verifydates() {
    const fs = require("fs");
    console.log(`${process.cwd()}\\data\\oppCreation.json`);
    const testData = JSON.parse(
      fs.readFileSync(`${process.cwd()}\\data\\oppCreation.json`)
    );
    await this.jobHeader().waitForDisplayed();
    // await this.jobHeader().waitForClickable();
    await this.orderStartDateText().waitForDisplayed();
    //------------ start date validation --------------------
    let startDate = await this.orderStartDateText().getValue();
    startDate = startDate.substring(4, 14);
    const startDate1 = new Date(startDate);
    const jsonStartDate = new Date(testData.startDateVal);
    console.log(startDate1 + "------------------------" + jsonStartDate);
    assert.isTrue(
      jsonStartDate.toString() == startDate1.toString(),
      "Validated start date successfully"
    );

    //------------ end Date Validation --------------------------
    await this.orderEndDateText().waitForDisplayed();
    // await this.orderEndDateText().click();
    let endDate = await this.orderEndDateText().getValue();
    endDate = endDate.substring(4, 14);
    const endDate1 = new Date(endDate);
    const jsonEndDate = new Date(testData.endDateVal);

    assert.isTrue(
      jsonEndDate.toString() == endDate1.toString(),
      "Validated end date successfully"
    );
  }
  async saveBtn() {
    await this.saveButton().waitForClickable();
    await this.saveButton().click();
    await browser.pause(process.env.medium_wait);
    await this.jobHeader().click();
  }
  async jobType(jobTypeSales, jobTypeOperations) {
    await this.jobTypeSales().waitForClickable();
    let jobType = await this.jobTypeSales().getText();
    let jobTypeI = await this.jobTypeOperations().getText();
    assert.equal(jobType, jobTypeSales);
    assert.equal(jobTypeI, jobTypeOperations);
  }
  async itemTabACtions() {
    await this.itemTab().click();
    await this.subClass().click();
    await this.subClassSearch().click();
    await this.labourCheckBox().click();
    await this.searchPowerLabs().doubleClick();
  }
  async serviceTypeVal(ServiceType) {
    let servicetypeData = await this.serviceType().getText();

    assert.equal(servicetypeData, ServiceType);
    await this.saveButton().waitForClickable();
    await this.saveButton().click();
    await browser.pause(process.env.medium_wait);
  }
  async breakpoints() {
    await this.datetab().click();

    await this.breakTab().click();

    await browser.pause(process.env.small_wait);
  }
  async addingBreakTimings() {
    await this.startTime1().doubleClick();
    await this.timeings1().click();

    await this.endTime1().click();

    await this.endTime1().click();
    console.log(`)))))))))))))))))))))))))))))))`);

    await this.inputting().setValue("12:15 AM");
    await this.startTime2().doubleClick();
    await this.inputting().setValue("12:30 AM");
    await this.endTime2().doubleClick();
    await this.inputting().setValue("12:45 AM");
    await this.startTime3().doubleClick();
    await this.inputting().setValue("1:00 AM");
    await this.endTime3().doubleClick();
    await this.inputting().setValue("1:15 AM");
    await this.startTime4().doubleClick();
    await this.inputting().setValue("1:30 AM");
    await this.endTime4().doubleClick();
    await this.inputting().setValue("1:45 AM");
    await this.startTime4().click();
    await this.okButton().click();
    await browser.pause(process.env.small_wait);
  }
  async breaksVal(breaks) {
    let breakInfo = await this.breakTabAfterInput().getText();
    console.log(
      breakInfo,
      "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%"
    );
    let dataInfo = parseInt(breakInfo);
    assert.equal(dataInfo, breaks);
  }

  // Rigging tab//

  async productiondata() {
    await browser.pause(process.env.small_wait);
    await this.jobSearchTab().click();
    await browser.pause(process.env.small_wait);
    await this.searchBtn().click();
    await browser.pause(process.env.small_wait);
    await this.Order().click();
    await browser.pause(process.env.medium_wait);
  }
  async rigging() {
    await this.itemTab().click();
    await this.subClass().click();
    await this.subClassSearch().click();
    await this.riggingInput().setValue("rigging");
    await this.riggingElement().doubleClick();
    await this.addPackageButton().click();
    await browser.pause(process.env.small_wait);
    let rigElm = await this.redAlertSymbol();
    expect(await rigElm.isDisplayed()).to.be.true;
  }
  async serviceEleVal(rigServiceType) {
    let serviceEle = await this.rigServiceType().getText();
    assert.equal(serviceEle, rigServiceType);
  }

  async subrigging() {
    await this.orderTab().click();
    await browser.pause(3000);
    let subrig = await this.riggingTabError();
    expect(await subrig.isDisplayed()).to.be.true;
    await this.riggingTab().click();
    await this.overHeadRigging().click();
    await this.overHeadriggingFirstOption().click();
    await this.save().click();
    let rigElm = await this.redAlertSymbol();
    expect(await rigElm.isDisplayed()).to.be.false;
  }
}

module.exports = new itemsdata();
