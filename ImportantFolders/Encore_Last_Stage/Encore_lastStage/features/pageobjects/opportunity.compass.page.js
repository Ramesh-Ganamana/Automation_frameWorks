const { assert } = require("chai");
const { expect } = require("chai");
require("dotenv").config();
const utilConst = require("../../utils/const");
let testData = require("../../data/oppCreation.json");
const landingPage = require("./landing.page");

class opportunityCompassPage {
  opportunitySlider() {
    return $("//span[contains(text(),'Opportunities')]");
  }
  plusBtnNewOpp() {
    return $(`//img[@alt="New"]`);
  }
  inputAttribute(attributeValue) {
    return $(
      `//label[text()='` +
        attributeValue +
        `']/ancestor::div[@role="presentation"][3]/descendant::input`
    );
  }
  selectAttribute(selectAttValue) {
    return $(
      `//label[text()='` +
        selectAttValue +
        `']/ancestor::div[@role="presentation"][3]/descendant::select`
    );
  }
  errorMsgEndDate() {
    return $(`//span[@data-id="po_eventenddate-error-icon"]`);
  }
  errorMsgStartDate() {
    return $(`//span[@data-id="po_eventstartdate-error-message"]`);
  }

  inputVenue() {
    return $(
      '//label[text()="Venue"]/ancestor::div[@data-id="po_venue-FieldSectionItemContainer"]/descendant::div[@class="pa-bm flexbox"]'
    );
  }

  venueText() {
    return $(
      '//input[@data-id="po_venue.fieldControl-LookupResultsDropdown_po_venue_textInputBox_with_filter_new"]'
    );
  }
  searchVenue() {
    return $(
      '//button[@data-id="po_venue.fieldControl-LookupResultsDropdown_po_venue_search"]'
    );
  }
  optionSelectEndUserAcc(userAccVal) {
    // return $('(//span[contains(.,"Tommy Hilfiger")])[7]');
    return $('(//span[contains(.,"' + userAccVal + '")])[7]');
  }
  optionSelectEndUserContact(userContactVal) {
    // return $('//span[contains(.,"Angelina Wood")]');
    return $('//span[contains(.,"' + userContactVal + '")]');
  }
  optionSelectVenue(venueVal) {
    // return $('//span[contains(.,"Hotel Del Coronado")]');
    return $('//span[contains(.,"' + venueVal + '")]');
  }
  venueSalesLabel() {
    return $('//label[text()="Venue Sales Contact"]');
  }
  btnSave() {
    return $('//img[@title="Save"]');
  }
  ordersTab() {
    return $('//li[text()="Orders"]');
  }
  inputGlcenter() {
    return $(
      '//input[@data-id="po_glcenter.fieldControl-LookupResultsDropdown_po_glcenter_textInputBox_with_filter_new"]'
    );
  }
  plusBtn() {
    return $('//img[@title="Add new Order"][1]');
  }

  okBtn() {
    return $('//span[text()="OK"]/parent::button');
  }
  saveStatus() {
    return $('//span[@aria-label="Save status - Saved"]');
  }
  deleteDefaultVenue() {
    return $(
      "//button[@data-id='po_venue.fieldControl-LookupResultsDropdown_po_venue_selected_tag_delete']"
    );
  }
  ordersDetailsGrid() {
    return $(
      "//div[@id='divToolbarOrders']//img[@title='Open in parent window'][1]"
    );
  }
  btnCreateOrder() {
    return $("//input[@value='Create Order']");
  }
  iframeOrderGrid() {
    return $("#WebResource_OrdersSubGrid");
  }
  ignoreAndSaveBtn() {
    return $(`//button[@aria-label="Ignore and save"]`);
  }

