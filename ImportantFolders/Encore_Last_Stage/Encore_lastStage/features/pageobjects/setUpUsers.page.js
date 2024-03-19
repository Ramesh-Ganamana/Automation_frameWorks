const { assert } = require("chai");
const { expect } = require("chai");
const utilTools = require("../../utils/tools");

class setUpUser {
  setup() {
    return $(`//a[normalize-space()='Setup']`);
  }
  users() {
    return $(`//a[normalize-space()='Users']`);
  }
  searchBtn() {
    return $(`//input[@id='btnSearchUser']`);
  }
  searchCriteria() {
    return $(`//span[normalize-space()='Search Criteria']`);
  }
  firstname() {
    return $(`//input[@formcontrolname='FirstName']`);
  }
  lastname() {
    return $(`//input[@formcontrolname='LastName']`);
  }
  loginName() {
    return $(`//input[@formcontrolname='LoginName']`);
  }
  searchReasults() {
    return $(`//div[@id='slickGridContainer-userListGrid']`);
  }
  firstText(userName) {
    return $(
      `//div[@id='userListGrid']//div[normalize-space()="` + userName + `"]`
    );
  }
  LastText(lastName) {
    return $(
      `//div[@id='userListGrid']//div[normalize-space()="` + lastName + `"]`
    );
  }
  LoginText(loginName) {
    return $(
      `//div[@id='userListGrid']//div[normalize-space()="` + loginName + `"]`
    );
  }
  allLocations() {
    return $(`//a[normalize-space()='ALL Locations']`);
  }
  locationNew() {
    return $(
      `//div[@id='userLocationSelectListGrid']//div[contains(@class,'ui-widget-content slick-row')][8]`
    );
  }
  selectBtn() {
    return $(`//button[normalize-space()='Select']`);
  }
  accessLocation() {
    return $(
      `//div[@id='userListGrid']//div[contains(@class,'slick-pane slick-pane-top ')][1]`
    );
  }

  //_______________________________________________________________//
  location() {
    return $(`//a[normalize-space()='Location']`);
  }

  countrySelect() {
    return $(`(//div[@id='locationList']//select)[1]`);
  }
  countyCode1() {
    return $(
      `(//div[@id='locationList']//select)[1]//option[ @label='Bahamas']`
    );
  }
  countyCode2() {
    return $(
      `(//div[@id='locationList']//select)[1]//option[ @label='Canada']`
    );
  }
  countyCode3() {
    return $(
      `(//div[@id='locationList']//select)[1]//option[ @label='Mexico']`
    );
  }
  countyCode4() {
    return $(
      `(//div[@id='locationList']//select)[1]//option[ @label='United States']`
    );
  }
  country(i) {
    return $(
      `(//div[@id='grid1']//div[contains(@class,'ui-widget-content slick-row')][` +
        i +
        `]//div)[1]`
    );
  }
  localOfficeInput() {
    return $(
      `(//span[contains(text(),' Local Office ')])[1]//following::input[1]`
    );
  }
  localofficeName() {
    // return $(
    //   `(//span[contains(text(),'Local Office Name')])[1]//following::input[1]`
    // );
    return $(
      `(//span[normalize-space()='Local Office Name'])[1]//following::input[1]`
    );
  }
  lineOfBussinessnew() {
    return $(`(//div[@id='locationList']//select)[2]`);
  }
  countryAvalibility() {
    return $(
      `(//div[@id='grid1']//div[contains(@class,'grid-canvas grid-canvas-top grid')])`
    );
  }
  searchCreteria() {
    return $(`(//div[@id='locationList']//div[@class='row']//div)[1]`);
  }
  searchButton() {
    return $(`//input[@value='Search']`);
  }
  officeLocationNumber() {
    return $(
      `(//div[@id='grid1']//div[contains(@class,'ui-widget-content slick-row')])[1]//div[2]//a`
    );
  }
  officeLocationNameText() {
    return $(
      `(//div[@id='grid1']//div[contains(@class,'ui-widget-content slick-row')])[1]//div[3]//a`
    );
  }
  reset() {
    return $(`//input[@value='Reset']`);
  }
  async userInfo(userName, lastName, loginName) {
    await browser.pause(process.env.small_wait);
    await this.setup().click();
    await this.users().click();
    let criteria = await this.searchCriteria().isDisplayed();
    assert.isTrue(criteria);
    await this.searchBtn().click();
    await browser.pause(process.env.small_wait);
    await this.firstname().setValue(userName);
    await this.searchBtn().click();
    await this.lastname().setValue(lastName);
    await this.searchBtn().click();
    await this.loginName().setValue(loginName);
    await this.searchBtn().click();
    let LoginNameText = await this.LoginText(loginName).getText();
    assert.equal(LoginNameText, loginName);
    let FirstNameText = await this.firstText(userName).getText();
    assert.equal(FirstNameText, userName);
    let LastNameText = await this.LastText(lastName).getText();
    assert.equal(LastNameText, lastName);
  }
  async userAccess() {
    await browser.pause(process.env.small_wait);
    await this.setup().click();
    await this.users().click();
    let criteria = await this.searchCriteria().isDisplayed();
    assert.isTrue(criteria);
    await this.allLocations().click();
    await this.locationNew().click();
    await this.selectBtn().click();
    await this.searchBtn().click();
    await browser.pause(process.env.small_wait);
    let locationAccess = await this.accessLocation().isDisplayed();
    assert.isTrue(locationAccess);
  }
  async locationSetup() {
    await this.setup().waitForClickable();
    await this.setup().click();
    await this.location().click();

    assert.isTrue(await this.searchCreteria().isDisplayed());
  }
  async CountryValidation(country4, location, LocationName) {
    await this.countrySelect().click();
    // assert.isTrue(await this.countyCode1().isDisplayed());
    // assert.isTrue(await this.countyCode2().isDisplayed());
    // assert.isTrue(await this.countyCode3().isDisplayed());
    // assert.isTrue(await this.countyCode4().isDisplayed());
    await this.searchButton().click();
    await browser.pause(process.env.small_wait);
    for (let i = 1; i < 25; i++) {
      let CountryCode = await this.country(i).getText();
      assert.equal(CountryCode, country4);
    }
    await this.localOfficeInput().setValue(location);
    await this.searchButton().click();
    await browser.pause(process.env.small_wait);
    let number = await this.officeLocationNumber().getText();
    assert.equal(number, location);
    await this.localOfficeInput().clearValue();
    await this.reset().click();

    await this.localofficeName().click();
    await this.localofficeName().setValue(LocationName);
    await this.searchButton().click();
    await browser.pause(process.env.small_wait);
    let Name = await this.officeLocationNameText().getText();
    assert.equal(Name, LocationName);
    await this.localofficeName().clearValue();
    await this.reset().click();
    await this.lineOfBussinessnew().click();
    await this.countryAvalibility().click();
    await this.searchButton().click();
    assert.isTrue(await this.countryAvalibility().isDisplayed());
  }

