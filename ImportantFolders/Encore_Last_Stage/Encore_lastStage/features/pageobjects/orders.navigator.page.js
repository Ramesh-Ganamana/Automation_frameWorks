const { assert } = require("chai");
const { expect } = require("chai");
require("dotenv").config();
const utilConst = require("../../utils/const");

class OrdersNavigatorPage {
  billingAndShippingSlider() {
    return $(`//a[@ng-click="openBillingTab()"]`);
  }
  masterBillingRadioBtn() {
    return $(`//input[@id="MaterBillingRadioButton"]`);
  }
  clickOnItem() {
    return $("//span[@class=' glyphicon glyphicon-th-list']");
  }
  itemssnake() {
    return $(
      `//div[@ng-show="sideBarButtonRadio.value=='items'"]//div[@title="100' Xl 20-Pr (16x4) Snake"]`
    );
  }
  itemsFirstValue() {
    return $(
      `//label[text()='Items ']/parent::div/following-sibling::div/descendant::div[contains(@class,'slick-cell')][1]`
    );
  }
  btnAddToPackage() {
    return $(`//button[@ng-click="addToPackage('add')"]`);
  }
  clickOnSubClass() {
    return $("//span[@class=' glyphicon glyphicon-list']");
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
  activeLineGrid() {
    return $(
      `//div[@id="oeOrderLinesGrid"]//div[@class="ui-widget-content slick-row even active"]/div[7]`
    );
  }
  lineTotalInGrid(rowNum, colNum) {
    return $(
      '//div[@id="oeOrderLinesGrid"]//div[' +
        rowNum +
        ']/div[contains(@class,"slick-cell")][' +
        colNum +
        "]"
    );
    // return $(`//div[@id="oeOrderLinesGrid"]//div[` + colNum + `]/div[@class="slick-cell l9 r9 cellNumber"]`)
  }
  jobHeader() {
    return $("//button[@id='Home']/ancestor::ul/following::li[3]");
  }
  orderHeader() {
    return $(`//a[@ng-click="setOrderEntryMainTab('Order')"]`);
  }
  itemsGridRowOne(colNum, rowNum) {
    return $(
      `//div[@id="oeOrderLinesGrid"]//div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[` +
        colNum +
        `]/div[` +
        rowNum +
        `]`
    );
  }
  bulkEditJobsLine() {
    return $(`//ul[@id="orderLinesContextMenu"]/li[6]`);
  }
  bulkEditBillableDays() {
    return $(`//input[@ng-model="bulkEditModel.updateFields.BillableDays"]`);
  }
  bulkEditQuantity() {
    return $(`//input[@ng-model="bulkEditModel.updateFields.Quantity"]`);
  }
  bulkEditOkBtn() {
    return $(`//button[@ng-click="bulkUpdate(bulkForm)"]`);
  }
  copyLaborLineOption() {
    return $('//ul[@id="orderLinesContextMenu"]/li[5]');
  }
  selectLaborDays() {
    return $(`//select[@id="selectLaborDay"]`);
  }
  saveNewLaborLine() {
    return $(`//button[@ng-click="savePreferred()"]`);
  }
  addPageBreakOption() {
    return $(`//ul[@id="orderLinesContextMenu"]/li[7]`);
  }
  gridPageBreakResult() {
    return $(
      `//div[@id="oeOrderLinesGrid"]//div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[4]//span[contains(text(),'Page Break')]`
    );
  }
  navBarRightClose() {
    return $("//a[@ng-click='closeSection()']");
  }
  clickOnItems() {
    return $("//a[contains(text(),'Items')]");
  }
  //------------------------------Print Quotes ------------------------------------------//
  jobNumVal() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[@class='ui-widget-content slick-row even']/div[2]"
    );
  }

  jobsPrintBtn() {
    return $(`//div[@ng-controller="ReportCtrl"]/button[2]`);
  }
  jobsPrintOption(visiableText) {
    return $(`//a[text()='` + visiableText + `']`);
  }
  printQuoteLanguageDropdown() {
    return $(`//select[@ng-model="selectedVal"]`);
  }
  printQuotePreviewBtn() {
    return $(`//button[@title="Preview Report"]`);
  }

  validatePrintQuoteVal(validationVal) {
    return $(
      "//*[contains(text(),'ActiveReports Document')]/parent::div//span[contains(.,'" +
        validationVal +
        "')]"
    );
  }

  printQuotePerameterHeader() {
    return $(`//li[@ng-show="isParamsVisible"]`);
  }
  printQuoteJobNumChkbox() {
    return $(`//input[@id="UseOrderJobFilterChk"]`);
  }
  printQuoteJobNumber() {
    return $("//input[@name='OrderJobFilterNumbers']");
  }
  consolidatedInvoiceVal() {
    return $("//table[4]/tbody/tr/td/nobr");
  }
  depositInvoiceVal() {
    return $("(//span[contains(.,'Deposit')])[2]");
  }
  jobRowNumVal(row, col) {
    return $(
      '//div[@class="oeJobGrid-panel"]//div[contains(@class,"ui-widget-content slick")][' +
        row +
        "]/div[" +
        col +
        "]"
    );
  }
  printJobNumInput() {
    return $('//input[@name="JobNumber"]');
  }

  printSelectedJobVal() {
    return $(
      "//div[@id='continuousView']//span[contains(.,'Quote')]/following::span[1]"
    );
  }
  depositAmountInput() {
    return $("//label[contains(.,'Deposit Amount')]/parent::div/input");
  }

  async changeStringValToFloat(stringData) {
    let stringVal = stringData.replace(/[^0-9^.]/, "");
    const rate1 = parseFloat(stringVal);
    return rate1;
  }

  async directBilling() {
    await this.orderHeader().waitForClickable();
    await this.orderHeader().click();
    await this.billingAndShippingSlider().click();
    assert.isTrue(await this.masterBillingRadioBtn().isSelected());
  }
  async closeRightSidePopUp() {
    await this.navBarRightClose().click();
  }
  async addItemToClassicOrder() {
    await this.clickOnItem().waitForClickable();
    await this.clickOnItem().click();
    await this.itemsFirstValue().waitForClickable();
    await this.itemsFirstValue().doubleClick();
    await this.btnAddToPackage().waitForClickable();
    await this.btnAddToPackage().click();
  }

  async addLaborToClassicOrder() {
    await this.clickOnSubClass().waitForClickable();
    await this.clickOnSubClass().click();
    await this.subClassSearch().click();
    await this.laborSubClassChkbox().waitForDisplayed();
    await this.laborSubClassChkbox().click();
    await this.laborItemForProdOrder().doubleClick();
    await this.btnAddToPackage().waitForClickable();
    await this.btnAddToPackage().click();
  }
  async verifyTotalItemsRate() {
    await this.jobHeader().waitForClickable();
    await this.orderHeader().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    let totalLine = await this.lineTotalInGrid(1, 8).getText();
    totalLine = await this.changeStringValToFloat(totalLine);
    let packageTotal = await this.lineTotalInGrid(2, 10).getText();
    packageTotal = await this.changeStringValToFloat(packageTotal);
    let packageTotal1 = await this.lineTotalInGrid(3, 10).getText();
    packageTotal1 = await this.changeStringValToFloat(packageTotal1);
    let itemTotal = await this.lineTotalInGrid(4, 10).getText();
    itemTotal = await this.changeStringValToFloat(itemTotal);
    let laborTotal = await this.lineTotalInGrid(5, 10).getText();
    laborTotal = await this.changeStringValToFloat(laborTotal);
    console.log(
      packageTotal +
        "--packageTotal--" +
        packageTotal1 +
        "--packageTotal1--" +
        itemTotal +
        "--itemTotal--" +
        laborTotal +
        "--laborTotal--"
    );
    console.log("----------totalLine------------" + totalLine);
    assert.isTrue(
      totalLine == packageTotal + packageTotal1 + itemTotal + laborTotal,
      "Successfully Verified line totals"
    );
  }

  async bulkEdit() {
    await this.jobHeader().waitForClickable();
    await this.orderHeader().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.itemsGridRowOne(1, 1).waitForClickable();
    await this.itemsGridRowOne(1, 1).moveTo();
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
            origin: await this.itemsGridRowOne(1, 1),
          },
          { type: "pause", duration: 1 },
          { type: "pointerDown", button: 2 },
          { type: "pause", duration: 0 },
        ],
      },
    ]);
    await browser.releaseActions();
    await this.bulkEditJobsLine().waitForClickable();
    await this.bulkEditJobsLine().moveTo();
    await this.bulkEditJobsLine().doubleClick();
    await this.bulkEditQuantity().setValue("5");
    await browser.keys("\uE004");
    await this.bulkEditOkBtn().click();
  }
  async validateBulkEditValues() {
    await this.clickOnItems().waitForClickable();
    await this.clickOnItems().click();
    let quantityResult = await this.itemsGridRowOne(1, 3).getText();
    assert.equal(quantityResult, "5");
  }
  async copyLaborLine() {
    await this.jobHeader().waitForClickable();
    await this.orderHeader().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.itemsGridRowOne(4, 1).waitForClickable();
    await this.itemsGridRowOne(4, 1).moveTo();
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
            origin: await this.itemsGridRowOne(4, 1),
          },
          { type: "pause", duration: 1 },
          { type: "pointerDown", button: 2 },
          { type: "pause", duration: 0 },
        ],
      },
    ]);
    await browser.releaseActions();
    await browser.pause(10000);
    await this.copyLaborLineOption().waitForClickable();
    await this.copyLaborLineOption().click();
    await this.selectLaborDays().waitForClickable();
    await this.selectLaborDays().selectByIndex(0);
    await this.saveNewLaborLine().click();
    await this.jobHeader().waitForClickable();
  }

  async validateLaborLineValues() {
    let laborLine1 = await this.itemsGridRowOne(4, 5).getText();
    let laborLine2 = await this.itemsGridRowOne(5, 5).getText();
    console.log(laborLine1 + "-------------------------" + laborLine2);
    assert.equal(laborLine1, laborLine2);
  }
  async addPageBreak() {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.itemsGridRowOne(4, 1).moveTo();
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
            origin: await this.itemsGridRowOne(4, 1),
          },
          { type: "pause", duration: 1 },
          { type: "pointerDown", button: 2 },
          { type: "pause", duration: 0 },
        ],
      },
    ]);
    await browser.releaseActions();
    await browser.pause(10000);
    await this.addPageBreakOption().waitForClickable();
    await this.addPageBreakOption().click();
  }
  async validatePageBreak() {
    await this.gridPageBreakResult().waitForDisplayed();
    assert.isTrue(await this.gridPageBreakResult().isDisplayed());
  }

  //------------------------------Print Quotes ------------------------------------------//

  async validatePrintQuote(expectedVal, quoteEventVal) {
    await this.jobHeader().waitForClickable();
    await this.jobsPrintBtn().click();
    await this.jobsPrintOption(quoteEventVal).waitForClickable();
    await this.jobsPrintOption(quoteEventVal).click();
    await this.printQuoteLanguageDropdown().waitForClickable();
    try {
      await this.printQuoteLanguageDropdown().selectByVisibleText("en-US");
    } catch (e) {
      await this.printQuoteLanguageDropdown().selectByAttribute(
        "label",
        "en-US"
      );
    }
    await this.printQuotePreviewBtn().click();
    await this.validatePrintQuoteVal("Tommy").waitForDisplayed();
    let actualVal = await this.validatePrintQuoteVal("Tommy").getText();
    assert.equal(actualVal, expectedVal);
  }
  async validatePrintConsolidatedQuote(
    expectedVal,
    expectedVal1,
    quoteEventVal
  ) {
    await this.jobHeader().waitForClickable();
    await this.jobsPrintBtn().click();
    await this.jobsPrintOption(quoteEventVal).waitForClickable();
    await this.jobsPrintOption(quoteEventVal).click();
    await this.printQuoteLanguageDropdown().waitForDisplayed();
    try {
      await this.printQuoteLanguageDropdown().selectByVisibleText("en-US");
    } catch (e) {
      await this.printQuoteLanguageDropdown().selectByAttribute(
        "label",
        "en-US"
      );
    }
    await this.printQuotePreviewBtn().click();
    await this.consolidatedInvoiceVal().waitForDisplayed();
    let actualVal = await this.consolidatedInvoiceVal().getText();
    if (actualVal == expectedVal) {
      assert.equal(actualVal, expectedVal);
    } else {
      assert.equal(actualVal, expectedVal1);
    }
  }
  async validatePrintSheetByJob(quoteEventVal) {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.orderHeader().click();
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.jobRowNumVal(2, 2).waitForClickable();
    let jobNum = await this.jobRowNumVal(2, 2).getText();
    await this.jobsPrintBtn().waitForClickable();
    await this.jobsPrintBtn().click();
    await this.jobsPrintOption(quoteEventVal).waitForClickable();
    await this.jobsPrintOption(quoteEventVal).click();
    await this.printJobNumInput().waitForClickable();
    await this.printJobNumInput().setValue(jobNum);
    await this.printQuotePreviewBtn().click();
    await this.printSelectedJobVal().waitForDisplayed();
    let valMsg = await this.printSelectedJobVal().getText();
    assert.equal(valMsg, jobNum);
  }
  async validatePrintDepositInvoice(expectedVal, quoteEventVal) {
    await this.jobHeader().waitForClickable();
    await this.jobsPrintBtn().click();
    await this.jobsPrintOption(quoteEventVal).waitForClickable();
    await this.jobsPrintOption(quoteEventVal).click();
    await this.printQuoteLanguageDropdown().waitForDisplayed();
    try {
      await this.printQuoteLanguageDropdown().selectByVisibleText("en-US");
    } catch (e) {
      await this.printQuoteLanguageDropdown().selectByAttribute(
        "label",
        "en-US"
      );
    }
    await this.depositAmountInput().waitForClickable();
    await this.depositAmountInput().click();
    await browser.keys("\uE003");
    await this.depositAmountInput().setValue("2000");
    await this.printQuotePreviewBtn().click();
    await this.depositInvoiceVal().waitForDisplayed();
    let actualVal = await this.depositInvoiceVal().getText();
    assert.equal(actualVal, expectedVal);
  }
}

module.exports = new OrdersNavigatorPage();
