const { assert } = require("chai");
const { expect } = require("chai");
const LandingNavigatorPage = require("./navigator.page");
const utilTools = require("../../utils/tools");

//require("dotenv").config();

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ImportJobsNavigatorPage extends LandingNavigatorPage {
  //Search Location

  orderSearchTab() {
    return $(`//span[text()="Order Search"]`);
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

  importJobSearch() {
    return $(
      `//div[@id="search-form"]/div[@class='btn-toolbar btn-group-sm search-btn-group mt-4 pt-4 pb-1']/input[@type='submit']`
    );
  }
  dateRangechkBox() {
    return $("(//input[@id='order-search_ApplyDates'])[1]");
  }
  oredrnumlink() {
    return $(
      '//div[@id="orderSearchGridContainer"]/descendant::span[@title="Order"][1]/../following-sibling::div[1]'
    );
  }
  prodOrderNumLink() {
    return $(
      '//div[@id="orderSearchGridContainer"]/descendant::span[@title="Productions Order"][1]/../following-sibling::div[2]'
    );
  }
  oldClassicNumLink() {
    return $(
      "(//div[contains(@class,'slick-cell l0 r0 true')]/span[not(@title='New Classic') and not(@title='Productions Order')]/parent::div/following-sibling::div[2])[3]"
    );
  }
  orderNamelink() {
    return $(
      '//div[@id="orderSearchGridContainer"]/descendant::span[@title="Order"][1]/../following-sibling::div[2]'
    );
  }
  jobNumberRes() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[@class='ui-widget-content slick-row even']/div[2]"
    );
  }
  importJobDrpDnw() {
    return $(
      `//div[@id="orderEntryMain"]/nav/div[@class='navbar-header']/ul[3]/li[@class='dropdown']/a[@role='button']`
    );
  }
  selectJob() {
    return $(`//a[normalize-space()='Jobs']`);
  }

  importjobs() {
    return $(`//a[@ng-click='openImportJobs()']`);
  }

  selectImportJobLoc() {
    return $(
      `//div[@class='row ng-scope']/descendant::div[@ng-form='frmJobSearch']/descendant::div[@class='ng-binding'][6]/select[1]`
    );
  }
  importSearchJob() {
    return $(`//input[@id="btnSearchJob"]`);
  }

  selectImportResults() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[2]/div[1]"
    );
  }
  selectImportDiscRes() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[1]"
    );
  }
  selectProdResults() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[4]"
    );
  }
  selectClassicImportJobRes() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div/div[text()='Classic']"
    );
  }

  selectNewClassicImportJobRes() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[1]/child::div[1]/child::div[5]`
    );
  }
  importJobNumResultsTxt() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[4]"
    );
  }
  importOrderNumResultsTxt() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[6]"
    );
  }
  //I have changed the x path here//
  importOrderNameResultsTxt() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[7]"
    );
  }
  currentOrdersOptionChk() {
    return $(`//input[@ng-model='ImportOptions.ApplyCurrentOrderOpts']`);
  }
  includeDiscChkBox() {
    return $(`//input[@ng-model='ImportOptions.IncludeDiscounts']`);
  }
  includeSpecialChkBox() {
    return $(`//input[@ng-model='ImportOptions.IncludeSpecialRate']`);
  }
  createNewJobButton() {
    return $(`(//button[@ng-click='processImportJobs()'])[1]`);
  }

  doneBtn() {
    return $(`(//button[@ng-click='closeModal()'])[2]`);
  }
  crmCursor() {
    return $(
      `//span[@class='glyphicon glyphicon-remove-circle cursor-pointer']`
    );
  }
  saveBtn() {
    return $(`(//input[@class='btn btn-success'])[1]`);
  }

  savedItemName() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[2]/div[4]"
    );
  }

  jobNumberUrl() {
    return $(
      `//div[@id="jobGridResults"]/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[4]`
    );
  }
  orderNumUrl() {
    return $(
      `//div[@id="jobGridResults"]/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[6]`
    );
  }
  orderNameUrl() {
    return $(
      `//div[@id="jobGridResults"]/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[7]`
    );
  }

  importJobNumberField() {
    return $(`//input[@ng-model='params.JobNumber']`);
  }
  importOrderNumField() {
    return $(`//input[@ng-model='params.OrderNumber']`);
  }
  importOrderNameField() {
    return $(`//input[@ng-model='params.OrderName']`);
  }

  getJobOrderNumber() {
    //return $("(//label[@class='orderTickerDisplayValue ng-binding'])[3]");
    return $(
      "//div[@ng-form='OrderForms.jobTabForm']//label[contains(text(),'Order Number')]/parent::div/following-sibling::div/label"
    );
  }
  orderNumField() {
    return $("//span[contains(text(), 'Order Number')]/parent::div/input");
  }
  textAreaCmnt() {
    return $("//textarea[@id='txtRequestComments']");
  }
  cancelBtn() {
    return $("//button[@ng-click='closeDiscountApprovalModal(false)']");
  }
  txtContinueBtn() {
    return $("//button[@ng-click='closeDiscountApprovalModal(true)']");
  }

  clickOnJobssLnk() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='ui-widget-content slick-row even'][2]/div[2]"
    );
  }
  clickOnOldClassicLnk() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='slick-cell l1 r1 active selected']"
    );
  }
  jobNumChkLink() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[4]/div[2]"
    );
  }
  //I have changed the x path here
  chkEmptyFields() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='ui-widget-content slick-row even'][4]/div[8]"
    );
  }

  applyDateChk() {
    return $(
      "//div[@ng-form='frmJobSearch']/descendant::div[10]/div[@class='checkbox']"
    );
  }
  discountTextArea() {
    return $("//textarea[@ng-model='order.DiscountApprovalRequesterComments']");
  }
  continuebtn() {
    return $("//button[text()='Continue ']");
  }

  selectDiscountLink() {
    return $("//a[normalize-space()='Discounts']");
  }
  selectNotesLink() {
    return $("(//a[normalize-space()='Notes'])[2]");
  }
  dicountEmptyChk() {
    return $(
      "//div[@id='jobDiscountGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[@class='ui-widget-content slick-row even new-row']/div[3]"
    );
  }
  noteEmptyCheck() {
    return $(
      "(//div[@id='JobDetailController']/descendant::div[@class='orderRow oeJobPane form-group']/div/div[@class='pull-left well well-small oeJobNotes']/textarea[@class='form-control ng-pristine ng-untouched ng-valid ng-empty ng-valid-maxlength'])[1]"
    );
  }
  orderNumfld() {
    return $("//span[text()=' Order Number ']/parent::div/input");
  }
  jobRoomfld() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-row')][1]"
    );
  }
  jobRoomfld2ndRow() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-row')][2]/descendant::div[contains(@class,'slick-cell')][5]"
    );
  }
  jobRoomDrpDnw() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::select[@class='editor-combobox']"
    );
  }
  jobErrorMsg() {
    return $("//span[@title='Job - Invalid values.']");
  }
  classicOrderDataLink() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[1]"
    );
  }
  clickOnClassicJobLink() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='ui-widget-content slick-row even'][4]/div[2]"
    );
  }
  importnewClassicOrder() {
    return $(
      "//div[@id='jobGridResults']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[3]/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[2]/descendant::span[@title='New Classic']"
    );
  }
  savedItemNum() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[3]/div[2]"
    );
  }

  prodJobStatus() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='ui-widget-content slick-row even'][2]/div[7]"
    );
  }

  copyErrDateVal() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-cell')][5]"
    );
  }
  pasteErrDateVal() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-row')][3]/descendant::div[contains(@class,'slick-cell')][5]"
    );
  }
  writeErrDateVal() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-row')][3]/descendant::input[1]"
    );
  }
  tabonVal() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-row')][3]/descendant::div[contains(@class,'slick-cell')][2]"
    );
  }
  selectItemsLink() {
    return $("//a[normalize-space()='Items']");
  }
  btnSave() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }

  selecthotItemsLink() {
    return $("//label[@class='btn order-product-icon-btn'][1]");
  }
  selecthotlistItems() {
    return $(
      "//div[@id='oeHotListGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/descendant::div[1]"
    );
  }
  selectDateRangeCheckBox() {
    return $("//input[@id='order-search_ApplyDates']");
  }
  clickOnHome() {
    return $("//button[@id='Home']");
  }
  unSavedChangeModel() {
    return $("//div[@class='modal-dialog ']");
  }
  clickOnOkBtn() {
    return $("//button[contains(text(),'OK')]");
  }

  discountReasonText() {
    return $('//textarea[@id="txtRequestComments"]');
  }

  discountRibbonClose() {
    return $('//button[@ng-show="closeable"]');
  }
  orderNumText() {
    return $('//div[@id="jobtop"]//span[contains(.,"DRO")]/parent::div/label');
  }
  discountPercentageText(row, col) {
    return $(
      '//div[@id="oeOrderLinesGrid"]//div[contains(@class,"grid-canvas grid-canvas-top grid-canvas-left")]/div[' +
        row +
        "]/div[" +
        col +
        "]"
    );
  }
  jobHeader() {
    return $("//button[@id='Home']/ancestor::ul/following::li[3]");
  }
  orderHeader() {
    return $(`//a[@ng-click="setOrderEntryMainTab('Order')"]`);
  }
  discountCloseBtn() {
    return $("//button[@ng-show='closeable']");
  }
  homeBtn() {
    return $('//button[@ng-click="goHome()"]');
  }
  selectItemsLink() {
    return $("//a[normalize-space()='Items']");
  }

  clickOnItems() {
    return $("//a[contains(text(),'Items')]");
  }
  clickOnNotes() {
    return $(`//a[@ng-click="orderController.setCurrentTab('JobNote')"]`);
  }
  coverSheetNoteInput() {
    return $(
      `//textarea[@ng-model="orderController.selectedJob.CoverSheetNote"]`
    );
  }
  jobOrderNoteInput() {
    return $(
      `//textarea[@ng-model="orderController.selectedJob.JobOrderNote"]`
    );
  }
  includeNotesChkbox() {
    return $(`//input[@ng-model="ImportOptions.IncludeNotes"]`);
  }

  // async clickOnItems() {
  //   await this.selectItemsLink().waitForClickable();
  //   await this.selectItemsLink().click();
  // }
  // async clickOnHotItemsLink() {
  //   await this.selecthotItemsLink().waitForClickable();
  //   await this.selecthotItemsLink().click();
  // }
  // async clickOnHotItemsList() {
  //   await this.selecthotlistItems().waitForClickable();
  //   await this.selecthotlistItems().doubleClick();
  // }

  async saveOrder() {
    // console.log("Entering in to save order");
    // if ((await this.unSavedChangeModel().isDisplayed()) == true) {
    //   console.log("Entering in to model window..");
    //   await this.clickOnOkBtn().waitForClickable();
    //   await this.clickOnOkBtn().click();
    // } else {
    //   await browser.pause(process.env.small_wait);
    // }
    await this.btnSave().waitForClickable();
    await this.btnSave().click();
  }

  async clickOnOrderSearchTab() {
    await this.orderSearchTab().waitForClickable();
    await this.orderSearchTab().click();
    await browser.pause(process.env.small_wait);
  }

  async changejobLocation(joblocationId) {
    await this.changeLocationHeader().waitForClickable();
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(joblocationId);
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).doubleClick();
    await browser.pause(process.env.small_wait);
    //I have add the below line of code//
    await this.selectDateRangeCheckBox().click();
    await this.importJobSearch().waitForClickable();
    await this.importJobSearch().click();
    await browser.pause(process.env.small_wait);
  }
  async backBrowser() {
    await browser.pause(process.env.small_wait);
    await browser.back();
  }

  async clickOnActionSearch() {
    await browser.pause(process.env.small_wait);
    await this.importJobSearch().click();
    await browser.pause(process.env.small_wait);
  }

  async clickOnOrderNumLink(orderNum) {
    await this.orderNumField().waitForClickable();
    await this.orderNumField().setValue(orderNum);
    //await this.orderNumField().setValue("15591");
    await this.dateRangechkBox().click();
    await this.importJobSearch().click();
    await browser.pause(process.env.small_wait);
    await this.oredrnumlink().waitForClickable();
    await this.oredrnumlink().click();
    await browser.pause(process.env.small_wait);
  }
  async clickOnOldClassicOrder(oldClassicOrderDataNum) {
    await this.orderNumField().waitForClickable();
    await this.orderNumField().setValue(oldClassicOrderDataNum);
    await this.importJobSearch().click();
    await browser.pause(process.env.small_wait);
    await this.oldClassicNumLink().waitForClickable();
    await this.oldClassicNumLink().click();
    await browser.pause(process.env.small_wait);
  }
  async clickOnJobs() {
    await this.selectJob().waitForDisplayed();
    await this.selectJob().waitForClickable();
    await this.selectJob().doubleClick();
    await browser.pause(process.env.small_wait);
  }

  async clickOnimportJobActions() {
    await this.importJobDrpDnw().moveTo();
    await this.importJobDrpDnw().waitForClickable();
    await this.importJobDrpDnw().click();
    await this.importjobs().click();
    await browser.pause(process.env.small_wait);
    const defaultchkCurrentOrdr =
      await this.currentOrdersOptionChk().isSelected();
    assert.isTrue(defaultchkCurrentOrdr);
    const defaultchkIncludeDisc = await this.includeDiscChkBox().isSelected();
    assert.isTrue(defaultchkIncludeDisc);
    const defaultchkSpecialRate =
      await this.includeSpecialChkBox().isSelected();
    assert.isTrue(defaultchkSpecialRate);
  }
  async clickOnImportDiffJobLocation() {
    await browser.pause(process.env.small_wait);
    await this.selectImportJobLoc().selectByIndex(6);
    await browser.pause(process.env.small_wait);
  }

  async importSearchBtn() {
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await browser.pause(process.env.small_wait);
  }
  async selectResultsData() {
    await this.selectImportResults().waitForClickable();
    await this.selectImportResults().click();
    await browser.pause(process.env.medium_wait);
  }
  async newClassicSelectData() {
    await this.selectClassicImportJobRes().waitForClickable();
    await this.selectClassicImportJobRes().click();
    await browser.pause(process.env.medium_wait);
  }
  async clickOnCreateNewBtn() {
    const createNewJobBtn = await this.createNewJobButton().isClickable();
    assert.isTrue(createNewJobBtn);
    await this.createNewJobButton().click();
    await browser.pause(process.env.medium_wait);
  }

  async clickOnDoneBtn() {
    // const doneJobBtn = await this.doneBtn().isClickable();
    const doneJobBtn = await this.doneBtn().isEnabled();
    // expect(await doneJobBtn.isDisplayed()).to.be.true;
    assert.isTrue(doneJobBtn);
    await this.doneBtn().click();
    await browser.pause(process.env.medium_wait);
  }

  async getOrderNumDetails() {
    await this.getJobOrderNumber().waitForDisplayed();
    const importOrderNumberApp = await this.getJobOrderNumber().getText();
    const dataOrder = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    await browser.pause(process.env.small_wait);
    dataOrder.newOrderNum = importOrderNumberApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(dataOrder)
    );
    const dataOrder1 = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    await browser.pause(process.env.small_wait);
  }

  async clickOnSaveBtnDiffLoc() {
    if ((await this.jobErrorMsg().isDisplayed()) == true) {
      await this.copyErrDateVal().waitForDisplayed();
      let errDateText = await this.copyErrDateVal().getText();
      console.log("errDateText" + errDateText);
      await this.pasteErrDateVal().waitForClickable();
      await this.pasteErrDateVal().click();
      console.log("clicked on fierld");
      await this.writeErrDateVal().setValue(errDateText);
      await this.tabonVal().waitForClickable();
      await this.tabonVal().click();
      await this.saveBtn().waitForClickable();
    }
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    for (let i = 0; i < 5; i++) {
      if ((await this.discountTextArea().isClickable()) == true) {
        await this.discountTextArea().setValue("automation test");
        await this.continuebtn().waitForClickable();
        await this.continuebtn().click();
        break;
      } else {
        await browser.pause(process.env.small_wait);
      }
    }
    await browser.pause(process.env.medium_wait);
    await this.chkEmptyFields().waitForDisplayed();
    const emptyField = await this.chkEmptyFields().getText();
    console.log("checking the empty fields..");
    console.log(
      emptyField,
      `%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`
    );
    assert.isEmpty(emptyField, "Succsessfully Asserted Empty Location");
    await browser.pause(process.env.medium_wait);
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.clickOnJobssLnk().waitForClickable();
    await this.clickOnJobssLnk().click();

    //utilTools.readJson(`${process.cwd()}\\data\\importJobsNew.json`);
  }

  async clickOnSaveBtn() {
    if ((await this.jobErrorMsg().isDisplayed()) == true) {
      await this.copyErrDateVal().waitForDisplayed();
      let errDateText = await this.errDateVal().getText();
      console.log("errDateText" + errDateText);
      await this.pasteErrDateVal().waitForDisplayed();
      await this.pasteErrDateVal().setValue(errDateText);
      await this.tabonVal().waitForClickable();
      await this.tabonVal().click();
      await this.saveBtn().waitForClickable();
    }
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.selecthotItemsLink().waitForClickable();
    await this.selecthotItemsLink().click();
    await this.selecthotlistItems().waitForClickable();
    await this.selecthotlistItems().doubleClick();
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    for (let i = 0; i < 5; i++) {
      if ((await this.discountTextArea().isClickable()) == true) {
        await this.discountTextArea().setValue("automation test");
        await this.continuebtn().waitForClickable();
        await this.continuebtn().click();
        break;
      } else {
        await browser.pause(process.env.small_wait);
      }
    }
    await browser.pause(process.env.medium_wait);
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.clickOnJobssLnk().waitForClickable();
    await this.clickOnJobssLnk().click();
  }
  async commentOnTxtArea(txtAreaData) {
    await this.textAreaCmnt().waitForDisplayed();
    await this.textAreaCmnt().setValue(txtAreaData);
    await this.txtContinueBtn().waitForClickable();
    await this.txtContinueBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async clickOnCancel() {
    await this.cancelBtn().waitForClickable();
    await this.cancelBtn().click();
  }

  async getLaborNameDet() {
    try {
      await this.discountRibbonClose().waitForClickable();
      await this.discountRibbonClose().click();
    } catch (e) {
      console.log("Discount ribbon close is not displayed");
    }
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    try {
      await this.discountReasonText().waitForDisplayed();
      await this.discountReasonText().setValue("AutomationTest");
      await this.continuebtn().click();
    } catch (e) {}
    const laborDetApp = await this.savedItemName().getText();
    const laborData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    laborData.laborDeatils = laborDetApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(laborData)
    );
  }

  async getLaborNameDetails() {
    // await this.saveBtn().waitForClickable();
    // await this.saveBtn().click();
    const laborNameDetApp = await this.savedItemName().getText();
    const laborData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    laborData.laborDetName = laborNameDetApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(laborData)
    );
  }
  async verifySavedLaborNameDetails(laborNameResultsDetails) {
    const laborNameDet = await this.savedItemName().getText();
    assert.equal(laborNameDet, laborNameResultsDetails);
  }

  async getAllOrderDetails(orderNum) {
    await this.orderNumField().waitForClickable();
    await this.orderNumField().setValue(orderNum);
    await this.importJobSearch().click();
    await browser.pause(process.env.small_wait);
    await this.oredrnumlink().waitForClickable();
    const orderNumTxtApp = await this.oredrnumlink().getText();
    const orderDataDet = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    orderDataDet.orderNumber = orderNumTxtApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(orderDataDet)
    );

    await this.orderNamelink().waitForClickable();
    const orderNameTxtApp = await this.orderNamelink().getText();
    const orderDataDet1 = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    orderDataDet1.orderName = orderNameTxtApp;
    const fsWrite1 = require("fs");
    fsWrite1.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(orderDataDet1)
    );
  }
  async getJobNumberDet() {
    await this.oredrnumlink().waitForClickable();
    await this.oredrnumlink().click();
    await this.selectJob().waitForClickable();
    await this.selectJob().doubleClick();
    await this.jobNumberRes().waitForDisplayed();

    const jobNumberTxtApp = await this.jobNumberRes().getText();

    const orderDataDet2 = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    orderDataDet2.jobNumber = jobNumberTxtApp;
    const fsWrite1 = require("fs");
    fsWrite1.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(orderDataDet2)
    );
  }

  async verifySavedLaborDetails(laborResultsDetails) {
    const laborDet = await this.savedItemName().getText();
    try {
      await this.discountReasonText().waitForDisplayed();
      await this.discountReasonText().setValue("AutomationTest");
      await this.continuebtn().click();
    } catch (e) {}
    assert.equal(laborDet, laborResultsDetails);
  }

  async importJobNumberSearch(jobNumberResults) {
    await this.importJobNumberField().waitForDisplayed();
    await this.importJobNumberField().setValue(jobNumberResults);
    await browser.pause(process.env.small_wait);
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await browser.pause(process.env.small_wait);
    await this.importJobNumResultsTxt().waitForClickable();
    const importjobnumberTxt = await this.importJobNumResultsTxt().getText();

    assert.equal(importjobnumberTxt, jobNumberResults);
    await this.importJobNumberField().waitForDisplayed();
    await this.importJobNumberField().click();
    await this.importJobNumberField().setValue("\uE003");
    await browser.pause(process.env.small_wait);
  }

  async importNewJobNumberSearch(newOrderNumberData) {
    console.log("Entering in to new Order Page");
    await this.importOrderNumField().waitForDisplayed();
    await this.importOrderNumField().setValue(newOrderNumberData);
    await browser.pause(process.env.small_wait);
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await browser.pause(process.env.small_wait);
    await this.importJobNumResultsTxt().waitForClickable();
    await this.importJobNumResultsTxt().click();
  }

  async importOrderNumSearch(orderNumberResults) {
    await this.importOrderNumField().waitForDisplayed();
    await this.importOrderNumField().setValue(orderNumberResults);
    await browser.pause(process.env.small_wait);
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await browser.pause(process.env.small_wait);
    await this.importOrderNumResultsTxt().waitForClickable();
    const importOrderNumTxt = await this.importOrderNumResultsTxt().getText();

    assert.equal(importOrderNumTxt, orderNumberResults);
    await this.importOrderNumField().waitForDisplayed();
    await this.importOrderNumField().click();
    await this.importOrderNumField().setValue("\uE003");
    await browser.pause(process.env.small_wait);
  }
  async importOrderNameSearch(orderNameResults) {
    await this.importOrderNameField().waitForClickable();
    await this.importOrderNameField().setValue(orderNameResults);
    await this.applyDateChk().waitForClickable();
    await this.applyDateChk().click();
    await browser.pause(process.env.small_wait);
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await browser.pause(process.env.small_wait);
    await this.importOrderNameResultsTxt().waitForClickable();
    const importOrderNameTxt = await this.importOrderNameResultsTxt().getText();
    assert.equal(importOrderNameTxt, orderNameResults);
    await this.importOrderNameField().waitForDisplayed();
    await this.importOrderNameField().click();
    await this.importOrderNameField().setValue("\uE003");
    await browser.pause(process.env.small_wait);
  }
  async getWithOutDateRangeData() {
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await browser.pause(process.env.small_wait);
    await this.importOrderNameResultsTxt().waitForClickable();
    const importOrderNameTxtApp =
      await this.importOrderNameResultsTxt().getText();
    const orderDateRangeData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    orderDateRangeData.textArea = importOrderNameTxtApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(orderDateRangeData)
    );
  }
  async verifyDataSearchWithOutDateRange(orderNameResultsData) {
    await this.importOrderNameResultsTxt().waitForClickable();
    const importOrderNameTxtApp =
      await this.importOrderNameResultsTxt().getText();

    assert.equal(importOrderNameTxtApp, orderNameResultsData);
  }

  async applyCurrentOrderOption() {
    await this.includeDiscChkBox().waitForClickable();
    await this.includeDiscChkBox().click();
    await this.includeSpecialChkBox().waitForClickable();
    await this.includeSpecialChkBox().click();
    await browser.pause(process.env.small_wait);
  }
  async verifyEmptyOrderNumAndDisc() {
    await this.jobNumChkLink().waitForDisplayed();
    const chkEmptyJobNumBeforeSve = await this.jobNumChkLink().getText();
    assert.isEmpty(chkEmptyJobNumBeforeSve, "Verified as Empty Job Number");

    await this.selectDiscountLink().waitForClickable();
    await this.selectDiscountLink().click();

    await this.dicountEmptyChk().waitForDisplayed();
    const emptyDiscChk = await this.dicountEmptyChk().getText();
    assert.isEmpty(emptyDiscChk, "Successfully Verified Discount Empty Check");

    await this.selectNotesLink().waitForClickable();
    await this.selectNotesLink().click();

    await this.noteEmptyCheck().waitForDisplayed();
    const noteEmptyChk = await this.dicountEmptyChk().getText();
    assert.isEmpty(noteEmptyChk, "Successfully Verified Note Empty Check");
    if ((await this.jobErrorMsg().isDisplayed()) == true) {
      await this.errDateVal().waitForDisplayed();
      let errDateText = await this.errDateVal().getText();
      console.log("errDateText" + errDateText);
      await this.pasteErrDateVal().waitForDisplayed();
      await this.pasteErrDateVal().setValue(errDateText);
      await this.tabonVal().waitForClickable();
      await this.tabonVal().click();
      await this.saveBtn().waitForClickable();
    }
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    for (let i = 0; i < 5; i++) {
      if ((await this.discountTextArea().isClickable()) == true) {
        await this.discountTextArea().setValue("automation test");
        await this.continuebtn().waitForClickable();
        await this.continuebtn().click();
        break;
      } else {
        await browser.pause(process.env.small_wait);
      }
    }
    await browser.pause(process.env.medium_wait);
    await this.jobNumChkLink().waitForDisplayed();
    const chkEmptyJobNumAfterSve = await this.jobNumChkLink().getText();
    assert.isNotEmpty(
      chkEmptyJobNumAfterSve,
      "Verified Job Number is not Empty"
    );
  }
  async importOldclassicOrder(oldClassicData) {
    await this.importOrderNumField().waitForDisplayed();
    await this.importOrderNumField().setValue(oldClassicData);
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await this.classicOrderDataLink().waitForClickable();
    await this.classicOrderDataLink().click();
  }
  async oldClassicOrderDataClick() {
    await this.clickOnOldClassicLnk().waitForClickable();
    await this.clickOnOldClassicLnk().click();
  }
  async clickOnNewClassicData() {
    await browser.pause(process.env.small_wait);
    await this.selectNewClassicImportJobRes().waitForDisplayed();
    await this.selectNewClassicImportJobRes().click();
    await browser.pause(process.env.small_wait);
  }
  async writeProdJobStatus() {
    await this.prodJobStatus().waitForDisplayed();
    var prodJobStatusTxtApp = await this.prodJobStatus().getText();
    const prodData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    prodData.prodOrdrStatus = prodJobStatusTxtApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(prodData)
    );
  }

  async getLaborNumDet() {
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    const laborDetApp = await this.savedItemNum().getText();
    const laborData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    laborData.laborDeatils = laborDetApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(laborData)
    );
  }
  async verifySavedLaborNumDetails(laborResultsDetails) {
    const laborDet = await this.savedItemNum().getText();
    assert.equal(laborDet, laborResultsDetails);
  }

  async verifyImportNewJobInProdClass(verifyImportNewJobInProdClass) {
    await this.prodJobStatus().waitForDisplayed();
    var prodJobStatusTxt = await this.prodJobStatus().getText();
    assert.equal(prodJobStatusTxt, verifyImportNewJobInProdClass);
  }
  async getProductionOrder() {
    await this.getJobOrderNumber().waitForDisplayed();
    let prodOrderTxtApp = await this.getJobOrderNumber().getText();

    const prodDataNum = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    prodDataNum.prodOrderNum = prodOrderTxtApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(prodDataNum)
    );
    await browser.pause(process.env.small_wait);
    console.log("entered in get orders **********");
    await this.clickOnHome().waitForClickable();
    await this.clickOnHome().click();
    await browser.pause(process.env.small_wait);
    if (await this.clickOnOkBtn().isClickable()) {
      await this.clickOnOkBtn().waitForClickable();
      await this.clickOnOkBtn().click();
    }
  }

  async getProductAndOldClassicOrders() {
    // await this.selectDateRangeCheckBox().waitForClickable();
    // await this.selectDateRangeCheckBox().click();
    // await this.importJobSearch().waitForClickable();
    // await this.importJobSearch().click();
    await this.getJobOrderNumber().waitForDisplayed();
    let prodOrderTxtApp = await this.getJobOrderNumber().getText();
    const prodDataNum = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    prodDataNum.prodOrderNum = prodOrderTxtApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(prodDataNum)
    );
    await this.btnSave().waitForClickable();
    await this.btnSave().click();
    await browser.pause(process.env.small_wait);
    await this.clickOnHome().waitForClickable();
    await this.clickOnHome().click();
    //Old classic Order
    await this.selectDateRangeCheckBox().waitForClickable();
    await this.selectDateRangeCheckBox().click();
    await this.importJobSearch().waitForClickable();
    await this.importJobSearch().click();
    let oldClassicOrderTxtApp = await this.oldClassicNumLink().getText();
    const oldClassicDataNum = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    oldClassicDataNum.oldClassicOrderNum = oldClassicOrderTxtApp;
    const fsWrite1 = require("fs");
    fsWrite1.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(oldClassicDataNum)
    );
    await browser.pause(process.env.small_wait);
  }
  async searchImportProdOrder(productOrderNumDta) {
    await this.importOrderNumField().waitForDisplayed();
    await this.importOrderNumField().setValue(productOrderNumDta);
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await browser.pause(process.env.small_wait);
  }
  async verifyProdOrderCheck() {
    let prodTestResults = await this.selectProdResults().isDisplayed();
    assert.isFalse(
      prodTestResults,
      "Successfully asserted for Empty Prod Results"
    );
  }
  async getNewClassicOrderDetails() {
    await this.discountCloseBtn().waitForClickable();
    await this.discountCloseBtn().click();
    // await browser.navigateTo("https://navigator.training.psav.com/#!/order/:1137/:15270");
    await this.jobHeader().waitForClickable();
    await this.orderHeader().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.orderNumText().waitForClickable();
    await this.orderNumText().click();
    let orderNumVal = await this.orderNumText().getText();
    let discountPercentageVal = await this.discountPercentageText(
      2,
      9
    ).getText();
    console.log(orderNumVal + "******************" + discountPercentageVal);
    const newClassicData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    newClassicData.newClassicOrderNum = orderNumVal;
    newClassicData.newClassicDiscount = discountPercentageVal;
    const fsWrite1 = require("fs");
    fsWrite1.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(newClassicData)
    );
    await this.homeBtn().click();
    await this.orderSearchTab().waitForClickable();
  }

  async importJobsFromJobActions(orderNum) {
    await this.importOrderNumField().waitForDisplayed();
    await this.importOrderNumField().setValue(orderNum);
    await browser.pause(process.env.small_wait);
    await this.importSearchJob().waitForClickable();
    await this.importSearchJob().click();
    await browser.pause(process.env.small_wait);
    await this.importOrderNumResultsTxt().waitForClickable();
    await this.importOrderNameResultsTxt().click();
  }

  async validateDiscountPercentage(discountPerActual) {
    await this.discountPercentageText(1, 10).waitForDisplayed();
    let discountPerResult = await this.discountPercentageText(1, 10).getText();
    assert.equal(discountPerResult, discountPerActual);
  }

  async saveOrderInJobs() {
    await this.btnSave().waitForClickable();
    await this.btnSave().click();
  }

  async captureProductionOrderDetails() {
    await this.discountCloseBtn().waitForClickable();
    await this.discountCloseBtn().click();
    await this.jobHeader().waitForClickable();
    await this.orderHeader().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.orderNumText().waitForClickable();
    await this.orderNumText().click();
    let orderNumVal = await this.orderNumText().getText();
    let specialRateVal = await this.discountPercentageText(2, 7).getText();
    console.log(orderNumVal + "******************" + specialRateVal);
    const newClassicData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    newClassicData.newProdOrderNum = orderNumVal;
    newClassicData.newProdSpecialRate = specialRateVal;
    const fsWrite1 = require("fs");
    fsWrite1.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(newClassicData)
    );
    await this.homeBtn().click();
    await this.orderSearchTab().waitForClickable();
  }
  async clickOnJobssLinkHeader() {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
  }
  async specialRateValidation(specialRateActual) {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.clickOnItems().waitForClickable();
    await this.clickOnItems().click();
    await this.discountPercentageText(2, 7).waitForDisplayed();
    let specialRateResult = await this.discountPercentageText(2, 7).getText();
    assert.equal(specialRateResult, specialRateActual);
  }

  async addNotesAndLineComments(coverNote, JobNote) {
    await this.clickOnNotes().waitForClickable();
    await this.clickOnNotes().click();
    await this.coverSheetNoteInput().setValue(coverNote);
    await this.jobOrderNoteInput().setValue(JobNote);
    let orderNumVal = await this.orderNumText().getText();
    console.log(orderNumVal + "******************");
    const newClassicData = utilTools.readJson(
      `${process.cwd()}\\data\\importJobs.json`
    );
    newClassicData.noteOrderNum = orderNumVal;
    const fsWrite1 = require("fs");
    fsWrite1.writeFileSync(
      `${process.cwd()}\\data\\importJobs.json`,
      JSON.stringify(newClassicData)
    );
    await this.btnSave().waitForClickable();
    await this.btnSave().click();
    await this.homeBtn().waitForClickable();
    await this.homeBtn().click();
    await this.orderSearchTab().waitForClickable();
  }

  async validateNotesAndLineComments(coverNoteActual, JobNoteActual) {
    await this.clickOnNotes().waitForClickable();
    await this.clickOnNotes().click();
    let coverNoteResult = await this.coverSheetNoteInput().getValue();
    let jobOrderNoteResul = await this.jobOrderNoteInput().getValue();
    assert.equal(coverNoteResult, coverNoteActual);
    assert.equal(jobOrderNoteResul, JobNoteActual);
  }

  async includeNotes() {
    await this.includeNotesChkbox().waitForDisplayed();
    await this.includeNotesChkbox().waitForClickable();
    await this.includeNotesChkbox().click();
  }
}
module.exports = new ImportJobsNavigatorPage();
