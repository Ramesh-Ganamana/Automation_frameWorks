const LandingNavigatorPage = require("./navigator.page");
const { assert } = require("chai");
const utilTools = require("../../utils/tools");
// const {
//   default: setValue,
// } = require("webdriverio/build/commands/element/setValue");
const {
  default: parentElement,
} = require("webdriverio/build/commands/element/parentElement");

class InventorySourcesPage extends LandingNavigatorPage {
  itemsWithQtyGraterZero() {
    return $('//input[@id="chkMyInventory"]');
  }
  InventorySourcesItem() {
    return $(`//div[text()='1/2 Steel Coupler with 1/2" Bolt']`);
  }
  roomOrBathRow1() {
    return $(
      '//div[@id="oeJobGrid"]//div[contains(@class, "slick-cell l6 r6 ")]'
    );
  }
  jobRoomDrpDnw() {
    return $(
      '//div[@id="oeJobGrid"]//div[contains(@class, "slick-cell l6 r6 ")]/select'
    );
  }
  jobStatus() {
    return $(
      '//div[@id="oeJobGrid"]//div[contains(@class, "slick-cell l7 r7 ")]'
    );
  }
  jobStatusDD() {
    return $(
      '//div[@id="oeJobGrid"]//div[contains(@class, "slick-cell l7 r7 ")]/select'
    );
  }
  saveBtn() {
    return $('//input[@value="Save"]');
  }
  inventorySourcesTab() {
    return $(`//a[@ng-click="setOrderEntryMainTab('InventorySources')"]`);
  }
  addRequestBtn() {
    return $('//button[@title="New Request"]');
  }
  addRequestDD() {
    return $('//button[@ng-show="Sources.WarehouseRequestEnabled()"]');
  }
  addRequestDDList(requestType) {
    return $('//ul/li/a[text()="' + requestType + '"]');
  }
  contactPhone() {
    return $('//td/input[@ng-model="Sources.SelectedRequest.ContactPhone"]');
  }
  okBtn() {
    return $('//button[text()="OK"]');
  }
  filtersExpand() {
    return $('//span[@ng-click="Sources.ToggleEquipmentFilter()"]');
  }
  includeShortsCB() {
    return $('//input[@ng-model="Sources.EquipmentIncludeShorts"]');
  }
  addEquipmentItem() {
    return $(
      '//td/div[@ng-click="Sources.AddEquipmentItem(source)" and @ng-show="Sources.IsEditAllowed"]'
    );
  }
  addQuantity() {
    return $('//td/input[@ng-model="Sources.SelectedSource.Quantity"]');
  }
  statusLabel() {
    return $(
      '//div[@ng-show="!Sources.RequestsLoading"]//td/span[@ng-bind-html="Sources.StatusLabel(item)"]'
    );
  }
  orderStartDate() {
    return $('//input[@name="OrderStartDate"]');
  }
  nextMonth() {
    return $('//a[@title="Next"]');
  }
  startDatePickerInOrder(date) {
    return $('//td/a[text()="' + date + '"]');
  }
  adjustJobDatesCB() {
    return $('//input[@id="AdjustJobDefaultDates"]');
  }
  adjustlaborLinesDatesCB() {
    return $('//input[@id="AdjustJobLaborDates"]');
  }
  yesButton() {
    return $('//button[text()="Yes"]');
  }
  lineItemQty() {
    return $(
      '//*[@id="oeOrderLinesGrid"]//div[contains(@class, "ui-widget-content slick-row")][1]/div[3]'
    );
  }
  itemsSearchBar() {
    return $('//input[@id="txtProductListSearch"]');
  }
  shortColumn() {
    return $('//th[@ng-show="Sources.EquipmentIncludeShorts"]');
  }
  orderItemSummaryTab() {
    return $('//span[text()="Order Item Summary"]/ancestor::a');
  }
  warehouseRequestExpand() {
    return $('//span[@ng-show="Sources.CheckSummaryGridVisibility(request)"]');
  }
  orderNumberLabel() {
    return $(
      `//div[@ng-show="orderEntryMainTab=='Order' || orderEntryMainTab=='Loading'"]//label[contains(text(),'Order Number')]/parent::div/following-sibling::div/label`
    );
  }
  orderSearchDateRange() {
    return $('//label[@for="order-search_ApplyDates"]/input');
  }
  orderNumField() {
    return $("//*[contains(text(), 'Order Number')]/parent::div/input");
  }
  searchOrderBtn() {
    return $('//input[@title="Search"]');
  }
  orderResults(orderNum) {
    return $('//a[text()="' + orderNum + '"]');
  }
  editRequestBtn() {
    return $('//button[@ng-click="Sources.EditRequest(request)"]');
  }
  picklistComments() {
    return $('//input[@ng-model="Sources.SelectedRequest.Comments"]');
  }
  transportationNotes() {
    return $(
      '//textArea[@ng-model="Sources.SelectedRequest.TransportationNote"]'
    );
  }
  myPersonalNotes() {
    return $('//textArea[@ng-model="Sources.SelectedRequest.Notes"]');
  }
  equipmentShortsTab() {
    return $('//span[text()="Equipment Shorts"]/ancestor::a');
  }
  inventorySourcesItems() {
    return $('//td/span[@ng-click="Sources.openItemSource(source)"]');
  }
  cancelRequestBtn() {
    return $(
      '//button[@ng-click="Sources.CancelInventorySources(request.RequestInfo)"]'
    );
  }
  cancelRequestPopup() {
    return $('//div[@class="modal-content"]');
  }
  cancelRequestYesBtn() {
    return $('//button[@ng-click="Sources.CancelInventoryRequest()"]');
  }
  warehouseRequestNameExpand() {
    return $('//span[@ng-show="Sources.CheckSummaryGridVisibility(request)"]');
  }
  nameColumnInItems() {
    return $(
      '//div[@id="oeOrderLinesGrid"]//div[contains(@class, "ui-widget-content slick-row")][2]/div[4]'
    );
  }
  lineItemList(itemName) {
    return $('//ul/li/a[text()="' + itemName + '"]');
  }
  addVenueRequestItem() {
    return $('//td/div[@ng-click="Sources.VenueRequestItems.AddItem(item)"]');
  }
  useSubclassCB() {
    return $('//span/input[@ng-model="Sources.UseSubClass"]');
  }
  searchIcon() {
    return $('//span[@ng-click="Sources.SearchItem.Search()"]');
  }
  sourceItemSearchQty(row) {
    return $(
      `//div[@id="itemGridResults"]//div[contains(@class,"slick-viewport slick-viewport-top slick-viewport")][1]/div[contains(@class,"grid-canvas grid-canvas-top grid-canvas")]/div[` +
        row +
        `]/div[1]`
    );
  }
  applyItems() {
    return $("//button[@ng-click='Sources.SearchItem.Apply()']");
  }
  generateRequest() {
    return $(
      '//button[@ng-click="Sources.PossibleSolutions.GenerateRequest()"]'
    );
  }
  venueRequestName() {
    return $(
      `//span[@ng-show="Sources.CheckSummaryGridVisibility(request)"]/following-sibling::label[contains(text(),"Venue Request Name")][1]`
    );
  }
  refreshShorts() {
    return $(
      '//button[@ng-click="Sources.VenueRequestItems.RefreshShorts()()"]'
    );
  }
  addedRequestItems(row) {
    return $(
      '//*[@id="possibleSolutions"]//div[contains(@class, "ui-widget-content slick-row")][' +
        row +
        "]/div[2]"
    );
  }
  venueRequestFilterExpand() {
    return $('//span[@ng-click="Sources.VenueRequestItems.ToggleFilter()"]');
  }
  venueRequestIncludeShorts() {
    return $('//input[@ng-model="Sources.VenueRequestItems.IncludeShorts"]');
  }
  venueRequestShortsCoulmn() {
    return $('//th[@ng-show="Sources.VenueRequestItems.IncludeShorts"]');
  }
  closeBtn() {
    return $("//button[@ng-show='closeable']");
  }
  // latest------------------------------------
  jobHeader() {
    return $("//a[normalize-space()='Jobs']");
  }
  deliveryDateFieldModel() {
    return $("//td[normalize-space()='Delivery Date']//following::input[1]");
  }
  addVenueModel() {
    return $("//div[@class='modal-content']");
  }
  sourceItemSearchAvaliableQty(row) {
    return $(
      `//div[@id="itemGridResults"]//div[contains(@class,"slick-viewport slick-viewport-top slick-viewport")][1]/div[contains(@class,"grid-canvas grid-canvas-top grid-canvas")]/div[` +
        row +
        `]/div[7]`
    );
  }
  inventaryQuantityInput() {
    return $(`//div[@id='itemGridResults']//input`);
  }
  quantityDiv() {
    return $("//div[@class='slick-cell l0 r0 cellNumber active selected']");
  }

  ____________________________________________________________________;

  locationGetting() {
    return $(
      `((//label[normalize-space()='Venue Request Name'])//following-sibling::span)[1]`
    );
  }
  home() {
    return $(`//button[@id='Home']`);
  }
  home2() {
    return $(`//button[@title='Home']`);
  }
  changeLocationHeader() {
    return $('//input[@title="Click Here to Change Location"]');
  }
  inputSeacrchLocation() {
    return $("//input[@id='txtLocationSearch']");
  }
  locationchange() {
    return $(
      `(//div[@id='slickGridContainer-locationGridResults']//div[contains(@class,'ui-widget-content slick-row')]//div[2])[1]`
    );
  }

  btnLocationSelect() {
    return $("//button[contains(text(),'Select')]");
  }
  Equipmentrequest() {
    return $(`//span[normalize-space()='Equipment Requests']`);
  }
  approveEquipmentTransfers() {
    return $(`//button[normalize-space()='Approve Equipment Transfers']`);
  }
  venueRequest() {
    return $(`(//div[@class='container-fluid'])[3]//tbody//tr[1]`);
  }
  arrowbutton() {
    return $(`(//span[@ng-click="itemDetailsClicked(approval)"])[1]`);
  }

  approve() {
    return $(`(//button[normalize-space()='Approve'])[1]`);
  }

  deny() {
    return $(`(//button[normalize-space()='Deny'])[1]`);
  }
  picklistComments() {
    return $(`//input[@title='Picklist Comments']`);
  }
  applyButton() {
    return $(`//button[@ng-click ='ApplyApproval()']`);
  }
  Comments() {
    return $(`//input[@placeholder='Enter text up to 1,000 characters.']`);
  }
  yesButton() {
    return $(`//button[normalize-space()='Yes']`);
  }
  orderSearch() {
    return $(`//a[@id='Orders']`);
  }
  oldClassicOrder() {
    return $(
      `//div[@id='orderSearchGrid']//div[contains(@class,'ui-widget-content slick-row')][2]//div[3]`
    );
  }
  async ItemForInventoryResources(quantity) {
    await this.itemsWithQtyGraterZero().waitForClickable();
    await this.itemsWithQtyGraterZero().click();
    await this.itemsSearchBar().waitForClickable();
    await this.itemsSearchBar().setValue('1/2 Steel Coupler with 1/2" Bolt');
    await this.InventorySourcesItem().doubleClick();
    await this.lineItemQty().click();
    await browser.keys(quantity);
  }

  getDateAfterFifthDay() {
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const today = new Date();
    today.setDate(today.getDate() + 5);
    const dayOfWeek = daysOfWeek[today.getDay()];
    const date = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear().toString();
    const formattedDate = `${month.toString().padStart(2, "0")}/${date
      .toString()
      .padStart(2, "0")}/${year}`;
    return `${dayOfWeek} ${formattedDate}`;
  }

