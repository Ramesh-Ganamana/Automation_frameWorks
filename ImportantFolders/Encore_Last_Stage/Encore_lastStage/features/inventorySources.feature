Feature: Verify Inventory Sources for Navigator application

# Scenario Outline: 1. (C56550): As a user I can verify, Create a warehouse request to fulfill shorts for an Classic Order
#         Given I am on the navigatorLogin page
#         When I login with <username> and <password>
#         Then I was directed to landing page
#         When I create a new classic order to validate Inventory Sources data in navigator page
#         And I update dates of the order
#         When I add item to that order with 0 or less quality and verifed item added
#         And I update room status to otherthan quote
#         Then I verify add request button is enabled
#         When I add warehouse request
#         And I click on include shorts
#         Then I verify warehouse request is generated  
#         When I cancel the warehouse request
#           Examples: 
#             | username                 | password       |
#             | s-tst-navi-crm2@psav.com | Aut0m@t1onN@v2 |

#   Scenario Outline: 2. (C56585): As a user I can verify Edit a warehouse request for a classic Order
#         Given I am on the navigatorLogin page
#         When I login with <username> and <password>
#         Then I was directed to landing page
#         When I change to other location for inventory sources page
#         And I search for the order Num under order search tab
#         When I clicked on jobs link
#         And I clicked on items link
#         When I clicked on item link
#         And I edited the item quantity added to the order
#         When I edit the warehouse request for the order
#         Then I verify warehouse request is editable
#           Examples: 
#             | username                 | password       |
#             | s-tst-navi-crm2@psav.com | Aut0m@t1onN@v2 |
 
#   Scenario Outline: 3. (C56551): As a user, I can verify Create a warehouse request to fullfill shorts for an Production Order
#         Given I am on the navigatorLogin page
#         When I login with <username> and <password>
#         Then I was directed to landing page
#         When I create a production order to validate Inventory Sources data in navigator page
#         And I update dates of the order
#         When I clicked on jobs link
#         And I clicked on items link
#         When I clicked on item link
#         And I clicked on item search magnifier
#         When I add item for Inventory sources
#         And I update room status to otherthan quote
#         Then I verify add request button is enabled
#         When I add warehouse request
#         And I click on include shorts
#         Then I verify warehouse request is generated
#           Examples: 
#           | username                 | password       |
#           | s-tst-navi-crm3@psav.com | Aut0m@t1onN@v3 |
  
#   Scenario Outline: 4. (C56586): As a user I can vrify Cancel a Warehouse Request for a production order
#         Given I am on the navigatorLogin page
#         When I login with <username> and <password>
#         Then I was directed to landing page
#         When I change to other location for inventory sources page
#         And I search for the order Num under order search tab
#         When I cancel the warehouse request
#         Then I verify warehouse request cancelled
#           Examples: 
#           | username                 | password       |
#           | s-tst-navi-crm3@psav.com | Aut0m@t1onN@v3 |
        
#   @test
#   Scenario Outline: 5. (C56552): As a user I can vrify Create a Venue request to fulfill shorts for a Classic Order
#         Given I am on the navigatorLogin page
#         When I login with <username> and <password>
#         Then I was directed to landing page
#         When I create a new classic order to validate Inventory Sources data in navigator page
#         And I update dates of the order
#         When I add item to that order with 0 or less quality and verifed item added
#         When I update room status to otherthan quote
#         Then I verify add request button is enabled
#         Then I add venue request verified model should be displayed
#         When I include shorts for venue request
#         Then I add source items from venue to generate request and I verify item quantity is added to request
#         When I click generate request button
#         Then I verify venue requests should be created for all venues and items requested for
#            Examples: 
#             | username                 | password       |
#             | s-tst-navi-crm2@psav.com | Aut0m@t1onN@v2 |

#   Scenario Outline: 5. (C56553): As a user I can vrify Create a Venue request to fulfill shorts for a production Order
#         Given I am on the navigatorLogin page
#         When I login with <username> and <password>
#         Then I was directed to landing page
#         When I create a new classic order to validate Inventory Sources data in navigator page
#         And I update dates of the order
#         When I add item to that order with 0 or less quality and verifed item added
#         When I update room status to otherthan quote
#         Then I verify add request button is enabled
#         Then I add venue request verified model should be displayed
#         When I include shorts for venue request
#         Then I add source items from venue to generate request and I verify item quantity is added to request
#         When I click generate request button
#         Then I verify venue requests should be created for all venues and items requested for
#         Then I click on cancel button verified cancel popup
#            Examples: 
#             | username                 | password       |
#             | s-tst-navi-crm2@psav.com | Aut0m@t1onN@v2 |

#   Scenario Outline: 5. (C56587): As a user I can vrify edit Venue request for a Classic Order
#         Given I am on the navigatorLogin page
#         When I login with <username> and <password>
#         Then I was directed to landing page
#         When I create a new classic order to validate Inventory Sources data in navigator page
#         And I update dates of the order
#         When I add item to that order with 0 or less quality and verifed item added
#         When I update room status to otherthan quote
#         Then I verify add request button is enabled
#         Then I add venue request verified model should be displayed
#         When I include shorts for venue request
#         Then I add source items from venue to generate request and I verify item quantity is added to request
#         When I click generate request button
#         Then I verify venue requests should be created for all venues and items requested for
#         When I edit the warehouse request for the order
#         Then I verifed picklist comment is added 
#         Then I click on cancel button verified cancel popup
#            Examples: 
#             | username                 | password       |
#             | s-tst-navi-crm2@psav.com | Aut0m@t1onN@v2 |

#   Scenario Outline: 5. (C56558): As a user I can vrify cancle venue request for production order
#         Given I am on the navigatorLogin page
#         When I login with <username> and <password>
#         Then I was directed to landing page
#         When I create a new classic order to validate Inventory Sources data in navigator page
#         And I update dates of the order
#         When I add item to that order with 0 or less quality and verifed item added
#         When I update room status to otherthan quote
#         Then I verify add request button is enabled
#         Then I add venue request verified model should be displayed
#         When I include shorts for venue request
#         Then I add source items from venue to generate request and I verify item quantity is added to request
#         When I click generate request button
#         Then I verify venue requests should be created for all venues and items requested for
#         Then I click on cancel button verified cancel popup
#            Examples: 
#             | username                 | password       |
#             | s-tst-navi-crm2@psav.com | Aut0m@t1onN@v2 |


  Scenario Outline: 5. (C56553): As a user I can vrify Create a Venue request to fulfill shorts for a production Order
        Given I am on the navigatorLogin page
        When I login with <username> and <password>
        Then I was directed to landing page
        When I create a new classic order to validate Inventory Sources data in navigator page
        And I update dates of the order
        When I add item to that order with 0 or less quality and verifed item added
        When I update room status to otherthan quote
        Then I verify add request button is enabled
        Then I add venue request verified model should be displayed
        When I include shorts for venue request
        Then I add source items from venue to generate request and I verify item quantity is added to request
        When I click generate request button
        Then I verify venue requests should be created for all venues and items requested for
        When I get the text for the second location
        Then I click on cancel button verified cancel popup
           Examples: 
            | username                 | password       |
            | s-tst-navi-crm2@psav.com | Aut0m@t1onN@v2 |
