const { assert } = require("chai");
const { expect } = require("chai");
const LandingNavigatorPage = require("./navigator.page");
var jobSearchData = require("../../data/jobSearch.json");
require("dotenv").config();
const utilTools = require("../../utils/tools");
const orderSearchPage = require("./orderSearch.navigator.page");
const { clearScreenDown } = require("readline");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobSearchNavigatorPage extends LandingNavigatorPage {
  /**
   * define selectors using getter methods
   */

  jobSearchTab() {
    return $('//span[text()="Job Search"]');
  }

  jobNumberField() {
    return $("//span[contains(text(), ' Job Number ')]/parent::div/input");
  }

  orderNameParamField() {
    return $("(//span[contains(text(), 'Order Name')]/parent::div/input)[2]");
  }

  picklistNumberField() {
    return $('input[name="searchPicklistNumber"]');
  }

  statusDropDown() {
    return $(
      '//div[@id="mainLandingPage"]/descendant::select[@ng-model="params.Status"][2]'
    );
  }

  jobstatusDropdown() {
    return $(
      "//div[@id='search-form']/div[5]/select/option[@label='Tentative']"
    );
  }
  //here with tentive we didn'nt get the data // then I changed to ALL

  dropdownStatus() {
    return $('//div[@id="search-form"]/div[5]/select');
  }

  jobTypeDropDown() {
    return $('//select[@ng-model="params.JobType"]');
  }

  jobSalesManagerDropDown() {
    return $('//select[@ng-model="params.JobSalesManager"]');
  }
  searchJobButton() {
    return $(`//div[@id="search-form"]/div[9]/input[1]`);
  }
  resetJobButton() {
    return $("#clearJob");
  }
  resultsJobIdRow() {
    return $(
      "//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div/div[4]"
    );
  }
  resultOrderNumRow() {
    return $(
      "//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div/div[6]"
    );
  }
  resultOrderNameRow() {
    return $(
      "//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div/div[7]"
    );
  }

  resultChooseStatus() {
    return $(
      "(//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div/div[8])[1]"
    );
  }

  resultUpdateStatus() {
    return $(
      "//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div/div[8]"
    );
  }

  dateRangechkBox() {
    return $("(//input[@type='checkbox'])[3]");
  }

  selectjob() {
    // return $(
    //   "//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]"
    // );
    return $(
      "//div[@id='jobSearchGrid']/descendant::div[contains(@class,'slick-cell')][5]"
    );
  }
  updatejobsTab() {
    return $("//button[normalize-space()='Update Job Status']");
  }

  selectStatus() {
    return $(
      "//div[@id='mainLandingPage']/div/div/div[2]/app-job-search/p-dialog/div/div/div/div[2]/select"
    );
  }

  saveUpdateStatus() {
    return $("//button[normalize-space()='Save']");
  }

  updateConfirmation() {
    return $("//button[@class='btn btn-primary']");
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

  closebtn() {
    return $("//button[@class='btn btn-warning']");
  }

  resultUpdateJobStatus() {
    return $(
      "//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[20]/div[8]"
    );
  }

  selectJob() {
    return $(`//a[normalize-space()='Jobs']`);
  }
  getJobNumber() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[@class='ui-widget-content slick-row even']/div[2]"
    );
  }

  getJobOrderNumber() {
    return $("(//label[@class='orderTickerDisplayValue ng-binding'])[3]");
  }

  getJobOrderName() {
    return $("(//label[@ng-model='order.OrderName'])[2]");
  }

  getOrderNumber() {
    return $("(//*[contains(text(), 'Order Number')]/parent::div/input)[2]");
  }
  clickOnJob() {
    return $(
      '//div[@class="ui-state-default slick-header-column slick-header-sortable slick-header-column-sorted"]/span[1]'
    );
  }

  jobStatusRowNum() {
    return $(
      "//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div/div[4]"
    );
  }

  jobStatusVal() {
    return $(
      "//div[@id='jobSearchGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div/div[8]"
    );
  }

  gotoHome() {
    return $("//button[@id='Home']");
  }
  totalItemCount() {
    return $("(//span[@class='controltotal'])[2]");
  }

  /**
   * a method to encapsule automation code to interact with the page
   */

  async changejobLocation(joblocationId) {
    //await this.changeLocationHeader().waitForDisplayed();
    console.log("Enetered Change Location");
    await this.changeLocationHeader().waitForClickable();
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(joblocationId);
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).doubleClick();
    await browser.pause(process.env.small_wait);
  }

  async clickOnJobs() {
    await this.selectJob().click();
  }

  async clickOnGotoHome() {
    await this.gotoHome().waitForClickable();
    await this.gotoHome().click();
  }

  async gotoJobSearchTab() {
    await this.jobSearchTab().waitForClickable();
    await this.jobSearchTab().click();
    await browser.pause(process.env.small_wait);
  }
  async getAllJobDeatilsFile() {
    await this.getJobNumber().waitForDisplayed();
    const jobNumberApp = await this.getJobNumber().getText();

    const dataOrder = utilTools.readJson(
      `${process.cwd()}\\data\\jobSearch.json`
    );
    dataOrder.jobId = jobNumberApp;
    await browser.pause(process.env.small_wait);
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\jobSearch.json`,
      JSON.stringify(dataOrder)
    );
    await browser.pause(process.env.small_wait);

    await this.getJobOrderName().waitForDisplayed();
    const jobOrderNameApp = await this.getJobOrderName().getText();
    var jobOrderNameJson = jobSearchData.orderName;

    const dataOrder2 = utilTools.readJson(
      `${process.cwd()}\\data\\jobSearch.json`
    );
    await browser.pause(process.env.small_wait);
    dataOrder2.orderName = jobOrderNameApp;
    const fsWrite2 = require("fs");
    fsWrite2.writeFileSync(
      `${process.cwd()}\\data\\jobSearch.json`,
      JSON.stringify(dataOrder2)
    );
    await browser.pause(process.env.small_wait);

    await this.getJobOrderNumber().waitForDisplayed();
    const jobOrderNumberApp = await this.getJobOrderNumber().getText();
    var jobOrderNumJson = jobSearchData.orderNum;

    const dataOrder1 = utilTools.readJson(
      `${process.cwd()}\\data\\jobSearch.json`
    );
    await browser.pause(process.env.small_wait);
    dataOrder1.orderNum = jobOrderNumberApp;
    const fsWrite3 = require("fs");
    fsWrite3.writeFileSync(
      `${process.cwd()}\\data\\jobSearch.json`,
      JSON.stringify(dataOrder1)
    );
    await browser.pause(process.env.small_wait);
  }

  async searchjob(jobIdData) {
    await this.jobNumberField().waitForDisplayed();
    await this.jobNumberField().setValue(jobIdData);
    await this.searchJobButton().click();
    await browser.pause(process.env.small_wait);
  }

  async verifyJobSearchResults(jobIdData) {
    await browser.pause(process.env.medium_wait);
    await this.resultsJobIdRow().waitForDisplayed();
    //await this.totalItemCount().waitForDisplayed();
    //await browser.waitUntil(this.totalItemCount().getText() == "1");
    let resultJobId = await this.resultsJobIdRow().getText();
    assert.equal(resultJobId, jobIdData);
  }

  async resetjobVal() {
    await this.resetJobButton.click();
  }

  async searchOrderNum(jobOrderNumData) {
    await this.dateRangechkBox().waitForClickable();
    await this.dateRangechkBox().click();
    await this.getOrderNumber().waitForDisplayed();
    await this.getOrderNumber().setValue(jobOrderNumData);
    await this.searchJobButton().waitForClickable();
    await this.searchJobButton().click();
    await browser.pause(process.env.small_wait);
  }

  async verifyOrderSearchResults(jobOrderNumData) {
    let resultOrderNum = await this.resultOrderNumRow().getText();
    assert.equal(resultOrderNum, jobOrderNumData);
  }

  async searchOrderName(jobOrderNameData) {
    await this.orderNameParamField().waitForDisplayed();
    await this.orderNameParamField().setValue(jobOrderNameData);
    await this.searchJobButton().waitForClickable();
    await this.searchJobButton().click();
    await browser.pause(process.env.small_wait);
  }
  async verifyOrderNameSearchResults(jobOrderNameData) {
    let resultOrderName = await this.resultOrderNameRow().getText();
    assert.equal(resultOrderName, jobOrderNameData);
  }

  async chooseJobStatus() {
    await this.dropdownStatus().waitForDisplayed();
    await this.dropdownStatus().selectByIndex(3);
    // I add this line of code//
    await this.dateRangechkBox().click();
    await this.searchJobButton().click();
    await browser.pause(process.env.small_wait);
  }
  async writingjobstatus() {
    await this.resultUpdateStatus().waitForDisplayed();
    let updatedjobstatusRes = await this.resultUpdateStatus().getText();
    const dataOrder = utilTools.readJson(
      `${process.cwd()}\\data\\jobSearch.json`
    );
    await browser.pause(process.env.small_wait);
    dataOrder.orderStatus = updatedjobstatusRes;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\jobSearch.json`,
      JSON.stringify(dataOrder)
    );
  }

  async verifyChooseJobStatus(orderStatus) {
    let updatedjobstatusRes = await this.resultUpdateStatus().getText();
    assert.equal(updatedjobstatusRes, orderStatus);
  }
  async updateJobStatus() {
    await this.dropdownStatus().waitForDisplayed();
    await this.dropdownStatus().selectByIndex(2);
    await browser.pause(process.env.small_wait);
    await this.searchJobButton().click();
    await browser.pause(process.env.small_wait);
    await this.selectjob().waitForClickable();
    await this.selectjob().click();
    await this.updatejobsTab().waitForClickable();
    await this.updatejobsTab().click();
    await this.selectStatus().waitForClickable();
    await this.selectStatus().selectByIndex(2);
    await browser.pause(process.env.small_wait);
    await this.saveUpdateStatus().waitForClickable();
    await this.saveUpdateStatus().click();
    await this.updateConfirmation().waitForClickable();
    await this.updateConfirmation().click();
    await this.closebtn().waitForClickable();
    await this.closebtn().click();
    await browser.pause(process.env.small_wait);
  }
  async verifyUpdateJobStatus(orderStatus) {
    let jobRowNum = await this.jobStatusRowNum().getText();
    console.log("Job Row:" + jobRowNum);
    await this.jobNumberField().waitForDisplayed();
    await this.jobNumberField().setValue(jobRowNum);
    await this.searchJobButton().waitForClickable();
    await this.searchJobButton().click();
    await browser.pause(process.env.small_wait);
    let resultUpdatedJob = await this.jobStatusVal().getText();
    console.log("Result Job:" + resultUpdatedJob);
    assert.equal(resultUpdatedJob, orderStatus);
  }
}

module.exports = new JobSearchNavigatorPage();
