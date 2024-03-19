package AlertDemo;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import io.github.bonigarcia.wdm.WebDriverManager;

     public class alertPractice {
	 WebDriver  driver;
//	 private By Alert= By.xpath("//div[normalize-space()=\"Alerts, Frame & Windows\"]");
//	 private By Alerts =By.xpath("//span[normalize-space()=\"Alerts\"]");
	 private By ClickMe=By.xpath("(//button[normalize-space()=\"Click me\"])[1]");
	 private By Cbox=By.xpath("//button[@ id=\"confirmButton\"]");
	 private By prmBox=By.xpath("//button[@ id=\"promtButton\"]");
	 
	      @BeforeMethod
	      public void AlertSetup() throws InterruptedException {
		  WebDriverManager.chromedriver().setup();
		  driver = new ChromeDriver();
		  driver.get("https://demoqa.com/alerts");
		  driver.manage().window().maximize();
		  Thread.sleep(2000);
		    
	     }
	     @Test
	     public void HandleAlerts() throws Exception {
		 Thread.sleep(5000);
//		 WebElement ALertsHandle=driver.findElement(Alert);
//		 ALertsHandle.click();
//		 Thread.sleep(2000);
//		 WebElement ALertsInfo=driver.findElement(Alerts); 
//		 ALertsInfo.click();
//		 Thread.sleep(2000);
		 
//		 //Alert box
		 WebElement ClickmeBtn=driver.findElement(ClickMe); 
		 ClickmeBtn.click();
		 Thread.sleep(2000);
		 driver.switchTo().alert().accept();
		 Thread.sleep(2000);
//		 //confirmBox
		 WebElement  CboxBtn=driver.findElement(Cbox);
		 CboxBtn.click();
         driver.switchTo().alert().accept();
         Thread.sleep(2000);
         CboxBtn.click();
         System.out.println(driver.switchTo().alert().getText());
   	     Thread.sleep(2000);
         driver.switchTo().alert().dismiss();
         Thread.sleep(2000);
         //promptBox
		 Thread.sleep(2000);
		 JavascriptExecutor jse	= (JavascriptExecutor)  driver;
		 jse.executeScript("window.scrollBy(0, 300)"); 
         WebElement PrmBoxBtn=driver.findElement(prmBox);
         PrmBoxBtn.click();
         Thread.sleep(2000);
         driver.switchTo().alert().sendKeys("Ram");
         driver.switchTo().alert().accept();
         Thread.sleep(2000);
	     }
	     @AfterTest
	     public void TearDown() {
		 driver.quit();
	     }
         }