  async updateOrderDate() {
    const today = new Date();
    const endDay = today.getDate().toString().padStart(2, "0");
    await this.orderStartDate().waitForClickable();
    console.log(this.getDateAfterFifthDay(), "$$$$$$$$$$$$$$%^&");
    await this.orderStartDate().setValue(this.getDateAfterFifthDay());
    // await this.nextMonth().click();
    // await this.startDatePickerInOrder(endDay).click();
    await browser.keys("\u0009");
    await this.adjustJobDatesCB().click();
    await browser.pause(2000);
    await this.adjustlaborLinesDatesCB().click();
    await browser.pause(2000);
    await this.yesButton().click();
    await browser.keys("\u0009");
    await this.orderNumberLabel().waitForDisplayed();
    let orderNumText = await this.orderNumberLabel().getText();
    const InventoryData = utilTools.readJson(
      `${process.cwd()}\\data\\inventorySources.json`
    );
    await browser.pause(process.env.small_wait);
    InventoryData.orderNum = orderNumText;
    const fsWrite = require("fs");
    fsWrite.writeFileSync(
      `${process.cwd()}\\data\\inventorySources.json`,
      JSON.stringify(InventoryData)
    );
    await this.saveBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async updateRoomStatusToOtherthanQuote() {
    await this.roomOrBathRow1().waitForClickable();
    await this.roomOrBathRow1().click();
    await this.jobRoomDrpDnw().selectByIndex(1);
    await this.jobStatus().waitForClickable();
    await this.jobStatus().click();
    await this.jobStatusDD().selectByIndex(5);
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
  }
  async validateAddRequestButtonEnabled() {
    await this.inventorySourcesTab().waitForClickable();
    await this.inventorySourcesTab().click();
    await this.addRequestBtn().waitForDisplayed();
    await browser.pause(process.env.small_wait);
    assert.isTrue(await this.addRequestBtn().isEnabled());
  }
  async addWarehouseRequest() {
    await this.addRequestDD().waitForClickable();
    await this.addRequestDD().click();
    await this.addRequestDDList("Add Warehouse Request").waitForClickable();
    await this.addRequestDDList("Add Warehouse Request").click();
    await this.contactPhone().setValue("567");
    await this.okBtn().waitForClickable();
    await this.okBtn().click();
  }
  async clickOnIncludeShorts(quantity) {
    await this.filtersExpand().waitForClickable();
    await this.filtersExpand().click();
    await this.includeShortsCB().waitForClickable();
    await this.includeShortsCB().click();
    assert.isTrue(await this.shortColumn().isDisplayed());
    await this.addEquipmentItem().waitForClickable();
    await this.addEquipmentItem().click();
    await this.addQuantity().setValue(quantity);
    await this.okBtn().waitForClickable();
    await this.okBtn().click();
  }
  async validateWarehouseRequestIsGenerated() {
    await this.orderItemSummaryTab().waitForClickable();
    await this.orderItemSummaryTab().click();
    await this.warehouseRequestExpand().waitForClickable();
    await this.warehouseRequestExpand().click();
    assert.isTrue(await this.statusLabel().isDisplayed());
  }
  async searchOrder(orderNum) {
    await this.orderSearchDateRange().waitForClickable();
    await this.orderSearchDateRange().click();
    await this.orderNumField().waitForDisplayed();
    await this.orderNumField().setValue(orderNum);
    await this.searchOrderBtn().waitForClickable();
    await this.searchOrderBtn().click();
    await browser.pause(process.env.small_wait);
  }
  async searchOrderResults(orderNum) {
    await this.orderResults(orderNum).waitForClickable();
    await this.orderResults(orderNum).click();
  }
  async editQuantity(editQuantity) {
    await this.lineItemQty().click();
    await browser.keys(editQuantity);
    await this.saveBtn().waitForClickable();
    await this.saveBtn().click();
  }
  async editWarehouseRequest() {
    await this.inventorySourcesTab().waitForClickable();
    await this.inventorySourcesTab().click();
    await this.editRequestBtn().waitForClickable();
    await this.editRequestBtn().click();
    assert.isTrue(await this.addVenueModel().isDisplayed());
    await this.picklistComments().waitForClickable();
    await this.picklistComments().setValue("testauto");
    await this.transportationNotes().setValue("testauto");
    await this.myPersonalNotes().setValue("testauto");
    await this.okBtn().waitForClickable();
    await this.okBtn().click();
  }
  async validateWarehouseRequestEditable() {
    await this.equipmentShortsTab().waitForClickable();
    await this.equipmentShortsTab().click();
    assert.isTrue(await this.inventorySourcesItems().isDisplayed());
  }
  async cancelWarehouseRequest() {
    await this.inventorySourcesTab().waitForClickable();
    await this.inventorySourcesTab().click();
    await this.cancelRequestBtn().waitForClickable();
    await this.cancelRequestBtn().click();
    assert.isTrue(await this.cancelRequestPopup().isDisplayed());
    await this.cancelRequestYesBtn().waitForClickable();
    await this.cancelRequestYesBtn().click();
    await browser.pause(process.env.small_wait);
    await browser.pause(process.env.small_wait);
  }
  async validateWarehouseRequestCancelled() {
    await browser.pause(process.env.small_wait);
    assert.isFalse(await this.warehouseRequestNameExpand().isDisplayed());
  }
  async addItemForVenueRequest(venueRequestItem, venueItemQty) {
    await this.nameColumnInItems().waitForClickable();
    await this.nameColumnInItems().click();
    await browser.keys(venueRequestItem);
    await this.lineItemList(venueRequestItem).click();
    await this.lineItemQty().click();
    await browser.keys(venueItemQty);
  }
  async addVenueRequest() {
    await this.addRequestDD().waitForClickable();
    await this.addRequestDD().click();
    await this.addRequestDDList("Add Venue Request").waitForClickable();
    await this.addRequestDDList("Add Venue Request").click();
    assert.isTrue(await this.addVenueModel().isDisplayed());
    await this.contactPhone().setValue("567");
    //   await this.deliveryDateFieldModel().setValue(this.getDateAfterFifthDay());
    await this.okBtn().waitForClickable();
    await this.okBtn().click();
  }
  async clickOnIncludeShortsVenueRequest() {
    await this.venueRequestFilterExpand().waitForClickable();
    await this.venueRequestFilterExpand().click();
    await this.venueRequestIncludeShorts().waitForClickable();
    await this.venueRequestIncludeShorts().click();
    assert.isTrue(await this.venueRequestShortsCoulmn().isDisplayed());
    assert.isTrue(await this.refreshShorts().isEnabled());
  }
  async addSourceItemsFromVenue() {
    await this.addVenueRequestItem().waitForClickable();
    await this.addVenueRequestItem().click();
    await this.useSubclassCB().waitForClickable();
    await this.useSubclassCB().click();
    await this.searchIcon().waitForClickable();
    await this.searchIcon().click();
    await browser.pause(3000);
    //   let avalibleQty = await this.sourceItemSearchAvaliableQty(2).getText();
    await this.sourceItemSearchQty(5).click();
    await browser.pause(3000);
    await this.quantityDiv().click();
    await browser.pause(3000);
    await this.inventaryQuantityInput().setValue(1);
    await browser.keys("\ue004");
    await browser.execute(() => {
      document
        .querySelector(".searchResultsFooter")
        .style.setProperty("display", "none");
    });
    await this.applyItems().waitForClickable();
    await this.applyItems().click();
    // return avalibleQty;
  }

  async validateItemQuantityAddedToRequest(totalQty) {
    let qtyText = await this.addedRequestItems(1).getText();
    assert.equal(totalQty, qtyText, "quantity is not updated");
  }

  async clckOnGenerateRequest() {
    await this.generateRequest().waitForClickable();
    await this.generateRequest().click();
    await browser.pause(process.env.medium_wait);
  }

  async validateVenueRequestCreatedForAllItems() {
    let isVenueRequestDisplayed = await this.venueRequestName().isDisplayed();
    assert.isTrue(isVenueRequestDisplayed, "venue request is not displayed");
  }

  async verifyRequestShouldNotDisplayed() {
    let isVenueRequestDisplayed = await this.venueRequestName().isDisplayed();
    assert.isFalse(isVenueRequestDisplayed, "venue request is not cancled");
  }
  async clickCloseBtn() {
    await this.closeBtn().waitForClickable();
    await this.closeBtn().click();
  }

  // latest -----------------
  itemNameBox() {
    return $(
      "(//div[@ng-form='OrderForms.jobOrderLinesForm']//div[@class='slick-cell l3 r3'])[1]"
    );
  }
  itemNameField() {
    return $(
      "//div[@ng-form='OrderForms.jobOrderLinesForm']//input[@id='tags'][1]"
    );
  }
  resultItem(currentItem) {
    return $(`//a[text()='${currentItem}']`);
  }
  itemsTab() {
    return $("//div[@id='jobPanelDetailsNav']//a[normalize-space()='Items']");
  }
  jobItemLine(currentItem) {
    return $(`//div[normalize-space()='${currentItem}']`);
  }
  requestPickListCommentDiv() {
    return $(
      "//label[normalize-space()='Picklist Comments']//following::span[1]"
    );
  }
  requestMyPersonalNotesDiv() {
    return $(
      "(//label[normalize-space()='My Personal Notes']//following::span[1])[2]"
    );
  }
  async addItemsToOrder(currentItem, venueItemQty) {
    await this.jobHeader().waitForClickable();
    await this.jobHeader().click();
    await this.itemsTab().click();
    await this.itemNameBox().click();
    await this.itemNameField().setValue(currentItem);
    await this.resultItem(currentItem).click();
    await browser.keys("\u0009");
    await this.lineItemQty().click();
    await browser.keys(venueItemQty);
  }

  async verifyItemAdd(currentItem) {
    assert.isTrue(
      await this.jobItemLine(currentItem).isDisplayed(),
      "item is not added"
    );
    await browser.pause(5000);
  }

  async verifyPickListCommentAdded() {
    try {
      let pickListUpdatedComment =
        await this.requestPickListCommentDiv().getText();
      assert.equal(
        pickListUpdatedComment,
        "testauto",
        "pick list comment is not updated"
      );
      let myPersonalNotesUpdatedComment =
        await this.requestMyPersonalNotesDiv().getText();
      assert.equal(
        myPersonalNotesUpdatedComment,
        "testauto",
        "my personal notes is not updated"
      );
    } catch (error) {
      console.log("haii >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    }
  }
  async locationIdGetting() {
    try {
      let location = await this.locationGetting().getText();
      console.log(location, "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
      let locationInfo = await location.slice(13, 17);
      console.log(
        locationInfo,
        "#####################################################################################"
      );
      await this.home().click();
      await browser.pause(process.env.small_wait);
      await this.changeLocationHeader().click();
      await browser.pause(3000);
      await this.inputSeacrchLocation().setValue(locationInfo);
      await this.locationchange().click();
      await this.btnLocationSelect().click();
      await browser.pause(process.env.small_wait);
      let eqRequest = await this.Equipmentrequest().isDisplayed();
      assert.isTrue(eqRequest);
      await this.Equipmentrequest().click();
      await this.approveEquipmentTransfers().click();

      // let vRequest = await this.venueRequest().isDisplayed();
      // assert.isTrue(vRequest, "***************************");

      await this.arrowbutton().click();
      let aproveBtn = await this.approve().isDisplayed();
      assert.isTrue(aproveBtn);
      let denyBtn = await this.deny().isDisplayed();
      assert.isTrue(denyBtn);
      await this.approve().click();
      await browser.pause(5000);
      await this.picklistComments().setValue("Orders");
      await this.applyButton().click();
      await browser.pause(8000);
      await this.Comments().setValue("orderList");
      await this.yesButton().click();
      await browser.pause(process.env.small_wait);
      await this.home2().click();
      await browser.pause(process.env.small_wait);
      await this.orderSearch().click();
      await this.oldClassicOrder().click();
      await browser.pause(process.env.small_wait);
    } catch (error) {
      console.log("hello World");
    }
  }
}
module.exports = new InventorySourcesPage();
