const merge = require("deepmerge");
const wdioConf = require("./wdio.conf.js");

const appium = {
  platformName: "Android",
  "appium:deviceName": "emulator-5554",
  "appium:platformVersion": "14",
  "appium:automationName": "UiAutomator2",
  "appium:appPackage": "com.google.android.calculator",
  "appium:appActivity": "com.android.calculator2.Calculator",
  "appium:autoAcceptAlerts": "true",
};

exports.config = merge(
  wdioConf.config,
  {
    capabilities: [appium],
  },
  { clone: false }
);
