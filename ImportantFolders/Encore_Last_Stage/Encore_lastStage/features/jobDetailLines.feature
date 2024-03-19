
Feature:JobDetailLines

Scenario Outline:1(C56634) As  a user i can verify that cut line can be performed from the job detail lines
    Given I am on the navigatorLogin page
    When  I login with <username> and <password>
    Then  I was directed to landing page
    And   I changed to other job location for Item Search on addItems page
    When  I add the classic sales order 
    When  I add the line item to the sales job
    Then  I validate the jobDetails and line item is cut from the order

      Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

    Scenario Outline:2(C56635) As  a user i can verify that copy line can be performed from the job detail lines
    Given I am on the navigatorLogin page
    When  I login with <username> and <password>
    Then  I was directed to landing page
    And   I changed to other job location for Item Search on addItems page
    When  I add the classic sales order 
    When  I add the line item to the sales job
    Then  I validate the copy line is pasted in the other line in classic order

      Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


      Scenario Outline:3(C56636) As  a user i can verify that copy line can be performed from the job detail lines in productionOrder
    Given I am on the navigatorLogin page
    When  I login with <username> and <password>
    Then  I was directed to landing page
    And   I changed to other job location for Item Search on addItems page
    When  I add the production sales order 
    When  I add the line item to the sales job
    Then  I validate the copy line is pasted in the other line in production order

      Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

   Scenario Outline:4(C56639) As  a user i can verify that set complimentry  job from the job detail lines
    Given I am on the navigatorLogin page
    When  I login with <username> and <password>
    Then  I was directed to landing page
    And   I changed to other job location for Item Search on addItems page
    When  I add the classic sales order 
    When  I add the line item to the sales job
    Then  I validate complimentry is there in operation order

        Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

          Scenario Outline:5(C56640) As  a user i can verify that set complimentry  job from the job detail lines
    Given I am on the navigatorLogin page
    When  I login with <username> and <password>
    Then  I was directed to landing page
    And   I changed to other job location for Item Search on addItems page
    When  I add the classic sales order 
    When  I add the line item to the sales job
    Then  I validate complimentry is there in operation order
    Then  I validate  undo complimentry is there in operation order

        Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |




  Scenario Outline: 6 (C56693) Verify Operations job does not have copy paste option
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I changed to other job location for Item Search on addItems page
    When I search for  production order
    Then I verify the Copy Operations in production order

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

 Scenario Outline: 7 (C56695) Verify Operations job does not have option to copy paste 
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a classic order and navigate to the navigator page
    Then I validate the save button is enabled 
    Then I validate the startdate and enddate
    When I am click on the save button and navigate to the jobsheader
    Then I validate the job type sales and operations
    Then I validate the Copy paste options in production order

     Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |