const { assert } = require("chai");
const LandingNavigatorPage = require("./navigator.page");
const utilTools = require("../../utils/tools");

// if (process.env.EXECUTION_ENVIRONMENT) {
//   require("dotenv").config({
//     path: `./../../.${process.env.EXECUTION_ENVIRONMENT}env`,
//   });
// } else {
//   require("dotenv").config();
// }
/**
 * sub page containing specific selectors and methods for a specific page
 */
class AddItemNavigator extends LandingNavigatorPage {
  changeLocationHeader() {
    return $('//input[@title="Click Here to Change Location"]');
  }

  inputSeacrchLocation() {
    return $("//input[@id='txtLocationSearch']");
  }

  searchResultvalue(locationData) {
    return $(
      "//div[@id='LocationFilterPanel']/following::div[text()='" +
      locationData +
      "']"
    );
  }

  btnLocationSelect() {
    return $("//button[contains(text(),'Select')]");
  }

  orderNumLabel() {
    return $("//span[contains(text(), 'Order Number')]/parent::div/input");
  }
  addItemSearch() {
    return $("//input[@value='Search']");
  }
  dateRangeUncheck() {
    return $("(//input[@type='checkbox'])[2]");
  }

  itemorderNumLink(colNum) {
    return $(
      '//div[@id="orderSearchGridContainer"]/descendant::span[@title="New Classic"][1]/following::div[' +
      colNum +
      "]"
    );
  }
  newInternalOrder() {
    return $('//button[@ng-click="newInternalOrder()"]');
  }

  selectJob() {
    return $(`//a[normalize-space()='Jobs']`);
  }
  selectItemsLink() {
    return $("//a[normalize-space()='Items']");
  }
  selecthotItemsLink() {
    return $("//label[@class='btn order-product-icon-btn'][1]");
  }
  selecthotlistItems() {
    return $(
      "//div[@id='oeHotListGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/descendant::div[2]"
    );
  }
  selectCloseSection() {
    return $("//a[@ng-click='closeSection()']");
  }
  hotItemLstTotalAmt() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[8]/b"
    );
  }

  itemSectionLink() {
    return $("//span[@class=' glyphicon glyphicon-picture']");
  }
  selectLabor() {
    return $(
      "//div[@id='oeFormatGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[5]/div[1]"
    );
  }

  dropLaborLine() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[7]"
    );
  }
  freightLink() {
    return $("//span[@class='glyphicon glyphicon-plane']");
  }

  freightitemLink() {
    return $(
      "//div[@id='oeFreightListGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[2]"
    );
  }
  salesNetDueLink() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[15]"
    );
  }
  addToPackageLnk() {
    return $("//button[text()='Add to package']");
  }
  lineTotalAmt() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[10]"
    );
  }
  packageLink() {
    return $("//span[@class=' glyphicon glyphicon-gift']");
  }
  packageItemLink() {
    return $(
      "(//div[@id='oePackagesGrid']/descendant::div[contains(@class,'slick-cell')])[10]"
    );
  }

  packageItemTotalAmt() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[8]"
    );
  }
  packageItemTotAmtLink1() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[contains(@class,'ui-widget-content slick-row')][2]/div[10]"
    );
  }
  packageItemTotAmtLink2() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[contains(@class,'ui-widget-content slick-row')][3]/div[10]"
    );
  }
  packageItemTotAmtLink3() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[contains(@class,'ui-widget-content slick-row')][4]/div[10]"
    );
  }
  packageItemTotAmtLink4() {
    return $(
      "//div[@id='jobTotalsGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[5]/div[10]"
    );
  }
  packageItemTotAmtLink5() {
    return $(
      "//div[@id='jobTotalsGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[6]/div[10]"
    );
  }
  subItemsLink() {
    return $("//span[@class=' glyphicon glyphicon-list']");
  }
  itemLink() {
    return $(
      "//div[@class='orderRow btn-group-vertical']/descendant::label/span[@class=' glyphicon glyphicon-th-list']"
    );
  }

  searchBarLink() {
    return $(
      "(//span[@class='glyphicon glyphicon-search oeSideBarGridSearchIcon'])[2]"
    );
  }

  itemSearchBarLnk() {
    return $(
      "(//span[@class='glyphicon glyphicon-search oeSideBarGridSearchIcon'])[3]"
    );
  }
  subClassZeroLink() {
    return $("//input[@id='chkMyInventorySubClass']");
  }
  subClassItemZeroLink() {
    return $("//input[@id='chkMyInventory']");
  }

  labourChkBox() {
    return $("//input[@id='chkLaborOnlySubClass']");
  }
  labourItemChkBox() {
    return $("//input[@id='chkLaborOnly']");
  }

  txtSubClassSearch() {
    return $("//input[@id='txtSubClassSearch']");
  }

  txtItemSearch() {
    return $("//input[@id='txtProductListSearch']");
  }

  subItemsDataLink() {
    return $(
      "//div[@id='oeSubClassesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[2]"
    );
  }
  itemsDataLink() {
    return $(
      "//div[@id='gridProductsOrderEntry']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='ui-widget-content slick-row even'][1]"
    );
  }
  subClassZeroQtyChk() {
    // return $(
    //   `//div[@id="oeSubClassesGrid"]/descendant::div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[3]`
    // );
    return $(
      "//div[@id='oeSubClassesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']//div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[1]/div[1]/div[3]"
    );
  }
  itemZeroQtyChk() {
    return $(
      "//div[@id='gridProductsOrderEntry']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[1]/div[3]"
    );
  }

  laborSubDataChk() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[1]/div[4]"
    );
  }

  orderNumberField() {
    return $('input[name="searchOrderNumber"]');
  }

  searchOrderButton() {
    return $("//input[@value='Search']");
  }

  clearSearch() {
    return $(
      "//div[@id='inlineProductsFilterPanel']/div[@class='input-group input-group-xs']/span[@ng-click='clearFilter()']/i"
    );
  }
  clearSearchItem() {
    return $(
      "//div[@id='inlineSubClassFilterPanel']/div[@class='input-group input-group-xs']/span[@ng-click='clearFilter()']/i"
    );
  }

  resultsOrderIdRow(colNum) {
    return $(
      '//div[@id="orderGridResults"]/descendant::span[@title="Order"][1]/../following-sibling::div[' +
      colNum +
      "]"
    );
  }
  getJobOrderNumber() {
    return $(
      "//div[@ng-form='OrderForms.jobTabForm']//label[contains(text(),'Order Number')]/parent::div/following-sibling::div/label"
    );
  }

  laborSearchDatalink() {
    return $(
      "//div[@id='oeSubClassesGrid']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='ui-widget-content slick-row even']/div[1]"
    );
  }

  labourItemSearchDataLnk() {
    return $(
      "(//div[@id='gridProductsOrderEntry']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/descendant::div[@class='ui-widget-content slick-row even']/descendant::div[1])[1]"
    );
  }
  laborItemData() {
    return $(
      "//div[@id='gridProductsOrderEntry']//div[@class='slick-viewport slick-viewport-top slick-viewport-left']//div[@class='ui-widget-content slick-row even'][1]/div[1]"
    );
  }

  // -------------------------------------------------------------------------------------------------

  selectJob() {
    return $(`//a[normalize-space()='Jobs']`);
  }

  verifySubZeroData() {
    return $(
      "//div[@id='oeOrderLinesGrid']/descendant::div[@class='ui-widget-content slick-row even active']/div[4]"
    );
  }

  orderStartDate() {
    return $('//input[@name="OrderStartDate"]');
  }

  orderEndDate() {
    return $('//input[@name="OrderEndDate"]');
  }
  saveBtn() {
    return $('//input[@value="Save"]');
  }

  salesJobType() {
    return $(
      '(//div[@id="oeJobGrid"]//div[contains(@class, "ui-widget-content slick-row")]/div[10])[1]'
    );
  }

  operationJobType() {
    return $(
      '(//div[@id="oeJobGrid"]//div[contains(@class, "ui-widget-content slick-row")]/div[10])[2]'
    );
  }
  jobsTab() {
    return $('//ul[@class="nav navbar-nav"]/li/a[contains(text(), "Jobs")]');
  }
  subClassLink() {
    return $('//span[@class=" glyphicon glyphicon-list"]');
  }
  laborSubClassItem() {
    return $(
      "//div[@id='oeSubClassesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[3]/div[1]"
    );
  }
  subClassPopUPForMovePackage() {
    return $('//div[@class="modal-content"]');
  }
  belowThePackage() {
    return $(
      '//div[@class="modal-content"]//button[text()="Below the package"]'
    );
  }
  laborAddedItem() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[5]/div[4]"
    );
  }
  laborItemSeletced() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[7]/div[4]"
    );
  }

  subClassItemSelected() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/descendant::div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[8]/div[4]"
    );
  }
  btnSave() {
    return $(`//input[@ng-click="saveOrderCheckDiscount()"]`);
  }
  toatlItemAmount(rowNumber) {
    return $(
      '//div[@id="jobTotalsGrid"]/div[@class="slick-pane slick-pane-top slick-pane-left"]/div[@class="slick-viewport slick-viewport-top slick-viewport-left"]/div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div["' +
      rowNumber +
      '"]/div[7]'
    );
  }
  totalItemAmount1() {
    return $(
      '//div[@id="jobTotalsGrid"]/div[@class="slick-pane slick-pane-top slick-pane-left"]/div[@class="slick-viewport slick-viewport-top slick-viewport-left"]/div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[1]/div[7]'
    );
  }
  totalItemAmount2() {
    return $(
      '//div[@id="jobTotalsGrid"]/div[@class="slick-pane slick-pane-top slick-pane-left"]/div[@class="slick-viewport slick-viewport-top slick-viewport-left"]/div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[2]/div[7]'
    );
  }
  totalItemAmount3() {
    return $(
      '//div[@id="jobTotalsGrid"]/div[@class="slick-pane slick-pane-top slick-pane-left"]/div[@class="slick-viewport slick-viewport-top slick-viewport-left"]/div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[3]/div[7]'
    );
  }
  totalItemAmount4() {
    return $(
      '//div[@id="jobTotalsGrid"]/div[@class="slick-pane slick-pane-top slick-pane-left"]/div[@class="slick-viewport slick-viewport-top slick-viewport-left"]/div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[4]/div[7]'
    );
  }
  totalItemAmount5() {
    return $(
      '//div[@id="jobTotalsGrid"]/div[@class="slick-pane slick-pane-top slick-pane-left"]/div[@class="slick-viewport slick-viewport-top slick-viewport-left"]/div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[5]/div[7]'
    );
  }
  totalItemAmount6() {
    return $(
      '//div[@id="jobTotalsGrid"]/div[@class="slick-pane slick-pane-top slick-pane-left"]/div[@class="slick-viewport slick-viewport-top slick-viewport-left"]/div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[6]/div[7]'
    );
  }
  totalItemAmount7() {
    return $(
      '//div[@id="jobTotalsGrid"]/div[@class="slick-pane slick-pane-top slick-pane-left"]/div[@class="slick-viewport slick-viewport-top slick-viewport-left"]/div[@class="grid-canvas grid-canvas-top grid-canvas-left"]/div[7]/div[7]'
    );
  }

  totalsLink() {
    return $('//ul/li/a[text()=" Totals"]');
  }

  ItemsLink() {
    return $("//a[normalize-space()='Items']");
  }

  clickOnOperation() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']//div[@class='ui-widget-content slick-row odd']//div[2]"
    );
  }
  jobStartDate() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[1]/div[3]"
    );
  }
  jobEndDate() {
    return $(
      "//div[@id='oeJobGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[1]/div[5]"
    );
  }

  itemLst() {
    return $(
      "//div[@id='gridProductsOrderEntry']//div[@class='slick-viewport slick-viewport-top slick-viewport-left']//div[@class='ui-widget-content slick-row even'][1]/div[1]"
    );
  }

  itemLstData() {
    return $(
      "//div[@id='gridProductsOrderEntry']//div[@class='slick-viewport slick-viewport-top slick-viewport-left']//div[@class='ui-widget-content slick-row even'][3]/div[1]"
    );
  }
  itemLstDataTxt() {
    return $(
      "//div[@id='gridProductsOrderEntry']/div[4]/div[3]/div/div[3]/div[1]"
    );
  }

  addedItemDataLnk() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[6]/div[4]"
    );
  }

  addedItems() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[4]"
    );
  }
  laborStartTime() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[2]/div[12]"
    );
  }
  laborEndTime() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[@class='grid-canvas grid-canvas-top grid-canvas-left']/div[2]/div[13]"
    );
  }
  clickOnSalesJob() {
    return $(
      '//div[@id="oeJobGrid"]//div[contains(@class, "ui-widget-content slick-row")][1]/div[2]'
    );
  }
  textNameVal() {
    return $('//li[@class="ui-menu-item"][1]/a');
  }
  girdTxtValue() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[4]/div/span"
    );
  }
  operationalJob() {
    return $(
      "//div[@id='oeJobGrid']//div[contains(@class, 'ui-widget-content slick-row')][2]/div[2]"
    );
  }
  operationGiridTxt() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[contains(@class,'ui-widget-content slick-row')][2]/div[3]"
    );
  }
  salesGiridTxt() {
    return $(
      "//div[@id='oeOrderLinesGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[3]"
    );
  }

  salesReview() {
    return $(
      '//div[@id="oeJobGrid"]//div[contains(@class, "ui-widget-content slick-row")][1]/div[19]/input'
    );
  }

  invalidRiggingVal() {
    return $("//span[@title='Order - Invalid values.']");
  }
  overHeadedRigging() {
    return $("//a[normalize-space()='Overhead Rigging']");
  }
  riggingChkBox() {
    return $("//input[@name='OverheadRigging']");
  }
  changingSalesstrtHrs() {
    return $(
      "//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[4]"
    );
  }
  changingSalesstrtHrsDrpDwn() {
    return $("//div[@class='ui-timepicker-wrapper'][3]/ul[1]/li");
  }

  changingSalesEndHrs() {
    return $(
      "//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][1]/div[6]"
    );
  }

  changingOperationEndHrsDrpDwn() {
    return $("//div[@class='ui-timepicker-wrapper'][5]/ul/li");
  }

  changingOperationalStrHrs() {
    return $(
      "//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][2]/div[4]"
    );
  }

  changingOperationalEndHrs() {
    return $(
      "//div[@id='oeJobGrid']//div[contains(@class,'ui-widget-content slick-row')][2]/div[6]"
    );
  }
  popUpLaborStrtTime() {
    return $("//input[@name='LaborStartTime']");
  }
  popUpLaborEndTime() {
    return $("//input[@name='LaborEndTime']");
  }
  clickOnSearchBar() {
    return $("//span[@ng-click='toggleProductsFilterRow()']");
  }
  clickOnHourlyChkBox() {
    return $("//input[@ng-model='selectedOrderLine.Labor.Hourly']");
  }
  laborOnRegularHrs() {
    return $("//input[@name='LaborRegularHours']");
  }
  regularRate() {
    return $("//input[@name='regRate']");
  }
  grossTotal() {
    return $(
      "//div[@id='orderLineDetail']/div/div[@ng-show='detailTabs[0].active']/div[2]/div[@ng-show='selectedOrderLine.IsLabor']/table[2]/tbody/tr/td[2]"
    );
  }

  itemPackageLnk() {
    return $(
      "//div[@class='orderRow btn-group-vertical']/descendant::label/span[@class=' glyphicon glyphicon-gift']"
    );
  }
  //4th phase test
  packageFilter() {
    return $("//select[@ng-model='packagetypeselectedField']");
  }

  packageSearchBar() {
    return $("//span[@ng-click='togglePackagesFilterRow()']");
  }
  cmpPackageLnk() {
    return $(
      "//div[@id='oePackagesGrid']//div[@class='slick-pane slick-pane-top slick-pane-left']//div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[1]/div[1]"
    );
  }
  standardPackageLnk() {
    return $(
      "//div[@id='oePackagesGrid']//div[@class='slick-pane slick-pane-top slick-pane-left']//div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div[1]/div[2]"
    );
  }
  cmpAddedItemLnk() {
    return $(
      "//div[@id='oeOrderLinesGrid']/div[@class='slick-pane slick-pane-top slick-pane-left']/div[@class='slick-viewport slick-viewport-top slick-viewport-left']/div/div[1]/div[4]"
    );
  }

  selectOrder() {
    return $(`//a[normalize-space()='Order']`);
  }
  selectRigging() {
    return $("//a[normalize-space()='Rigging']");
  }
  invalidRiggingVal() {
    return $("//span[@title='Order - Invalid values.']");
  }
  overHeadedRigging() {
    return $("//a[normalize-space()='Overhead Rigging']");
  }
  riggingChkBox() {
    return $("//input[@name='OverheadRigging']");
  }

  selectJob() {
    return $(`//a[normalize-space()='Jobs']`);
  }

  verifySubZeroData() {
    return $(
      "//div[@id='oeOrderLinesGrid']/descendant::div[@class='ui-widget-content slick-row even active']/div[4]"
    );
  }

  lineTotelArray() {
    return $$(
      '//div[@id="oeOrderLinesGrid"]//div[contains(@class,"ui-widget-content slick-row")]/div[3]'
    );
  }
  lineTotal(row) {
    return $(
      '//div[@id="oeOrderLinesGrid"]//div[contains(@class,"ui-widget-content slick-row")][' +
      row +
      "]/div[10]"
    );
  }
  totalLnk() {
    return $("//a[@ng-click='orderController.setCurrentTab('JobTotals')']");
  }

  selectRigging() {
    return $("//a[normalize-space()='Rigging']");
  }
  invalidRiggingVal() {
    return $("//span[@title='Order - Invalid values.']");
  }
  overHeadedRigging() {
    return $("//a[normalize-space()='Overhead Rigging']");
  }
  riggingChkBox() {
    return $("//input[@name='OverheadRigging']");
  }

  async clickOnJobs() {
    await this.selectJob().click();
  }

  async getOrderNumDetails() {
    await this.getJobOrderNumber().waitForDisplayed();

    const ItemOrderNumberApp = await this.getJobOrderNumber().getText();

    const itemdatamOrder = utilTools.readJson(
      `${process.cwd()}\\data\\additemsData.json`
    );
    await browser.pause(process.env.small_wait);
    itemdatamOrder.orderNum = ItemOrderNumberApp;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\additemsDataNew.json`,
      JSON.stringify(itemdatamOrder)
    );
    await browser.pause(process.env.small_wait);
  }
  async changejobLocation(joblocationId) {
    await this.changeLocationHeader().click();
    await this.inputSeacrchLocation().setValue(joblocationId);
    await this.searchResultvalue(joblocationId).waitForClickable(),
      await this.searchResultvalue(joblocationId).doubleClick();
    await browser.pause(process.env.small_wait);
  }
  async inputOrderNum(itemOrderNum) {
    await browser.pause(process.env.small_wait);
    await this.orderNumLabel().waitForClickable();
    await this.orderNumLabel().setValue(itemOrderNum);
    await this.searchOrderButton().waitForClickable();
    await this.searchOrderButton().click();
    await browser.pause(process.env.small_wait);
  }
  async clickOnAddItemSearch() {
    await this.newInternalOrder().waitForClickable();
    await this.addItemSearch().waitForClickable();
    await this.addItemSearch().click();
  }
  async clickOnitemOrder() {
    await this.itemorderNumLink("2").waitForClickable();
    await this.itemorderNumLink("2").click();
    await browser.pause(process.env.small_wait);
  }
  async clickOnJobTab() {
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
  }
  async clickOnItems() {
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
  }
  async clickOnHotItemsLink() {
    await this.selecthotItemsLink().waitForClickable();
    await this.selecthotItemsLink().click();
  }
  async clickOnHotItemsList() {
    await this.selecthotlistItems().waitForClickable();
    await this.selecthotlistItems().doubleClick();
  }
  async clickOnCloseSection() {
    await this.selectCloseSection().waitForClickable();
    await this.selectCloseSection().click();
  }

  async changeStringValToFloat(stringData) {
    let stringVal = stringData.replace(/[^0-9^.]/, "");
    const rate1 = parseFloat(stringVal);
    return rate1;
  }
  async verifyTotalCal() {
    await this.hotItemLstTotalAmt().waitForDisplayed();
    const TotalAmt = await this.hotItemLstTotalAmt().getText();
    var TotalAmt1 = await this.changeStringValToFloat(TotalAmt);
    var lineTotalAmt = 0;
    var stRate = await this.lineTotelArray().length;
    for (var i = 2; i < stRate; i++) {
      var rate = await this.lineTotal(i).getText();
      const rate1 = await this.changeStringValToFloat(rate);
      lineTotalAmt = lineTotalAmt + rate1;
    }
    lineTotalAmt = Math.round(lineTotalAmt);
    assert.equal(TotalAmt1, lineTotalAmt);
  }

  async clickOnItemSection() {
    await this.itemSectionLink().waitForClickable();
    await this.itemSectionLink().click();
  }

  async clickOnFreight() {
    await this.freightLink().waitForClickable();
    await this.freightLink().click();
    await this.freightitemLink().waitForClickable();
    await this.freightitemLink().doubleClick();
  }
  async verifyFrieghtTotalCost() {
    await this.lineTotalAmt().waitForDisplayed();
    const lineTotal = await this.lineTotalAmt().getText();
    var lineTotalAmt = parseInt(lineTotal);
    const salesNetDue = await this.salesNetDueLink().getText();
    var salesNetDueAmt = parseInt(salesNetDue);
    assert.equal(lineTotalAmt, salesNetDueAmt);
  }

  async clickOnPackageLinkAndItem() {
    await this.packageLink().waitForClickable();
    await this.packageLink().click();
    await this.packageItemLink().waitForDisplayed();
    await this.packageItemLink().doubleClick();
    await browser.pause(process.env.small_wait);
  }
  async verifyPackageTotalCal() {
    await this.packageItemTotalAmt().waitForDisplayed();
    const packageTotAmt = await this.packageItemTotalAmt().getText();
    const packageTotAmtspaceremove = packageTotAmt.replace(/[^0-9^.]/, "");
    var packageTotAmtDet = parseInt(packageTotAmtspaceremove);
    console.log("packageTotAmtDet:" + packageTotAmtDet);
    await this.packageItemTotAmtLink1().waitForDisplayed();
    const packageAmt1 = await this.packageItemTotAmtLink1().getText();
    var packageAmtDet1 = parseInt(packageAmt1);
    console.log("packageAmtDet1:" + packageAmtDet1);
    await this.packageItemTotAmtLink2().waitForDisplayed();
    const packageAmt2 = await this.packageItemTotAmtLink2().getText();
    var packageAmtDet2 = parseInt(packageAmt2);
    console.log("packageAmtDet2:" + packageAmtDet2);
    await this.packageItemTotAmtLink3().waitForDisplayed();
    const packageAmt3 = await this.packageItemTotAmtLink3().getText();
    var packageAmtDet3 = parseInt(packageAmt3);
    console.log("packageAmtDet3:" + packageAmtDet3);
    var totalAmtCal = packageAmtDet1 + packageAmtDet2 + packageAmtDet3;
    console.log("totalAmtCal:" + totalAmtCal);
    // packageAmtDet4 +
    // packageAmtDet5;
    assert.equal(packageTotAmtDet, totalAmtCal);
  }

  async clickOnSubItemLink() {
    await this.subItemsLink().waitForClickable();
    await this.subItemsLink().click();
  }

  async clickOnItemLink() {
    await this.itemLink().waitForClickable();
    await this.itemLink().click();
  }
  async clickOnSearchMagnifier() {
    await this.searchBarLink().waitForClickable();
    await this.searchBarLink().click();
  }

  async clickOnItemSearchMagnifier() {
    await this.itemSearchBarLnk().waitForClickable();
    await this.itemSearchBarLnk().click();
  }
  async clickOnSubZeroChkBox() {
    await this.subClassZeroLink().waitForClickable();
    await this.subClassZeroLink().click();
  }
  async clickOnItemSubZeroChkBox() {
    await this.subClassItemZeroLink().waitForClickable();
    await this.subClassItemZeroLink().doubleClick();
    await browser.pause(process.env.small_wait);
  }
  async clickOnLaborSubClass() {
    await this.labourChkBox().waitForClickable();
    await this.labourChkBox().click();
    await browser.pause(process.env.minimal_wait);
  }
  async clickOnItemLaborSubClass() {
    await this.labourItemChkBox().waitForClickable();
    await this.labourItemChkBox().click();
    await browser.pause(process.env.minimal_wait);
  }

  async enterTextSearchforSubZero(subclasszeroData) {
    await this.txtSubClassSearch().waitForClickable();
    await this.txtSubClassSearch().setValue(subclasszeroData);
  }

  async enterItemTextSearchforSubZero(subclasszeroData) {
    await this.txtItemSearch().waitForClickable();
    await this.txtItemSearch().setValue(subclasszeroData);
  }

  async clearDataSearch() {
    await this.clearSearch().waitForDisplayed();
    await this.clearSearch().click();
  }
  async clearDataSearchItem() {
    await this.clearSearchItem().waitForDisplayed();
    await this.clearSearchItem().click();
  }

  async enterTextSearchforLaborSubClass(labourSubClass) {
    await this.txtSubClassSearch().waitForClickable();
    await this.txtSubClassSearch().setValue(labourSubClass);
    await this.laborSearchDatalink().waitForClickable();
    const laborSubclassDataBeforeClick =
      await this.laborSearchDatalink().getText();

    await this.laborSearchDatalink().doubleClick();
    await this.laborSubDataChk().waitForDisplayed();
    const laborSubClassAfterClick = await this.laborSubDataChk().getText();
    assert.equal(laborSubClassAfterClick, laborSubclassDataBeforeClick);
  }

  async enterTextSearchforItemLaborSubClass(labourSubClass) {
    await this.txtItemSearch().waitForClickable();
    await this.txtItemSearch().setValue(labourSubClass);
    await this.labourItemSearchDataLnk().waitForClickable();
    var laborItemDataBeforeClick =
      await this.labourItemSearchDataLnk().getText();
    await this.labourItemSearchDataLnk().doubleClick();
    await browser.pause(process.env.small_wait);
    var laborItemDataAfterClick = await this.laborSubDataChk().getText();
    assert.equal(laborItemDataAfterClick, laborItemDataBeforeClick);
  }

  async verifySubZeroQty() {
    await this.subClassZeroQtyChk().waitForDisplayed();
    const subClassZeroChk = await this.subClassZeroQtyChk().getText();
    var subClassZeroChkNum = parseInt(subClassZeroChk);
    assert.isTrue(
      subClassZeroChkNum > 0,
      "Validated Sub classgreater than zero Value successfully"
    );
  }

  async verifyItemSubZeroQty() {
    console.log("Item sub Zero Qty");
    await this.itemZeroQtyChk().waitForDisplayed();
    const ItemZeroChk = await this.itemZeroQtyChk().getText();
    console.log("ItemZeroChk" + ItemZeroChk);
    var ItemZeroChkNum = parseInt(ItemZeroChk);
    console.log("ItemZeroChkNum" + ItemZeroChkNum);
    assert.isTrue(
      ItemZeroChkNum > 0,
      "Validated Sub classgreater than zero Value successfully"
    );
  }
  async verifyStartEndDate() {
    await this.orderStartDate().waitForClickable();
    let startDateBeforeSave = await this.orderStartDate().getText();
    await this.orderEndDate().waitForClickable();
    let endDateBeforeSave = await this.orderEndDate().getText();
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    await this.orderStartDate().waitForClickable();
    let startDateAfterSave = await this.orderStartDate().getText();
    await this.orderEndDate().waitForClickable();
    let endDateAfterSave = await this.orderEndDate().getText();
    assert.equal(startDateBeforeSave, startDateAfterSave);
    assert.equal(endDateBeforeSave, endDateAfterSave);
  }
  async verifySalesAndOperationJob() {
    await this.jobsTab().click();
    assert.isTrue(await this.salesJobType().isDisplayed());
    assert.isTrue(await this.operationJobType().isDisplayed());
  }
  async validateLaborSubClassItems() {
    await this.subClassLink().waitForClickable();
    await this.subClassLink().click();
    await this.searchBarLink().waitForClickable();
    await this.searchBarLink().click();
    await this.labourChkBox().waitForClickable();
    await this.labourChkBox().click();
    await this.laborSubClassItem().waitForClickable();
    await this.laborSubClassItem().doubleClick();
    await this.belowThePackage().waitForDisplayed();
    let belowpackageTxt = await this.belowThePackage().getText();
    console.log("belowpackageTxt:" + belowpackageTxt);
    assert.isNotEmpty(belowpackageTxt);
    await this.belowThePackage().waitForClickable();
    await this.belowThePackage().click();
    await this.laborSubClassItem().waitForDisplayed();
    let laborSubClassTxt = await this.laborSubClassItem().getText();
    console.log("laborSubClassTxt:" + laborSubClassTxt);
    assert.isNotEmpty(laborSubClassTxt);
    await this.laborAddedItem().waitForDisplayed();
    let addedLaborTxt = await this.laborAddedItem().getText();
    console.log("addedLaborTxt:" + addedLaborTxt);
    assert.equal(laborSubClassTxt, addedLaborTxt);
  }
  async validateSubClassItems() {
    await this.itemLink().waitForClickable();
    await this.itemLink().click();
    await this.itemLstDataTxt().waitForClickable();
    await this.itemLstDataTxt().doubleClick();
    await this.itemLstDataTxt().waitForDisplayed();
    let itemDataTxt = await this.itemLstDataTxt().getText();
    console.log("itemDataTxt:" + itemDataTxt);
    await this.addedItemDataLnk().waitForDisplayed();
    let addedItemtxt = await this.addedItemDataLnk().getText();
    console.log("addedItemtxt:" + addedItemtxt);
    assert.equal(itemDataTxt, addedItemtxt);
  }
  async verifyTotalCalForSubclass() {
    if ((await this.invalidRiggingVal().isDisplayed()) == true) {
      await this.selectOrder().waitForClickable();
      await this.selectOrder().click();

      await this.selectRigging().waitForClickable();
      await this.selectRigging().click();

      await this.overHeadedRigging().waitForClickable();
      await this.overHeadedRigging().click();

      await this.riggingChkBox().waitForClickable();
      await this.riggingChkBox().click();

      await this.selectJob().click();
    }
    await this.btnSave().waitForClickable();
    await this.btnSave().click();
    await this.totalsLink().waitForClickable();
    await this.totalsLink().click();

    await this.totalItemAmount1().waitForDisplayed();
    const totalAmount1 = await this.totalItemAmount1().getText();
    var totalAmount1final = totalAmount1.replace(/[,]/g, "");
    var totalAmount1finalNo = parseFloat(totalAmount1final);
    console.log("totalAmount1finalNo:" + totalAmount1finalNo);

    await this.totalItemAmount2().waitForDisplayed();
    const totalAmount2 = await this.totalItemAmount2().getText();
    var totalAmount2final = totalAmount2.replace(/[,]/g, "");
    var totalAmount2finalNo = parseFloat(totalAmount2final);
    console.log("totalAmount2finalNo:" + totalAmount2finalNo);

    await this.totalItemAmount3().waitForDisplayed();
    const totalAmount3 = await this.totalItemAmount3().getText();
    var totalAmount3final = totalAmount3.replace(/[,]/g, "");
    var totalAmount3finalNo = parseFloat(totalAmount3final);
    console.log("totalAmount3finalNo:" + totalAmount3finalNo);

    await this.totalItemAmount4().waitForDisplayed();
    const totalAmount4 = await this.totalItemAmount4().getText();
    var totalAmount4final = totalAmount4.replace(/[,]/g, "");
    var totalAmount4finalNo = parseFloat(totalAmount4final);
    console.log("totalAmount4finalNo:" + totalAmount4finalNo);

    await this.totalItemAmount5().waitForDisplayed();
    const totalAmount5 = await this.totalItemAmount5().getText();
    var totalAmount5final = totalAmount5.replace(/[,]/g, "");
    var totalAmount5finalNo = parseFloat(totalAmount5final);
    console.log("totalAmount5finalNo:" + totalAmount5finalNo);

    await this.totalItemAmount6().waitForDisplayed();
    const totalAmount6 = await this.totalItemAmount6().getText();
    var totalAmount6final = totalAmount6.replace(/[,]/g, "");
    var totalAmount6finalNo = parseFloat(totalAmount6final);
    console.log("totalAmount6finalNo:" + totalAmount6finalNo);

    await this.totalItemAmount7().waitForDisplayed();
    const totalAmount7 = await this.totalItemAmount7().getText();
    var totalAmount7final = totalAmount7.replace(/[,]/g, "");
    var totalAmount7finalNo = parseFloat(totalAmount7final);
    console.log("totalAmount7finalNo:" + totalAmount5finalNo);

    var totalCalAmount =
      totalAmount1finalNo +
      totalAmount2finalNo +
      totalAmount3finalNo +
      totalAmount4finalNo +
      totalAmount5finalNo +
      totalAmount6finalNo;
    console.log("totalCalAmount:" + totalCalAmount);
    assert.equal(totalAmount7finalNo, totalCalAmount);
  }

  async doubleClickOnItem() {
    await browser.pause(process.env.small_wait);
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.itemLink().waitForClickable();
    await this.itemLink().click();
    await this.itemLst().waitForClickable();
    await this.itemLst().doubleClick();
    await browser.pause(process.env.small_wait);
  }
  async verifyAddedItems() {
    await this.addedItems().waitForDisplayed();
    let addedItemsTxt = await this.addedItems().getText();
    assert.isNotEmpty(addedItemsTxt);
  }
  async clickOnSalesJobName() {
    await browser.pause(process.env.small_wait);
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.clickOnSalesJob().waitForClickable();
    await this.clickOnSalesJob().click();
    await browser.pause(process.env.small_wait);
  }
  async enterTheName(salesNameVal) {
    await this.addedItems().waitForClickable();
    await this.addedItems().click();
    await browser.pause(process.env.small_wait);
    await browser.keys(salesNameVal);
    await this.textNameVal().moveTo();

    await browser.pause(process.env.small_wait);
    await this.textNameVal().waitForDisplayed();
    let popUpTxtName = await this.textNameVal().getText();
    assert.isNotEmpty(popUpTxtName);

    await this.textNameVal().click();
    await browser.keys("Tab");
    await browser.pause(process.env.small_wait);
  }
  async verifyAddedPackageGrid() {
    await this.addedItems().waitForDisplayed();
    let gridTxtVal = await this.addedItems().getText();
    assert.isNotEmpty(gridTxtVal);
  }
  async clickOnOperationalJob() {
    await browser.pause(process.env.small_wait);
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.operationalJob().waitForClickable();
    await this.operationalJob().click();
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.itemLink().waitForClickable();
    await this.itemLink().click();
    await this.itemsDataLink().waitForClickable();
    await this.itemsDataLink().doubleClick();
    await this.itemsDataLink().doubleClick();
    await this.itemsDataLink().doubleClick();
    if ((await this.invalidRiggingVal().isDisplayed()) == true) {
      await this.selectOrder().waitForClickable();
      await this.selectOrder().click();

      await this.selectRigging().waitForClickable();
      await this.selectRigging().click();

      await this.overHeadedRigging().waitForClickable();
      await this.overHeadedRigging().click();

      await this.riggingChkBox().waitForClickable();
      await this.riggingChkBox().click();

      await this.selectJob().click();
    }
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async verifySalesJobData() {
    await this.clickOnSalesJob().waitForClickable();
    await this.clickOnSalesJob().click();
    await this.salesGiridTxt().waitForDisplayed();
    let salesGridTxt = await this.salesGiridTxt().getText();
    await this.operationalJob().waitForClickable();
    await this.operationalJob().click();
    await browser.pause(process.env.small_wait);
    await this.operationGiridTxt().waitForDisplayed();
    let operationalGridTxt = await this.operationGiridTxt().getText();
    assert.notEqual(salesGridTxt, operationalGridTxt);
    await browser.pause(process.env.small_wait);
  }
  async verifySalesReview() {
    await this.clickOnSalesJob().waitForClickable();
    await this.clickOnSalesJob().click();
    await browser.pause(process.env.small_wait);
    await this.salesReview().waitForDisplayed();
    let salesReview = await this.salesReview().isSelected();
    assert.isTrue(salesReview);
  }
  async updatingSalesJobHrs() {
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.clickOnSalesJob().waitForClickable();
    await this.clickOnSalesJob().click();
    await browser.pause(process.env.small_wait);
    await this.changingSalesstrtHrs().waitForClickable();
    await this.changingSalesstrtHrs().click();
    await this.changingSalesstrtHrs().click();
    for (let index = 0; index < 3; index++) {
      await browser.keys("\ue015");
    }
    await browser.keys("Enter");
    await browser.pause(process.env.small_wait);
    await this.changingSalesEndHrs().waitForClickable();
    await this.changingSalesEndHrs().click();
    await this.changingSalesEndHrs().click();
    for (let index = 0; index < 5; index++) {
      await browser.keys("\ue015");
    }
    await browser.keys("Enter");
    await browser.pause(process.env.small_wait);
  }
  async verifyoperationJobHrs() {
    await this.changingSalesstrtHrs().waitForDisplayed();
    let salStrtHrs = await this.changingSalesstrtHrs().getText();

    await browser.pause(process.env.small_wait);
    await this.selectJob().click();
    await this.changingSalesEndHrs().waitForDisplayed();
    let salEndHrs = await this.changingSalesEndHrs().getText();

    await this.changingOperationalStrHrs().waitForDisplayed();
    let opeStrtHrs = await this.changingOperationalStrHrs().getText();

    await this.changingOperationalEndHrs().waitForDisplayed();
    let opeCloseHrs = await this.changingOperationalEndHrs().getText();

    assert.equal(salStrtHrs, opeStrtHrs);
    assert.equal(salEndHrs, opeCloseHrs);
    await browser.pause(process.env.small_wait);
  }
  async addLaborItemsAndVerify() {
    await this.changingSalesstrtHrs().waitForDisplayed();
    let salStrtHrs = await this.changingSalesstrtHrs().getText();
    console.log("salStrtHrs:" + salStrtHrs);
    //await this.selectJob().waitForClickable();
    // await browser.pause(process.env.small_wait);
    //await this.selectJob().click();
    await this.changingSalesEndHrs().waitForDisplayed();
    let salEndHrs = await this.changingSalesEndHrs().getText();
    console.log("salEndHrs:" + salEndHrs);

    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.itemLink().waitForClickable();
    await this.itemLink().click();
    await this.laborItemData().waitForClickable();
    await this.laborItemData().doubleClick();
    await this.clickOnSearchBar().waitForClickable();
    await this.clickOnSearchBar().click();
    await this.labourItemChkBox().waitForClickable();
    await this.labourItemChkBox().click();
    await this.laborItemData().waitForClickable();
    await this.laborItemData().doubleClick();

    await this.laborStartTime().waitForDisplayed();
    let laborStrtTime = await this.laborStartTime().getText();
    console.log("laborStrtTime:" + laborStrtTime);
    await this.laborEndTime().waitForDisplayed();
    let laborEndTime = await this.laborEndTime().getText();
    console.log("laborEndTime:" + laborEndTime);
    await this.popUpLaborStrtTime().waitForDisplayed();
    let popUpLbrStartTime = await this.popUpLaborStrtTime().getValue();
    console.log("popUpLbrStartTime:" + popUpLbrStartTime);
    await this.popUpLaborEndTime().waitForDisplayed();
    let popUpLbrEndTime = await this.popUpLaborEndTime().getValue();
    console.log("popUpLbrEndTime:" + popUpLbrEndTime);

    assert.equal(salStrtHrs, laborStrtTime);
    assert.equal(salStrtHrs, popUpLbrStartTime);
    assert.equal(salEndHrs, laborEndTime);
    assert.equal(salEndHrs, popUpLbrEndTime);
  }
  async verifyReflectedLaborHrs() {
    await this.selectJob().waitForClickable();
    await this.selectJob().waitForDisplayed();
    await this.selectJob().click();
    await this.changingSalesEndHrs().waitForClickable();
    await this.changingSalesEndHrs().click();
    await this.changingSalesEndHrs().click();
    for (let index = 0; index < 5; index++) {
      await browser.keys("\ue015");
    }
    await browser.keys("Enter");

    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);

    await this.changingSalesstrtHrs().waitForDisplayed();
    let salStrtHrs = await this.changingSalesstrtHrs().getText();

    await this.selectJob().click();
    await this.changingSalesEndHrs().waitForDisplayed();
    let salEndHrs = await this.changingSalesEndHrs().getText();

    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.itemLink().waitForClickable();
    await this.itemLink().click();
    await this.itemLstData().waitForClickable();
    await this.itemLstData().doubleClick();
    await this.clickOnSearchBar().waitForClickable();
    await this.clickOnSearchBar().click();
    await this.labourItemChkBox().waitForClickable();
    await this.labourItemChkBox().click();
    await this.itemLstData().waitForClickable();
    await this.itemLstData().doubleClick();
    await this.laborStartTime().waitForDisplayed();

    await browser.pause(process.env.small_wait);
    let laborStrtTime = await this.laborStartTime().getText();
    await this.laborEndTime().waitForDisplayed();
    let laborEndTime = await this.laborEndTime().getText();

    assert.equal(salStrtHrs, laborStrtTime);
    assert.equal(salEndHrs, laborEndTime);
  }
  async updatingItemTimeAndVerify() {
    await this.clickOnHourlyChkBox().waitForClickable();
    await this.clickOnHourlyChkBox().click();
    await this.clickOnHourlyChkBox().click();
    await this.popUpLaborStrtTime().waitForClickable();
    await this.popUpLaborStrtTime().click();
    await browser.keys("\ue015");
    await browser.keys("\ue015");
    await browser.keys("\ue015");
    await browser.keys("Enter");
    await this.popUpLaborEndTime().waitForClickable();
    await this.popUpLaborEndTime().click();
    await browser.keys("\ue015");
    await browser.keys("\ue015");
    await browser.keys("\ue015");
    await browser.keys("Enter");
    if ((await this.invalidRiggingVal().isDisplayed()) == true) {
      await this.selectOrder().waitForClickable();
      await this.selectOrder().click();

      await this.selectRigging().waitForClickable();
      await this.selectRigging().click();

      await this.overHeadedRigging().waitForClickable();
      await this.overHeadedRigging().click();

      await this.riggingChkBox().waitForClickable();
      await this.riggingChkBox().click();

      await this.selectJob().click();
    }
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async verifyingGrossTotal() {
    await this.laborStartTime().waitForClickable();
    await this.laborStartTime().click();
    await this.laborOnRegularHrs().waitForDisplayed();
    let regularHrs = await this.laborOnRegularHrs().getValue();
    regularHrs = parseFloat(regularHrs);

    await this.regularRate().waitForDisplayed();
    let regularRate = await this.regularRate().getValue();
    regularRate = parseFloat(regularRate);

    let grossTotal = regularHrs * regularRate;
    console.log("grossTotal:" + grossTotal);
    await this.grossTotal().waitForDisplayed();
    let grosssTotVal = await this.grossTotal().getText();
    grosssTotVal = grosssTotVal.slice(0, -1);
    console.log("grosssTotVal:" + grosssTotVal);
    assert.equal(grossTotal, grosssTotVal);
  }
  // 4th phase Methods

  async addCMPPackage() {
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.itemPackageLnk().waitForClickable();
    await this.itemPackageLnk().click();
    await this.packageSearchBar().waitForClickable();
    await this.packageSearchBar().click();
    await this.packageFilter().waitForClickable();
    await this.packageFilter().click();
    await this.packageFilter().selectByIndex(2);
  }
  async addAndVerifyCMPPackagetoJob() {
    await this.cmpPackageLnk().waitForClickable();
    await this.cmpPackageLnk().doubleClick();
    if ((await this.invalidRiggingVal().isDisplayed()) == true) {
      await this.selectOrder().waitForClickable();
      await this.selectOrder().click();

      await this.selectRigging().waitForClickable();
      await this.selectRigging().click();

      await this.overHeadedRigging().waitForClickable();
      await this.overHeadedRigging().click();

      await this.riggingChkBox().waitForClickable();
      await this.riggingChkBox().click();

      await this.selectJob().click();
    }
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
    await this.cmpAddedItemLnk().waitForDisplayed();
    let cmpAddedItem = await this.cmpAddedItemLnk().getText();
    console.log("cmpAddedItem:" + cmpAddedItem);
    assert.isNotEmpty(cmpAddedItem);
  }
  async addSerialPackage() {
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.itemPackageLnk().waitForClickable();
    await this.itemPackageLnk().click();
    await this.packageSearchBar().waitForClickable();
    await this.packageSearchBar().click();
    await this.packageFilter().waitForClickable();
    await this.packageFilter().click();
    await this.packageFilter().selectByIndex(3);
  }
  async addAndVerifySerialPackagetoJob() {
    await this.cmpPackageLnk().waitForClickable();
    await this.cmpPackageLnk().doubleClick();
    if ((await this.invalidRiggingVal().isDisplayed()) == true) {
      await this.selectOrder().waitForClickable();
      await this.selectOrder().click();

      await this.selectRigging().waitForClickable();
      await this.selectRigging().click();

      await this.overHeadedRigging().waitForClickable();
      await this.overHeadedRigging().click();

      await this.riggingChkBox().waitForClickable();
      await this.riggingChkBox().click();
      await this.selectJob().waitForClickable();
      await this.selectJob().click();
    }

    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
    await this.cmpAddedItemLnk().waitForDisplayed();
    let serialPackageItem = await this.cmpAddedItemLnk().getText();
    console.log("serialPackageItem:" + serialPackageItem);
    assert.isNotEmpty(serialPackageItem);
  }
  async addStandardPackageToJob() {
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.itemPackageLnk().waitForClickable();
    await this.itemPackageLnk().click();
    await this.packageSearchBar().waitForClickable();
    await this.packageSearchBar().click();
    await this.packageFilter().waitForClickable();
    await this.packageFilter().click();
    await this.packageFilter().selectByIndex(4);
  }
  async addAndVerifyStandardPackageToJob() {
    await this.standardPackageLnk().waitForClickable();
    await this.standardPackageLnk().doubleClick();
    if ((await this.invalidRiggingVal().isDisplayed()) == true) {
      await this.selectOrder().waitForClickable();
      await this.selectOrder().click();

      await this.selectRigging().waitForClickable();
      await this.selectRigging().click();

      await this.overHeadedRigging().waitForClickable();
      await this.overHeadedRigging().click();

      await this.riggingChkBox().waitForClickable();
      await this.riggingChkBox().click();

      await this.selectJob().click();
    }

    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
    await this.cmpAddedItemLnk().waitForDisplayed();
    let standardPackageItem = await this.cmpAddedItemLnk().getText();
    console.log("standardPackageItem:" + standardPackageItem);
    assert.isNotEmpty(standardPackageItem);
  }
  async addSuperPackageToJob() {
    await this.selectJob().waitForClickable();
    await this.selectJob().click();
    await this.selectItemsLink().waitForClickable();
    await this.selectItemsLink().click();
    await this.itemPackageLnk().waitForClickable();
    await this.itemPackageLnk().click();
    await this.packageSearchBar().waitForClickable();
    await this.packageSearchBar().click();
    await this.packageFilter().waitForClickable();
    await this.packageFilter().click();
    await this.packageFilter().selectByIndex(5);
  }

  async addAndVerifySuperPackageToJob() {
    await this.standardPackageLnk().waitForClickable();
    await this.standardPackageLnk().doubleClick();
    if ((await this.invalidRiggingVal().isDisplayed()) == true) {
      await this.selectOrder().waitForClickable();
      await this.selectOrder().click();

      await this.selectRigging().waitForClickable();
      await this.selectRigging().click();

      await this.overHeadedRigging().waitForClickable();
      await this.overHeadedRigging().click();

      await this.riggingChkBox().waitForClickable();
      await this.riggingChkBox().click();

      await this.selectJob().click();
    }

    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
    await this.cmpAddedItemLnk().waitForDisplayed();
    let superPackageItem = await this.cmpAddedItemLnk().getText();
    console.log("superPackageItem:" + superPackageItem);
    assert.isNotEmpty(superPackageItem);
  }
  async riggingHandle() {
    if ((await this.invalidRiggingVal().isDisplayed()) == true) {
      await this.selectOrder().waitForClickable();
      await this.selectOrder().click();
      await this.selectRigging().waitForClickable();
      await this.selectRigging().click();
      await this.overHeadedRigging().waitForClickable();
      await this.overHeadedRigging().click();
      await this.riggingChkBox().waitForClickable();
      await this.riggingChkBox().click();
    }
  }
}

module.exports = new AddItemNavigator();
