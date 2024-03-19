const { $, driver } = require("@wdio/globals");
const assert = require("assert");


class browse{

    BrowseButton(){
    return $(`//android.view.View/android.view.View/android.view.View/android.view.View[5]/android.view.View/android.view.View[3]//android.widget.TextView`);
    }
     NaaSongs(){
     return $(`//android.widget.ImageView[@content-desc="Naa Songs"]`);
    }
  serchForm(){
    return $(`//android.view.View[@resource-id='search-form']`)
  }
  songSlection(){
    return $(`//android.view.View[@resource-id='featured-content-2']/android.widget.ListView/android.view.View[1]`)
  }
  EverySongDownloadButton(){
    return $(`//android.view.View[@resource-id='repeatable-fieldset-one']/android.view.View/android.view.View[2]`)
  }
  DownloadSong(){
    return $(`//android.view.View[@content-desc=" Download"]/android.widget.Button`)
  }
  CutandSetringtone(){
    return $(`(//android.view.View/android.view.View/android.view.View[1]/android.widget.TextView)[3]`)
  }
  DecreaseStartTime1(){
    return $(`(//android.view.View[@content-desc="Decrease Start time"])[1]`)
  }
  DecreaseStartTime2(){
    return $(`(//android.view.View[@content-desc="Decrease Start time"])[2]`)
  }
  IncreaseStartTime1(){
    return $(`(//android.view.View[@content-desc="Increase Start"])[1]`)
  }
  IncreaseStartTime2(){
    return $(`(//android.view.View[@content-desc="Increase Start"])[2]`)
  }
  SetRingToneAterCrop(){
    return $(`//android.view.View[@content-desc="Set Ringtone"]`)
  }
  FinalConformantion(){
    return $(`//android.view.View/android.view.View/android.view.View[2]/android.widget.Button`)
  }
  SetasDefaultRingToneButton(){
    return $(`//android.view.View/android.view.View/android.view.View[4]/android.widget.Button`)
}
  async Search(){

  await this.BrowseButton().click()
  await this.NaaSongs().click()
  await browser.pause(5000)
  await this.songSlection().click()
  await browser.pause(4000)
  await browser.performActions([
    {
      type: 'pointer',
      id: 'finger1',
      parameters: { pointerType: 'touch' },
      actions: [
        { type: 'pointerMove', duration: 100, x: 500, y: 800 },
        { type: 'pointerDown', button: 0 },
        { type: 'pause', duration: 500 },
        { type: 'pointerMove', duration: 100, x: -0, y: -0 },
        { type: 'pointerUp', button: 0 }
      ]
    }
  ]);
  await browser.pause(3000);
await this.EverySongDownloadButton().click();
await browser.pause(3000)
await this.DownloadSong().click()
await browser.pause(15000)
await this.CutandSetringtone().click()
await browser.pause(4000)
await this.SetasDefaultRingToneButton().click()
await browser.pause(1000)
for(let i=1;i<30;i++ ){
await this.DecreaseStartTime2().click()
}
await browser.pause(7000)
await this.SetRingToneAterCrop().click()
await this.FinalConformantion().click();
  }
 
}
module.exports=new browse();