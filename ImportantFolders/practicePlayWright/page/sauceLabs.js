const { expect } = require("@playwright/test");
require("dotenv").config();
exports.sauceLab = class sauceLab {
  constructor(page) {
    this.page = page;

    this.menu = page.locator("//button[@id='react-burger-menu-btn']");
    this.about = page.locator("//a[@id='about_sidebar_link']");
    this.labLogo = page.locator("(//img[@data-nimg='intrinsic'])[1]");
    this.product = page.locator("(//span[normalize-space()='Products'])[1]");
    this.solution = page.locator("(//span[normalize-space()='Solutions'])[1]");
    this.resource = page.locator("(//span[normalize-space()='Resources'])[1]");
    this.debug = page.locator("//span[normalize-space()='Debugging']");
    this.Container = page.locator(
      "//div[@id='onetrust-close-btn-container']//button"
    );
  }
  async MenuItems() {
    await this.menu.click();
    await this.about.click();
    let logoCheck = this.labLogo;
    await expect(logoCheck).toBeVisible();
    await this.page.waitForTimeout(parseInt(process.env.mini_wait));
    await this.page.evaluate(() => {
      window.scrollBy(0, 1500);
    });
    await this.page.waitForTimeout(parseInt(process.env.mini_wait));
  }
  async ProductsList() {
    await this.product.hover();
    await this.page.waitForTimeout(parseInt(process.env.ultra_mini_wait));
    await this.resource.hover();
    await this.page.waitForTimeout(parseInt(process.env.ultra_mini_wait));
    if (await this.Container.isVisible()) {
      await this.Container.click();
    }
    await this.solution.hover();
    await this.debug.click();
    await this.page.waitForTimeout(parseInt(process.env.ultra_mini_wait));

    await this.page.waitForTimeout(parseInt(process.env.ultra_mini_wait));
  }
};
