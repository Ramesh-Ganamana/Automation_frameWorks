@regression1
Feature: Verify orders module in Navigator application

  Scenario Outline: 1 (C56086) As a user, I can create a master bill new classic sales order in navigator
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package,Items and labore to new classic sales order in orders page
    Then I verify billing type for the particular location is master and validate totals in orders page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: 2 (C56087) As a user, I can create a direct bill new classic sales order in navigator
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create an order with opportunity is set to default Billing type to direct bill in jobNavigator page
#     And I add package,Items and labore to new classic sales order in orders page
#     Then I verify billing type for the particular location is direct and validate totals in orders page

#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 3 (C56087) As a user, I can create a new classic sales order and can do bulk edit in navigator
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package,Items and labore to new classic sales order in orders page
    When I do bulk edit in orders page
    Then I verify bulk edit days and quantity in orders page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 4 (C56164) As a user, I can create a new classic sales order and can copy labor line in navigator
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package and labore to new classic sales order in orders page
    When I copy labor line in orders page
    Then I verify labor line is added in the jobs line in orders page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 5 (C56162) As a user, I can create a new classic sales order and can add page break to a job in navigator
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    When I add package and labore to new classic sales order in orders page
    When I add page break to job in orders page
    Then I verify page break is added in the jobs line in orders page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |