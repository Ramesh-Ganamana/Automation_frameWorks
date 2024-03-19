const { assert } = require("chai");
const { expect } = require("chai");
const utilTools = require("../../utils/tools");

class jobAction {
  insertJob() {
    return $(`(//a[@class='ng-binding'][normalize-space()='Insert Job'])[1]`);
  }
  saveBtn() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }
  jobAction() {
    return $(`(//b[@class='caret'])[1]`);
  }
  changeOpenJobStatus() {
    return $(`(//a[normalize-space()='Change Open Job Status'])[1]`);
  }
  Quote() {
    return $(`//a[normalize-space()='Quote']`);
  }
  okBtn() {
    return $(`(//button[normalize-space()='OK'])[1]`);
  }
  jobStatusText() {
    return $(`(//div[@class='modal-body ng-scope'])[1]/p`);
  }
  status(i) {
    return $(`//div[@class='slick-cell l6 r6']['${i}']`);
  }
  ____________________________________________________________________________;
  Tentative() {
    return $(`//a[normalize-space()='Tentative']`);
  }
  _________________________________________________________________________________;
  confirm() {
    return $(`//a[normalize-space()='Confirm']`);
  }
  redcolor(i) {
    return $(`//div[@class='slick-cell l6 r6']/span['${i}']`);
  }
  roomBooth1() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[8]`
    );
  }
  roomBooth2() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[8]/select`
    );
  }
  roomBooth3() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[8]/select/option[2]`
    );
  }

  roomBooth2line() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][3]/div[8]`
    );
  }
  roomBooth2select() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][3]/div[8]/select`
    );
  }
  roomBooth2option() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][3]/div[8]/select/option[2]`
    );
  }

  roomBooth3line() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][5]/div[8]`
    );
  }
  roomBooth3select() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][5]/div[8]/select`
    );
  }
  roomBooth3option() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][5]/div[8]/select/option[2]`
    );
  }
  ________________________________________________________________________________________________________________;
  confirmPickList() {
    return $(`//a[normalize-space()='Confirm-Picklist']`);
  }
  ________________________________________________________________________________________________________;
  salesjob2() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[2]/div[10]`
    );
  }
  salesjob1() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[6]/div[10]`
    );
  }
  salesjob3() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[4]/div[10]`
    );
  }
  Booth1() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][6]/div[8]`
    );
  }
  Booth2() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][6]/div[8]/select`
    );
  }
  Booth3() {
    return $(
      `//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][6]/div[8]/select/option[2]`
    );
  }
  itemsTab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[1]/a`);
  }
  itemsubTab() {
    return $(`//label[@class='btn order-product-icon-btn'][6]/span`);
  }
  salesItem1() {
    return $(
      `//div[@id='gridProductsOrderEntry']//div[contains(@class,'ui-widget-content slick-row')][6]`
    );
  }
  salesItem2() {
    return $(
      `//div[@id='gridProductsOrderEntry']//div[contains(@class,'ui-widget-content slick-row')][6]`
    );
  }
  salesItem3() {
    return $(
      `//div[@id='gridProductsOrderEntry']//div[contains(@class,'ui-widget-content slick-row')][6]`
    );
  }
  invoice() {
    return $(`//a[normalize-space()='Ready To Invoice']`);
  }

  //6th case//
  classicOrder() {
    return $(`(//span[@title='New Classic']/parent::div/following::div[2])[3]`);
  }
  searchButton() {
    return $(`(//input[@title="Search"])[1]`);
  }
  jobsButton() {
    // return $(`//a[@class="ng-binding" and contains(text(),"Jobs")]`)
    return $(`//span[@title="Job - Invalid values."]/..`);
  }
  quoteSpace() {
    return $(`(//div[@class="slick-cell l6 r6"])[1]`);
  }
  jobActionButton() {
    return $(
      `//li[@is-open="isJobActionsOpen"]/a[contains(text(),"Job Actions")]`
    );
  }
  statusDropdown() {
    return $(`//a[contains(text()," Change Open Job Status")]`);
  }
  cancelButton() {
    return $(
      `//a[ @class="ddsubmenuLink ng-binding" and contains(text()," Cancel")]`
    );
  }
  jobStatusUpdate() {
    return $(`//h4[text()="Job Status Update"]`);
  }
  okButton() {
    return $(`//button[text()="OK"]`);
  }
  saveButton() {
    return $(`//input[@value="Save"]`);
  }
  emptyField() {
    return $(`(//div[@class="slick-cell l6 r6 selected"])[1]`);
  }
  errorNote() {
    return $(`//div[@class="badge ng-binding"]`);
  }
  crossButtonPopUp() {
    return $(`//div[@class="badge ng-binding"]/span`);
  }
  cancleBtn() {
    return $(`//a[normalize-space()='Cancel'])`);
  }
  async InsertJobs() {
    await this.insertJob().click();
    await this.insertJob().click();
    await this.saveBtn().click();
    await browser.pause(process.env.medium_wait);
    await this.jobAction().click();
    await this.changeOpenJobStatus().moveTo();
    await this.Quote().click();
    let statusText = await this.jobStatusText().getText();
    let statusTextInfo = parseInt(statusText.substring(0, 1));
    assert.equal(statusTextInfo, "6");
    await this.okBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async jobUpdated() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Quote");
    }
  }
  __________________________________________________________________________________________;
  // second case//
  async insertingJobsToProductionOrder() {
    await this.insertJob().click();
    await this.insertJob().click();
    await this.saveBtn().click();
    await browser.pause(process.env.medium_wait);
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Quote");
    }
    await this.jobAction().click();
    await this.changeOpenJobStatus().moveTo();
    await this.Tentative().click();

    let statusText = await this.jobStatusText().getText();

    let statusTextInfo = parseInt(statusText.substring(0, 1));
    console.log(statusTextInfo, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    assert.equal(statusTextInfo, "6");
    await this.okBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async jobUpdatedInProductionOrder() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Tentative");
    }
  }

  _______________________________________________________________________;
  //third case//
  async insertingJobsToClassicOrder() {
    await this.insertJob().click();
    await this.insertJob().click();
    await this.saveBtn().click();
    await browser.pause(process.env.medium_wait);
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Quote");
    }
    await this.jobAction().click();
    await this.changeOpenJobStatus().moveTo();
    await this.confirm().click();

    let statusText = await this.jobStatusText().getText();

    let statusTextInfo = parseInt(statusText.substring(0, 1));
    console.log(statusTextInfo, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    assert.equal(statusTextInfo, "6");
    await this.okBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async jobsUpdatedToConfirm() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Confirmed");
    }
  }
  async IncatorIsDisplayed() {
    for (let i = 0; i < 6; i++) {
      const text = await this.redcolor(i).getCSSProperty("color");
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text.value, "rgba(178,34,34,1)");
    }
  }
  async saveBtnDisabled() {
    let btn = await this.saveBtn().isEnabled();
    assert.isFalse(btn, "save button is enabled");
  }
  async addingroomBooth() {
    await this.roomBooth1().click();
    await this.roomBooth2().click();
    await this.roomBooth3().click();
    await this.roomBooth2line().click();
    await this.roomBooth2select().click();
    await this.roomBooth2option().click();
    await this.roomBooth3line().click();
    await this.roomBooth3select().click();
    await this.roomBooth3option().click();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async IncatorsNotDisplayed() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getCSSProperty("color");
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text.value, "rgba(34,34,34,1)");
      let btn = await this.saveBtn().isEnabled();
      assert.isFalse(btn, "save button is enabled");
    }
  }
  async AlljobsUpdatedToConfirm() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Confirmed");
    }
  }
  ________________________________________________________________________________________;
  //fouth case//
  async insertingJobsToProductionOrders() {
    await this.insertJob().click();
    await this.insertJob().click();
    await this.saveBtn().click();
    await browser.pause(process.env.medium_wait);
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Quote");
    }
    await this.jobAction().click();
    await this.changeOpenJobStatus().moveTo();
    await this.confirmPickList().click();

    let statusText = await this.jobStatusText().getText();

    let statusTextInfo = parseInt(statusText.substring(0, 1));
    console.log(statusTextInfo, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    assert.equal(statusTextInfo, "6");
    await this.okBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async jobsUpdatedToConfirmPickList() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Confirm - PickList");
    }
  }
  async IncatorIsDisplayed() {
    for (let i = 0; i < 6; i++) {
      const text = await this.redcolor(i).getCSSProperty("color");
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text.value, "rgba(178,34,34,1)");
    }
  }
  async saveBtnDisabled() {
    let btn = await this.saveBtn().isEnabled();
    assert.isFalse(btn, "save button is enabled");
  }
  async addingroomBooth() {
    await this.roomBooth1().click();
    await this.roomBooth2().click();
    await this.roomBooth3().click();
    await this.roomBooth2line().click();
    await this.roomBooth2select().click();
    await this.roomBooth2option().click();
    await this.roomBooth3line().click();
    await this.roomBooth3select().click();
    await this.roomBooth3option().click();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async IncatorsNotDisplayed() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getCSSProperty("color");
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text.value, "rgba(34,34,34,1)");
      let btn = await this.saveBtn().isEnabled();
      assert.isFalse(btn, "save button is enabled");
    }
  }
  async AlljobsUpdatedToConfirmPicklist() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Confirm - PickList");
    }
  }

  _________________________________________________________________________________;
  // Fifth case//
  async InsertingJobsandLineItems() {
    await this.insertJob().click();
    await this.insertJob().click();
    await this.salesjob1().click();
    await this.itemsTab().click();
    await this.itemsubTab().click();
    await this.salesItem1().doubleClick();
    await this.salesjob2().click();
    await this.itemsTab().click();
    await this.itemsubTab().click();
    await this.salesItem2().doubleClick();
    await this.salesjob3().click();
    await this.itemsTab().click();
    await this.itemsubTab().click();
    await this.salesItem3().doubleClick();
    await this.Booth1().click();
    await this.Booth2().click();
    await this.Booth3().click();
    await this.roomBooth2line().click();
    await this.roomBooth2select().click();
    await this.roomBooth2option().click();
    await this.roomBooth3line().click();
    await this.roomBooth3select().click();
    await this.roomBooth3option().click();
    await this.saveBtn().click();
    await browser.pause(process.env.medium_wait);
  }

  async addingInvoice() {
    await this.jobAction().click();
    await this.changeOpenJobStatus().moveTo();
    await this.invoice().click();
    let statusText = await this.jobStatusText().getText();

    let statusTextInfo = parseInt(statusText.substring(0, 1));
    console.log(statusTextInfo, "%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%");
    assert.equal(statusTextInfo, "6");
    await this.okBtn().click();
    await browser.pause(process.env.medium_wait);
  }
  async jobsUpdatedToInvoice() {
    for (let i = 0; i < 6; i++) {
      const text = await this.status(i).getText();
      console.log(text, "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^");
      assert.equal(text, "Ready to Invoice");
    }
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async popupisDisplayed() {
    let popup = await this.okBtn().isDisplayed();
    assert.isTrue(popup);
    await this.okBtn().click();
    await browser.pause(process.env.medium_wait);
    let editable = await this.roomBooth2select().isDisplayed();
    assert.isFalse(editable, "order is editable");
  }

  // 6th case//
  async searchForOrders() {
    await this.searchButton().waitForClickable();
    await this.searchButton().click();
    await this.classicOrder().waitForDisplayed();
    await this.classicOrder().click();
    await browser.pause(5000);
    await this.jobsButton().waitForDisplayed();
    await browser.pause(5000);
    await this.jobsButton().waitForClickable();
    await this.jobsButton().click();
  }

  async verifyOrders() {
    await this.quoteSpace().waitForDisplayed();
    const text = await this.quoteSpace().getText();
    // expect(text.trim()).not.toBe('');
    assert.notStrictEqual(
      text.trim(),
      "",
      "The element does not contain any text."
    );
  }

  async jobActions() {
    await this.jobAction().click();
    await this.changeOpenJobStatus().moveTo();
    await this.cancleBtn().click();
  }

  async verifyJobStatusUpdate() {
    await browser.pause(5000);
    await this.jobStatusUpdate().waitForDisplayed();
    expect(await this.jobStatusUpdate().isDisplayed()).equal(true);
    await this.okButton().click();
  }

  async verifyCancelStatus() {
    await this.quoteSpace().waitForDisplayed();
    const cancelText = await this.quoteSpace().getText();
    expect(cancelText.trim()).equal("Cancel");
    if (await this.errorNote().isDisplayed()) {
      await this.crossButtonPopUp().click();
      await browser.pause(2000);
    }
    await this.saveButton().waitForClickable();
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    await this.emptyField().waitForDisplayed();
    const emptyText = await this.emptyField().getText();
    // expect(emptyText.trim()).not.toBe('');
    expect(emptyText.trim()).equal("");
  }
}
module.exports = new jobAction();
