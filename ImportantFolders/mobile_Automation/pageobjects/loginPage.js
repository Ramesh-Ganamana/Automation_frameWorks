const { $, driver } = require("@wdio/globals");
const assert = require("assert");
class loginpage{

        divide() {
        return $("//android.widget.ImageButton[@content-desc='divide']");
        }
        multiply(){
        return $(`//android.widget.ImageButton[@content-desc="multiply"]`);
        }
        minus(){
        return $(`//android.widget.ImageButton[@content-desc="minus"]`);
        }
        plus(){
        return $(`//android.widget.ImageButton[@content-desc="plus"]`);
        }
        percentage(){
        return $(`//android.widget.ImageButton[@content-desc="percent"]`);
        }
        equals(){
        return $(`//android.widget.ImageButton[@content-desc="equals"]`);
        }
        clear(){
        return $(`//android.widget.ImageButton[@content-desc="clear"]`);
        }
        delete(){
        return $(`//android.widget.ImageButton[@content-desc="delete"]`);
        } 
        point(){
        return $(`//android.widget.ImageButton[@content-desc="point"]`);
        }
        zero(){
        return $(`//android.widget.ImageButton[@content-desc="0"]`);
        }
        one(){
        return $(`//android.widget.ImageButton[@content-desc="1"]`);
        }
        two(){
        return $(`//android.widget.ImageButton[@content-desc="2"]`);
        } 
        three(){
        return $(`//android.widget.ImageButton[@content-desc="3"]`);
        }
        four(){
        return $(`//android.widget.ImageButton[@content-desc="4"]`);
        }
        five(){
        return $(`//android.widget.ImageButton[@content-desc="5"]`);
        }
        six(){
        return $(`//android.widget.ImageButton[@content-desc="6"]`);
        }
        seven(){
        return $(`//android.widget.ImageButton[@content-desc="7"]`);
        }
        eight(){
        return $(`//android.widget.ImageButton[@content-desc="8"]`);
        }
        nine(){
        return $(`//android.widget.ImageButton[@content-desc="9"]`);
        }
        totalAbove(){
        return $(`//android.widget.EditText[@content-desc="No formula"]`);
        }
        total(){
        return $(`//android.widget.TextView[@content-desc="No result"]`);
        }
        result(){
        return $(`//android.widget.TextView[@resource-id="com.google.android.calculator:id/result_final"]`);
        }
        Squrerroot(){
        return $(`//android.widget.ImageButton[@content-desc="square root"]`);
        }
        pi(){
        return $(`//android.widget.ImageButton[@content-desc="pi"]`);
        }
        power(){
        return $(`//android.widget.ImageButton[@content-desc="power"]`);
        }
        factorial(){
        return $(`//android.widget.ImageButton[@content-desc="factorial`);
        }
        Expand(){
        return $(`//android.widget.ImageButton[@content-desc="Expand"]`);
        }

    
   


   async claculations(){

    await this.one().click();
    await this.plus().click();
    await this.two().click();
    await this.equals().click();
    let value = parseInt(await (await this.result()).getText());
    assert.equal(value, 3);
    await this.divide().click();
    await this.multiply().click();
    await this.plus().click();
    await this.minus().click();
    await this.percentage().click();
    await this.equals().click();
    await this.clear().click();
    await this.delete().click();
    await this.point().click();
    await this.zero().click();
    await this.one().click();
    await this.two().click();
    await this.three().click();
    await this.four().click();
    await this.five().click();
    await this.six().click();
    await this.seven().click();
    await this.eight().click();
    await this.nine().click();

    browser.pause(5000)
   } 

}module.exports=new loginpage();