const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsermail() {
    return $("(//input[@name='email'])[1]");
  }

  get inputPassword() {
    return $("(//input[@name='password'])[1]");
  }

  get btnSubmit() {
    return $(`(//button[@type='submit'])[1]`);
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  async login(mail, password) {
    await this.inputUsermail.setValue(mail);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
    await browser.pause(10000);
  }

  /**
   * overwrite specific options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
