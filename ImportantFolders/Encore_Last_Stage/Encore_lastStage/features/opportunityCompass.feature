@createData1
Feature: Create Opportunity at required location in compass application

  Scenario Outline: 1 As a user, I can log into the compass application and able to create an oppertunity
    Given I am on the login page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create an opportunity in compassOpportunity page   

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
