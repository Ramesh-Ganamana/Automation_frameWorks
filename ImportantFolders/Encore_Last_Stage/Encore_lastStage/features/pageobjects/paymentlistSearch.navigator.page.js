const { assert } = require("chai");
const { expect } = require("chai");
require("dotenv").config();
const utilTools = require("../../utils/tools");

class PickListSearchNavigatorPage {
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

  paymentLstSearchTab() {
    return $('//span[text()="Payment Search"]');
  }
  paymentOrderNumField() {
    return $(
      "(//span[contains(text(), ' Order Number ')]/parent::div/input)[2]"
    );
  }
  paymentOrdrNameField() {
    return $("//span[contains(text(), ' Customer Name ')]/parent::div/input");
  }
  paymentSearh() {
    return $("(//input[@class='btn btn-success'])[2]");
  }
  resultOrderNum() {
    return $(
      "//div[@id='paymentSearchGrid']/descendant::div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[6]/a"
    );
  }
  resultOrderName() {
    return $(
      "//div[@id='paymentSearchGrid']/descendant::div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[11]"
    );
  }
  // second phase test case

  paymentToCaptureRadio() {
    return $("(//div[@id='search-form']//input[@type='radio'])[4]");
  }

  paymentListResultText(col) {
    return $(
      "//div[@id='slickGridContainer-paymentSearchGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[" +
        col +
        "]"
    );
  }

  allOrderNumberDivs() {
    return $$(`(//div[@class="slick-cell l5 r5 true"])`);
  }

  orderNumbers(currentIndex) {
    return $(`(//div[@class="slick-cell l5 r5 true"])[${currentIndex}]/a`);
  }

  orderNameColumnHeader() {
    return $("//div[@id='paymentSearchGridContainer']//span[text()='Order #']");
  }

  paymentAmountGrid() {
    return $(
      '//div[@id="slickGridContainer-paymentSearchGrid"]//div[contains(@class,"ui-widget-content slick-row")][1]/div[2]/a'
    );
  }

  orderTab() {
    return $("//a[normalize-space()='Order']");
  }

  paymentDetailsSection() {
    return $("//div[@id='oeOrderBody']//h4[text()='Payments List']");
  }

  navPaymentAmount() {
    return $("(//div[@class='slick-cell l4 r4 cellNumber'])[1]");
  }

  orderHeader() {
    return $(`//a[@ng-click="setOrderEntryMainTab('Order')"]`);
  }

  orderNumberField() {
    return $(`//\*[contains(text(), 'Order Number')]/parent::div/input`);
  }

  searchOrderButton() {
    return $("//input[@value='Search']");
  }

  orderLink(orderNumber) {
    return $(
      `//div[@id='orderSearchGrid']//div[normalize-space()='${orderNumber}']`
    );
  }

  paymentTabNavigator() {
    return $("//ul[@id='oeOrderMenu']//a[normalize-space()='Payment']");
  }
  paymentbtn() {
    return $(`(//a[normalize-space()='Payment'])[1]`);
  }

  addPaymentBtn() {
    return $(
      "//div[@id='oeOrderBody']//button[normalize-space()='Split button!']"
    );
  }

  addPaymentOptions(currentOption) {
    return $(
      "//div[@id='oeOrderBody']//a[normalize-space()='" + currentOption + "']"
    );
  }

  paymentAmountField() {
    return $("//input[@id='amount']");
  }

  checkNumberField() {
    return $("//input[@ng-model='payment.CheckNumber']");
  }

  paymentSaveButton() {
    return $("//div[@id='buttonsAction']//button[text()='Save']");
  }

  newCheckPaymentRow(currentText) {
    return $(
      `//div[@id='oeCreditGrid']//div[@class='slick-cell l3 r3' and text()='${currentText}']`
    );
  }

  cardHolderNameField() {
    return $(`//input[@ng-model='payment.CardHolderName']`);
  }

  cardNumberField() {
    return $(`//input[@ng-model='payment.CardNumber']`);
  }

  cardExpireMonthField() {
    return $(`//select[@ng-model='payment.CardExpirationMonth']`);
  }

  cardExpireYearField() {
    return $(`//select[@ng-model='payment.CardExpirationYear']`);
  }

  usAdressCheckBox() {
    return $("//input[@ng-model='payment.UseUSAddress']");
  }

