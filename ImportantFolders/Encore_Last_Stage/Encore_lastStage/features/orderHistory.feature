Feature:OrderHistory


Scenario Outline:(C56699)  As a user, I can verify that there is a record modified by in history
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a classic production and navigate to the navigator page
    Then I validate the save button is enabled 
    Then I validate the startdate and enddate
    When I am click on the save button and navigate to the jobsheader
    Then I validate the job type sales and operations
    Then I Clicked in to the order history and validate record of history displayed
    When I updated the job status to tentive and save
    Then I validate the newentry orderstatus to tentive
    When I add Items to the order job
    Then I validate net total items are displayed
        Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |