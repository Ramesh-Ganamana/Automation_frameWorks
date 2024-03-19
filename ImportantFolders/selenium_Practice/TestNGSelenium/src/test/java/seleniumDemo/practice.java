package seleniumDemo;



import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import io.github.bonigarcia.wdm.WebDriverManager;

     public class practice {
	 WebDriver driver;
	 
	 private By userInput=By.xpath("//input[@id='user-name']");
	 private By PasswordInput =By.xpath("//input[@id='password']");
	 private By loginBtn =By.xpath("//input[@id='login-button']");
	 private By cartItems= By.xpath("//div [@class=\"inventory_item\"]//div[@class=\"inventory_item_name \"]");
	 private By AddToCartBtn =By.xpath("(//div [@class=\"pricebar\"]//button)[1]");
	// private By RemoveToCartBtn =By.xpath("(//div [@class=\"pricebar\"]//button)[1]");
	 private By Cartlist=By.xpath("//div [@id =\"shopping_cart_container\"]//a[@class=\"shopping_cart_link\"]//span");
	 private By ShoppingCartLink= By.xpath("//div [@id=\"shopping_cart_container\"]//a");
	 private By CheckOut =By.xpath("//button [@id=\"checkout\"]");
	 private By CustName=By.xpath("//input[@id=\"first-name\"]") ;
	 private By CustLastName=By.xpath("//input[@id=\"last-name\"]") ;
	 private By CustZipCode=By.xpath("//input[@id=\"postal-code\"]") ;
	 private By Countinue=By.xpath("//input[@id=\"continue\"]") ;
	 private By FInish =By.xpath("//button[@id=\"finish\"]");
	 private By check =By.xpath("//div[@id=\"checkout_complete_container\"]//img");
	 private By MenuBar=By.xpath("//button[@id='react-burger-menu-btn']");
	 private By About=By.xpath("(//div[@class=\"bm-menu-wrap\"])//a[2]");
	 private By BackHome= By.xpath("//button[@id='back-to-products']");
	 private By Product =By.xpath("(//span[normalize-space()=\"Products\"])[1]");
     @BeforeMethod
        public void setUp() {
    	WebDriverManager.chromedriver().setup();
	    driver = new ChromeDriver();
		driver.get("https://www.saucedemo.com/");
		driver.manage().window().maximize();
	    WebElement 	userInput1 =driver.findElement(userInput);
	    userInput1.sendKeys("standard_user");
	    WebElement UserPassword = driver.findElement(PasswordInput);
	    UserPassword.sendKeys("secret_sauce");
	    WebElement UserLogin = driver.findElement(loginBtn);
	    UserLogin.click();
        }   
        @Test (priority = 1)
	    public void SuaceLabs() {
        List<WebElement> tabs =  driver.findElements(cartItems);
        WebElement r;
        for ( int i=0;i<tabs.size();i++) {
    	r=tabs.get(i);
    	System.out.println(r.getText());
        } 
        }
        @Test(priority = 2)
        public void LabsShopping() {
	  
	  
	    WebElement AddCrtBtn= driver.findElement(AddToCartBtn);
	    AddCrtBtn.click();
	
	   //WebElement RemoveToCrtBtn= driver.findElement(RemoveToCartBtn);
	   WebElement AddedItems= driver.findElement(Cartlist);
	   Assert.assertTrue(AddedItems.isDisplayed(),"the elemnet is displayed");
	   try {
	   Thread.sleep(2000);
	   } catch (InterruptedException e) {
	    // TODO Auto-generated catch block
	   e.printStackTrace();
	   }  
       }
       @Test (priority = 3)
       public void CustomerDetails() {
	  
	   WebElement CrtLink=driver.findElement(ShoppingCartLink);
	   CrtLink.click();
	   WebElement CheckOutBtn=driver.findElement(CheckOut);
	   CheckOutBtn.click();
	   WebElement CFName=driver.findElement(CustName);
	   CFName.sendKeys("Ram");
	   WebElement CLName  =driver.findElement(CustLastName);
	   CLName.sendKeys("Zamuda");
	   WebElement CZipcode= driver.findElement(CustZipCode);
	   CZipcode.sendKeys("535312");
	   WebElement Cnt     = driver.findElement(Countinue);
	   Cnt.click();
	   WebElement FinishBtn =driver.findElement(FInish);
	   FinishBtn.click();
	   WebElement CheckBtn =driver.findElement(check);
	   Assert.assertTrue(CheckBtn.isDisplayed());
	   try {
		Thread.sleep(2000);
	   } catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
       }
	   WebElement BackHomeBtn =driver.findElement(BackHome);
		  Assert.assertTrue(BackHomeBtn.isDisplayed());
		  BackHomeBtn.click();
       }
       @Test (priority= 4)
       public void ScrollInfo() throws InterruptedException {
			Thread.sleep(5000);
	   WebElement MenuBtn=driver.findElement(MenuBar);
	   Assert.assertTrue(MenuBtn.isDisplayed());
	   MenuBtn.click();
	   Thread.sleep(5000);
	   WebElement AboutBtn=driver.findElement(About);
	   Assert.assertTrue(AboutBtn.isDisplayed());
	   AboutBtn.click();
	   Thread.sleep(4000);
	   // To Scroll we need to Run the javaScriptCode//
	   JavascriptExecutor jse	= (JavascriptExecutor)  driver;
	   jse.executeScript("window.scrollBy(0, 800)"); 
	   Thread.sleep(2000);
	   jse.executeScript("window.scrollBy(0, -400)"); 
	   Thread.sleep(2000);
	   Actions actions = new Actions(driver);
	   WebElement prdHover=driver.findElement(Product);
	   actions.moveToElement(prdHover).perform();
	   Thread.sleep(2000);
       }
       @AfterTest
	  public void tearDown() {
	         driver.quit();
	        
      }
      }