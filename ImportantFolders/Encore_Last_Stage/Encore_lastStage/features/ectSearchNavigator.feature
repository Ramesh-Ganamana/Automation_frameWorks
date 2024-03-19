@regression1
Feature: Verify ECT search for Navigator application

   Scenario Outline:1.(C56025) As a user, I can Verify ECT Name Field
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I changed to other location on ectSerach page
    When I search for the get all ect search name
    And I search for the ECTName
    Then I verify ECTName Results  exists in the search results page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
  
  # Scenario Outline:2.(C56081) As a user, I can Verify ECT Number Field
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I changed to other location on ectSerach page
  #   When I search for the get all ect search number
  #   And I search for the a particular ECT  number
  #   Then I verify ECTNumber Results  exists in the search results page

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  #  Scenario Outline:3.(C56019) As a user, I can Verify ECT Order Number Field
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I changed to other location on ectSerach page
  #   When I search for the get all ect order number
  #   And I search for the ECT Order Search number
  #   And I clicked on Result Order Button
  #   Then I verify ECTOrder Results  exists in the search results page

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  #   Scenario Outline:4.(C56048) As a user, I can Verify Updated ECT Name Field
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   And I navigate to orderSearch tab
  #   When I changed to other location on ectSerach page
  #   When I search for ect name update
  #   And I clicked on Result Order Button
  #   When I updated on Result Order ECTName
  #   Then I Verified Updated ECT Updated ECTName
    
   
  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

