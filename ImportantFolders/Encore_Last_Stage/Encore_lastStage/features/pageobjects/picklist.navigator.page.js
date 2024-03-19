const { assert } = require("chai");
const { expect } = require("chai");
require("dotenv").config();
// const data = require("../../data/picklist.json");
const ConstUtil = require("../../utils/const");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PickListNavigatorPage {

    picklistSearchTab() {
        return $("//span[text()='Picklist Search']");
    }
    picklistSearchBtn() {
        return $("//div[@id='collapsePlist']//input[@title='Search']");
    }
    picklistResults(row, col) {
        return $("//div[@id='pickListSearchGrid']//div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[" + row + "]/div[" + col + "]")
    }
    picklistNum() {
        return $("//span[contains(text(),'Pick List Number')]/parent::div/input");
    }
    picklistOrderNum() {
        return $("//div[@id='collapsePlist']//span[contains(text(),'Order Number')]/parent::div/input");
    }
    picklistJobNum() {
        return $("//div[@id='collapsePlist']//span[contains(text(),'Job Number')]/parent::div/input");
    }
    picklistUseDateRadio() {
        return $("//label[text()=' Use Date ']");
    }
    picklistStartDateSelect() {
        return $("//select[@formcontrolname='StartDateType']");
    }
    picklistDeliveryDate() {
        return $("//span[contains(text(),'Order Number')]/parent::div/input");
    }
    detailedPageJobText() {
        return $("//label[contains(text(),'Job')]/parent::div/a[1]");
    }
    detailsPageOrderNumText() {
        return $("//label[contains(text(),'Job')]/parent::div/a[2]");
    }

    detailsPageShortListBtn() {
        return $("//button[contains(text(),'Short List')]")
    }
    detailsPageDetailsText() {
        return $("//label[contains(text(),'Job')]/parent::div");
    }

    //--------------------------------------package search xpaths-----------------------------------------//

    packageSearchTab() {
        return $("//span[text()='Package Search']");
    }
    packageSearchBtn() {
        return $("//div[@id='collapsePackageSearch']//input[@title='Search']");
    }
    packageSearchResults(row, col) {
        return $("//div[@id='packageGridResults']//div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[" + row + "]/div[" + col + "]");
    }
    packageCopyBtn() {
        return $("//button[contains(text(),'Copy')]");
    }
    newPackageName() {
        return $("//div[@ng-form='pkgCopyForm']//input[@type='text']");
    }
    newPackageSaveBtn() {
        return $("//div[@class='modal-footer']/button[contains(text(),'Save')]");
    }
    newPackageOkBtn() {
        return $("//div[@class='modal-footer']/button[contains(text(),'OK')]");
    }
    packageName() {
        return $("//span[contains(text(),'Package Name')]/parent::div/input");
    }
    packageLocationDropdown() {
        return $("//span[contains(text(),'Location')]/parent::div/select")
    }
    packageLocationIdHeader() {
        return $("//span[contains(text(),'LocationId')]")
    }


    async selectPicklist() {
        await this.picklistSearchTab().waitForClickable();
        await this.picklistSearchTab().click();
        await this.picklistSearchBtn().waitForClickable();
    }

    async getDataFromResultsGrid() {
        await this.picklistSearchBtn().waitForClickable();
        await this.picklistSearchBtn().click();
        await this.picklistResults(1, 4).waitForDisplayed();
        let pickListNumVal = await this.picklistResults(1, 4).getText();
        let picklistOrderNumVal = await this.picklistResults(2, 2).getText();
        let picklistJobNumVal = await this.picklistResults(3, 6).getText();
        // Getting data from results grid and use it as test data //
        const fs = require("fs");
        const data = JSON.parse(fs.readFileSync(`${process.cwd()}\\data\\picklist.json`));
        data.picklistNumInput = pickListNumVal;
        data.jobNumInput = picklistJobNumVal;
        data.orderNumInput = picklistOrderNumVal;
        var fsCreate = require("fs");
        var dataNew = data;
        fsCreate.writeFileSync(`${process.cwd()}\\data\\picklistNew.json`, JSON.stringify(dataNew));
    }

    async searchBypicklistNumber(pickListNumTestData) {
        await this.picklistNum().waitForClickable();
        await this.picklistNum().setValue(pickListNumTestData);
        await this.picklistSearchBtn().waitForClickable();
        await this.picklistSearchBtn().click();
        await this.picklistResults(1, 4).waitForDisplayed();
        let pickListNumVal = await this.picklistResults(1, 4).getText();
        assert.equal(pickListNumVal, pickListNumTestData);
    }

    async searchBypicklistOrderNumber(orderNumTestData) {
        await this.picklistOrderNum().waitForClickable();
        await this.picklistOrderNum().setValue(orderNumTestData);
        await this.picklistSearchBtn().waitForClickable();
        await this.picklistSearchBtn().click();
        await this.picklistResults(1, 2).waitForDisplayed();
        let orderNumVal = await this.picklistResults(1, 2).getText();
        assert.equal(orderNumVal, orderNumTestData);
    }
    async searchBypicklistJobNumber(jobNumTestData) {
        await this.picklistJobNum().waitForClickable();
        await this.picklistJobNum().setValue(jobNumTestData);
        await this.picklistSearchBtn().waitForClickable();
        await this.picklistSearchBtn().click();
        await this.picklistResults(1, 6).waitForDisplayed();
        let jobNumVal = await this.picklistResults(1, 6).getText();
        assert.equal(jobNumVal, jobNumTestData);
    }

    async pickListDetailedPageValidation() {
        await this.picklistSearchBtn().waitForClickable();
        await this.picklistSearchBtn().click();
        await this.picklistResults(1, 4).waitForDisplayed();
        let picklistOrderNumVal = await this.picklistResults(1, 2).getText();
        let picklistJobNumVal = await this.picklistResults(1, 6).getText();
        let picklistNumVal = await this.picklistResults(1, 4).getText();
        await this.picklistResults(1, 4).click();
        await browser.pause(process.env.small_wait);
        await this.detailsPageShortListBtn().waitForDisplayed();
        await this.detailedPageJobText().waitForDisplayed();
        let resultJobNum = await this.detailedPageJobText().getText();
        let resultOrderNum = await this.detailsPageOrderNumText().getText();
        resultOrderNum = resultOrderNum.substring(5, 10);
        let pageDetails = await this.detailsPageDetailsText().getText();
        let resultPicklistNum = pageDetails.substring(28, 32);
        assert.equal(resultOrderNum, picklistOrderNumVal);
        assert.equal(resultJobNum, picklistJobNumVal);
        assert.equal(resultPicklistNum, picklistNumVal);
    }
    //------------------------------------package search functions-----------------------------------------//

    async selectPackageSearch() {
        await this.packageSearchTab().waitForClickable();
        await this.packageSearchTab().click();
        await this.packageSearchBtn().waitForClickable();
    }

    async copyPackageAndValidate() {
        var strValues = "abcdefghijklmnopqrstuvwxyz";
        var suffix = "";
        for (var i = 0; i < 5; i++) {
            suffix = suffix + strValues.charAt(Math.round(strValues.length * Math.random()));
        }
        var packageNameRandom = suffix + "_Package";
        await this.packageSearchBtn().waitForClickable();
        await this.packageSearchBtn().click();
        await this.packageSearchResults(2, 1).waitForClickable();
        await this.packageSearchResults(2, 1).click();
        await this.packageCopyBtn().waitForClickable();
        await this.packageCopyBtn().click();
        await this.newPackageName().setValue(packageNameRandom);
        await this.newPackageSaveBtn().click();
        await this.newPackageOkBtn().waitForClickable();
        await this.newPackageOkBtn().click();
        await this.packageName().waitForClickable();
        await this.packageName().setValue(packageNameRandom);
        await this.packageSearchBtn().waitForClickable();
        await this.packageSearchBtn().click();
        await browser.pause(process.env.small_wait);
        await this.packageSearchBtn().click();
        await this.packageSearchResults(1, 2).waitForClickable();
        let packageNameResults = await this.packageSearchResults(1, 2).getText();
        assert.equal(packageNameResults, packageNameRandom);
    }

    async searchByPackageName(packageNameVal) {
        await this.packageName().waitForClickable();
        await this.packageName().setValue(packageNameVal);
        await this.packageSearchBtn().waitForClickable();
        await this.packageSearchBtn().click();
        let packageNameResults = await this.packageSearchResults(1, 2).getText();
        assert.equal(packageNameResults, packageNameVal);
    }

    async searchByPackageLocation(packageLocationVal) {
        await this.packageLocationDropdown().waitForClickable();
        await this.packageLocationDropdown().selectByAttribute("value", packageLocationVal);
        await this.packageSearchBtn().waitForClickable();
        await this.packageSearchBtn().click();
        await browser.pause(process.env.small_wait);
        await this.packageLocationIdHeader().waitForClickable();
        await this.packageLocationIdHeader().click();
        await browser.pause(process.env.small_wait);
        await this.packageLocationIdHeader().click();
        let packageLocationResults = await this.packageSearchResults(1, 1).getText();
        packageLocationVal = packageLocationVal.substring(4, 8);
        assert.equal(packageLocationResults, packageLocationVal);
    }
}

module.exports = new PickListNavigatorPage();