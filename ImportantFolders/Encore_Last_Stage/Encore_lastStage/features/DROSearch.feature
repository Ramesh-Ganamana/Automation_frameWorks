 
Feature:DRO Search

Scenario Outline:C55869:As a user i can  Search by Order Number whether the info displayed correctly

    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location 
    When I was performing action on the Dro Search tab
    Then I validate the Search result display correctly in the right table
      Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |




 Scenario Outline:2:C55875:  As a user I can verify orderlink navigated to orders page

     Given I am on the navigatorLogin page
     When I login with <username> and <password>
     Then I was directed to landing page
     When I navigate to orderSearch tab
     And I changed to other location
     When In DroSearch Implimenting Action on the Dro search tab
     Then I validate while clicking on orderlink whether it navigate to orderpage   

       Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |





 Scenario Outline:3:C55879:AS a user i can verify the print review report displayed correctly

     Given I am on the navigatorLogin page
     When I login with <username> and <password>
     Then I was directed to landing page
     When I navigate to orderSearch tab
     And I changed to other location     
     When In DroSearch Implimenting Action on the Dro search tab
     When performing actions on the  DRO list row
     Then I validate  the Preview report
       Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
