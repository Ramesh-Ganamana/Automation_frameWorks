const { assert } = require("chai");
const { expect } = require("chai");
class SetUpLocation {
  changeLocationHeader() {
    return $('//input[@title="Click Here to Change Location"]');
  }
  inputSeacrchLocation() {
    return $("//input[@id='txtLocationSearch']");
  }
  locationchange() {
    return $(
      `(//div[@id='slickGridContainer-locationGridResults']//div[contains(@class,'ui-widget-content slick-row')]//div[2])[1]`
    );
  }

  btnLocationSelect() {
    return $("//button[contains(text(),'Select')]");
  }
  setup() {
    return $(`//a[normalize-space()='Setup']`);
  }
  LocalOffice() {
    return $(`//a[normalize-space()='Local Office Settings']`);
  }
  Ediatable(i) {
    return $(
      `//label[normalize-space()="` +
        i +
        `"]//parent::div//following::div[1]//input`
    );
  }
  section(i) {
    return $(
      `(//div[@id='slickGridContainer-sectiongrid']//div[contains(@class,'grid-canvas grid-canvas-top')])/div[` +
        i +
        `]//div[2]`
    );
  }
  discountExcemtions(i) {
    return $(
      `(//div[@id='slickGridContainer-discountgrid']//div[contains(@class,'ui-widget-content slick-row')])[` +
        i +
        `]/div[2]`
    );
  }
  Image() {
    return $(
      `(//div[@id='slickGridContainer-discountgrid']//div[contains(@class,'ui-widget-content slick-row')])[1]/div[3]//img`
    );
  }
  Image2() {
    return $(
      `(//div[@id='slickGridContainer-sectiongrid']//div[contains(@class,'grid-canvas grid-canvas-top')])/div[1]//div[3]//img`
    );
  }
  saveButton() {
    return $(`(//button[normalize-space()='Save'])[1]`);
  }
  excemption() {
    return $(`//div[normalize-space()='App Remote Access'][1]//div[2]`);
  }
  excemptionImg() {
    return $(`//div[normalize-space()='App Remote Access'][1]//div[2]//img`);
  }
  localOfficeSettings() {
    return $(`//div[@id='mainBar']//following::div[1]`);
  }
  addNewSection() {
    return $(
      `(//div[@id='slickGridContainer-sectiongrid']//div[contains(@class,'grid-canvas grid-canvas-top')])[1]//div[11]//div[1]`
    );
    // return $(`(//div[contains(text(),'Video')]`);
  }
  addNewScetionInput() {
    return $(
      `(//div[@id='slickGridContainer-sectiongrid']//div[contains(@class,'grid-canvas grid-canvas-top')])[1]//div[11]//div[1]//input`
    );
  }
  addNewSectionImage() {
    return $(
      `(//div[@id='slickGridContainer-sectiongrid']//div[contains(@class,'grid-canvas grid-canvas-top')])[1]/div[11]//div[2]`
    );
  }
  deleteLine() {
    return $(
      `(//div[@id='slickGridContainer-sectiongrid']//div[contains(@class,'grid-canvas grid-canvas-top')])[1]/div[1]//div[1]`
    );
  }
  delete() {
    return $(`//li[@class='slick-menu-item']`);
  }
  logoSelect() {
    return $(`//select[@formcontrolname='LogoID']`);
  }
  blueLogo() {
    return $(
      `//select[@formcontrolname='LogoID']//option[@label='Encore Blue Logo']`
    );
  }
  newLogo() {
    return $(
      `//select[@formcontrolname='LogoID']//option[@label='Encore New Logo']`
    );
  }

  async LocationChange(location) {
    await browser.pause(process.env.small_wait);
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(location);
    await this.locationchange().click();
    await this.btnLocationSelect().click();
    await browser.pause(process.env.medium_wait);
  }
  async SetUp() {
    await this.setup().click();
    await this.LocalOffice().click();
  }
  async ValidationForTheValues() {
    for (let i = 1; i < 9; i++) {
      var Click = await this.section(i).click();
      console.log(Click, "&&&&&");
    }

    for (let i = 1; i < 15; i++) {
      let discount = await this.discountExcemtions(i).click();
      console.log(discount, "###");
    }

    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    assert.isFalse(await this.Image2().isDisplayed());
    console.log(`#######################`);
    assert.isFalse(await this.Image().isDisplayed());
    console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%`);
  }
  async defaultDates() {
    await this.Ediatable("Pickup Date offset(Relative to End)").setValue("1");
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    let EditableInfo = await this.Ediatable(
      "Pickup Date offset(Relative to End)"
    ).isDisplayed();
    assert.isTrue(EditableInfo);
  }
  async discountExcemption() {
    assert.isTrue(await this.localOfficeSettings().isDisplayed());
    await this.excemption().waitForClickable();
    await this.excemption().click();
    await this.excemption().click();

    await this.saveButton().click();
    await browser.pause(process.env.small_wait);

    assert.isTrue(await this.excemptionImg().isDisplayed());
  }
  async addSection(SectionName) {
    await this.addNewSection().click();
    await browser.pause(2000);
    await this.addNewScetionInput().setValue(SectionName);
    await this.addNewSectionImage().click();
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    assert.isTrue(await this.deleteLine().isDisplayed());
    await this.deleteLine().click({ button: "right" });
    await this.delete().click();
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
  }
  async logoValidation() {
    await this.logoSelect().click();
    await this.blueLogo().click();
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
    assert.isTrue(await this.blueLogo().isDisplayed());
    await this.logoSelect().waitForClickable();
    await this.logoSelect().click();
    await this.newLogo().click();
    await this.saveButton().click();
    await browser.pause(process.env.small_wait);
  }
}
module.exports = new SetUpLocation();