  postalCode() {
    return $("//input[@ng-model='payment.ZipCode']");
  }

  saveCriditCardDetails() {
    return $("//div[@id='buttonsAction']//button[text()='Validate/Save']");
  }
  //3rd case//
  newCrediCardPayment(currentName) {
    return $(
      `//div[@id='oeCreditGrid']//div[@class='slick-cell l2 r2' and text()='${currentName}']`
    );
  }
  newcard(current) {
    return $(`(//div[normalize-space()='${current}'])[1]/following::div[3]`);
  }
  orderInfo() {
    return $(`//a[normalize-space()='Order Information']`);
  }
  partialPaymentInfo() {
    return $(
      `(//label[normalize-space()='Partial Payment Amount'])[1]//parent::div/following::div[1]/input`
    );
  }
  ChargeRemainingBalance() {
    return $(
      `(//label[normalize-space()='Charge Remaining Balance'])[1]//parent::div/following::div[1]//input`
    );
  }
  caputreButton2() {
    return $(`(//button[normalize-space()='Capture'])[1]`);
  }
  validateBtn() {
    return $(`//button[@ng-click="save('ValidateAndSave')"]`);
    // return $(`(//button[normalize-space()='Capture'])[1]`);
  }
  creditcard() {
    return $(`(//a[normalize-space()='Credit Card'])[1]`);
  }
  billingmethod() {
    return $(
      `//ul[@id='oeOrderMenu']//a[normalize-space()='Billing & Shipping']`
    );
  }
  directmethod() {
    return $(`(//input[@id='DirectBillingRadioButton'])[1]`);
  }
  chargeRemainingBal() {
    return $(
      `(//label[normalize-space()='Charge Remaining Balance'])[1]//parent::div/following::div[1]/input`
    );
  }
  printRecipt() {
    return $(`(//button[normalize-space()='Print Receipt'])[1]`);
  }
  previewReport() {
    return $(`(//a[normalize-space()='Report Preview'])[1]`);
  }
  EventName() {
    return $(`(//nobr[normalize-space()='OppSalesRole'])[1]`);
  }
  printRecVal() {
    return $("//span/nobr[contains(text(),'CustomerID')]");
  }
  //fourth test  case//
  securityDepositButton() {
    return $(`(//button[normalize-space()='Add Security Deposit'])[1]`);
  }
  ValidateButton() {
    return $(`(//button[normalize-space()='Validate/Save'])[1]`);
  }
  wireTransferACH() {
    return $(`//a[contains(text(),'  Wire Transfer/ACH')]`);
  }
  bankNameField() {
    return $(`//label[contains(text(),'Bank Name')]//following::div[1]//input`);
  }
  BankNameSaveBtn() {
    return $(`//button[@ng-click='save()']`);
  }
  paymentAmount() {
    return $(
      `//label[contains(text(),'Payment Amount')]//following::div[1]//input`
    );
  }
  CurrentBankName(currentNameOfBank) {
    return $(`//div[normalize-space()='` + currentNameOfBank + `']`);
  }
  PreAuthorised() {
    return $(`//button[normalize-space()='Pre-Authorize']`);
  }
  PreAuth(CardHolderName) {
    return $(
      `//div[normalize-space()='` + CardHolderName + `']//following::div[3]`
    );
  }
  Information(CardName) {
    return $(`//div[normalize-space()='` + CardName + `']//following::div[1]`);
  }
  voidReason() {
    return $(
      `//div[normalize-space()='Void Reason']//following::div[1]//select`
    );
  }
  Reason() {
    return $(
      `//div[normalize-space()='Void Reason']//following::div[1]//select//option[contains(text(),'Updated Card')]`
    );
  }
  VoidSave() {
    return $(`//button[normalize-space()='Save']`);
  }
  ResendEmail() {
    return $(`//button[contains(text(),'Resend Email')]`);
  }
  Email(emailVal) {
    return $(`//div[normalize-space()='` + emailVal + `']//following::div[4]`);
  }
  async clickOnPaymentLstSearchTab() {
    await this.paymentLstSearchTab().waitForClickable();
    await this.paymentLstSearchTab().waitForDisplayed();
    await this.paymentLstSearchTab().click();
  }

  async paymentSearchBtn() {
    await this.paymentSearh().waitForClickable();
    await this.paymentSearh().click();
    await this.resultOrderNum().waitForClickable();
    if ((await this.resultOrderNum().isDisplayed()) == false) {
      await this.paymentSearh().waitForClickable();
      await this.paymentSearh().click();
    }
  }

