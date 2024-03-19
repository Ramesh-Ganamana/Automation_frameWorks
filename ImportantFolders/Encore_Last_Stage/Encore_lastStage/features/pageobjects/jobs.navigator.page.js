const LandingNavigatorPage = require("./navigator.page");
const { assert } = require("chai");
const { expect } = require("chai");
require("dotenv").config();
const utilConst = require("../../utils/const");
// const oppCreation = require("../../data/oppCreation.json");

class JobNavigatorPage extends LandingNavigatorPage {
  createOrder(orderUrl) {
    return browser.navigateTo(orderUrl);
  }
  selectOrderPath() {
    return $("//select[@ng-model='oppyInfo.OrderPath']");
  }
  visibleTextSelectOrderPath() {
    return $("//label[contains(text(),'Select Order Path')]");
  }
  btnCreateOrder() {
    return $("//input[@value='Create Order']");
  }
  btnCreateProdOrder() {
    return $("//input[@value='Create Productions Order']");
  }
  jobHeader() {
    return $("//button[@id='Home']/ancestor::ul/following::li[3]");
  }
  jobActionsHeader() {
    return $(`//a[contains(text(),'Job Actions')]`);
  }
  optionShowCancelJobs() {
    return $(`//a[contains(text(),'Show Canceled Jobs')]`);
  }
  clickOnItems() {
    return $("//a[contains(text(),'Items')]");
  }
  clickOnDiscounts() {
    return $(
      "//div[@id='jobPanelDetailsNav']//a[contains(text(),'Discounts')]"
    );
  }
  clickOnOptions() {
    return $(`//a[@ng-click="orderController.setCurrentTab('JobOptions')"]`);
  }
  clickOnHotList() {
    return $("//span[@class='glyphicon glyphicon-fire']");
  }
  clickOnSections() {
    return $("//span[@class=' glyphicon glyphicon-picture']");
  }
  clickOnFreight() {
    return $("//span[@class='glyphicon glyphicon-plane']");
  }
  clickOnPackage() {
    return $("//span[@class=' glyphicon glyphicon-gift']");
  }
  clickOnSubClass() {
    return $("//span[@class=' glyphicon glyphicon-list']");
  }
  clickOnItem() {
    return $("//span[@class=' glyphicon glyphicon-th-list']");
  }

  clickOnSections() {
    return $();
  }
  clickHotListLightPackage() {
    return $(
      "//div[@id='oeHotListGrid']//div[contains(text(),'AC Lighting Color Charge') ]"
    );
  }
  getDiscountPercentage() {
    return $(
      "//div[@ng-model='orderController.selectedJob.DetailLines']//div[contains(@class,'ui-widget-content slick')][1]/div[9]"
    );
  }
  selectAnItemInPackage() {
    return $("//div[contains(text(),'Borderless Screen Kit')]");
  }
  clickDiscountInTable() {
    return $(
      "//div[contains(text(),'AV Stumpfl FWCFPS')]/parent::div/preceding-sibling::div[1]//div[@class='slick-cell l8 r8 cellNumber']"
    );
  }
  inputDiscountEdit() {
    return $(
      "//div[contains(text(),'AV Stumpfl FWCFPS')]/parent::div/preceding-sibling::div[1]//div[@class='slick-cell l8 r8 cellNumber active editable selected']/input"
    );
  }
  getDiscountValueFromTable() {
    return $(
      "//div[contains(text(),'AV Stumpfl FWCFPS')]/parent::div/preceding-sibling::div[1]//div[@class='slick-cell l8 r8 cellNumber selected']"
    );
  }
  discountErrorMsg() {
    return $(
      "//span[@title='The selected service type is discount exempt. No discount may be applied to this service type..']"
    );
  }
  selectAnItemInPackageForProd() {
    return $(
      "//div[contains(text(),'(2) Panasonic PT-DZ21k DLP w/ 1.3-1.7 HD Lens Kit')]"
    );
  }
  stdRateProd() {
    return $(
      "//div[contains(text(),'Panasonic PT-DZ21K')]/following-sibling::div[2]"
    );
  }
  getRate() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[@class='ui-widget-content slick-row odd']/div[10]"
    );
  }
  navBarRightClose() {
    return $("//a[@ng-click='closeSection()']");
  }
  inputSplRate() {
    return $(
      "//div[@id='oeOrderLinesGrid']/descendant::div[contains(text(),'AV Stumpfl FWCF')][1]/following::div[3]"
    );
  }
  disabledInputSplRateBox() {
    return "//div[@id='oeOrderLinesGrid']/descendant::div[contains(text(),'AV Stumpfl FWCF')][1]/following::div[3]/input";
  }
  clickSplRateProd() {
    return $(
      "//div[contains(text(),'Panasonic PT-DZ21K')]/following-sibling::div[3]"
    );
  }
  inputSplRateProd() {
    return $(
      "//div[contains(text(),'Panasonic PT-DZ21K')]/following-sibling::div[3]/input"
    );
  }
  lineTotalProd() {
    return $(
      "//div[contains(text(),'Panasonic PT-DZ21K')]/following-sibling::div[6]"
    );
  }
  headerPercentageProd() {
    return $(
      "//div[@ng-form='OrderForms.jobTabForm']//label[@ng-show='order.DiscountPercent']"
    );
  }
  getQuantityVal() {
    return $(
      "//div[@ng-show='isShowDetailLines']//div[@class='slick-cell l2 r2 selected']"
    );
  }
  getDaysVal() {
    return $(
      "//div[@ng-show='isShowDetailLines']//div[@class='ui-widget-content slick-row odd active']/div[8]"
    );
  }
  clickQuantityVal() {
    return $(
      "//div[@ng-show='isShowDetailLines']//div[@class='ui-widget-content slick-row odd']/div[3]"
    );
  }
  changeQuantityVal() {
    return $(
      "//div[@ng-show='isShowDetailLines']//div[@class='slick-cell l2 r2 active editable selected']/input"
    );
  }
  subClassSearch() {
    return $(`//span[@ng-click="toggleSubclassFilterRow()"]`);
  }
  laborSubClassChkbox() {
    return $(`//input[@id="chkLaborOnlySubClass"]`);
  }
  laborItemForProdOrder() {
    return $(`//div[text()='A/V Graphics Operator']`);
  }
  laborItemAcPowerDrops() {
    return $(
      `//div[@id="oeSubClassesGrid"]//div[@title="AC Power Drop Dismantle"]`
    );
  }
  btnAddToPackage() {
    return $(`//button[@ng-click="addToPackage('add')"]`);
  }
  btnBelowThePackage() {
    return $(`//button[text()='Below the package']`);
  }
  textLaborRateFromGrid() {
    return $(
      `//div[@ng-show='isShowDetailLines']/descendant::div[text()='A/V Graphics Operator'][2]/following::div[1]`
    );
  }

  //--------------discount tab ----------------------
  discountTabSlider() {
    return $("//a[@ng-click='openDiscountTab()']");
  }
  jobsDefaultsTabSlider() {
    return $(
      `//a[@ng-click="orderController.oeOrderMenu='oeOrderBody_JobDefaults'"]`
    );
  }
  clickServiceTypeInDiscount() {
    return $("//div[@id='oeDiscountGrid']//div[@class='slick-cell l1 r1']");
  }
  selectServiceTypeInDiscount() {
    return $("//select[@class='editor-yesno']");
  }
  clickDiscountTabInDiscount() {
    return $("//div[@id='oeDiscountGrid']//div[@class='slick-cell l2 r2']");
  }
  clickDiscountTabInLine() {
    return $(
      "//div[@id='jobDiscountGrid']//div[@class='slick-cell l2 r2 cellNumber']"
    );
  }
  inputDiscountTab() {
    return $(
      "//div[@id='oeDiscountGrid']//div[@class='slick-cell l2 r2 active editable selected']/input"
    );
  }
  inputDiscountTabInLine() {
    return $(
      "//div[@id='jobDiscountGrid']//div[@class='slick-cell l2 r2 cellNumber active editable selected']/input"
    );
  }
  btnPropagate() {
    return $("//div[@ng-controller='OrderDiscountController']//a");
  }
  verifyMsgDiscountPropagate() {
    return $(
      "//p[contains(text(),'Discount has been propagated to all Jobs.')]"
    );
  }
  btnDiscountOk() {
    return $("//button[contains(text(),'OK')]");
  }
  clickJobLevelDiscount() {
    return $("//div[@id='jobDiscountGrid']//div[@class='slick-cell l1 r1']");
  }
  checkboxComplimentary() {
    return $("//input[@ng-model='order.Complimentary']");
  }
  selectComplimentaryDropdown() {
    return $("//select[@name='OrderCompReasonID']");
  }
  complimentaryPopupYes() {
    return $(`//button[@ng-click="propagateDiscount('yes')"]`);
  }
  verifyLineTotal() {
    return $("//div[@ng-show='isShowDetailLines']/descendant::strike[1]");
  }

  checkboxComplimentaryJobLevel() {
    return $("//input[@ng-model='orderController.selectedJob.Complimentary']");
  }
  selectComplimentaryDropdownJobLevel() {
    return $("//select[@name='JobCompReasonID']");
  }
  chkboxCompExcludingLabor() {
    return $(
      `//input[@ng-model="orderController.selectedJob.CompNoLaborWithSystemAmts"]`
    );
  }
  selectLaborComplimentoryOption() {
    return $(`//select[@id='jobcompReasonExclLaborWithSysAmts']`);
  }

  btnSave() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }
  orderHeader() {
    return $(`//a[@ng-click="setOrderEntryMainTab('Order')"]`);
  }
  //------------------------------- orders data validation --------------------------------------

  orderNameText() {
    return $(`//input[@ng-model="order.OrderName"]`);
  }
  orderStartDateText() {
    return $(`//input[@ng-model="order.StartDate"]`);
  }
  orderEndDateText() {
    return $(`//input[@ng-model="order.EndDate"]`);
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
  accountNameText() {
    return $(
      `//label[contains(text(),'Account Name')]/ancestor::div[@class='tr']/div[2]/label`
    );
  }
  venueText() {
    return $(
      `//label[contains(text(),'Account Name')]/ancestor::div[@class='tr']/div[4]/label`
    );
  }
  datePickerDateSelect(date) {
    return $(
      `(//table[@class='ui-datepicker-calendar']/tbody/tr/td)[` + date + `]`
    );
  }
  chkboxAdjustDatesForJobs() {
    return $(`//input[@ng-model="AdjustJob.DefaultJobDates"]`);
  }
  chkboxAdjustLaborJobDates() {
    return $(`//input[@ng-model="AdjustJob.LaborJobDates"]`);
  }
  btnAdjustDatesYes() {
    return $(`//button[@ng-click="AdjustJobDates()"]`);
  }
  adjustedDateText() {
    return $(`//input[@ng-model="AdjustJob.ShiftDays"]`);
  }

  jobStartDateText() {
    return $(
      `//div[@id='oeJobGrid']//div[@class='ui-widget-content slick-row even']/div[@class='slick-cell l2 r2 selected']`
    );
  }

  laborItemGridValidate() {
    return $(
      `//div[@class='ui-widget-content slick-row odd']//div[text()='A/V Graphics Operator'][1]`
    );
  }
  fourthElementInGrid() {
    return $(
      `(//div[@ng-model="orderController.selectedJob.DetailLines"]//div[@class="slick-cell l0 r0 cell-reorder dnd"])[4]`
    );
  }
  jobDetailsLineDelete() {
    return $(`//ul[@id="orderLinesContextMenu"]/li[text()='Delete Line']`);
  }
  insertJobHeader() {
    return $(`//a[@ng-click="insertProductionsEmptyJob()"]`);
  }
  jobStatusQuote() {
    return $(
      `//div[@id="oeJobGrid"]//div[@class="ui-widget-content slick-row even"][2]/div[text()='Quote']`
    );
  }
  jobStatusDropdown() {
    return $(
      `//div[@id="oeJobGrid"]//div[@class="ui-widget-content slick-row even active"]//select[@class="editor-yesno"]`
    );
  }
  jobStatusText() {
    return $(
      `//div[@id="oeJobGrid"]//div[@class="ui-widget-content slick-row even"][2]/div[7]`
    );
  }
  jobNewRow() {
    return $(
      `//div[@id="oeJobGrid"]//div[@class="ui-widget-content slick-row even new-row"]`
    );
  }

  async changeStringValToInteger(stringData) {
    let stringVal = stringData.replace(/[^0-9]/, "");
    // stringVal = stringVal.substring(0, 4);
    const rate1 = Number.parseFloat(stringVal, 10);
    return rate1;
  }

  async OrderCreation(urlVal) {
    await this.createOrder(urlVal);
    await this.btnCreateOrder().waitForClickable();
    await this.btnCreateOrder().click();
  }
  async verifyImpliedDiscount() {
    await this.navBarRightClose().click();
    let rate = await this.getRate().getText();
    let RateVal = await this.changeStringValToInteger(rate);
    RateVal = RateVal - RateVal / 100;
    await this.inputSplRate().click();
    assert.isFalse(await $(this.disabledInputSplRateBox()).isDisplayed());
  }

  async createProductionOrder(prodUrlVal) {
    await this.createOrder(prodUrlVal);
    await this.selectOrderPath().waitForClickable();
    await this.selectOrderPath().click();
    await this.selectOrderPath().selectByVisibleText("Productions");
    await this.visibleTextSelectOrderPath().click();
    await this.btnCreateProdOrder().click();
    console.log("URL === ", await browser.getUrl());
  }
  async addPackageToProdOrder() {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.clickOnItems().waitForClickable();
    await this.clickOnItems().click();
    await this.clickOnPackage().click();
    await this.selectAnItemInPackageForProd().doubleClick();
  }
  async specialRateProd() {
    await this.navBarRightClose().click();
    let rate = await this.stdRateProd().getText();
    rate = await this.changeStringValToInteger(rate);
    const splRateVal = rate - rate / 100;
    await this.clickSplRateProd().click();
    await this.inputSplRateProd().setValue(splRateVal);
    await browser.keys(utilConst.Const.tabKey);
    await this.navBarRightClose().click();
  }
  async verifySpecialRateProd() {
    let resultVal = await this.lineTotalProd().getText();
    resultVal = await this.changeStringValToInteger(resultVal);
    let splRate = await this.clickSplRateProd().getText();
    const splRate1 = await this.changeStringValToInteger(splRate);
    let quantity = await this.getQuantityVal().getText();
    quantity = Number.parseInt(quantity, 10);
    let days = await this.getDaysVal().getText();
    days = Number.parseInt(days, 10);
    var actualVal = splRate1 * quantity * days;
    assert.equal(resultVal, actualVal);
  }
  async addPackageToClassicOrder() {
    await this.jobHeader().waitForDisplayed();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.clickOnItems().click();
    await this.clickOnPackage().click();
    await this.selectAnItemInPackage().doubleClick();
  }
  async saveOrder() {
    await this.btnSave().waitForClickable();
    await this.btnSave().click();
    await this.orderHeader().waitForClickable();
    await this.orderHeader().click();
    await this.jobHeader().waitForClickable();
  }

  async addSplRateToClassicOrder() {
    await this.getRate().click();
    const rate = await this.getRate().getText();
    const RateVal = await this.changeStringValToInteger(rate);
    RateVal = RateVal - RateVal / 100;
    await this.inputSplRate().setValue(RateVal);
  }

  async changeQuantityOfAnItem(quantityData) {
    await this.clickQuantityVal().click();
    await this.changeQuantityVal().setValue(quantityData);
    await browser.keys(utilConst.Const.tabKey);
  }
  async verifyQuantityOfAnItem(quantityData) {
    let resultQuantity = await this.getQuantityVal().getText();
    assert.equal(resultQuantity, quantityData);
  }
  async verifyDiscountErrorMsg() {
    await this.navBarRightClose().click();
    await this.clickDiscountInTable().click();
    await this.inputDiscountEdit().setValue("1");
    await browser.keys(utilConst.Const.tabKey);
    assert.isTrue(this.discountErrorMsg().isDisplayed());
  }
  async serviceTypeDiscount(serviceType, discountPercentage) {
    await this.discountTabSlider().waitForClickable();
    await this.discountTabSlider().click();
    await this.clickServiceTypeInDiscount().click();
    await this.selectServiceTypeInDiscount().selectByVisibleText(serviceType);
    await this.clickDiscountTabInDiscount().click();
    const rate1 = Number.parseInt(discountPercentage, 10);
    await this.inputDiscountTab().setValue(rate1);
    await browser.keys(utilConst.Const.tabKey);
    await this.btnPropagate().click();
    await this.btnDiscountOk().waitForClickable();
    await this.btnDiscountOk().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
  }
  async verifyServiceTypeDiscount(discountPercentage) {
    await this.clickOnItems().click();
    await this.clickOnHotList().click();
    await this.clickHotListLightPackage().waitForDisplayed();
    await this.clickHotListLightPackage().doubleClick();
    let resultVal = await this.getDiscountPercentage().getText();
    assert.equal(resultVal, discountPercentage);
  }
  async jobLevelDiscount(serviceType, discountPercentage) {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.clickOnDiscounts().waitForClickable();
    await this.clickOnDiscounts().click();
    await this.clickJobLevelDiscount().click();
    await this.selectServiceTypeInDiscount().waitForClickable();
    await this.selectServiceTypeInDiscount().click();
    await this.selectServiceTypeInDiscount().selectByVisibleText(serviceType);
    await this.clickDiscountTabInLine().click();
    const rate1 = Number.parseInt(discountPercentage, 10);
    await this.inputDiscountTabInLine().setValue(rate1);
    await browser.keys(utilConst.Const.tabKey);
  }
  async applyDiscountInLine(discountPercentage) {
    await this.navBarRightClose().click();
    await this.clickDiscountInTable().click();
    const rate1 = Number.parseInt(discountPercentage, 10);
    await this.inputDiscountEdit().setValue(rate1);
    await browser.keys(utilConst.Const.tabKey);
  }
  async verifyLineLevelDiscount(discountPercentage) {
    let resultDiscount = await this.getDiscountValueFromTable().getText();
    assert.equal(resultDiscount, discountPercentage);
  }

  async setComplimentoryAtJobDefaults_prod(complimentary) {
    await this.jobsDefaultsTabSlider().waitForClickable();
    await this.jobsDefaultsTabSlider().click();
    await this.checkboxComplimentary().click();
    await this.selectComplimentaryDropdown().selectByVisibleText(complimentary);
    await this.complimentaryPopupYes().click();
  }

  async verifyComplimentaryForProdOrder() {
    await this.navBarRightClose().click();
    assert.isTrue(await this.verifyLineTotal().isDisplayed());
  }
  async setComplimentoryAtJobsLevel(complimentary) {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.clickOnOptions().click();
    await this.checkboxComplimentaryJobLevel().click();
    await this.selectComplimentaryDropdownJobLevel().selectByVisibleText(
      complimentary
    );
  }
  async complimentaryExcludedLabor() {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.clickOnOptions().click();
    await this.chkboxCompExcludingLabor().click();
    await this.selectLaborComplimentoryOption().waitForClickable();
    await this.selectLaborComplimentoryOption().click();
    await this.selectLaborComplimentoryOption().selectByVisibleText(
      "Competitor Match"
    );
    await this.clickOnItems().click();
    await this.clickOnPackage().click();
    await this.selectAnItemInPackageForProd().doubleClick();
    await this.clickOnSubClass().waitForClickable();
    await this.clickOnSubClass().click();
    await this.subClassSearch().click();
    await this.laborSubClassChkbox().waitForDisplayed();
    await this.laborSubClassChkbox().click();
    await this.laborItemForProdOrder().doubleClick();
    await this.btnBelowThePackage().waitForClickable();
    await this.btnBelowThePackage().click();
  }
  async verifycompExcludedLabor() {
    await this.textLaborRateFromGrid().waitForDisplayed();
    await this.textLaborRateFromGrid().click();
    let laborRate = await this.textLaborRateFromGrid().getText();
    let RateVal = await this.changeStringValToInteger(laborRate);
    assert.isTrue(
      RateVal > 0,
      "Successfully validated labor rate greater than 0"
    );
  }

  async addLaborItemInProdOrder() {
    await this.clickOnSubClass().waitForClickable();
    await this.clickOnSubClass().click();
    await this.subClassSearch().click();
    await this.laborSubClassChkbox().waitForDisplayed();
    await this.laborSubClassChkbox().click();
    await this.laborItemForProdOrder().doubleClick();
    await this.btnBelowThePackage().waitForClickable();
    await this.btnBelowThePackage().click();
  }

  async verifyOpportunityDatatoNavigator() {
    const fs = require("fs");
    console.log(`${process.cwd()}\\data\\oppCreation.json`);
    const testData = JSON.parse(
      fs.readFileSync(`${process.cwd()}\\data\\oppCreation.json`)
    );
    await this.jobHeader().waitForDisplayed();
    await this.jobHeader().waitForClickable();
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
    await this.orderEndDateText().click();
    let endDate = await this.orderEndDateText().getValue();
    endDate = endDate.substring(4, 14);
    const endDate1 = new Date(endDate);
    const jsonEndDate = new Date(testData.startDateVal);
    assert.isTrue(
      jsonEndDate.toString() == endDate1.toString(),
      "Validated end date successfully"
    );
    let orderName = await this.orderNameText().getValue();
    assert.equal(orderName, testData.OpportunityName);
    let accName = await this.accountNameText().getText();
    assert.equal(accName, testData.EndUserAccount);
    let Venue = await this.venueText().getText();
    Venue = Venue.substring(0, 18);
    assert.equal(Venue, testData.Venue1137);
    await this.jobHeader().click();
    await this.jobTypeSales().waitForClickable();
    let jobType = await this.jobTypeSales().getText();
    let jobTypeI = await this.jobTypeOperations().getText();
    assert.equal(jobType, testData.jobTypeSales);
    assert.equal(jobTypeI, testData.jobTypeOperations);
  }
  async updateDateAndValidate() {
    await this.jobHeader().waitForDisplayed();
    await this.jobHeader().waitForClickable();
    await this.orderStartDateText().click();
    const today = new Date();
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - 1);
    console.log(previousDate.getDate() + "__________");
    await this.datePickerDateSelect(previousDate.getDate()).click();
    await this.chkboxAdjustDatesForJobs().waitForClickable();
    await this.chkboxAdjustDatesForJobs().click();
    await this.chkboxAdjustLaborJobDates().click();
    await this.btnAdjustDatesYes().click();
    await this.btnSave().waitForClickable();
    await this.btnSave().click();
    await this.orderStartDateText().waitForDisplayed();
    let startDateVal = await this.orderStartDateText().getValue();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    const jobStartVal = await this.jobStartDateText().getText();
    const jobStartVal1 = new Date(jobStartVal);
    const startDateVal1 = new Date(startDateVal);
    console.log(jobStartVal + "------------------------" + startDateVal);
    assert.equal(
      startDateVal1.toString(),
      jobStartVal1.toString(),
      "Validated start date successfully from order and from job"
    );
  }

  async validateByAddingPackageAndLabor() {
    // browser.navigateTo("https://navigator.training.psav.com/#!/order/:1137/:12600");
    await this.jobHeader().waitForDisplayed();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.clickOnItems().waitForClickable();
    await this.clickOnItems().click();
    await this.clickOnPackage().click();
    await this.selectAnItemInPackageForProd().doubleClick();
    await this.clickOnSubClass().waitForClickable();
    await this.clickOnSubClass().click();
    await this.subClassSearch().click();
    await this.laborSubClassChkbox().waitForDisplayed();
    await this.laborSubClassChkbox().click();
    await this.laborItemForProdOrder().doubleClick();
    await this.btnAddToPackage().waitForClickable();
    await this.btnAddToPackage().click();
    console.log(
      (await this.laborItemGridValidate().isDisplayed()) +
        "-----------------------"
    );
    assert.isTrue(await this.laborItemGridValidate().isDisplayed());
    await this.fourthElementInGrid().waitForDisplayed();
    await this.fourthElementInGrid().moveTo();
    await browser.performActions([
      {
        type: "pointer",
        id: "pointer1",
        parameters: { pointerType: "mouse" },
        actions: [
          {
            type: "pointerMove",
            x: 1,
            y: 1,
            origin: await this.fourthElementInGrid(),
          },
          { type: "pause", duration: 1 },
          { type: "pointerDown", button: 2 },
          { type: "pause", duration: 0 },
        ],
      },
    ]);
    await browser.releaseActions();
    await this.jobDetailsLineDelete().waitForClickable();
    await this.jobDetailsLineDelete().click();
    await this.laborSubClassChkbox().waitForDisplayed();
    await this.laborSubClassChkbox().click();
    await this.laborSubClassChkbox().click();
    await this.laborItemForProdOrder().doubleClick();
    await this.btnBelowThePackage().waitForClickable();
    await this.btnBelowThePackage().click();
    assert.isTrue(await this.laborItemGridValidate().isDisplayed());
  }

  async editOrderNameAndValidate() {
    await this.jobHeader().waitForDisplayed();
    await this.jobHeader().waitForClickable();
    let orderName = await this.orderNameText().getValue();
    let orderNameNew = orderName + "_Auto";
    await this.orderNameText().setValue(orderNameNew);
    await this.btnSave().click();
    await this.jobHeader().waitForClickable();
    let orderNameResult = await this.orderNameText().getValue();
    assert.equal(orderNameNew, orderNameResult);
  }

  async cancelAnOrderAndValidate() {
    await this.jobHeader().waitForDisplayed();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.insertJobHeader().click();
    await this.btnSave().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.jobStatusQuote().click();
    await this.jobStatusDropdown().selectByVisibleText("Cancel");
    await browser.keys("\uE004");
    await this.btnSave().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.jobActionsHeader().click();
    await this.optionShowCancelJobs().waitForDisplayed();
    await this.optionShowCancelJobs().click();
    assert.equal(await this.jobStatusText().getText(), "Cancel");
  }
  async changeOrderDateAndValidateDays() {
    await this.jobHeader().waitForDisplayed();
    await this.jobHeader().waitForClickable();
    let actualDate = await this.orderStartDateText().getValue();
    console.log("**************" + actualDate);
    await this.orderStartDateText().click();
    const today = new Date();
    const previousDate = new Date(today);
    previousDate.setDate(today.getDate() - 1);
    console.log(previousDate.getDate() + "__________");
    await this.datePickerDateSelect(previousDate.getDate()).click();
    await this.chkboxAdjustDatesForJobs().waitForClickable();
    await this.chkboxAdjustDatesForJobs().click();
    await this.chkboxAdjustLaborJobDates().click();
    let adjustDays = await this.adjustedDateText().getValue();
    const daysAdjustedVal = Number.parseInt(adjustDays, 10);
    await this.btnAdjustDatesYes().click();
    await this.btnSave().click();

    let resultDate = await this.orderStartDateText().getValue();
    const date1 = new Date(actualDate);
    const date2 = new Date(resultDate);
    const diffInMs = date2 - date1;
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    assert.equal(
      daysAdjustedVal,
      diffInDays,
      "Validated start date successfully from order and from job"
    );
  }
  async addLaborLineForClassicOrder() {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.clickOnItems().waitForClickable();
    await this.clickOnItems().click();
    await this.clickOnSubClass().waitForClickable();
    await this.clickOnSubClass().click();
    await this.subClassSearch().click();
    await this.laborSubClassChkbox().waitForDisplayed();
    await this.laborSubClassChkbox().click();
    await this.laborItemForProdOrder().doubleClick();
  }
  async clickOnJobs() {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
  }
}

module.exports = new JobNavigatorPage();
