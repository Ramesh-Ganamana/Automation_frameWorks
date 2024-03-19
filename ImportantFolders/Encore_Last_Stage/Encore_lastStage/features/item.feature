Feature:verify  Add job breaks for labor item 

Scenario Outline: (C56284) As a user, I can check Add job breaks for labor item

    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a classic order and navigate to the navigator page
    Then I validate the save button is enabled 
    Then I validate the startdate and enddate
    When I am click on the save button and navigate to the jobsheader
    Then I validate the job type sales and operations
    When I clicked on the item tab and subclasstab selcting labour
    Then I validate the service type
    When I click on date tab and breaktab
    When I am adding the breaktimings
    Then I validate breaks
    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


#       Scenario Outline:2.(C56372)AS a user I can  Add rigging and verify that rigging overhead reasons is triggered

#        Given I am on the navigatorLogin page
#        When I login with <username> and <password>
#        Then I was directed to landing page
#        When I navigate to orderSearch tab
#        And I changed to other location 
#        When I am implementing the click action on the production order
#        When I am selecting the rigging element
#        Then I validate Errorelement and service type
#        When I was click on the subrigging tab getting overheadtab
#         Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |



Scenario Outline:  As a user, I can check Add job breaks for labor item

    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a classic production and navigate to the navigator page
    Then I validate the save button is enabled 
    Then I validate the startdate and enddate
    When I am click on the save button and navigate to the jobsheader
    Then I validate the job type sales and operations

        Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |