const { When, Then } = require("@wdio/cucumber-framework");
const LoginPage = require("../pageobjects/login.page");
const paymentData = require("../../data/paymentSearchData.json");
const navigatorLoginPage = require("../pageobjects/login.navigator.page");
const paymentListSearch = require("../pageobjects/paymentlistSearch.navigator.page");
const addItemsPage = require("../pageobjects/addItems.navigator.page");
const orderSearch = require("../pageobjects/orderSearch.navigator.page");

const pages = {
  login: LoginPage,
  navigatorLogin: navigatorLoginPage,
  paymentList: paymentListSearch,
  navigate: paymentListSearch,
};
const page = null;

When(/^I clicked on payment search tab (\w+) page$/, async (page) => {
  this.page = page;
  await paymentListSearch.clickOnPaymentLstSearchTab();
  await paymentListSearch.paymentSearchBtn();
});

When(/^I changed to other job location on page$/, async () => {
  console.log("Entering to loc det:");
  let locationData = paymentData.joblocationId;
  await orderSearch.changeLocation(locationData);
});

When(/^I entered order number search$/, async () => {
  await pages[this.page].searchPaymentListOrderNum();
});
When(/^I entered order name search$/, async () => {
  await pages[this.page].searchPaymentListOrderName();
});

/* second phase test cases*/

When(/^I changed to other job location at location field$/, async () => {
  console.log("Entering to loc det:");
  let locationData = paymentData.joblocationId;
  await pages[this.page].changejobLocation(locationData);
});

When(/^I choose Payments to Capture and search for payment list$/, async () => {
  await pages[this.page].searchForPaymentlist();
});

Then(
  /^I verify that Search result display correctly in the right table$/,
  async () => {
    let resultText = paymentData.choosePaymentToCaptureResultText;
    await paymentListSearch.verifyPaymentlistResultText(resultText);
  }
);

Then(
  /^I click on Order number column header and verify sort result is correct$/,
  async () => {
    await paymentListSearch.verifySortedOrderNumbers();
  }
);

When(/^I click on any Payment Amount link in the grid$/, async () => {
  await paymentListSearch.clickOnPaymentGrid();
});

Then(
  /^I verify that payment details are at payment tab under the order details page$/,
  async () => {
    await paymentListSearch.verifyOrderDetailsPage();
  }
);

// second phase ans second set test cases -----------------------------------------------

When(/^I changed the job location on (\w+) page$/, async (page) => {
  this.page = page;
  console.log("Payment Page1:" + page);
  let locationData = paymentData.joblocationId;
  await paymentListSearch.changejobLocation(locationData);
});

When(/^I search with order number and click on it$/, async () => {
  let orderNumber = paymentData.orderNumber;
  await pages[this.page].searchOrder(orderNumber);
  await pages[this.page].clickOnOrderNumber(orderNumber);
});

When(/^I clickon the billing tab adding direct method$/, async () => {
  await paymentListSearch.billingInfoTab();
});

When(/^I switch to Payment Tab and click Add payment$/, async () => {
  await paymentListSearch.selectAddPayment();
});

When(/^I click Check and add payment Details$/, async () => {
  let paymentAmount = paymentData.checkPaymentAmount;
  // paymentAmount=parseInt(paymentAmount);
  let checkNumber = paymentData.currentCheckNumber;
  await paymentListSearch.clickOnCheck();
  await paymentListSearch.addCheckPaymentDetails(paymentAmount, checkNumber);
});

Then(/^I verify that Check payment added successfully$/, async () => {
  let checkNumber = paymentData.currentCheckNumber;
  await paymentListSearch.verifyCheckPayment(checkNumber);
});

Then(
  /^I click on Credit card and add Credit Card Info and Cardholder's Billing Address$/,
  async () => {
    let holderName = paymentData.cardHolderName;
    let cardNumber = paymentData.cardNumber;
    let expMonth = paymentData.creditCardExpireMonth;
    let expYear = paymentData.creditCardExpireYear;
    let postalCode = paymentData.postalCode;
    await paymentListSearch.clickOnCreditCard();
    await paymentListSearch.addCreditCardDetails(
      holderName,
      cardNumber,
      expMonth,
      expYear,
      postalCode
    );
  }
);

Then(/^I verify that Credit card payment added successfully$/, async () => {
  let holderName = paymentData.cardHolderName;
  await paymentListSearch.verifyNewCreditCardPayment(holderName);
});

When(/^I click on Credit card and add Credit Card Info$/, async () => {
  let holderName = paymentData.cardHolderName;
  let cardNumber = paymentData.cardNumber;
  let expMonth = paymentData.creditCardExpireMonth;
  let expYear = paymentData.creditCardExpireYear;
  let postalCode = paymentData.postalCode;
  await paymentListSearch.newcardInfo(
    holderName,
    cardNumber,
    expMonth,
    expYear,
    postalCode
  );
});

When(/^I click on the current cardholdername$/, async () => {
  let card = paymentData.cardHolderName;
  await paymentListSearch.secverifyNewCreditCardPayment(card);
  await paymentListSearch.status(card);
});

Then(/^I validate printRecipt$/, async () => {
  // let printReport = paymentData.report;
  await paymentListSearch.printVal();
});

When(
  /^I am  click on the billing tab adding direct (\w+) to the payment tab$/,
  async (page) => {
    this.page = page;
    await paymentListSearch.orderTabdataInfo();
  }
);

// When(/^I click on Credit card and add Credit Card Info$/, async () => {
//   let holderName = paymentData.cardHolderName;
//   let cardNumber = paymentData.cardNumber;
//   let expMonth = paymentData.creditCardExpireMonth;
//   let expYear = paymentData.creditCardExpireYear;
//   let postalCode = paymentData.postalCode;
//   await paymentListSearch.SecurityDeposit(holderName, cardNumber, expMonth, expYear, postalCode);
// });

When(/^I click on order tab from payments page$/, async () => {
  await paymentListSearch.clickOnOrderTab();
});

When(/^I handle rigging issue from payments page$/, async () => {
  await addItemsPage.riggingHandle();
});

When(
  /^I click On the billing tab and navigate to the payment tab$/,
  async () => {
    await paymentListSearch.BankAccount();
  }
);

Then(/^I validate the wireTransfer Payment is Successfull$/, async () => {
  let Amount = paymentData.paymentOfBank;
  let Bank = paymentData.bankName;
  await paymentListSearch.bankDetails(Amount, Bank);
  await paymentListSearch.InfoVal(Bank);
});

When(
  /^I click On the billing tab and navigate to the payment tab and click on  credit card$/,
  async () => {
    await paymentListSearch.newCreditCard();
  }
);

When(/^I Enter the card info and orderInfo$/, async () => {
  let holderName = paymentData.cardHolderName;
  let cardNumber = paymentData.cardNumber;
  let expMonth = paymentData.creditCardExpireMonth;
  let expYear = paymentData.creditCardExpireYear;
  let postalCode = paymentData.postalCode;
  let Amount = paymentData.paymentOfBank;
  await paymentListSearch.PreApporved(
    holderName,
    cardNumber,
    expMonth,
    expYear,
    postalCode,
    Amount
  );
});

Then(/^I validate credit card PreAutharized$/, async () => {
  let holderName = paymentData.cardHolderName;
  await paymentListSearch.PreAutharizationValidation(holderName);
});

When(/^I doubleClick on credit cardnumber add void Reason$/, async () => {
  let holderName = paymentData.cardHolderName;
  await paymentListSearch.informationValidation(holderName);
  await paymentListSearch.voidInformation();
});

Then(/^I Validate the VoidReason$/, async () => {
  let holderName = paymentData.cardHolderName;
  await paymentListSearch.VoidValidation(holderName);
});

When(/^I validate the Email Details$/, async () => {
  let holderName = paymentData.cardHolderName;
  await paymentListSearch.Emaildata(holderName);
});

Then(/^I validate Email was sent$/, async () => {
  let holderName = paymentData.cardHolderName;
  await paymentListSearch.EmailValidation(holderName);
});