  async searchPaymentListOrderNum() {
    await this.resultOrderNum().waitForDisplayed();
    const paymentOrderNumAppBeforeSrch = await this.resultOrderNum().getText();
    await this.paymentOrderNumField().waitForDisplayed();
    await this.paymentOrderNumField().setValue(paymentOrderNumAppBeforeSrch);
    await this.paymentSearh().waitForClickable();
    await this.paymentSearh().click();
    const paymentOrderNumAppAfterSrch = await this.resultOrderNum().getText();
    assert.equal(paymentOrderNumAppAfterSrch, paymentOrderNumAppBeforeSrch);
  }
  async searchPaymentListOrderName() {
    await this.resultOrderName().waitForDisplayed();
    const paymentOrderNameAppBeforeSrch =
      await this.resultOrderName().getText();
    await this.paymentOrdrNameField().waitForDisplayed();
    await this.paymentOrdrNameField().setValue(paymentOrderNameAppBeforeSrch);
    await this.paymentSearh().waitForClickable();
    await this.paymentSearh().click();
    const paymentOrderNameAppAfterSrch = await this.resultOrderName().getText();
    assert.equal(paymentOrderNameAppAfterSrch, paymentOrderNameAppBeforeSrch);
  }
  //  second phase test case

  async searchForPaymentlist() {
    await this.paymentToCaptureRadio().waitForClickable();
    await this.paymentToCaptureRadio().click();
    await this.paymentSearh().click();
    await this.paymentSearh().waitForClickable();
    await this.paymentSearh().click();
  }

  async verifyPaymentlistResultText(resultText) {
    await this.paymentListResultText(2).waitForClickable();
    for (let i = 1; i < 6; i++) {
      let updatedResultText = await this.paymentListResultText(i).getText();
      console.log(
        "---------updatedResultText-------------: " + updatedResultText
      );
      if (updatedResultText == resultText) {
        assert.equal(resultText, updatedResultText);
      }
    }
  }

  async getOrderNumberArray(maxIndex) {
    let orderNumbers = [];
    for (let i = 1; i <= maxIndex; i++) {
      orderNumbers.push(parseInt(await this.orderNumbers(i).getText()));
    }
    return orderNumbers;
  }

  async verifySortedOrderNumbers() {
    let numberOfOrders = await this.allOrderNumberDivs().length;
    let currentOrderNumber = await this.getOrderNumberArray(numberOfOrders);
    currentOrderNumber.sort(function (a, b) {
      return a - b;
    });
    await this.orderNameColumnHeader().click();
    await browser.pause(process.env.small_wait);
    let updatedAscendingOrderNumber = await this.getOrderNumberArray(
      numberOfOrders
    );
    assert.deepEqual(
      currentOrderNumber,
      updatedAscendingOrderNumber,
      "sort numbers are not correct"
    );
  }

  async clickOnPaymentGrid() {
    let paymentAmount = await this.paymentAmountGrid().getValue();
    await this.paymentAmountGrid().waitForClickable();
    await this.paymentAmountGrid().click();
    return paymentAmount;
  }

  async verifyOrderDetailsPage() {
    await this.orderTab().waitForClickable();
    let isOrderTabEnabled = await this.orderTab().isEnabled();
    assert.isTrue(isOrderTabEnabled, "order details page is not opend");
    let isPaymentSectionEnabled =
      await this.paymentDetailsSection().isEnabled();
    assert.isTrue(
      isPaymentSectionEnabled,
      "payment details section is not under order details page"
    );
    assert.isTrue(await this.navPaymentAmount().isDisplayed());
    // let navPaymentAmount = await this.navPaymentAmount().getText();
    // assert.equal(paymentAmount, navPaymentAmount, "actual payment details are not applied");
  }

  // second phase second set test cases -----------------------------------

  async searchOrder(orderId) {
    await this.orderNumberField().waitForClickable();
    await this.orderNumberField().click();
    await this.orderNumberField().setValue(orderId);
    await this.searchOrderButton().waitForClickable();
    await this.searchOrderButton().click();
  }

