@regression1
Feature: Verify old classic jobs module for Navigator application

  Scenario Outline: 1.(C56082) As a user, I can verify insert jobs to old classic order
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I change to other location for jobOldClassic page
    And I clicked on old classic order number link and job tab
    Then I verify job number is generated for newly inserted job
    When I add item to newly inserted job
    Then I verify job amount is calculated for newly inserted job

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 2.(C55800) As a user, I can able to edit an old classic order and verify dates are updated or not 
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I navigate to orderSearch tab
#     And I change to other location for jobOldClassic page
#     When I clicked on old classic order number link from search results
#     Then I update order date and validate the same for old classic order

#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 3.(C55801) As a user, I can able to add items to an old classic order
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I navigate to orderSearch tab
#     And I change to other location for jobOldClassic page
#     When I clicked on old classic order number link from search results
#     Then I delete all the items in the items gridfor old classic order
#     And I add package and items for old classic order and validate the same

#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

#  Scenario Outline: 4.(C55802) As a user, I am able to import new classic order to an old classic order
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
#     And I import a new classic order and validate discount percentage in importJobs page

#       Examples: 
#          | username                | password  |
#          | s-tst-navi-CRM@psav.com | Winter23$ |

#  Scenario Outline: 5.(C56088) As a user, I make payments to an OLD classic Order (Direct Bill)
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I naviagte to ordersearch tab in jobOldClassic page
#     And I change to other location for jobOldClassic page
#     When I clicked on old classic order number link to verify payment
#     Then I clicked on payment link and select payment type and print reports

#     Examples: 
#         | username                | password  |
#         | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 6.(C56083) As a user, I can verify by deleting a job that is not saved in an old classic order 
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I navigate to orderSearch tab
#     And I change to other location for jobOldClassic page
#     Then I select an old classic order and inserted job and deleted it without saving

#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |