@regression1
Feature: Verify credit memo order module in Navigator application

# Scenario Outline: 1 (C55784) As a user, I can create a credit memo for billing adjustment
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create an order without adding package in jobNavigator page
#     When I add labor line in jobNavigator page
#     And I assign a room and change status to Invoice in creditMemo page
#     Then I select billing adjustment and validate the same in creditMemo page

#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 2 (C55784) As a user, I can create a credit memo for re-billing
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create an order without adding package in jobNavigator page
#     When I add labor line in jobNavigator page
#     And I assign a room and change status to Invoice in creditMemo page
#     Then I select re-billing and validate the same in creditMemo page

#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 3 (C56054) As a user, I can create a credit memo for re-bill order
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create an order without adding package in jobNavigator page
#     When I add labor line in jobNavigator page
#     And I assign a room and change status to Invoice in creditMemo page
#     Then I select re-billing and validate the same in creditMemo page
#     And I am able to create order in creditMemo page

#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |


Scenario Outline: 6 (C56153) As a user, I can generate credit memo order
   Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package,Items and labore to new classic sales order in orders page
    And I handle rigging issue from payments page
    Then I save an order in jobNavigator page
    When I click on the home button add Actions
   Examples: 
      | username                | password  |
      | v-krishna-jagani@psav.com | Kovidh14# |
    

 

  