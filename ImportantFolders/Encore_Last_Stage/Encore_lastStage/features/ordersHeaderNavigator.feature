@regression1
Feature: Verify orders header module in Navigator application

  Scenario Outline: 1 (C55755) As a user, I can create a production order and change order dates in navigator
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order to validate order data in jobNavigator page
    Then I update order date and validate the same in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 2 (C55756) As a user, I can create a production order and edit or cancel an order in navigator
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order to validate order data in jobNavigator page
    Then I cancel an order and validate the same in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 3 (C55757) As a user, I can create a production order and update order name and validate
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order to validate order data in jobNavigator page
    Then I update order name and validate the same in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |