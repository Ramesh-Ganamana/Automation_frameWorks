@regression1
Feature: Verify Import Jobs for Navigator application

  # Scenario Outline: 0 Order Creation Pre Defined Scenario
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I can create a new classic order in jobNavigator page
  #   Then I save an order in jobNavigator page
  #   When I click on job option in importJobs page

  #   Examples:
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline: 1.(C55766) As a user, I Import Jobs from different location
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I clicked on order search tab on importJobs page
  #   And I change to other location for import jobs on importJobs page
  #   And I clicked on Order Number Link and job tab on importJobs page
  #   When I clicked on jobactions and click on import job on importJobs page
  #   And I clicked on import job location
  #   When I clicked on import job search and select result
  #   And I verified and clicked on create new button
  #   When I verified and clicked on done  button
  #   And I clicked on  save  button and Verified Empty Loc
  #   Then I verified saved labor details

  #   Examples:
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

#   Scenario Outline: 2.(C55767) As a user, I Import Jobs from Same location
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I clicked on order search tab on importJobs page
#     And I create an order with opportunity is set to default Billing type to direct bill in jobNavigator page
#     When I click on job option for import job in importJobs page
#     And I can create a new classic order in jobNavigator page
#     When I click on job Tab in importJobs page
#     And I clicked on jobactions and click on import job on importJobs page
#     When I search for new job number and verified on importJobs page
#     And  I verified and clicked on create new button
#     When  I verified and clicked on done  button
#     When I clicked on  save  button
#     Then I verified saved labor details

#     Examples:
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |


  # Scenario Outline: 3.(C55768) As a user, I  Import Jobs Search Criteria
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I clicked on order search tab on importJobs page
  #   And I change to other location for import jobs on importJobs page
  #   When I clicked on Order Number Link and get job order details on importJobs page
  #   And I clicked on jobactions and click on import job on importJobs page
  #   When I search for job number and verified on importJobs page
  #   And I search for order number and verified on importJobs page
  #   When I search for order name and verified on importJobs page
  #   Then I search for without date range and verified data on importJobs page

  #   Examples:
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |


#   Scenario Outline: 4.(C55769) As a user, I  Import options should not be applied to the imported order (Apply Current Order Options) is checked
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I clicked on order search tab on importJobs page
#     And I create an order with opportunity is set to default Billing type to direct bill in jobNavigator page
#     When I click on job option for import job in importJobs page
#     And I can create a new classic order in jobNavigator page
#     When I click on job Tab in importJobs page
#     And I clicked on jobactions and click on import job on importJobs page
#     When I search for new job number and verified on importJobs page
#     When I applied for the include discount check option
#     And  I verified and clicked on create new button
#     When I verified and clicked on done  button
#     And I verified for job numbers and save and discount note

#     Examples:
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

#   Scenario Outline: 5.(C55795) As a user, I  Import Job from an Old classic order to a New Classic Sales order
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I clicked on order search tab on importJobs page
#     And I change to other location for import jobs on importJobs page
#     And I create an order with opportunity is set to default Billing type to direct bill in jobNavigator page
#     When I click on job option for import job in importJobs page
#     And I can create a new classic order in jobNavigator page
#     When I click on job Tab in importJobs page
#     # When I clicked on Order Number Link and get job order details on importJobs page
#     And I clicked on jobactions and click on import job on importJobs page
#     When I clicked on import job search and select old classic Order result
#     And  I verified and clicked on create new button
#     When I verified and clicked on done  button
#     Then I verified old classic order details

#     Examples:
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |



Scenario Outline: 6.(C55796) As a user, I Import sales Job from a New Classic Sales order to a Production Order
  Given I am on the navigatorLogin page
  When I login with <username> and <password>
  Then I was directed to landing page
  When I create a production order to validate order data in jobNavigator page
  And I click on job Tab in production order importJobs page
  When I clicked on jobactions and click on import job on importJobs page
  When I clicked on import job search and select new classic result
  And I verified and clicked on create new button
  Then I verified new classic order  details for production order

  Examples:
    | username                | password  |
    | s-tst-navi-CRM@psav.com | Winter23$ |


# Scenario Outline: 7.(C55798) As a user, The production Jobs should not be Imported to a New classic sales order
#   Given I am on the navigatorLogin page
#   When I login with <username> and <password>
#   Then I was directed to landing page
#   When I clicked on order search tab on importJobs page
#   And I change to other location for import jobs on importJobs page
#   When I create a production order to validate order data in jobNavigator page
#   And I click on job Tab in production order importJobs page
#   When I get the production order
#   And I clicked on Order Number Link and job tab on importJobs page
#   When I clicked on jobactions and click on import job on importJobs page
#   And I search for production order in import job
#   Then I verified production order results

#   Examples:
#     | username                | password  |
#     | s-tst-navi-CRM@psav.com | Winter23$ |


# Scenario Outline: 8.(C55797) As a user, Production Jobs should not be Imported to an Old classic sales order
#   Given I am on the navigatorLogin page
#   When I login with <username> and <password>
#   Then I was directed to landing page
#   When I clicked on order search tab on importJobs page
#   And I change to other location for import jobs on importJobs page
#   When I create a production order to validate order data in jobNavigator page
#   And I click on job Tab in production order importJobs page
#   When I get the production and old classic orders
#   And  I clicked on old classic Order Number Link and job tab on importJobs page
#   When I clicked on jobactions and click on import job on importJobs page
#   And I search for production order in import job
#   Then I verified production order results

#   Examples:
#     | username                | password  |
#     | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 9.(C55770) As a user, I am able to import options should be applied to the imported order (Include Discounts)
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create an order without adding package in jobNavigator page
#     Then In discount tab I select service type and apply discount in jobNavigator page
#     Then I validate discount is applied for the selected service type in jobNavigator page
#     And I save order after applying discount and capture all the details
#     When I clicked on order search tab on importJobs page
#     When  I clicked on old classic Order Number Link and job tab on importJobs page
#     When I clicked on jobactions and click on import job on importJobs page
#     Then I import a new classic order and validate discount percentage in importJobs page

#       Examples: 
#          | username                | password  |
#          | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 10.(C55771) As a user, I am able to import options should be applied to the imported order (Include Special Rate)
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I have to add implied discount to the order in jobNavigator page
#     Then I validate special rate for production order in jobNavigator page
#     And I save production order after applying special rate and capture all the details
#     When I create a production order and import production order jobs
#     Then I validate special rate applied to the imported jobs for production order

#       Examples: 
#          | username                | password  |
#          | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 11.(C55772) As a user, I am able to import options should be applied to the imported order (Include Notes and line Comments)
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I have to create an order in jobNavigator page
#     Then I save order and add notes and line comments to the classic order
#     When I clicked on order search tab on importJobs page
#     When  I clicked on old classic Order Number Link and job tab on importJobs page    
#     When I clicked on jobactions and click on import job on importJobs page
#     Then I select include note to import order notes

#     Then I validate coversheet note and job order note in old classic order 
    
#       Examples: 
#          | username                | password  |
#          | s-tst-navi-CRM@psav.com | Winter23$ |

