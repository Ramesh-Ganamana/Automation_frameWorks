const { assert } = require("chai");
const { expect } = require("chai");
const LandingNavigatorPage = require("./navigator.page");
const utilTools = require("../../utils/tools");

//require("dotenv").config();

/**
 * sub page containing specific selectors and methods for a specific page
 */
class JobActionSearchNavigatorPage extends LandingNavigatorPage {
  //Search Location

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
    return $("//div[@id='orderSearchGridContainer']/descendant::a[1]");
  }

  multijobs() {
    return $(
      "//div[@id='oeJobGrid']//div[@class='slick-pane slick-pane-top slick-pane-left']"
    );
  }

  jobactionDrpDnw() {
    return $(
      "(//div[@id='orderEntryMain']//li[@class='dropdown']//a[@class='dropdown-toggle ng-binding'])[1]"
    );
  }
  changeOpenJobStatus() {
    return $("(//a[@class='ddmenuLink ng-binding'])[1]");
  }

  selectquote() {
    return $("(//div[@id='orderEntryMain']//li[@class='ddsubmenuLink'])[1]");
  }

  selectTentivie() {
    return $("(//div[@id='orderEntryMain']//li[@class='ddsubmenuLink'])[2]");
  }
  selectConfirm() {
    return $("(//div[@id='orderEntryMain']//li[@class='ddsubmenuLink'])[3]");
  }
  jobStatusChangeErrorMsg() {
    return $("//span[@title='Job - Invalid values.']");
  }
  validateJobUpdate() {
    return $("//div[@class='modal-content']//h4[@class='ng-binding']");
  }

  selectOk() {
    return $("//button[@data-ng-click='modalOptions.ok();']");
  }

  verifyUpdatedStatus() {
    return $("(//div[@class='slick-cell l6 r6 selected'])[1]");
  }

  //copy jobs xpath
  selectOrder() {
    return $("//div[@id='orderSearchGridContainer']/descendant::a[1]");
  }
  selectJob() {
    return $(`//a[normalize-space()='Jobs']`);
  }

  selectJobAction() {
    return $(`//a[normalize-space()='Job Actions']`);
  }
  selectCopyJobs() {
    return $(`//a[normalize-space()='Copy Selected Job']`);
  }
  selectPasteJobs() {
    return $(`//a[normalize-space()='Paste Selected Job']`);
  }
  dateRangeUncheck() {
    return $("(//input[@type='checkbox'])[2]");
  }
  crmOppCursor() {
    return $(
      "//span[@class='glyphicon glyphicon-remove-circle cursor-pointer']"
    );
  }
  savebtn() {
    return $("//input[@value='Save']");
  }

  discountTextArea() {
    return $("//textarea[@ng-model='order.DiscountApprovalRequesterComments']");
  }

  continuebtn() {
    return $("//button[text()='Continue ']");
  }

  copyJobMutilpleRoom() {
    return $("//a[normalize-space()='Copy Job to Multiple Rooms']");
  }

  extendedDateCopy() {
    return $(
      "(//select[@ng-options='dte.Display for dte in CopyDateList']//option)[1]"
    );
  }
  copyExtendedMultipleJobs() {
    return $(
      "(//select[@ng-options='room.Value for room in CopyRoomList']//option)[3]"
    );
  }

  createCopyJob() {
    return $("//button[@ng-click='processCopyJob()']");
  }

  copyJobDone() {
    return $("(//button[@ng-click='closeCopyJob()'])[2]");
  }

  copyjobstatusLink() {
    return $("//div[@class='slick-cell l7 r7 selected']");
  }
  newInternalOrder() {
    return $("//button[contains(text(),'New Internal Order')]");
  }

  orderStatus() {
    return $(
      "//div[@id='search-form']//span[contains(text(),'Status')]/parent::div/select"
    );
  }

  firstItemNumUnderJobs() {
    return $(
      "//div[@id='oeJobGrid']/descendant::div[contains(@class,'slick-cell')][2]"
    );
  }

  firstItemNameUnderJobs() {
    return $(
      "//div[@id='oeJobGrid']/descendant::div[contains(@class,'slick-cell')][8]"
    );
  }
  //I change the X path and json copyJobAttribute": "Quote"
  fistItemJobType() {
    return $(
      "//div[@id='oeJobGrid']/descendant::div[contains(@class,'slick-cell')][7]"
    );
  }

  orderNumfld() {
    return $("//span[text()=' Order Number ']/parent::div/input");
  }
  jobRoomfld() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-cell')][8]"
    );
  }
  jobRoomfld2ndRow() {
    return $(
      "//div[@id='oeJobGridPanel']/descendant::div[contains(@class,'slick-cell')][27]"
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

  async changejobLocation(joblocationId) {
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(joblocationId);
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).waitForClickable();
    await this.searchResultvalue(joblocationId).doubleClick();
  }

  async clickOnActionSearch() {
    await this.newInternalOrder().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.dateRangeUncheck().waitForClickable();
    await this.dateRangeUncheck().click();
    await this.orderNumfld().waitForClickable();
    const itemdata = utilTools.readJson(
      `${process.cwd()}\\data\\additemsData.json`
    );
    //I changed the ordernumber
    await this.orderNumfld().setValue(itemdata.orderNum);
    await this.newInternalOrder().waitForClickable();
    await this.jobActionSearch().waitForClickable();
    await this.jobActionSearch().click();
  }

  async clickOnOrderNumLink() {
    await this.oredrnumlink().waitForClickable();
    await this.oredrnumlink().click();
  }

  async verifyMultiplejobs() {
    await this.multijobs().waitForDisplayed();
    const multijobsdata = [await this.multijobs()];
    for (let i = 0; i < multijobsdata.length; i++) {
      let multiData = multijobsdata[i];
      if (multiData >= 2) {
        assert.equal(multiData, multijobsdata);
      }
    }
  }

  async changeJobStatus() {
    await this.changeOpenJobStatus().moveTo();
    await this.selectConfirm().waitForClickable();
    await this.selectConfirm().click();
    for (let i = 0; i < 2; i++) {
      if ((await this.jobStatusChangeErrorMsg().isDisplayed()) == true) {
        assert.isTrue(false, "Failed to change job status to complete");
        break;
      } else {
        console.log("<<WAITING FOR jobStatusChangeErrorMsgK BUTTON>>");
        await browser.pause(process.env.small_wait);
      }
    }
  }
  async updateJobValidation(updatValidatedJob) {
    const updateJobValidation = await this.validateJobUpdate().getText();
    assert.equal(updatValidatedJob, updateJobValidation);
    await this.selectOk().waitForClickable();
    await this.selectOk().click();
  }

  async verifyUpdatedJobStatus(updatedStatus) {
    await this.verifyUpdatedStatus().waitForClickable();
    const updatedJobStatus = await this.verifyUpdatedStatus().getText();
    assert.equal(updatedStatus, updatedJobStatus);
  }

  async verifyUpdateQuoteStatus(verifyQuoteStatus) {
    await this.jobactionDrpDnw().moveTo();
    await this.jobactionDrpDnw().waitForClickable();
    await this.jobactionDrpDnw().click();

    await this.changeOpenJobStatus().moveTo();
    await this.selectquote().waitForClickable();
    await this.selectquote().click();

    await this.selectOk().waitForClickable();
    await this.selectOk().click();

    await this.verifyUpdatedStatus().waitForDisplayed();
    const updatedJobQuoteStatus = await this.verifyUpdatedStatus().getText();
    assert.equal(updatedJobQuoteStatus, updatedJobQuoteStatus);
  }

  //copy job methods

  async clickOnCopyJobSearch() {
    await this.dateRangeUncheck().waitForClickable();
    await this.dateRangeUncheck().click();
    await this.jobActionSearch().waitForClickable();
    await this.jobActionSearch().click();
  }
  async clickOnSelectResult() {
    await this.selectOrder().waitForClickable();
    await this.selectOrder().click();
  }
  async clickOnJobs() {
    await browser.pause(process.env.small_wait);
    await this.selectJob().waitForDisplayed();
    await this.selectJob().waitForClickable();
    await this.selectJob().doubleClick();
  }
  async clickOnJobActions() {
    await this.firstItemNumUnderJobs().waitForDisplayed();
    await this.firstItemNumUnderJobs().click();
    let jobType = await this.fistItemJobType().getText();
    const data = utilTools.readJson(
      `${process.cwd()}\\data\\jobActionSearch.json`
    );
    data.copyJobAttribute = jobType;
    var fsCreate = require("fs");
    var jsonData = data;
    console.log("jobActionSearchNew data == ", jsonData);
    fsCreate.writeFileSync(
      `${process.cwd()}\\data\\jobActionSearchNew.json`,
      JSON.stringify(jsonData)
    );
    await this.copyjobstatusLink().waitForDisplayed();
    await this.selectJobAction().waitForClickable();
    await this.selectJobAction().click();
  }
  async copyJobs() {
    await this.selectCopyJobs().waitForClickable();
    await this.selectCopyJobs().click();
  }
  async pasteJobs() {
    await this.selectPasteJobs().waitForClickable();
    await this.selectPasteJobs().click();
  }
  async disableCrmCursor() {
    for (let i = 0; i < 3; i++) {
      if ((await this.crmOppCursor().isClickable()) == true) {
        await this.crmOppCursor().click();
        break;
      } else {
        await browser.pause(process.env.small_wait);
      }
    }
  }
  async savejob() {
    if ((await this.jobErrorMsg().isDisplayed()) == true) {
      await this.jobRoomfld().waitForClickable();
      await this.jobRoomfld().click();
      await this.jobRoomDrpDnw().waitForClickable();
      await this.jobRoomDrpDnw().selectByIndex(2);
      // await this.savebtn().waitForClickable();
      if ((await this.jobRoomfld2ndRow().isDisplayed()) == true) {
        await this.jobRoomfld2ndRow().waitForClickable();
        await this.jobRoomfld2ndRow().click();
        await this.jobRoomDrpDnw().waitForClickable();
        await this.jobRoomDrpDnw().selectByIndex(2);
        await this.savebtn().waitForClickable();
      }
    }
    await this.savebtn().waitForClickable();
    await this.savebtn().click();
    for (let i = 0; i < 3; i++) {
      if ((await this.discountTextArea().isClickable()) == true) {
        await this.discountTextArea().setValue("automation test");
        await this.continuebtn().waitForClickable();
        await this.continuebtn().click();
        break;
      } else {
        console.log("<<WAITING FOR DISCOUNT DAILOG>>");
        await browser.pause(process.env.small_wait);
      }
    }
  }

  async verifyCopyJobs(copyJobAttribute) {
    await browser.pause(process.env.small_wait);
    await this.fistItemJobType().waitForDisplayed();
    const copyjobsStatusText = await this.fistItemJobType().getText();
    assert.equal(copyjobsStatusText, copyJobAttribute);
  }
  //copy on Multiple Jobs
  async clickOnMultipleCopyJob() {
    await this.copyJobMutilpleRoom().waitForClickable();
    await this.copyJobMutilpleRoom().click();
  }
  async clickOnExtendedDateCopy() {
    await this.extendedDateCopy().waitForClickable();
    await this.extendedDateCopy().click();
  }
  async clickOnExtendedCopyMultipleJobs() {
    await this.copyExtendedMultipleJobs().waitForClickable();
    await this.copyExtendedMultipleJobs().click();
  }
  async clickOnCreateCopyJobs() {
    await this.createCopyJob().waitForClickable();
    await this.createCopyJob().click();
  }
  async clickOnJobDone() {
    await this.copyJobDone().waitForClickable();
    await this.copyJobDone().click();
  }
  async verifyBeforeSaveJobData(RoomTextStatus) {
    await this.copyjobstatusLink().waitForDisplayed();
    const beforeSveMultiRoomData = await this.copyjobstatusLink().getText();
    assert.equal(RoomTextStatus, beforeSveMultiRoomData);
  }
  async verifyAfterSaveJobData(RoomTextStatus) {
    await this.copyjobstatusLink().waitForDisplayed();
    const afterSveMultiRoomData = await this.copyjobstatusLink().getText();
    assert.equal(RoomTextStatus, afterSveMultiRoomData);
  }
}
module.exports = new JobActionSearchNavigatorPage();
