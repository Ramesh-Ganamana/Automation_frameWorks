const { assert } = require("chai");
const { expect } = require("chai");
require("dotenv").config();
// const utilConst = require("../../utils/const");
const jobs = require("./jobs.navigator.page");

class CreditMemoOrder {
  jobRowNum(row, col) {
    return $(
      '//div[@class="oeJobGrid-panel"]//div[contains(@class,"ui-widget-content slick")][' +
        row +
        "]/div[" +
        col +
        "]"
    );
  }
  JobRowOneActiveRoomBooth() {
    return $(
      '//div[@class="slick-cell l7 r7 selected active editable"]/select'
    );
  }
  JobRowOneActiveStatus() {
    return $(
      '//div[@id="oeJobGridPanel"]/descendant::div[contains(@class,"slick-cell")]/select'
    );
  }
  btnOk() {
    return $("//button[contains(text(),'OK')]");
  }
  creditBtn() {
    return $("//input[@value='Credit']/parent::div/button");
  }
  billingAdjustmentOption() {
    return $("//a[contains(text(),'Billing Adjustment')]");
  }
  rebillingOption() {
    return $("//a[contains(text(),'Re-Bill')]");
  }
  creditReason() {
    return $("//select[@name='CreditCategoryReason']");
  }

  lineResultsRow(col) {
    return $(
      '//div[@ng-show="isShowDetailLines"]//div[contains(@class,"ui-widget-content slick")]/div[' +
        col +
        "]"
    );
  }

  creditLineChkbox() {
    return $('//input[@name="CreditLine"]');
  }
  creditLineCreditType() {
    return $('//select[@name="CreditType"]');
  }
  totalLineHeader() {
    return $("//div[@id='jobPanelDetailsNav']//a[contains(text(),'Totals')]");
  }
  totalLineRowResult() {
    return $(
      '//div[@id="jobTotalsGrid"]//div[contains(@class,"ui-widget-content slick")][4]/div[2]'
    );
  }
  createOrderBtn() {
    return $('//input[@value="Create Order"]');
  }
  popUpCreateOrder() {
    return $('//div[@id="SelectOrderType"]//input[@value="Create Order"]');
  }
  errorNote() {
    return $(`//div[@class="badge ng-binding"]`);
  }
  crossButtonPopUp() {
    return $(`//div[@class="badge ng-binding"]/span`);
  }
  okBtn() {
    return $(`//button[@data-ng-click='modalOptions.ok();']`);
  }
  actionHome() {
    return $(`//button[@id='Home']`);
  }
  actionBtn() {
    return $(`//a[normalize-space()='Actions']`);
  }
  reports() {
    return $(`//a[normalize-space()='Reports']`);
  }
  salesReports() {
    return $(`//span[normalize-space()='Sales Reports']`);
  }
  creditMemoOrder() {
    return $(`//a[contains(text(),'Credit Memo Order')]`);
  }
  Language() {
    return $(`//label[normalize-space()='Language']//following::select`);
  }
  usLanguage() {
    return $(
      `//label[normalize-space()='Language']//following::select[1]//option[normalize-space()='en-US']`
    );
  }
  customer() {
    return $(`//input[@id='selCustomerNumber']`);
  }
  date1() {
    return $(
      `//label[normalize-space()='Date Range']//parent::div//following::div[1]//input[1]`
    );
  }
  date2() {
    return $(
      `//label[normalize-space()='Date Range']//parent::div//following::div[1]//input[2]`
    );
  }
  printReportBtn() {
    return $(`//button[@title='Preview Report']`);
  }
  async assignRoomToTheJob() {
    let booleanVal = await this.jobRowNum(1, 8).isDisplayed();
    console.log(booleanVal + " $$$$$$$$$$$$$$$$");
    if (booleanVal == false) {
      await jobs.orderHeader().click();
      await browser.pause(5000);
      await jobs.jobHeader().waitForClickable();
      await jobs.jobHeader().click();
    }
    await this.jobRowNum(1, 8).waitForClickable();
    await this.jobRowNum(1, 8).click();
    await this.JobRowOneActiveRoomBooth().waitForDisplayed();
    await this.JobRowOneActiveRoomBooth().selectByIndex(2);
    await browser.keys("\uE004");
    await this.jobRowNum(2, 6).click();
  }
  async changeStatusToTheJob() {
    await this.jobRowNum(1, 7).waitForClickable();
    await this.jobRowNum(1, 7).click();
    await this.JobRowOneActiveStatus().waitForDisplayed();
    await this.JobRowOneActiveStatus().selectByIndex(4);
    await browser.keys("\uE004");
  }
  async popUpOk() {
    await jobs.btnSave().click();
    await this.btnOk().waitForClickable();
    await this.btnOk().click();
    await jobs.jobHeader().waitForClickable();
  }