  newButton() {
    return $(`//button[contains(text(),'New')]`);
  }
  localOffice() {
    return $(`//input[@formcontrolname='LocalOfficeId']`);
  }
  localOfficeError() {
    return $(
      `(//div[@id='printLocInfo']//label[contains(text(),'Local Office')]//parent::div)[1]//following-sibling::div//span`
    );
  }
  localOfficeNewName() {
    return $(`//input[@formcontrolname='LocalOfficeName']`);
  }
  localOfficeNewNameError() {
    return $(
      `(//div[@id='printLocInfo']//label[contains(text(),'Local Office Name')]//parent::div)[1]//following-sibling::div//span`
    );
  }
  glService() {
    return $(`//select[@formcontrolname='GLServicingDivisionValue']`);
  }
  glServiceOption() {
    return $(
      `//select[@formcontrolname='GLServicingDivisionValue']//option[@label='Venue Operations']`
    );
  }
  glServiceError() {
    return $(
      `(//div[@id='printLocInfo']//label[contains(text(),'GL Service Divisions')]//parent::div)[1]//following-sibling::div//span`
    );
  }
  lineOfBussiness() {
    return $(`//select[@formcontrolname='LOBId']`);
  }
  lineOfBussinessOption() {
    return $(
      `//select[@formcontrolname='LOBId']//option[@label='Convention and Tradeshow Services Division']`
    );
  }
  lineOfBussinessError() {
    return $(
      `(//div[@id='printLocInfo']//label[contains(text(),'Line Of Business')]//parent::div)[1]//following-sibling::div//span`
    );
  }
  oracleProduct() {
    return $(`//input[@formcontrolname='OracleProductCode']`);
  }
  oracleProductError() {
    return $(
      `(//div[@id='printLocInfo']//div[contains(text(),'Oracle Product Code')]//parent::div)[1]//following-sibling::div//span`
    );
  }
  oracleDepartment() {
    return $(`//input[@formcontrolname='OracleDeptCode']`);
  }
  oracleDepartmentError() {
    return $(
      `(//div[@id='printLocInfo']//div[contains(text(),'Oracle Department Code')]//parent::div)[1]//following-sibling::div//span`
    );
  }
  oracle() {
    return $(`//select[@formcontrolname='OracleOrgId']`);
  }
  oracleOption() {
    return $(
      `//select[@formcontrolname='OracleOrgId']//option[contains(text(),' Encore USA ')]`
    );
  }
  oracleError() {
    return $(
      `(//div[@id='printLocInfo']//div[contains(text(),'Oracle Organization')]//parent::div)[1]//following-sibling::div//span`
    );
  }
  form() {
    return $(`//div[@id='printLocInfo']`);
  }
  async newPage(
    NewLocalOfficeInput,
    NewLocalOfficeNameInput,
    oracleProduct,
    oracleDepartment
  ) {
    // assert.isTrue(await this.newButton().isEnabled());
    await this.newButton().click();
    await browser.pause(process.env.small_wait);

    await this.localOffice().setValue(NewLocalOfficeInput);
    await browser;

    await this.localOfficeNewName().setValue(NewLocalOfficeNameInput);

    await this.glService().click();
    await this.glServiceOption().click();

    await this.lineOfBussiness().click();
    await this.lineOfBussinessOption().click();

    await this.oracleProduct().setValue(oracleProduct);

    await this.oracleDepartment().setValue(oracleDepartment);

    await this.oracle().click();
    await this.oracleOption().click();

    assert.isTrue(await this.form().isDisplayed());

    assert.isFalse(await this.localOfficeError().isDisplayed());
    console.log("$$$$$$$$$$$$$$$$$$");
    assert.isFalse(await this.localOfficeNewNameError().isDisplayed());
    assert.isFalse(await this.glServiceError().isDisplayed());
    assert.isFalse(await this.lineOfBussinessError().isDisplayed());
    assert.isFalse(await this.oracleProductError().isDisplayed());
    assert.isFalse(await this.oracleDepartmentError().isDisplayed());
    assert.isFalse(await this.oracleError().isDisplayed());
  }