  async clickOnOrderNumber(orderId) {
    await browser.pause(process.env.small_wait);
    await this.orderLink(orderId).click();
    await browser.pause(process.env.medium_wait);
  }
  async billingTab() {
    await this.billingmethod().waitForClickable();
    await this.billingmethod().click();
    await this.directmethod().waitForClickable();
    await this.directmethod().click();
    await this.paymentbtn().click();
    await this.addPaymentBtn().click();
  }
  async selectAddPayment() {
    await this.paymentTabNavigator().waitForClickable();
    await this.paymentTabNavigator().click();
    await this.addPaymentBtn().click();
  }

  async clickOnCheck() {
    await this.addPaymentOptions("Check").waitForClickable();
    await this.addPaymentOptions("Check").click();
  }

  async addCheckPaymentDetails(paymentAmount, checkNumber) {
    await this.paymentAmountField().setValue(5);
    await this.paymentAmountField().setValue(paymentAmount);
    await this.checkNumberField().setValue(checkNumber);
    await this.paymentSaveButton().click();
  }

  async verifyCheckPayment(checkNumber) {
    await this.orderTab().waitForClickable();
    await this.newCheckPaymentRow(checkNumber).waitForDisplayed();
    let isCehckPaymentDisplayed = await this.newCheckPaymentRow(
      checkNumber
    ).isDisplayed();
    assert.isTrue(isCehckPaymentDisplayed, "new check paymment were not added");
    // const fs = require("fs");
    // const paymentTestData = JSON.parse(
    //   fs.readFileSync(`${process.cwd()}\\data\\paymentSearchData.json`)
    // );
    // paymentTestData.currentCheckNumber = parseInt(checkNumber) + 1;
    // const fsWrite = require("fs");
    // fsWrite.writeFileSync(
    //   `${process.cwd()}\\data\\paymentSearchDataNew.json`,
    //   JSON.stringify(paymentTestData)
    // );
  }

  async clickOnCreditCard() {
    await this.addPaymentOptions("Credit Card").waitForClickable();
    await this.addPaymentOptions("Credit Card").click();
  }

  async addCreditCardDetails(
    holderName,
    cardNumber,
    expMonth,
    expYear,
    postalCode
  ) {
    await this.cardHolderNameField().waitForClickable();
    await this.cardHolderNameField().click();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().setValue(holderName);
    await this.cardNumberField().click();
    await browser.pause(process.env.small_wait);
    await this.cardNumberField().setValue(cardNumber);
    await this.cardExpireMonthField().selectByAttribute("label", expMonth);
    await this.cardExpireMonthField().selectByAttribute("label", expMonth);
    await this.cardExpireYearField().selectByAttribute("label", expYear);
    await this.cardExpireYearField().selectByAttribute("label", expYear);
    await this.usAdressCheckBox().waitForClickable();
    await this.usAdressCheckBox().click();
    await browser.pause(process.env.small_wait);
    await this.postalCode().click();
    await this.postalCode().setValue(postalCode);
    await this.saveCriditCardDetails().waitForClickable();
    await this.saveCriditCardDetails().click();
  }

  async verifyNewCreditCardPayment(currentName) {
    await this.newCrediCardPayment(currentName).waitForDisplayed();
    let isPaymentDisplayed = await this.newCrediCardPayment(
      currentName
    ).isDisplayed();
    assert.isTrue(isPaymentDisplayed, "credit card payment were not added");
    // const fs = require("fs");
    // const paymentTestData = JSON.parse(
    //   fs.readFileSync(`${process.cwd()}\\data\\paymentSearchData.json`)
    // );
    // paymentTestData.cardHolderName =
    //   currentName.substring(0, 15) + utilTools.generateRandString(5);
    // const fsWrite = require("fs");
    // fsWrite.writeFileSync(
    //   `${process.cwd()}\\data\\paymentSearchData.json`,
    //   JSON.stringify(paymentTestData)
    // );
  }
  ///   3rd  test case//
  async billingInfoTab() {
    await this.billingmethod().waitForClickable();
    await this.billingmethod().click();
    await this.directmethod().waitForClickable();
    await this.directmethod().click();
    await this.paymentbtn().click();
  }

  async newcardInfo(holderName, cardNumber, expMonth, expYear, postalCode) {
    if ((await this.creditcard().isDisplayed()) == true) {
      await this.creditcard().waitForClickable();
      await this.creditcard().click();
    }
    await this.cardHolderNameField().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().click();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().setValue(holderName);
    await this.cardHolderNameField().click();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().setValue(holderName);
    await this.cardNumberField().click();
    await browser.pause(process.env.small_wait);
    await this.cardNumberField().setValue(99);
    await browser.pause(process.env.small_wait);
    await this.cardNumberField().click();
    await this.cardNumberField().setValue(cardNumber);
    await this.cardExpireMonthField().selectByAttribute("label", expMonth);
    await this.cardExpireMonthField().selectByAttribute("label", expMonth);
    await this.cardExpireYearField().selectByAttribute("label", expYear);
    await this.cardExpireYearField().selectByAttribute("label", expYear);
    await browser.pause(process.env.small_wait);
    await this.usAdressCheckBox().click();
    await browser.pause(process.env.small_wait);
    await this.postalCode().click();
    await browser.pause(process.env.small_wait);
    await this.postalCode().setValue(postalCode);
    await browser.pause(process.env.small_wait);
    await this.orderInfo().click();
    // await this.chargeRemainingBal().waitForClickable();
    // await this.chargeRemainingBal().click();
    // await this.partialPaymentInfo().waitForClickable();
    // await this.partialPaymentInfo().click();
    // await browser.keys("\ue003");
    // await browser.pause(process.env.small_wait);
    // await this.partialPaymentInfo().click();
    // await browser.pause(process.env.small_wait);
    // await this.partialPaymentInfo().setValue("292");
    await browser.pause(process.env.small_wait);
    await this.validateBtn().click();
    await browser.pause(process.env.small_wait);
  }

  async secverifyNewCreditCardPayment(current) {
    await this.newcard(current).waitForDisplayed();
    let PaymentDisplayed = await this.newcard(current).isDisplayed();
    assert.isTrue(PaymentDisplayed, "credit card payment were not added");
    // const fs = require("fs");
    // const paymentTest = JSON.parse(
    //   fs.readFileSync(`${process.cwd()}\\data\\paymentSearchData.json`)
    // );
    // paymentTest.cardHolderName =
    //   current.substring(0, 15) + utilTools.generateRandString(5);
    // const fsWrite = require("fs");
    // fsWrite.writeFileSync(
    //   `${process.cwd()}\\data\\paymentSearchDataNew.json`,
    //   JSON.stringify(paymentTest)
    // );
  }
  async status(current) {
    await this.newcard(current).waitForClickable();
    await this.newcard(current).click();
    await browser.pause(process.env.medium_wait_wait);
  }
  async printVal() {
    await this.printRecipt().click();
    await this.printRecVal().waitForDisplayed();
    assert.isTrue(await this.printRecVal().isDisplayed());
  }
  //Fourth Testcase//

  async orderTabdataInfo() {
    await this.orderTab().click();
    await this.billingmethod().click();
    await this.directmethod().waitForClickable();
    await this.directmethod().click();
    await this.paymentbtn().click();
    await this.securityDepositButton().click();
  }
  async SecurityDeposit(holderName, cardNumber, expMonth, expYear, postalCode) {
    await this.cardHolderNameField().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().click();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().setValue(holderName);
    await this.cardNumberField().click();
    await browser.pause(process.env.small_wait);
    await this.cardNumberField().setValue(99);
    await this.cardNumberField().click();
    await browser.pause(process.env.small_wait);
    await this.cardNumberField().setValue(cardNumber);
    await browser.pause(process.env.small_wait);
    await this.cardExpireMonthField().selectByAttribute("label", expMonth);
    await this.cardExpireMonthField().selectByAttribute("label", expMonth);
    await this.cardExpireYearField().selectByAttribute("label", expYear);
    await this.cardExpireYearField().selectByAttribute("label", expYear);
    await browser.pause(process.env.small_wait);
    await this.usAdressCheckBox().click();
    await browser.pause(process.env.small_wait);
    await this.postalCode().click();
    await browser.pause(process.env.small_wait);
    await this.postalCode().setValue(postalCode);
    await browser.pause(process.env.small_wait);
    await this.ValidateButton().click();
  }
  async clickOnOrderTab() {
    await this.orderHeader().waitForClickable();
    await this.orderHeader().click();
  }

