const { expect } = require("@playwright/test");
require("dotenv").config();

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    this.userName = page.locator("//input[@id='user-name']");
    this.password = page.locator("//input[@id='password']");
    this.loginBtn = page.locator("//input[@id='login-button']");
    this.items = (i) =>
      this.page.locator(
        `//div[@id='inventory_container']//div[@class='inventory_list']//div[@class='inventory_item'][${i}]//div[@class='inventory_item_img']`
      );
    this.Cartadd = page.locator(
      "(//button[normalize-space()='Add to cart'])[6]"
    );
    this.lastCart = page.locator(
      "(//button[normalize-space()='Add to cart'])[6]"
    );
    this.Cart = page.locator("//a[@class='shopping_cart_link']");
    this.cartIcon = page.locator("//div[@id='shopping_cart_container']//a");
    this.checkOut = page.locator("//button[@id='checkout']");
    this.firstName = page.locator("//input[@id='first-name']");
    this.lastName = page.locator("//input[@id='last-name']");
    this.zipCode = page.locator("//input[@id='postal-code']");
    this.continue = page.locator("//input[@id='continue']");
    this.Finish = page.locator("//button[@id='finish']");
    this.ConfirmTick = page.locator("//img[@alt='Pony Express']");
    this.GoHome = page.locator("//button[@id='back-to-products']");
  }
  async inagurationUrl() {
    await this.page.goto(process.env.BASE_URL);
  }
  async SignIn(user, pwd) {
    await this.userName.type(user);
    await this.password.type(pwd);
    await this.loginBtn.click();
  }
  async itaration() {
    for (let i = 1; i < 7; i++) {
      var info = this.items(i);
      await expect(info).toBeVisible();
    }
  }
  async addToCart() {
    await this.page.evaluate(() => {
      window.scrollBy(0, 250);
    });
    await this.Cartadd.click();
    await this.page.evaluate(() => {
      window.scrollBy(0, -260);
    });
    await this.page.waitForTimeout(parseInt(process.env.mini_wait));
  }
  async Purchase(Fname, Lname, Zcode) {
    await this.cartIcon.click();
    await this.checkOut.click();
    await this.firstName.type(Fname);
    await this.lastName.type(Lname);
    await this.zipCode.type(Zcode);
    await this.continue.click();
    await this.Finish.click();
    var check = this.ConfirmTick;
    await expect(check).toBeVisible();
    await this.GoHome.click();
    await this.page.waitForTimeout(parseInt(process.env.mini_wait));
  }
};
