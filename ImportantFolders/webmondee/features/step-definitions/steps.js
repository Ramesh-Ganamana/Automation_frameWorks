const { Given, When, Then } = require("@wdio/cucumber-framework");

const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (.*) and (.*)$/, async (mail, password) => {
  await LoginPage.login(mail, password);
});
