 Feature:verifying the printgroup
 
#   Scenario Outline:1(C56694) AS a user I can create a print group from jobactions
 
#      Given I am on the navigatorLogin page
#      When  I login with <username> and <password>
#      Then  I was directed to landing page
#      And   I changed to other job location for Item Search on addItems page
#      When  I add the classical order 
#      Then  I validate the create NewPrintGroup is displayed 
#         Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

#  Scenario Outline:2(C56696) AS a user I can create a print group from jobactions to assign laborgroup
 
#      Given I am on the navigatorLogin page
#      When  I login with <username> and <password>
#      Then  I was directed to landing page
#      And   I changed to other job location for Item Search on addItems page
#      When  I add the classical order 
#      Then  I validate the labour group is saved for classical order
    
#         Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

       Scenario Outline:3(C56697) AS a user I can create a print group from jobactions to add existing printGroup
 
     Given I am on the navigatorLogin page
     When  I login with <username> and <password>
     Then  I was directed to landing page
     And   I changed to other job location for Item Search on addItems page
     When  I add the classical order 
     Then  I validate to add existing printGroup for that job is displayed in the order
    
        Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

      
    #    Scenario Outline:4(C56697) AS a user I can verify print groups are consolidated quote
 
    #  Given I am on the navigatorLogin page
    #  When  I login with <username> and <password>
    #  Then  I was directed to landing page
    #  And   I changed to other job location for Item Search on addItems page
    #  When  I add the classical order 
    #  Then I validate the consolidated print parameters are displayed in Quote
    
    #     Examples: 
    #   | username                | password  |
    #   | s-tst-navi-CRM@psav.com | Winter23$ |