  async BankAccount() {
    await this.billingmethod().waitForClickable();
    await this.billingmethod().click();
    await this.directmethod().waitForClickable();
    await this.directmethod().click();
    await this.paymentbtn().click();
    await this.addPaymentBtn().click();
    await this.wireTransferACH().click();
  }
  async bankDetails(paymentOfBank, bankName) {
    await this.paymentAmount().setValue(paymentOfBank);
    await this.paymentAmount().setValue(paymentOfBank);
    await this.bankNameField().setValue(bankName);

    await this.BankNameSaveBtn().waitForClickable();
    await this.BankNameSaveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async InfoVal(currentNameOfBank) {
    await this.CurrentBankName(currentNameOfBank).waitForDisplayed();
    assert.isTrue(await this.CurrentBankName(currentNameOfBank).isDisplayed());
  }

  async newCreditCard() {
    await this.billingmethod().waitForClickable();
    await this.billingmethod().click();
    await this.directmethod().waitForClickable();
    await this.directmethod().click();
    await this.paymentbtn().click();
    await this.addPaymentBtn().click();
    await this.addPaymentOptions("Credit Card").waitForClickable();
    await this.addPaymentOptions("Credit Card").click();
  }
  async PreApporved(
    holderName,
    cardNumber,
    expMonth,
    expYear,
    postalCode,
    paymentOfBank
  ) {
    await this.cardHolderNameField().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().click();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().setValue(holderName);
    await this.cardHolderNameField().click();
    await browser.pause(process.env.small_wait);
    await this.cardHolderNameField().setValue(holderName);
    await this.cardNumberField().click();
    await browser.pause(process.env.small_wait);
    await this.cardNumberField().setValue(99);
    await browser.pause(process.env.small_wait);
    await this.cardNumberField().click();
    await this.cardNumberField().setValue(cardNumber);
    await this.cardExpireMonthField().selectByAttribute("label", expMonth);
    await this.cardExpireMonthField().selectByAttribute("label", expMonth);
    await this.cardExpireYearField().selectByAttribute("label", expYear);
    await this.cardExpireYearField().selectByAttribute("label", expYear);
    await browser.pause(process.env.small_wait);
    await this.usAdressCheckBox().click();
    await browser.pause(process.env.small_wait);
    await this.postalCode().click();
    await browser.pause(process.env.small_wait);
    await this.postalCode().setValue(postalCode);
    await browser.pause(process.env.small_wait);
    await this.orderInfo().waitForClickable();
    await this.orderInfo().click();
    // await this.chargeRemainingBal().waitForClickable();
    // await this.chargeRemainingBal().click();
    // await this.partialPaymentInfo().waitForClickable();
    await browser.pause(process.env.small_wait);
    await this.ChargeRemainingBalance().waitForClickable();
    await this.ChargeRemainingBalance().click();
    await browser.pause(process.env.small_wait);
    await this.partialPaymentInfo().waitForClickable();
    await this.partialPaymentInfo().click();
    await browser.keys("\ue003");

    // await browser.pause(process.env.small_wait);
    // await this.partialPaymentInfo().click();
    // await browser.pause(process.env.small_wait);
    await this.partialPaymentInfo().setValue(paymentOfBank);
    await browser.pause(process.env.small_wait);
    await this.PreAuthorised().click();
    await browser.pause(process.env.small_wait);
  }
  async PreAutharizationValidation(CardHolderName) {
    assert.isTrue(await this.PreAuth(CardHolderName).isDisplayed());
  }
  async informationValidation(CardName) {
    await this.Information(CardName).waitForClickable();
    await this.Information(CardName).doubleClick();
    await browser.pause(process.env.small_wait);
    await this.orderInfo().waitForClickable();
    await this.orderInfo().click();
  }

  async voidInformation() {
    await this.voidReason().waitForClickable();
    await this.voidReason().click();
    await this.Reason().moveTo();
    await this.Reason().click();
    await this.VoidSave().waitForClickable();
    await this.VoidSave().click();
    await browser.pause(process.env.small_wait);
  }
  async VoidValidation(CardHolderName) {
    assert.isTrue(await this.PreAuth(CardHolderName).isDisplayed());
  }
  async Emaildata(CardHolderName) {
    await this.PreAuth(CardHolderName).click();
    await this.ResendEmail().click();
    await browser.pause(process.env.small_wait);
  }
  async EmailValidation(emailVal) {
    assert.isTrue(await this.Email(emailVal).isDisplayed());
  }
}
module.exports = new PickListSearchNavigatorPage();
