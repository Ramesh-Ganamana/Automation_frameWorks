@createData2
Feature: Create order for test data  

  Scenario Outline: Prerequisit condition, I create an order and capture all the details required for order search
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I can create a new classic order in jobNavigator page
    And I add package to an order in jobNavigator page
    Then I save an order in jobNavigator page
    And I capture all the required details for order search from orderSearch page


    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |