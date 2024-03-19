const { assert } = require("chai");
const { expect } = require("chai");
// const LandingNavigatorPage = require("./navigator.page");
/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobOldClassicNavigatorPage {
  /**
   * define selectors using getter methods
   */

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

  jobActionSearch() {
    return $("//input[@value='Search']");
  }

  oredrnumlink() {
    return $(
      "//div[@id='orderSearchGridContainer']/descendant::span[text()='\u00a0'][1]/ancestor::div[contains(@class,'slick-row')]/descendant::a[1]"
    );
  }


  selectJob() {
    return $(`//a[normalize-space()='Jobs']`);
  }

  dateRangeUncheck() {
    return $("(//input[@type='checkbox'])[2]");
  }

  savebtn() {
    return $("//input[@value='Save']");
  }
  discountCloseBtn() {
    return $("//button[@ng-show='closeable']");
  }
  newInternalOrder() {
    return $("//button[contains(text(),'New Internal Order')]");
  }

  orderStatus() {
    return $("//div[@id='search-form']//span[contains(text(),'Status')]/parent::div/select");
  }

  firstItemNumUnderJobs() {
    return $("//div[@id='oeJobGrid']/descendant::div[contains(@class,'slick-cell')][2]");
  }

  firstItemNameUnderJobs() {
    return $("//div[@id='oeJobGrid']/descendant::div[contains(@class,'slick-cell')][8]");
  }

  fistItemJobType() {
    return $("//div[@id='oeJobGrid']/descendant::div[contains(@class,'slick-cell')][10]")
  }

  orderNumfld() {
    return $("//span[text()=' Order Number ']/parent::div/input");
  }
  jobRoomfld() {
    return $("//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-cell')][8]");
  }
  jobRoomfld2ndRow() {
    return $("//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-cell')][27]");
  }
  jobRoomDrpDnw() {
    return $("//div[@id='oeJobGridPanel']/descendant::select[@class='editor-combobox']");
  }
  jobErrorMsg() {
    return $("//span[@title='Job - Invalid values.']");
  }
  //---//
  insertJobLnk() {
    return $("//div[@id='orderEntryMain']/descendant::a[text()='Insert Job'][1]");
  }

  firstJobNumber() {
    return $("//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-row')][1]/descendant::div[contains(@class,'slick-cell')][2]");
  }

  insertedJobNumber() {
    return $("//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-row')]/descendant::div[contains(@class,'slick-cell')][2][not(text())][1]");
  }

  deleteNewJob() {
    return $("(//div[@id='oeJobGridPanel']//div[contains(@class,'slick-cell l1 r1')][not(text())]/preceding-sibling::div)[1]");
  }

  removeClientMsg() {
    return $("//span[contains(@class,'remove-circle')]");
  }

  itemsTab() {
    return $("//a[contains(text(),'Items')]");
  }
  fireIcon() {
    return $("//div[@class='orderRow btn-group-vertical']/descendant::span[contains(@class,'fire')]");
  }

  firstItemPrice() {
    return $("//div[@id='oeHotListGrid']/descendant::div[contains(@class,'slick-cell')][2]");
  }

  firstJobPrice() {
    return $("//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-row')][1]/descendant::div[contains(@class,'slick-cell')][14]");
  }

  orderHeader() {
    return $(`//a[@ng-click="setOrderEntryMainTab('Order')"]`);
  }

  orderStartDateText() {
    return $(`//input[@ng-model="order.StartDate"]`);
  }
  datePickerDateSelect(date) {
    return $(`(//table[@class='ui-datepicker-calendar']/tbody/tr/td)[` + date + `]`);
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
    return $(`//input[@ng-model="AdjustJob.ShiftDays"]`)
  }

  jobStartDateText() {
    return $(`//div[@id='oeJobGrid']//div[@class='ui-widget-content slick-row even']/div[@class='slick-cell l2 r2 selected']`);
  }
  clickOnItems() {
    return $("//a[contains(text(),'Items')]");
  }
  clickOnPackage() {
    return $("//span[@class=' glyphicon glyphicon-gift']")
  }
  jobsPackageItems() {
    return $('//div[@id="oePackagesGrid"]//div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[3]/div[1]');
  }
  clickOnItem() {
    return $("//span[@class=' glyphicon glyphicon-th-list']")
  }
  jobsItemsItem() {
    return $('//div[@id="gridProductsOrderEntry"]//div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[3]/div[1]');
  }
  btnAddToPackage() {
    return $(`//button[@ng-click="addToPackage('add')"]`);
  }
  jobLinegrid() {
    return $$('//div[@id="oeOrderLinesGrid"]//div[contains(@class,"ui-widget-content slick")]');
  }
  jobLineGridValues(rowNum, colNum) {
    return $('//div[@id="oeOrderLinesGrid"]//div[contains(@class,"ui-widget-content slick")][' + rowNum + ']/div[' + colNum + ']');
  }
  //-----------------------------------------------------------------------------------------------------------
  orderSearchTab() {
    return $('//span[text()="Order Search"]');
  }
  orderNameParamField() {
    return $("(//*[contains(text(), 'Order Name ')]/parent::div/input)[1]");
    // return $(`//div[@id="search-form"]/div[1]/input`);
  }

  selectStatuslnk() {
    return $("//div[@id='search-form']/div[7]/select");
  }
  selectStatusAllLnk() {
    return $("//div[@id='search-form']/div[7]/select/option[@label='All']");
  }
  selectBilling() {
    return $("//div[@id='search-form']/div[8]/select");
  }
  selectBillingMethod() {
    return $("//div[@id='search-form']/div[8]/select/option[@label='Net 30']");
  }
  clickOnPayment() {
    return $("//a[@ng-click='openPaymentTab()']");
  }
  selectTypeOfPayment() {
    return $('//div[@id="oeCreditGrid"]//div[contains(@class,"ui-widget-content slick-row")]/div[2]')
    // return $("//div[@id='oeCreditGrid']/descendant::div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[2]/div[2]");
  }
  selectPrintReport() {
    return $("//button[@id='prntBtn']");
  }
  validateReportText() {
    return $("(//div[@id='page0']//span[contains(.,'Customer')])[1]");
  }
  orderNumLink() {
    return $("(//div[@id='slickGridContainer-orderSearchGrid']/descendant::div[@id='orderSearchGrid']/descendant::div[@class='ui-widget-content slick-row even']/div[3])[1]");
  }

  async changejobLocation(joblocationId) {
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(joblocationId);
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).doubleClick();
  }

  async clickOnOldClassicOrderNumLink() {
    await this.newInternalOrder().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.dateRangeUncheck().waitForClickable();
    await this.dateRangeUncheck().click();
    await this.newInternalOrder().waitForClickable();
    await this.jobActionSearch().waitForClickable();
    await this.jobActionSearch().click();
    await this.oredrnumlink().waitForClickable();
    await this.oredrnumlink().click();
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
  }

  async clickOnInsertJobLinkAndSave() {
    await this.firstJobNumber().waitForClickable();
    await this.firstJobNumber().click();
    let firstJobNoBeforeInsert = await this.firstJobNumber().getText();
    console.log("firstJobNoBeforeInsert === ", firstJobNoBeforeInsert);
    await this.insertJobLnk().waitForClickable();
    await this.insertJobLnk().click();
    await browser.pause(process.env.small_wait);
    await this.insertedJobNumber().waitForClickable();
    await this.insertedJobNumber().click();
    let firstJobNoAfterInsertBeforeSave = await this.insertedJobNumber().getText();
    console.log("firstJobNoAfterInsertBeforeSave === ", firstJobNoAfterInsertBeforeSave);
    await browser.pause(process.env.small_wait);
    for (let j = 1; j < 2; j++) {
      if (await this.removeClientMsg().isClickable() == true) {
        await this.removeClientMsg().click();
        await this.savebtn().waitForClickable();
        break;
      } else {
        await browser.pause(process.env.small_wait);
      }
    }
    await this.savebtn().waitForClickable();
    await this.savebtn().click();
    await this.firstJobNumber().waitForClickable();
  }

  async verifyJobNumForInsertjob() {
    await this.firstJobNumber().waitForClickable();
    let firstJobNoAfterInsertAfterSave = await this.firstJobNumber().getText();
    console.log("firstJobNoAfterInsertAfterSave === ", firstJobNoAfterInsertAfterSave);
    assert.isNotNull(firstJobNoAfterInsertAfterSave, 'Job number not generated');
  }

  async addItemToInsertjob() {
    await this.firstJobPrice().isDisplayed();
    let firstJobPriceBeforeAddItem = await this.firstJobPrice().getText();
    console.log("firstJobPriceBeforeAddItem === ", firstJobPriceBeforeAddItem);
    await this.itemsTab().waitForClickable();
    await this.itemsTab().click();
    await this.fireIcon().waitForClickable();
    await this.fireIcon().click();
    await this.firstItemPrice().waitForClickable();
    await this.firstItemPrice().doubleClick();
    let price = await this.firstJobPrice().getText();
    for (let j = 1; j < 2; j++) {
      if (await this.removeClientMsg().isClickable() == true) {
        await this.removeClientMsg().click();
        await this.discountCloseBtn().waitForClickable();
        await this.discountCloseBtn().click();
        await this.savebtn().waitForClickable();
        break;
      } else {
        await browser.pause(process.env.small_wait);
      }
    }
    // try {
    //   await this.discountCloseBtn().waitForClickable();
    //   await this.discountCloseBtn().click();
    // } catch (e) { }
    await this.savebtn().waitForClickable();
    await this.savebtn().click();
    await this.firstJobPrice().isDisplayed();
  }
  async verifyJobAmountForInsertjob() {
    await this.firstJobPrice().isDisplayed();
    let firstJobPriceAfterAddItem = await this.firstJobPrice().getText();
    console.log("firstJobPriceAfterAddItem === ", firstJobPriceAfterAddItem);
    assert.notEqual(firstJobPriceAfterAddItem, '0.00', 'price not greater than 0');
  }

  async selectOrderTab() {
    await this.orderHeader().waitForClickable();
    await this.orderHeader().click();
  }

  async updateDateAndValidateForOldClassicOrder() {
    await this.selectJob().waitForDisplayed();
    await this.selectJob().waitForClickable();
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
    await browser.pause(process.env.small_wait);
    await this.orderStartDateText().waitForDisplayed();
    let startDateVal = await this.orderStartDateText().getValue();
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    const jobStartVal = await this.jobStartDateText().getText();
    const startDateVal1 = new Date(startDateVal);
    const jobStartVal1 = new Date(jobStartVal);
    console.log(jobStartVal + "------------------------" + startDateVal)
    assert.isTrue(startDateVal1.toString() == jobStartVal1.toString(), "Validated start date successfully from order and from job");
  }

  async deleteItemsFromOldClassicOrder() {
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.clickOnItems().waitForClickable();
    await this.clickOnItems().click();
    await this.jobLineGridValues(1, 1).waitForDisplayed();
    let rowCount = await this.jobLinegrid().length;
    console.log("row count ----------------> : " + rowCount);
    for (let i = 0; i < rowCount - 1; i++) {
      console.log("***************" + i);
      await this.jobLineGridValues(1, 1).waitForDisplayed();
      await this.jobLineGridValues(1, 1).moveTo();
      await browser.performActions([{
        type: 'pointer', id: 'pointer1',
        parameters: { pointerType: 'mouse' },
        actions: [
          { type: 'pointerMove', x: 1, y: 1, origin: await this.jobLineGridValues(1, 1) },
          { type: 'pause', duration: 1 },
          { type: 'pointerDown', button: 2 },
          { type: 'pause', duration: 0 }]
      }]);
      await browser.releaseActions();
      await browser.pause(3000);
      await browser.keys("\uE017");
    }
    let rowCount1 = await this.jobLinegrid().length;
    for (let i = 0; i < rowCount1 - 1; i++) {
      console.log("***************" + i);
      await this.jobLineGridValues(1, 1).waitForDisplayed();
      await this.jobLineGridValues(1, 1).moveTo();
      await browser.performActions([{
        type: 'pointer', id: 'pointer1',
        parameters: { pointerType: 'mouse' },
        actions: [
          { type: 'pointerMove', x: 1, y: 1, origin: await this.jobLineGridValues(1, 1) },
          { type: 'pause', duration: 1 },
          { type: 'pointerDown', button: 2 },
          { type: 'pause', duration: 0 }]
      }]);
      await browser.releaseActions();
      await browser.pause(3000);
      await browser.keys("\uE017");
    }
  }

  async addPackageItemsToOldClassicOrderAndValidate() {
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.clickOnItems().waitForClickable();
    await this.clickOnItems().click();
    await this.clickOnPackage().click();
    let packageItemActual = await this.jobsPackageItems().getText();
    await this.jobsPackageItems().doubleClick();
    await this.clickOnItem().click();
    let itemActual = await this.jobsItemsItem().getText();
    await this.jobsItemsItem().doubleClick();
    await this.btnAddToPackage().click();
    let rowCount = await this.jobLinegrid().length;
    for (let i = 1; i < rowCount; i++) {
      let resultVal = await this.jobLineGridValues(i, 4).getText();
      if (resultVal == packageItemActual) {
        assert.equal(resultVal, packageItemActual);
      } else if (resultVal == itemActual) {
        assert.equal(resultVal, itemActual);
      }
    }
  }
  async gotoOrderSearchTab() {
    console.log("Entering into Order Search Method");
    await this.orderSearchTab().waitForClickable();
    await this.orderSearchTab().click();
    await this.orderNameParamField().waitForClickable();
    await browser.pause(process.env.small_wait);
  }
  async clickOnOldOrderNum() {
    await this.newInternalOrder().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.selectStatuslnk().waitForClickable();
    //await this.selectStatuslnk().click();
    await this.selectStatusAllLnk().click();
    await this.selectBilling().waitForClickable();
    //await this.selectBilling().click();
    await this.selectBillingMethod().click();
    await browser.pause(process.env.small_wait);
    await this.dateRangeUncheck().waitForClickable();
    await this.dateRangeUncheck().click();
    await this.newInternalOrder().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.jobActionSearch().waitForClickable();
    await this.jobActionSearch().click();
    await this.oredrnumlink().waitForClickable();
    await this.oredrnumlink().click();
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
  }
  async clickOnPaymentAndSelectPayment() {
    await this.clickOnPayment().waitForClickable();
    await this.clickOnPayment().click();
    await this.selectTypeOfPayment().waitForClickable();
    await this.selectTypeOfPayment().click();
    await this.selectPrintReport().waitForClickable();
    await this.selectPrintReport().click();
    await this.validateReportText().waitForDisplayed();
  }


  async clickOnInsertJobLink() {
    // await browser.navigateTo("https://navigator.training.psav.com/#!/order/:1137/:12257");
    // await this.selectJob().waitForClickable();
    // await this.selectJob().click();
    await this.firstJobNumber().waitForClickable();
    await this.firstJobNumber().click();
    let firstJobNoBeforeInsert = await this.firstJobNumber().getText();
    console.log("firstJobNoBeforeInsert === ", firstJobNoBeforeInsert);
    await this.insertJobLnk().waitForClickable();
    await this.insertJobLnk().click();
    await browser.pause(process.env.small_wait);
    await this.insertedJobNumber().waitForClickable();
    await this.insertedJobNumber().click();
    let firstJobNoAfterInsertBeforeSave = await this.insertedJobNumber().getText();
    console.log("firstJobNoAfterInsertBeforeSave === ", firstJobNoAfterInsertBeforeSave);
    await browser.pause(process.env.small_wait);
    for (let j = 1; j < 2; j++) {
      if (await this.removeClientMsg().isClickable() == true) {
        await this.removeClientMsg().click();
        await this.savebtn().waitForClickable();
        break;
      } else {
        await browser.pause(process.env.small_wait);
      }
    }
    await this.firstJobNumber().waitForClickable();
    await this.deleteNewJob().waitForDisplayed();
    await this.deleteNewJob().moveTo();
    await browser.performActions([{
      type: 'pointer', id: 'pointer1',
      parameters: { pointerType: 'mouse' },
      actions: [
        { type: 'pointerMove', x: 1, y: 1, origin: await this.deleteNewJob() },
        { type: 'pause', duration: 1 },
        { type: 'pointerDown', button: 2 },
        { type: 'pause', duration: 0 }]
    }]);
    await browser.releaseActions();
    await browser.pause(3000);
    await browser.keys("\uE017");
    await this.firstJobNumber().click();
    await browser.pause(process.env.small_wait);
    await this.firstJobNumber().waitForDisplayed();
    let firstJobNoAfterDeleteJob = await this.firstJobNumber().getText();
    console.log("firstJobNoAfterDeleteJob === ", firstJobNoAfterDeleteJob);
    assert.equal(firstJobNoAfterDeleteJob, firstJobNoBeforeInsert);
  }
}

module.exports = new JobOldClassicNavigatorPage();