  cableCheckBox() {
    return $(`//input[@id='chkCablesConsumables']`);
  }
  cablePercentage() {
    return $(`//input[@formcontrolname='CablesAndConsumablesPercentage']`);
  }
  save() {
    return $(`//button[normalize-space()= 'Save']`);
  }
  okBtn() {
    return $(`//button[normalize-space()= 'OK']`);
  }
  locationManagement() {
    return $(`//a[normalize-space()='Location Management History']`);
  }
  encore() {
    return $(
      `//div[@id="slickGridContainer-HistoryGrid"]//div[contains(@class,"ui-widget-content slick-row")][1]/div[10]`
    );
  }
  applyCablesAndConsumables() {
    return $(
      `(//div[@id='HistoryGrid']//div[contains(@class,'ui-widget-content slick-row even')][1]//div)[12]`
    );
  }
  CandCPercentage() {
    return $(
      `(//div[@id='HistoryGrid']//div[contains(@class,'ui-widget-content slick-row even')][1]//div)[14]`
    );
  }
  basicInformation() {
    return $(`//a[normalize-space()= 'Basic Information']`);
  }
  async cablevalidation(DifferentLocation, Percentage) {
    await this.localOfficeInput().setValue(DifferentLocation);
    await this.searchButton().click();
    await this.officeLocationNumber().waitForClickable();
    await this.officeLocationNumber().click();
    await browser.pause(process.env.medium_wait);
    assert.isTrue(await this.cableCheckBox().isDisplayed());
    await this.cableCheckBox().click();
    assert.isTrue(await this.cablePercentage().isEnabled());
    await this.cablePercentage().setValue(Percentage);
    await this.save().click();
    await this.okBtn().click();
    await browser.pause(process.env.medium_wait);
    await this.locationManagement().click();
    await browser.pause(process.env.medium_wait);
    await this.encore().click();
    for (let i = 1; i < 26; i++) {
      await browser.keys("\ue004");
    }
    assert.isTrue(await this.CandCPercentage().isDisplayed());
    await this.basicInformation().click();
    await this.cableCheckBox().click();
    await this.save().click();
    await this.okBtn().click();
    await browser.pause(process.env.medium_wait);
  }
  serviceTypeName() {
    return $(`//a[normalize-space()='Service Type Name']`);
  }
  serviceTypeResult() {
    return $(`//div[@id='serviceTypeName']`);
  }
  async setUpServiceName() {
    await browser.pause(process.env.small_wait);
    await this.setup().click();
    await this.serviceTypeName().click();
  }
  async SetUpResults() {
    await this.serviceTypeResult().waitForDisplayed();
    assert.isTrue(await this.serviceTypeResult().isDisplayed());
  }
}

module.exports = new setUpUser();

//div[@id="slickGridContainer-HistoryGrid"]//div[contains(@class,"ui-widget-content slick-row")][1]/div[10]
