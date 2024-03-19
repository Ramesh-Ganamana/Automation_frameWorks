const { assert } = require("chai");
const { expect } = require("chai");
const utilTools = require("../../utils/tools");

class job {
  operationsLine() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[2]/div[10]`
    );
  }
  itemsTab() {
    return $(`(//div[@id='jobPanelDetailsNav'])/child::ul//li[1]/a`);
  }
  itemBtn() {
    return $(`//label[@class='btn order-product-icon-btn'][6]/span`);
  }
  itemResults() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[17]/child::div[5]/div[1]`
    );
  }
  saveButton() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }
  salesLink() {
    return $(`(//div[@class='landingFakeLink'])[1]`);
  }
  checkBox() {
    return $(`(//input[@type='checkbox'])[38]`);
  }
  reviewRequiredCheckBox() {
    return $(`(//div[@id='oeJobGrid']//input[@type='checkbox'])[1]`);
  }
  packageBtn() {
    return $(`//label[@class='btn order-product-icon-btn'][4]/span`);
  }
  packageResults() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[15]/child::div[7]/div[1]`
    );
  }
  status1() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[1]/div[7]`
    );
  }
  status2() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[1]/div[7]/select`
    );
  }
  status3() {
    return $(
      `(//div[@class='grid-canvas grid-canvas-top grid-canvas-left'])[8]/child::div[1]/div[7]/select/option[@value='2']`
    );
  }

  quantity() {
    return $(
      `//div[normalize-space()='22" Computer Monitor']//preceding-sibling::div[1]`
    );
  }
  quantityInput() {
    return $(
      `//div[normalize-space()='22" Computer Monitor']//preceding-sibling::div[1]/input`
    );
  }
  messageOfNERF() {
    return $(
      `//span[normalize-space(text())='Quantity has been updated in the Sales job, please check the availability/NERF']`
    );
  }
  opsReviewCheckBox() {
    return $(`(//input[@type='checkbox'])[40]`);
  }
  async addItem() {
    await this.operationsLine().click();
    await this.itemsTab().click();
    await this.itemBtn().click();
    await this.itemResults().doubleClick();

    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    await this.operationsLine().click();
  }
  async validatingSalesLink() {
    let salesInfo = await this.salesLink();
    let info = await salesInfo.isDisplayed();
    assert.isTrue(info, "saleslink not Displayed");
  }
  //   second case//
  async addPackage() {
    await this.operationsLine().click();
    await this.itemsTab().click();
    await this.packageBtn().click();
    await this.packageResults().doubleClick();
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    await this.operationsLine().click();
  }
  async ClickOnNotRequiredCheckBox() {
    await this.checkBox().click();
    await this.saveButton().click();
    await browser.pause(process.env.medium_wait);
  }
  async verifyingReviewRequiredCheckBox() {
    let RequiredCheckBox = await this.reviewRequiredCheckBox();
    let isChecked = await RequiredCheckBox.isSelected();
    assert.strictEqual(isChecked, false, "Checkbox is not unchecked");
    await this.operationsLine().click();
  }
  //third case//
  async addItems() {
    await this.itemsTab().click();
    await this.itemBtn().click();
    await this.itemResults().doubleClick();
    await this.status1().click();
    await this.status2().click();
    await this.status3().click();
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    await this.quantity().click();
    await this.quantityInput().setValue("10");
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    await this.operationsLine().click();
    await browser.pause(process.env.small_wait);
  }
  async NERFValidation() {
    let nerfMesage = await this.messageOfNERF();
    let message = await nerfMesage.isDisplayed();
    assert.isTrue(message, "message not populated");

    let opsCheckBox = await this.opsReviewCheckBox();
    let box = await opsCheckBox.isSelected();
    assert.isTrue(box, "box is not checked");
  }

  //fourth  case//
  async oprReview() {
    await this.opsReviewCheckBox().click();
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    await this.operationsLine().click();
  }
  async VerifyingNerfMessageNotPopulted() {
    let nerfMesage = await this.messageOfNERF();
    let message = await nerfMesage.isDisplayed();
    assert.isFalse(message, "message not populated");
  }
}

module.exports = new job();
