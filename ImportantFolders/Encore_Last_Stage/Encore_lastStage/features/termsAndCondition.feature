@regression1
 Feature: Verify Terms and Condition  for Navigator Application

  Scenario Outline: 1 (C55747) As a user, I User With Legal Role should have access to Terms and conditions
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I clicked on setup header link termsAndConditon page
    And I clicked on terms and condition link
    When I checked default language selection
    And I selected different language
    Then I verified different language

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

 
