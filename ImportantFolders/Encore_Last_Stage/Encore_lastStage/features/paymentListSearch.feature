 @regression
 Feature: Verify payment List search for Navigator application

#  Scenario Outline: 1(C55842)As a user, I can Verify payment list search Number Field
#    Given I am on the navigatorLogin page
#    When I login with <username> and <password>
#    Then I was directed to landing page
#    When I changed to other job location on page
#    Then I clicked on payment search tab paymentList page   
#    When I entered order number search

#    Examples: 
#      | username                | password  |
#      | s-tst-navi-CRM@psav.com | Winter23$ |

#  Scenario Outline: 2(C55880)As a user, I can Verify payment list search Customer Name Field
#    Given I am on the navigatorLogin page
#    When I login with <username> and <password>
#    Then I was directed to landing page
#    When I changed to other job location on page
#    Then I clicked on payment search tab paymentList page   
#    When I entered order name search

#     Examples: 
#      | username                | password  |
#      | s-tst-navi-CRM@psav.com | Winter23$ |

# # second phase test cases

#  Scenario Outline: 3(C55886)As a user, I can Verify payment list Filter by Payments to Capture
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I changed to other job location on page
#     Then I clicked on payment search tab paymentList page   
#     When I choose Payments to Capture and search for payment list
#     Then I verify that Search result display correctly in the right table     

#        Examples: 
#      | username                | password  |
#      | s-tst-navi-CRM@psav.com | Winter23$ |

       
#  Scenario Outline: 4(C55892)As a user, I can Verify payment list Sort By Order Number
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I changed to other job location on page
#     Then I clicked on payment search tab paymentList page   
#     Then I click on Order number column header and verify sort result is correct
       
#       Examples: 
#     | username                | password  |
#     | s-tst-navi-CRM@psav.com | Winter23$ |

            
#  Scenario Outline: 5(C55901)As a user, I can Verify payment list Payment Amt link
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I changed to other job location on page
#     Then I clicked on payment search tab paymentList page
#     When I click on any Payment Amount link in the grid 
#     Then I verify that payment details are at payment tab under the order details page
#       Examples: 
#      | username                | password  |
#      | s-tst-navi-CRM@psav.com | Winter23$ |


# # second phase second set ------------------------------------
          
#   Scenario Outline: 6 (C56352) As a user, I can verify check payments details for an order in navigator
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create an order without adding package in jobNavigator page
#     When I add package,Items and labore to new classic sales order in orders page
#     And I handle rigging issue from payments page
#     Then I save an order in jobNavigator page
#     When I clickon the billing tab adding direct method
#     When I switch to Payment Tab and click Add payment 
#     When I click Check and add payment Details
#     Then I verify that Check payment added successfully
#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

#   Scenario Outline: 7 (C56324)As a user, I verify credit card payments details for an order in navigator
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create an order without adding package in jobNavigator page
#     When I add package,Items and labore to new classic sales order in orders page
#     And I handle rigging issue from payments page
#     Then I save an order in jobNavigator page
#     When I clickon the billing tab adding direct method
#     When I switch to Payment Tab and click Add payment 
#     When I click on Credit card and add Credit Card Info and Cardholder's Billing Address
#     Then I verify that Credit card payment added successfully
#      Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |


# # Scenario Outline: 8 (C56329)As a user I verify print Receipt after adding payment
# #      Given I am on the navigatorLogin page
# #      When I login with <username> and <password>
# #      Then I was directed to landing page
# #      When I create an order without adding package in jobNavigator page
# #      When I add package,Items and labore to new classic sales order in orders page
# #      And I handle rigging issue from payments page
# #      Then I save an order in jobNavigator page
# #      When I clickon the billing tab adding direct method
# #      When I switch to Payment Tab and click Add payment 
# #      When I click on Credit card and add Credit Card Info 
# #      When I click on the current cardholdername
# #      Then I validate printRecipt
# #      Examples: 
# #       | username                | password  |
# #       | s-tst-navi-CRM@psav.com | Winter23$ |


# Scenario Outline: 9 (C56352) As a user I Add Security Deposit to an order
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create an order without adding package in jobNavigator page
#     When I add package,Items and labore to new classic sales order in orders page
#     And I handle rigging issue from payments page
#     Then I save an order in jobNavigator page
#     When I am  click on the billing tab adding direct navigate to the payment tab
#     When I click on Credit card and add Credit Card Info  
#     When I click on the current cardholdername

#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |



Scenario Outline: 10 (C56323) As a user I can Add WireTansfer/ACH payment
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package,Items and labore to new classic sales order in orders page
    And I handle rigging issue from payments page
    Then I save an order in jobNavigator page
    When I click On the billing tab and navigate to the payment tab
    Then I validate the wireTransfer Payment is Successfull
    Examples: 
      | username                | password  |
      | v-krishna-jagani@psav.com | Kovidh14# |


Scenario Outline: 11 (C56325) As a user I can Verify pre-Authorize credit card payment
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package,Items and labore to new classic sales order in orders page
    And I handle rigging issue from payments page
    Then I save an order in jobNavigator page
    When I click On the billing tab and navigate to the payment tab and click on  credit card
    When I Enter the card info and orderInfo
    Then I validate credit card PreAutharized
    Examples: 
      | username                | password  |
      | v-krishna-jagani@psav.com | Kovidh14# |

Scenario Outline: 12 (C56327) As a user I can make payment Void
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package,Items and labore to new classic sales order in orders page
    And I handle rigging issue from payments page
    Then I save an order in jobNavigator page
    When I click On the billing tab and navigate to the payment tab and click on  credit card
    When I Enter the card info and orderInfo
    Then I validate credit card PreAutharized
    When I doubleClick on credit cardnumber add void Reason
    Then I Validate the VoidReason
    Examples: 
      | username                | password  |
      | v-krishna-jagani@psav.com | Kovidh14# |

      Scenario Outline: 13 (C56328) As a user I can verify Resent mail for void apporved payment
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package,Items and labore to new classic sales order in orders page
    And I handle rigging issue from payments page
    Then I save an order in jobNavigator page
    When I click On the billing tab and navigate to the payment tab and click on  credit card
    When I Enter the card info and orderInfo
    Then I validate credit card PreAutharized
    When I doubleClick on credit cardnumber add void Reason
    Then I Validate the VoidReason
    When I validate the Email Details
    Then I validate Email was sent
    Examples: 
      | username                | password  |
      | v-krishna-jagani@psav.com | Kovidh14# |