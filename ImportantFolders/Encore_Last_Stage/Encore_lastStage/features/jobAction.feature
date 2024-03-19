 Feature:Job Action
 
 
  # Scenario Outline:1(C56589) As a user I can verify classic order change open job status Quote
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I create a classic order and navigate to the navigator page
  #   Then I validate the save button is enabled 
  #   Then I validate the startdate and enddate
  #   When I am click on the save button and navigate to the jobsheader
  #   Then I validate the job type sales and operations
  #   When I insert multiple jobs to the order
  #   Then I validate all jobs should be updated to quote

  #     Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |


  # Scenario Outline:2(C56590) As a user I can verify change open job status to tentative for production order
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I create a classic production and navigate to the navigator page
  #   Then I validate the save button is enabled 
  #   Then I validate the startdate and enddate
  #   When I am click on the save button and navigate to the jobsheader
  #   Then I validate the job type sales and operations
  #   When I insert the multiple jobs to the production order
  #   Then I validate  all jobs should be updated to Tentative

  #         Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

       
  # Scenario Outline:3(C56591) As a user I can verify classic order change open job status to confirm in classical order
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I create a classic order and navigate to the navigator page
  #   Then I validate the save button is enabled 
  #   Then I validate the startdate and enddate
  #   When I am click on the save button and navigate to the jobsheader
  #   Then I validate the job type sales and operations
  #   When I insert the multiple jobs in classical order
  #   Then I validate all jobs should be updated to confirm
  #   Then I validate that requried field indicator for Room,Booth is displayed when no room exits 
  #   And I validate No jobs should be saved
  #   When I add the roomBooth for jobs which shows field indicator
  #   Then I validate all required indicators are not displayed
  #   Then I validate all jobs are updated to confirm
  #     Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |


  # Scenario Outline:4(C56592) As a user I can verify classic order change open job status to confirmPicklist in production order
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I create a classic production and navigate to the navigator page
  #   Then I validate the save button is enabled 
  #   Then I validate the startdate and enddate
  #   When I am click on the save button and navigate to the jobsheader
  #   Then I validate the job type sales and operations
  #   When I insert the multiple jobs in production order
  #   Then I validate all jobs should be updated to confirm-picklist
  #   Then I validate that requried field indicator for Room,Booth is displayed when no room exits in productionOrder
  #   And I validate No jobs should be saved in productionOrder
  #   When I add the roomBooth for jobs which shows field indicator in productionOrder
  #   Then I validate all required indicators are not displayed in productionOrder
  #   Then I validate all jobs are updated to confirm-picklist
  #     Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline:5(C56593) As a user I can verify classic order change open job status to confirm in classical order
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a classic production and navigate to the navigator page
    Then I validate the save button is enabled 
    Then I validate the startdate and enddate
    When I am click on the save button and navigate to the jobsheader
    Then I validate the job type sales and operations
    When I insert jobs lineitems and roomBooth in production order
    When i insert Invoice to the production job
    Then I validate all jobs changed to invoice
    And  I validate Popup is displayed and orders are not editable
 Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline:5(C56594) As a user I can verify change open job status to cancel for classic order

#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     And I changed to other job location for Item Search on addItems page
#     When I search for classical  order
#     Then I verify the classical  orders
#     When I cancel add cancel to the all jobs
#     Then I verify job status of the classical orders
#     Then I verify job status is hidden for classical orders
   
    
#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ | 