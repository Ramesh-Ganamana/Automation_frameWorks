Feature:onDemandDirectBilling

Scenario Outline:1(C56793) As a user Find Billable Orders

 Given I am on the navigatorLogin page
     When  I login with <username> and <password>
     Then  I was directed to landing page
     And   I changed to other job location for Item Search on addItems page
     When  I perform actions on the direct billing Invoice

         Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline:2(C56794)As a users mark orders as RTI
 Given I am on the navigatorLogin page
     When  I login with <username> and <password>
     Then  I was directed to landing page
     And   I changed to other job location for Item Search on addItems page
     When  I perform actions on the direct billing Invoice
     When I add RTI to the requried fields 

         Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline:3(C56803)As a users I can verify orders that are not completed show error message
 Given I am on the navigatorLogin page
     When  I login with <username> and <password>
     Then  I was directed to landing page
     And   I changed to other job location for Item Search on addItems page
     When  I perform actions on the direct billing Invoice
     When I add RTI to the requried fields 
     Then Validate the error is Displayed

         Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |