@regression1
Feature: Verify production orders in Navigator application

  Scenario Outline: 1 (C55776) As a user, I can create a production order and check all the details are refelcted from opportunity
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order to validate order data in jobNavigator page
    Then I validate opportunity data reflected to navigator in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 2 (C55777) As a user, I can create a production order and add items and labor to a productions order
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order to validate order data in jobNavigator page
    Then I validate data by adding items and labor in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

 Scenario Outline: 3 (C55783) As a user, I can create a production order and update date and validate in jobs
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order to validate order data in jobNavigator page
    Then I validate updated date is reflected for jobs in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
    