  async creditBillingAdjustment() {
    await jobs.jobHeader().waitForClickable();
    await this.lineResultsRow(4).waitForClickable();
    await this.lineResultsRow(4).click();
    let lineTotal = await this.lineResultsRow(10).getText();
    await this.creditBtn().waitForClickable();
    await this.creditBtn().click();
    await this.billingAdjustmentOption().click();
    await this.btnOk().waitForClickable();
    await this.btnOk().click();
    await this.creditReason().waitForClickable();
    await this.creditReason().selectByVisibleText("Incorrect Pricing");
    await jobs.jobHeader().waitForClickable();
    await jobs.jobHeader().click();
    await this.lineResultsRow(4).waitForClickable();
    await this.lineResultsRow(4).click();
    await this.creditLineChkbox().waitForDisplayed();
    await this.creditLineChkbox().click();
    await this.creditLineCreditType().waitForClickable();
    await this.creditLineCreditType().selectByVisibleText("Rate");
    await this.lineResultsRow(10).waitForDisplayed();
    let creditLineTotal = await this.lineResultsRow(10).getText();
    await this.totalLineHeader().click();
    let totalsLineVal = await this.totalLineRowResult().getText();
    assert.equal(creditLineTotal, "-" + lineTotal);
    assert.equal(totalsLineVal, "-" + lineTotal);
    await jobs.btnSave().click();
  }

  async creditReBilling() {
    await jobs.jobHeader().waitForClickable();
    await this.lineResultsRow(4).waitForClickable();
    await this.lineResultsRow(4).click();
    let lineTotal = await this.lineResultsRow(10).getText();
    await this.creditBtn().waitForClickable();
    await this.creditBtn().click();
    await this.rebillingOption().click();
    await this.btnOk().waitForClickable();
    await this.btnOk().click();
    await this.creditReason().waitForClickable();
    await this.creditReason().selectByVisibleText("Change in Customer");
    await jobs.jobHeader().waitForClickable();
    await jobs.jobHeader().click();
    await this.lineResultsRow(4).waitForClickable();
    await this.lineResultsRow(4).click();
    await this.creditLineChkbox().waitForDisplayed();
    await this.creditLineChkbox().click();
    await this.lineResultsRow(10).waitForDisplayed();
    let creditLineTotal = await this.lineResultsRow(10).getText();
    await this.totalLineHeader().click();
    let totalsLineVal = await this.totalLineRowResult().getText();
    assert.equal(creditLineTotal, "-" + lineTotal);
    assert.equal(totalsLineVal, "-" + lineTotal);
  }

  async reBillOrder() {
    await this.createOrderBtn().waitForDisplayed();
    assert.isTrue(await this.createOrderBtn().isEnabled());
    await this.createOrderBtn().click();
    await this.btnOk().waitForClickable();
    await this.btnOk().click();
    await this.popUpCreateOrder().waitForClickable();
    await this.popUpCreateOrder().click();
    await this.btnOk().waitForClickable();
    await this.btnOk().click();
    assert.isFalse(await this.createOrderBtn().isDisplayed());
  }
  getDateOfTheDay() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    today.setDate(today.getDate() + 0);
    const dayOfWeek = daysOfWeek[today.getDay()];
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear().toString();
    const formattedDate = `${month.toString().padStart(2, "0")}/${date
      .toString()
      .padStart(2, "0")}/${year}`;
    return `${dayOfWeek} ${formattedDate}`;
  }
  getDateOfnextMonth() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    today.setDate(today.getDate() + 30);
    const dayOfWeek = daysOfWeek[today.getDay()];
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear().toString();
    const formattedDate = `${month.toString().padStart(2, "0")}/${date
      .toString()
      .padStart(2, "0")}/${year}`;
    return `${dayOfWeek} ${formattedDate}`;
  }
  async actions() {
    if (await this.errorNote().isDisplayed()) {
      await this.crossButtonPopUp().click();
      await browser.pause(2000);
    }
    await this.actionHome().click();
    await browser.pause(process.env.small_wait);
    await this.actionBtn().click();
    await this.reports().click();
    await browser.pause(process.env.small_wait);
    await this.salesReports().click();
    await this.creditMemoOrder().click();
    await this.Language().click();
    await this.usLanguage().click();
    await this.customer().setValue("Tommy Hilfiger");
    await this.date1().setValue(this.getDateOfTheDay());
    await this.date2().setValue(this.getDateOfnextMonth());

    await this.printReportBtn().click();
    await browser.pause(process.env.large_wait);
  }
}
module.exports = new CreditMemoOrder();
