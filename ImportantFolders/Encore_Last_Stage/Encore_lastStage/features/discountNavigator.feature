@regression1
Feature: Verify discount for orders in Navigator application

  Scenario Outline: 1 (C56061) As a user, I can create a production order and check special rate for production order
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I have to add implied discount to the order in jobNavigator page
    Then I validate special rate for production order in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 2 (C56059) As a user, I create a production order and check implied discount to an item ( Reduce Billable Days )
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I have to add implied discount to an item by changing billable days in jobNavigator page
    Then I validate line totals for the item are recalculated based on the days in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  
Scenario Outline: 3 (C56060) As a user, I create an order and check implied discount is not applied for location set to Yes
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I have to create an order in jobNavigator page
    Then I validate implied discount is not applied for location set to Yes in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline: 4 (C56061) As a user, I search for classic order and check items with service type set for discount exemptions cannot be discounted
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I change for particular location in orderSearch page
  #   When I search for classic order in jobNavigator page
  #   Then I validate items with service type set for discount exemptions cannot be discounted in jobNavigator page

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 5 (C56089) As a user, I search for classic order and add applied discounts from order Level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    And In discount tab I select service type and apply discount in jobNavigator page
    Then I validate discount is applied for the selected service type in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 6 (C56090) As a user, I search for classic order and add applied discounts from job Level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order without adding package in jobNavigator page
    And In job level discount tab I select service type and apply discount in jobNavigator page
    Then I validate discount is applied for the selected service type in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 7 (C56097) As a user, I search for classic order and add applied discounts from line Level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an order and apply discount from line level in jobNavigator page
    Then I validate discount is applied for the selected line in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 8 (C56097) As a user, I create a production order and add complimentary from jobs defaults
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order and set to complimentary in jobNavigator page
    Then I validate discount is applied for the selected items in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

 Scenario Outline: 9 (C56093) As a user, I create a production order and add complimentary from job level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order and set to complimentary from job level in jobNavigator page
    Then I validate discount is applied for the selected items in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 10 (C56094) As a user, I create a classic order and add complimentary from job order level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a classic order and set to complimentary from order level in jobNavigator page
    Then I validate discount is applied for the selected items for classic order in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 11 (C56095) As a user, I create a classic order and add complimentary from job level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a classic order and set to complimentary from job level in jobNavigator page
    Then I validate discount is applied for the selected items for classic order in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 12 (C56166) As a user, I create a production order and exclude labor as complementary
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order and set to complimentary to exclude labor in jobNavigator page
    Then I validate discount is applied for the selected labor items for production order in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
