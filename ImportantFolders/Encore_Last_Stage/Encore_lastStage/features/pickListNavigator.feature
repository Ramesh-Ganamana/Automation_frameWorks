@regression1
Feature: Verify picklist search in Navigator application

Scenario Outline: prerequisite conditions
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I move to picklist search screen in picklist page
    Then I capture data in picklist page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 1 (C56079) As a user, I can navigate to picklist search page and validate picklist number
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I move to picklist search screen in picklist page
    Then I search with picklist number and validate the same in picklist page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
  
  Scenario Outline: 2 (C55993) As a user, I can navigate to picklist search page and validate order number
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I move to picklist search screen in picklist page
    Then I search with order number and validate the same in picklist page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
  
  Scenario Outline: 3 (C55995) As a user, I can navigate to picklist search page and validate job number
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I move to picklist search screen in picklist page
    Then I search with job number and validate the same in picklist page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 4 (C56016) As a user, I can navigate to picklist search page and validate picklist detail page
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I move to picklist search screen in picklist page
    Then I navigate to picklist detailed page from picklist page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |