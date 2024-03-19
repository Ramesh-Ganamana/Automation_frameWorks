Feature:Setuping the users

# Scenario Outline:1(C5571) As a user I can Search for users
#  Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     Then I setUp the userSearch in navigator page and validate the Info
#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

#       Scenario Outline:2(C5571) As a user I can Search By Location
#      Given I am on the navigatorLogin page
#      When I login with <username> and <password>
#      Then I was directed to landing page
#        Then I validate the UserAccess for the given location is displayed
 
#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |

 
#       Scenario Outline:3(C55721) As a user I can verify user Should have defaultLocation 1101
#       Given I am on the navigatorLogin page
#       When I login with <username> and <password>
#       Then I was directed to landing page
#       When I add the local location for the default location
#       Then I validate the countries should  displayed
     
#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |     

       
#       Scenario Outline:4(C55722) As a user I can verify location setUp
#       Given I am on the navigatorLogin page
#       When I login with <username> and <password>
#       Then I was directed to landing page
#       When I add the local location for the default location
#       Then I validate the error images are not displayed
     
#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |     


           
#       Scenario Outline:5(C55733) As a user I can set cables and consumables setUp
#       Given I am on the navigatorLogin page
#       When I login with <username> and <password>
#       Then I was directed to landing page
#       When I add the local location for the default location
#       Then I validate the Cables and Consumables
     
#     Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |     

  Scenario Outline:6(C55743) As a user I can verify user with any level of accessto 1101 should be able to access serviceType name 
      Given I am on the navigatorLogin page
      When I login with <username> and <password>
      Then I was directed to landing page
      When I setUp serviceType name
     Then I validate the the serviceType Result
     
    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |    