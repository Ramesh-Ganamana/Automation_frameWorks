const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
const data = require("../../data/flights.json");

class flightInfo {
  Trip() {
    return $(`(//span[normalize-space()='Round Trip'])[1]`);
  }

  flights() {
    return $(`(//span[text()='Flights'])[2]`);
  }
  oneway() {
    return $(`//span[text()="One Way"]`);
  }
  multicity() {
    return $(`//span[text()="Multi City"]`);
  }
  origin() {
    return $(`(//input[@placeholder="Origin"])[1]`);
  }
  destination() {
    return $(`(//input[@placeholder="Destination"])[1]`);
  }
  departDate() {
    return $(`(//input[@placeholder="Date"])[1]`);
  }
  monthForwardBtn() {
    return $(`//th[@class="next available ng-star-inserted"]`);
  }
  Exactday() {
    return $(`(//div[text()="31"])[2]`);
  }
  Exactday2() {
    return $(`(//div[text()="6"])[3]`);
  }
  returnDate() {
    return $(`(//input[@placeholder="Date"])[2]`);
  }
  selecttraveler() {
    return $(`(//span[normalize-space()='Traveler'])[1]`);
  }
  classdropdown() {
    return $(`(//span[@class="ng-arrow-wrapper"])[1]`);
  }
  bussiness() {
    return $(`(//span[text()="Business"])[1]`);
  }
  serchBtn() {
    return $(`(//span[@class='mr-1'][normalize-space()='Search'])[1]`);
  }
  addTraveler() {
    return $(`(//span[normalize-space()='Add Traveler'])[1]`);
  }
  RegisterNewEmployee() {
    return $(`//span[normalize-space()="+"]`);
  }
  EmployeeFirstName() {
    return $(`//input[@placeholder="First Name"]`);
  }
  EmployeeLastName() {
    return $(`(//input[@placeholder='Last Name'])[1]`);
  }
  EmployeeMobileNumber() {
    return $(`(//input[@name='mobNo'])[1]`);
  }
  EmployeeEmailAddress() {
    return $(`(//input[@placeholder='Email'])[1]`);
  }
  selectMonthDropdown() {
    return $(`(//span[@class='ng-arrow-wrapper'])[2]`);
  }
  birthMothOfNewEmployee() {
    return $(`(//span[normalize-space()='06'])[1]`);
  }
  DateDropdown() {
    return $(`(//span[@class='ng-arrow-wrapper'])[3]`);
  }
  DateOfNewEmployee() {
    return $(
      `(//span[@class='ng-option-label ng-star-inserted'][normalize-space()='09'])[1]`
    );
  }
  YearDropDown() {
    return $(`(//span[@class='ng-arrow-wrapper'])[4]`);
  }
  YearOfNewEmployee() {
    return $(`(//span[normalize-space()='2001'])[1]`);
  }
  GenderDropDown() {
    return $(`(//span[@class='ng-arrow-wrapper'])[5]`);
  }
  EmployeeGender() {
    return $(`(//div[@id='ac7464fc628f-1'])[1]`);
  }
  checkbox() {
    return $(`(//span[@class='radio-checkmark'])[1]`);
  }
  registerEmployeeButton() {
    return $(`(//span[normalize-space()='Register Employee'])[1]`);
  }
  async roundTrip(Origin, Destination) {
    await browser.pause(1000);

    await this.flights().click();

    await this.Trip().click();

    await this.origin().click();

    await this.origin().setValue(Origin);
    await browser.pause(1000);
    await browser.keys("\uE007");
    await this.destination().setValue(Destination);
    await browser.pause(1000);
    await browser.keys("\uE007");
    await this.departDate().click();
    await this.monthForwardBtn().click();
    await this.monthForwardBtn().click();
    await this.Exactday().click();
    await this.Exactday2().click();
    //await this.returnDate().click();
    await browser.pause(3000);
    await this.selecttraveler().click();
    await browser.pause(3000);
    await this.classdropdown().click();
    await browser.pause(1000);
    await this.bussiness().click();
    await this.serchBtn().click();
    await browser.pause(10000);
  }
  async registerForm() {
    await this.addTraveler().click();
    console.log(
      "#################################################################"
    );
    await this.RegisterNewEmployee().click();
    console.log(
      "######################################################@@@@@@@@@@@@@@@@@"
    );
    await browser.pause(5000);
    await this.EmployeeFirstName().click();
    console.log(
      "###########################################################!!!!!!!!!!!!"
    );
    await this.EmployeeFirstName().setValue("jhon");
    console.log(
      "#######################################################%%%%%%%%%%%%"
    );
    await this.EmployeeLastName().click();
    console.log(
      "#######################################################*************"
    );
    await this.EmployeeLastName().setValue("doe");
    console.log(
      "######################################################(((((((((((("
    );
    await this.EmployeeMobileNumber().click();
    console.log(
      "#########################################################))))))))))"
    );
    await this.EmployeeMobileNumber().setValue("7993897838");
    console.log(
      "##############################################%%%%%%%%%%%%%%%%%%%%%#########"
    );
    await this.EmployeeEmailAddress().click();
    console.log(
      "####################################################&&&&&&&&&&&&&&&&&&&&&&&&&&"
    );
    await this.EmployeeEmailAddress().setValue("gunman@guerrillamail.com");
    console.log(
      "############################################^^^^^^^^^^^^^^^^^^^^^^^^"
    );
    await this.selectMonthDropdown().click();
    await this.birthMothOfNewEmployee().click();
    await this.DateDropdown().click();
    await this.DateOfNewEmployee().click();
    await this.YearDropDown().click();
    await this.YearOfNewEmployee().click();
  }
}

module.exports = new flightInfo();