  async createOpportunity(venue) {
    var strValues = "abcdefghijklmnopqrstuvwxyz12345";
    var suffix = "";
    for (var i = 0; i < 5; i++) {
      suffix =
        suffix + strValues.charAt(Math.round(strValues.length * Math.random()));
    }
    var oppName = suffix + "_Auto";
    var strValues1 = "123";
    await this.opportunitySlider().click();
    await this.plusBtnNewOpp().waitForClickable();
    await this.plusBtnNewOpp().click();
    await this.inputAttribute(utilConst.Const.EventName).waitForClickable();
    await this.inputAttribute(utilConst.Const.EventName).click();
    await browser.pause(process.env.small_wait);
    await this.inputAttribute(utilConst.Const.EventName).click();
    await browser.pause(process.env.small_wait);
    await browser.keys("\uE003");
    await browser.keys("\uE003");
    await browser.keys("\uE003");
    await this.inputAttribute(utilConst.Const.EventName).setValue(oppName);
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0"); // add leading zero if needed
    const startDay = today.getDate().toString().padStart(2, "0"); // add leading zero if needed
    const startDate = `${month}/${startDay}/${year}`;
    console.log("START DATE >> " + startDate);
    const endMonth = (today.getMonth() + 2).toString().padStart(2, "0");
    const endDay = (today.getDate() + 8).toString().padStart(2, "0"); // add leading zero if needed
    const endDate = `${endMonth}/${endDay}/${year}`;
    console.log("END DATE >> " + endDate);
    await this.inputAttribute(utilConst.Const.EventStartDate).setValue(
      startDate
    );
    await this.selectAttribute(utilConst.Const.NewOrExisting).click();
    await this.selectAttribute(
      utilConst.Const.NewOrExisting
    ).selectByVisibleText(testData.NewOrExisting);
    await this.inputAttribute(utilConst.Const.EventEndDate).setValue(startDate);
    await browser.pause(process.env.small_wait);
    await browser.keys("\uE00C");
    await browser.pause(process.env.small_wait);
    await browser.keys("\uE00C");
    console.log("<<---WAITING FOR OK BUTTON---->>");
    await this.selectAttribute(utilConst.Const.EventType).waitForClickable();
    await this.selectAttribute(utilConst.Const.EventType).click();
    await this.selectAttribute(utilConst.Const.EventType).selectByVisibleText(
      testData.EventType
    );
    await this.inputAttribute(utilConst.Const.EstRevenue).click();
    var estRev = "";
    for (var i = 0; i < 10; i++) {
      estRev = strValues1.charAt(Math.round(strValues1.length * Math.random()));
    }
    estRev = estRev + "0000";
    await this.inputAttribute(utilConst.Const.EstRevenue).setValue(estRev);
    await this.selectAttribute(utilConst.Const.NoOfAttendees).click();
    await this.selectAttribute(
      utilConst.Const.NoOfAttendees
    ).selectByVisibleText(testData.noOfAttendees);
    await this.inputAttribute(utilConst.Const.EndUserAccount).click();
    await this.inputAttribute(utilConst.Const.EndUserAccount).setValue(
      testData.EndUserAccount
    );
    await this.optionSelectEndUserAcc(
      testData.EndUserAccount
    ).waitForDisplayed();
    await this.optionSelectEndUserAcc(testData.EndUserAccount).click();
    await browser.pause(process.env.small_wait);
    await browser.keys("\uE00C");
    await browser.pause(process.env.small_wait);
    await browser.keys("\uE00C");
    console.log("<<---WAITING FOR OK BUTTON---->>");
    await this.inputAttribute(
      utilConst.Const.EndUserContact
    ).waitForClickable();
    await this.inputAttribute(utilConst.Const.EndUserContact).click();
    await this.inputAttribute(utilConst.Const.EndUserContact).setValue(
      testData.EndUserContact
    );
    await this.optionSelectEndUserContact(
      testData.EndUserSubContact
    ).waitForDisplayed();
    await this.optionSelectEndUserContact(testData.EndUserSubContact).click();
    await browser.keys("\uE00F");
    await this.venueSalesLabel().click();
    await browser.pause(process.env.small_wait);
    await this.inputVenue().waitForDisplayed();
    await this.inputVenue().moveTo();
    await this.deleteDefaultVenue().click();
    await this.venueText().waitForDisplayed();
    // await this.venueText().setValue(testData.Venue1137);
    await this.venueText().setValue(venue);
    await this.optionSelectVenue(venue).waitForDisplayed();
    await this.optionSelectVenue(venue).click();
    await this.ordersTab().waitForClickable();
    await this.ordersTab().click();
    await this.inputGlcenter().waitForDisplayed();
    await this.inputGlcenter().click();
    await browser.keys("\uE003");
    await browser.keys("\uE003");
    await browser.keys("\uE003");
    // await this.inputGlcenter().setValue(testData.Venue1137);
    await this.inputGlcenter().setValue(venue);
    await this.optionSelectVenue(venue).waitForClickable();
    await this.optionSelectVenue(venue).click();
    await this.btnSave().click();
    for (let i = 0; i < 5; i++) {
      if ((await this.ignoreAndSaveBtn().isClickable()) == true) {
        await this.ignoreAndSaveBtn().click();
        break;
      } else {
        console.log("<<WAITING FOR IGNORE AND SAVE BUTTON>>");
        await browser.pause(process.env.small_wait);
      }
    }
    await this.saveStatus().waitForDisplayed();
    await this.ordersTab().waitForClickable();
    await this.ordersTab().click();
    await browser.pause(process.env.small_wait);
    await browser.keys("\uE00F");
    await browser.pause(process.env.small_wait);
    let iframe = await browser.findElement(
      "css selector",
      "#WebResource_OrdersSubGrid"
    );
    await browser.switchToFrame(iframe);
    await browser.pause(process.env.small_wait);
    await browser.keys("\uE00F");
    await this.ordersDetailsGrid().waitForClickable();
    await this.ordersDetailsGrid().moveTo();
    await this.plusBtn().waitForDisplayed();
    await this.plusBtn().click();
    console.log("---WRITING OPPORTUNITY DATA---");
    const fs = require("fs");
    console.log(`${process.cwd()}\\data\\oppCreation.json`);
    const data = JSON.parse(
      fs.readFileSync(`${process.cwd()}\\data\\oppCreation.json`)
    );
    console.log(" READING DATA FROM FS FILE ", data);
    data.OpportunityName = oppName;
    data.startDateVal = startDate;
    data.endDateVal = endDate;
    var fsCreate = require("fs");
    var dataNew = data;
    console.log("OPT data == ", data);
    fsCreate.writeFileSync(
      `${process.cwd()}\\data\\oppCreationNew.json`,
      JSON.stringify(dataNew)
    );
    console.log(" READING DATA FROM FS FILE NEW", dataNew);
  }

