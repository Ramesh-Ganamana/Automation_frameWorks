const { expect, driver } = require("@wdio/globals");
const loginScreen =require("/Tonz_Testing/pageobjects/loginPage.js");
const Tonepath=require("/Tonz_Testing/pageobjects/RingToneSElectionPath.js");
const Browsesongs =require("/Tonz_Testing/pageobjects/BrowsePage.js")


describe("Tonz app Testing", () => {
    it("Login Functionality", async () => { 
       await loginScreen.Login();
    });
    it ('RingToneSelection',async ()=>{
      await Tonepath.UserRingTone();
    })
    it ('Browse the songs',async()=>{
      await Browsesongs.Search(); 
    })
  });
  //Tonz