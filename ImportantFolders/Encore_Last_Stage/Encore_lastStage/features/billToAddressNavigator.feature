@regression1
Feature: Verify bill to address for Navigator application

  Scenario Outline: 1 (C56288) As a user, I should verify bill to address link
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search and select an order in order search and navigate to jobs screen
    Then I select a billing address and validate the same in billing address page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 2 (C56289) As a user, I should verify bill to address filter
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search and select an order in order search and navigate to jobs screen
    Then I search for billing address and validate the same in billing address page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 3 (C56290) As a user, I should verify bill to address set to active
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search and select an order in order search and navigate to jobs screen
    Then I select an address and set to active and validate the same in billing address page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 4 (C56291) As a user, I should verify bill to address set to default address
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search and select an order in order search and navigate to jobs screen
    Then I select an address and set to default and validate the same in billing address page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


  Scenario Outline: 5 (C55776) As a user, I can create a production order and verify the account details are transferred from compass
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a production order to validate order data in jobNavigator page
    Then I validate opportunity data reflected to navigator in jobNavigator page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |