@regression1
Feature: Verify Equipment Request Search for Navigator application

  Scenario Outline: 1 (C56102) As a user, I can check Export button verify
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I changed to other job location on equipmentSearch page
    When I clicked on connected ware house
    And I clicked warehouse filters
    Then I verified results ware house displayed
    When I clicked on export icon 
    And I clicked on export btn

   
    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
      
  Scenario Outline: 2 (C56112) As a user, I can check Navigate by Order Number Link
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I changed to other job location on equipmentSearch page
    When I clicked on connected ware house
    And I clicked warehouse filters
    Then I verified results ware house displayed
    When I clicked on order link
    And I verified the order in to new window

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
