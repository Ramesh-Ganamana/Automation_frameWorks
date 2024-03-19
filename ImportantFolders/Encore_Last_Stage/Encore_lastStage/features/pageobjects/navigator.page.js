/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
if (process.env.EXECUTION_ENVIRONMENT) {
  require("dotenv").config({
    path: `./../../.${process.env.EXECUTION_ENVIRONMENT}env`,
  });
} else {
  require("dotenv").config();
}
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  open(path) {
    browser.maximizeWindow();
    return browser.url(process.env.navigator_URL + path);
  }
};
