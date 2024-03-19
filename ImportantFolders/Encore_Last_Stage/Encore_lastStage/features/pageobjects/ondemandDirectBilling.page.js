const { assert } = require("chai");
const { expect } = require("chai");

class OnDemndBilling {
  directBillInvoices() {
    return $(`//a[@id='DirectBillInvoices']`);
  }
  findBillableOrders() {
    return $(`//button[normalize-space()='Find Billable Orders']`);
  }
  billingMetod() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][1]//div[12]`
    );
  }
  checkBox1() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][1]//div[1]`
    );
  }
  checkBox2() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][2]//div[1]`
    );
  }
  checkBox3() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][3]//div[1]`
    );
  }
  checkBox4() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][4]//div[1]`
    );
  }
  errorImage1() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][1]//div[2]//span`
    );
  }
  errorImage2() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][2]//div[2]//span`
    );
  }
  errorImage3() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][3]//div[2]//span`
    );
  }
  errorImage4() {
    return $(
      `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][4]//div[2]//span`
    );
  }
  // checkBoxInput1() {
  //   return $(
  //     `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][1]//div[1]//input`
  //   );
  // }
  // checkBoxInput2() {
  //   return $(
  //     `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][2]//div[1]//input`
  //   );
  // }
  // checkBoxInput3() {
  //   return $(
  //     `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][3]//div[1]//input`
  //   );
  // }
  // checkBoxInput4() {
  //   return $(
  //     `//div[@id='directBillOrderSearchGrid']//div[contains(@class,'ui-widget-content slick-row ')][4]//div[1]//input`
  //   );
  // }
  markRtiBtn() {
    return $(`//button[normalize-space()='Mark Orders RTI']`);
  }
  RtiOkBtn() {
    return $(`//button[normalize-space()='OK']`);
  }
  OrderStatus() {
    return $(`//div[@role='dialog']`);
  }
  RtiCloseButton() {
    return $(`//button[normalize-space()='Close']`);
  }
  async invoice() {
    await this.directBillInvoices().click();
    await browser.pause(3000);
    assert.isTrue(await this.findBillableOrders().isDisplayed());
    await this.findBillableOrders().waitForClickable();
    await this.findBillableOrders().click();
    const method = await this.billingMetod().getText();
    console.log(
      method,
      "^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
    );
    await this.billingMetod().click();
    await browser.pause(3000);
  }
  async markAsRTI() {
    await this.checkBox1().click();
    await this.checkBox2().click();
    await this.checkBox3().click();
    await this.checkBox4().click();
    // await this.checkBoxInput1().click();
    // await this.checkBoxInput2().click();
    // await this.checkBoxInput3().click();
    // await this.checkBoxInput4().click();
    await browser.pause(process.env.small_wait);
    await this.markRtiBtn().click();
    await this.RtiOkBtn().click();
    await browser.pause(process.env.small_wait);
    assert.isTrue(await this.OrderStatus().isDisplayed());
    await this.RtiCloseButton().click();
  }
  async ValidateEroorMessage() {
    assert.isTrue(await this.errorImage1().isDisplayed());
    assert.isTrue(await this.errorImage2().isDisplayed());
    assert.isTrue(await this.errorImage3().isDisplayed());
    assert.isTrue(await this.errorImage4().isDisplayed());
  }
}
module.exports = new OnDemndBilling();
