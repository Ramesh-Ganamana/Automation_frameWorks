@regression1
Feature: Verify package search in Navigator application

 Scenario Outline: 1 (C55926) As a user, I can navigate to package search page and validate copy package
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I move to package search screen in picklist page
    Then I copy a package with random name and validate the same in picklist page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 2 (C55903) As a user, I can navigate to package search page and able to search by package name
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I move to package search screen in picklist page
    Then I search with package name and validate the same in picklist page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 3 (C55908) As a user, I can navigate to package search page and able to search by location
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I move to package search screen in picklist page
    Then I search with location and validate the same in picklist page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |