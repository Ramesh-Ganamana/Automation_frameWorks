const { assert } = require("chai");
const { expect } = require("chai");
const utilTools = require("../../utils/tools");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BillToAddressNavigatorPage {
    resultsPlusBtn() {
        return $('//div[@id="orderSearchGridContainer"]/descendant::span[@title="Order"][1]/../following-sibling::div[2]');
    }
    searchOrderButton() {
        return $(`//input[@value='Search']`);
    }
    orderHeader() {
        return $(`//a[@ng-click="setOrderEntryMainTab('Order')"]`);
    }

    billToAddLink() {
        return $(`//a[@ng-click="OpenCompass('BillToAddress')"]`);
    }

    billAddPopupResult(colNum) {
        return $('//div[@id="customerAddressGrid"]//div[contains(@class,"ui-widget-content")][1]/div[contains(@class,"slick-cell")][' + colNum + ']')
    }
    billAddPopupSelectBtn() {
        return $('//button[@ng-click="selectCustomerAddress()"]')
    }

    billAdd1Val() {
        return $('(//div[@ng-controller="BilltoAddressCtrl"])[2]');
    }
    billAddCityVal() {
        return $('(//div[@ng-controller="BilltoAddressCtrl"])[3]/label[2]');
    }
    billAddPopupSearch() {
        return $('//input[@ng-model="CustomerAddress.SearchString"]');
    }
    billAddPopupActiveChkbox() {
        return $('//div[@id="customerAddressGrid"]//div[contains(@class,"ui-widget-content")][1]/div[contains(@class,"slick-cell")][9]/input');
    }
    billAddPopupDefaultChkbox() {
        return $('//div[@id="customerAddressGrid"]//div[contains(@class,"ui-widget-content")][1]/div[contains(@class,"slick-cell")][10]/input');
    }

    billAddPopupActiveChkboxVal(addVal) {
        return $('//div[@id="customerAddressGrid"]//div[contains(text(),"' + addVal + '")]/following-sibling::div[7]/input')
    }
    billAddPopupDefaultChkboxVal(addVal) {
        return $('//div[@id="customerAddressGrid"]//div[contains(text(),"' + addVal + '")]/following-sibling::div[8]/input')
    }
    billAddPopupCancleBtn() {
        return $('//button[@ng-click="closeCustomerAddressList()"]');
    }

    billAddPopupSaveBtn() {
        return $('//button[@ng-click="saveAddress()"]');
    }


    async searchAndSelectAnOrder() {
        await browser.pause(process.env.small_wait);
        await this.searchOrderButton().waitForClickable();
        await this.searchOrderButton().click();
        await this.resultsPlusBtn().waitForClickable();
        await this.resultsPlusBtn().click();
    }

    async billAddressLinkValidation() {
        await this.orderHeader().waitForClickable();
        await this.orderHeader().click();
        await this.billToAddLink().waitForClickable();
        await this.billToAddLink().click();
        await this.billAddPopupResult(2).waitForDisplayed();
        await browser.pause(process.env.small_wait);
        let add1 = await this.billAddPopupResult(2).getText();
        let city = await this.billAddPopupResult(5).getText();
        let state = await this.billAddPopupResult(6).getText();
        let zipcode = await this.billAddPopupResult(7).getText();
        console.log("----------add1-------------" + add1);
        console.log("----------city-------------" + city);
        console.log("----------state-------------" + state);
        console.log("----------zipcode-------------" + zipcode);
        await this.billAddPopupResult(2).click();
        await this.billAddPopupSelectBtn().click();
        await this.billAdd1Val().waitForDisplayed();
        await browser.pause(process.env.small_wait);
        let add1Result = await this.billAdd1Val().getText();
        console.log("----------add1Result-------------" + add1Result);
        let add2Result = await this.billAddCityVal().getText();
        let cityResult = add2Result.substring(0, 8);
        let stateResult = add2Result.substring(10, 12);
        let zipcodeResult = add2Result.substring(14, 19);
        console.log("----------add1Result-------------" + add1Result);
        console.log("----------add2Result-------------" + add2Result);
        console.log("----------cityResult-------------" + cityResult);
        console.log("----------stateResult-------------" + stateResult);
        console.log("----------zipcodeResult-------------" + zipcodeResult);
        assert.equal(add1Result, add1);
        //assert.equal(cityResult, city);
        // assert.equal(stateResult, state);
        // assert.equal(zipcodeResult, zipcode);
    }
    async billAddressFilterValidation() {
        await this.orderHeader().waitForClickable();
        await this.orderHeader().click();
        await this.billToAddLink().waitForClickable();
        await this.billToAddLink().click();
        await this.billAddPopupResult(2).waitForDisplayed();
        await browser.pause(process.env.small_wait);
        let add1 = await this.billAddPopupResult(2).getText();
        await browser.pause(process.env.small_wait);
        await this.billAddPopupSearch().waitForClickable();
        await this.billAddPopupSearch().click();
        await this.billAddPopupSearch().setValue(add1);
        await browser.pause(process.env.small_wait);
        let searchResultAddress = await this.billAddPopupResult(2).getText();
        assert.equal(searchResultAddress, add1);
    }
    async billAddressSetActiveValidation() {
        await this.orderHeader().waitForClickable();
        await this.orderHeader().click();
        await this.billToAddLink().waitForClickable();
        await this.billToAddLink().click();
        await this.billAddPopupActiveChkbox().waitForDisplayed();
        var chkboxStatus = await this.billAddPopupActiveChkbox().isSelected();
        console.log("-------------" + chkboxStatus)
        if (chkboxStatus == false) {
            await this.billAddPopupActiveChkbox().waitForClickable();
            await this.billAddPopupActiveChkbox().click();
            await this.billAddPopupSaveBtn().waitForClickable();
            await this.billAddPopupSaveBtn().click();
            var addressVal = await this.billAddPopupResult(2).getText();
            await this.billAddPopupCancleBtn().waitForClickable();
            await this.billAddPopupCancleBtn().click();
            await this.orderHeader().waitForClickable();
            await this.billToAddLink().waitForClickable();
            await this.billToAddLink().click();
            await this.billAddPopupResult(2).waitForDisplayed();
            assert.isTrue(await this.billAddPopupActiveChkboxVal(addressVal).isSelected());
        } else {
            await this.billAddPopupCancleBtn().waitForClickable();
            await this.billAddPopupCancleBtn().click();
            await this.orderHeader().waitForClickable();
            await this.billToAddLink().waitForClickable();
            await this.billToAddLink().click();
            await this.billAddPopupResult(2).waitForDisplayed();
            assert.isTrue(await this.billAddPopupActiveChkbox().isSelected());
        }
    }
    async billAddressSetDefaultValidation() {
        await this.orderHeader().waitForClickable();
        await this.orderHeader().click();
        await this.billToAddLink().waitForClickable();
        await this.billToAddLink().click();
        await this.billAddPopupActiveChkbox().waitForDisplayed();
        var chkboxStatus = await this.billAddPopupActiveChkbox().isSelected();
        var defaultAddStatus = await this.billAddPopupDefaultChkbox().isSelected();
        console.log("-------------" + chkboxStatus)
        if (chkboxStatus == false) {
            await this.billAddPopupActiveChkbox().waitForClickable();
            await this.billAddPopupActiveChkbox().click();
            await this.billAddPopupDefaultChkbox().waitForClickable();
            await this.billAddPopupDefaultChkbox().click();
            await this.billAddPopupSaveBtn().waitForClickable();
            await this.billAddPopupSaveBtn().click();
            let addressVal = await this.billAddPopupResult(2).getText();
            await this.billAddPopupCancleBtn().waitForClickable();
            await this.billAddPopupCancleBtn().click();
            await this.orderHeader().waitForClickable();
            await this.billToAddLink().waitForClickable();
            await this.billToAddLink().click();
            await this.billAddPopupResult(2).waitForDisplayed();
            assert.isTrue(await this.billAddPopupDefaultChkboxVal(addressVal).isSelected());
        } else if (defaultAddStatus == false) {
            await this.billAddPopupDefaultChkbox().waitForClickable();
            await this.billAddPopupDefaultChkbox().click();
            await this.billAddPopupSaveBtn().waitForClickable();
            await this.billAddPopupSaveBtn().click();
            let addressVal = await this.billAddPopupResult(2).getText();
            await this.billAddPopupCancleBtn().waitForClickable();
            await this.billAddPopupCancleBtn().click();
            await this.orderHeader().waitForClickable();
            await this.billToAddLink().waitForClickable();
            await this.billToAddLink().click();
            await this.billAddPopupResult(2).waitForDisplayed();
            assert.isTrue(await this.billAddPopupDefaultChkboxVal(addressVal).isSelected());

        } else {
            await this.billAddPopupCancleBtn().waitForClickable();
            await this.billAddPopupCancleBtn().click();
            await this.orderHeader().waitForClickable();
            await this.billToAddLink().waitForClickable();
            await this.billToAddLink().click();
            await this.billAddPopupResult(2).waitForDisplayed();
            assert.isTrue(await this.billAddPopupDefaultChkbox().isSelected());
        }

    }


}
module.exports = new BillToAddressNavigatorPage();