  async orderDetails() {
    await browser.pause(process.env.small_wait);
    await browser.switchToParentFrame();
    for (let i = 0; i < 5; i++) {
      if ((await this.okBtn().isClickable()) == true) {
        await this.okBtn().click();
        let iframe = await browser.findElement(
          "css selector",
          "#WebResource_OrdersSubGrid"
        );
        await browser.switchToFrame(iframe);
        await browser.pause(process.env.small_wait);
        await this.plusBtn().waitForDisplayed();
        await this.plusBtn().click();
        break;
      } else {
        console.log("<<WAITING FOR OK BUTTON>>");
        await browser.pause(process.env.small_wait);
      }
    }
    browser.setTimeout({ pageLoad: 160000 });
    // await browser.switchWindow("PSAV - Web Order Entry Training");
    const tabs = await browser.getWindowHandles();
    console.log("tabs: ", tabs);
    var window1 = tabs[0];
    var window2 = tabs[1];
    browser.switchToWindow(window2);
    var title2 = browser.getTitle();
    console.log(title2);
    await browser.refresh();
    await this.btnCreateOrder().waitForExist();
    await this.btnCreateOrder().waitForClickable();
    const fetchUrl = await browser.getUrl();
    const fs = require("fs");
    console.log(`${process.cwd()}\\data\\oppCreationNew.json`);
    const data = JSON.parse(
      fs.readFileSync(`${process.cwd()}\\data\\oppCreationNew.json`)
    );
    console.log(" READING DATA FROM FS FILE ", data.generatedUrl);
    data.generatedUrl = fetchUrl;
    var fsCreate = require("fs");
    var jsonData = data;
    console.log("OPT data == ", data);
    fsCreate.writeFileSync(
      `${process.cwd()}\\data\\oppCreationNew.json`,
      JSON.stringify(jsonData)
    );
    const fsReadNew = require("fs");
    const dataNew = JSON.parse(
      fsReadNew.readFileSync(`${process.cwd()}\\data\\oppCreationNew.json`)
    );
    console.log(" READING DATA FROM FS FILE NEW", dataNew.generatedUrl);
  }
}

module.exports = new opportunityCompassPage();
