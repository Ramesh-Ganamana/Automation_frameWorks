@regression1
Feature: Verify print reports at job level in Navigator application

  Scenario Outline: 1 (C56062) As a user, I can navigate to an order and verify print quote/billing at job level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order id under order search tab
    And I navigate to jobs page in orderSearch page
    Then I validate print quote billing at job level in orders page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
  
  Scenario Outline: 2 (C56063) As a user, I can navigate to an order and verify print production quote, rental orders and DROs at job level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order id under order search tab
    And I navigate to jobs page in orderSearch page
    Then I validate print production quote, rental orders and DROs at job level in orders page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 3 (C56064) As a user, I can navigate to an order and verify print consolidate quote at job level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order id under order search tab
    And I navigate to jobs page in orderSearch page
    Then I validate print consolidate quote at job level in orders page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 4 (C56066) As a user, I can navigate to an order and verify print sheet by selected job at job level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order id under order search tab
    And I navigate to jobs page in orderSearch page
    Then I validate print sheet by selected job at job level in orders page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 5 (C56065) As a user, I can navigate to an order and verify print deposit invoice at job level
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order id under order search tab
    And I navigate to jobs page in orderSearch page
    Then I validate print deposit invoice at job level in orders page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
