const { expect, driver } = require("@wdio/globals");
const login =require("/mobile_Automation/pageobjects/loginPage.js");

describe("My homePage of calculator", () => {
    it("checking the result outputs", async () => {
      await login.claculations();
    });
  
  });


  //E:\mobile_Automation\pageobjects\loginPage.js
 // pageobjects\loginPage.js
 //Ramesh//