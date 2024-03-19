const Page = require('./page');


class LandingPage extends Page {

  get clickonCompass() {
    return $("a[title='Compass']")
  }


  async compassValidation() {
    await browser.pause(30000);
    await $("#okButton_1").click();
    const iframe = await browser.findElement('css selector', "iframe");
    await browser.switchToFrame(iframe);
    await this.clickonCompass.waitForClickable();
    await this.clickonCompass.click();
    await $("#okButton_1").click();
  }


}

module.exports = new LandingPage();