@regression1
Feature: Verify Item Search in Navigator application

  # Scenario Outline: 1 (C55929) As a user, Im Search by Any Field - Category
  #   # Given I am on the navigatorLogin page
  #   # When I login with <username> and <password>
  #   # Then I was directed to landing page
  #   # When I clicked on item search tab on itemSearch page
  #   # And I changed to other job location for any Item Search on itemSearch page
  #   # When I clicked on item search btn
  #   # And I got all data from Item in Search
  #   # When I entered the item category values in any fields and search
  #   # Then I verified item category Category field data

  #   # Examples: 
  #   #   | username                | password  |
  #   #   | s-tst-navi-CRM@psav.com | Winter23$ |


  # Scenario Outline: 2 (C56080) As a user, Im Search by Any Field - Item
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I clicked on item search tab on itemSearch page
  #   And I changed to other job location for any Item Search on itemSearch page
  #   When I clicked on item search btn
  #   And I got all data from Item in Search
  #   When I entered the item  values in any fields and search
  #   Then I verified item field data

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |



  # Scenario Outline: 3 (C55941) As a user, I Search by Item Region.
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I clicked on item search tab on itemSearch page
  #   And I changed to other job location for any Item Search on itemSearch page
  #   When I selected item region
  #   And I clicked on item search btn
  #   Then I verified item region search

  #  Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |


# Scenario Outline: 4 (C55945) As a user, I Sort by Item Category.
#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I clicked on item search tab on itemSearch page
#     And I changed to other job location for any Item Search on itemSearch page
#     When I clicked on item search btn
#     And I clicked on category sorting
#     Then I verified category search data

# Examples: 
#      | username                | password  |
#      | s-tst-navi-CRM@psav.com | Winter23$ |


  # Scenario Outline: 5 (C55958) As a user, I Check Availability Calender verify.
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I clicked on item search tab on itemSearch page
  #   And I changed to other job location for any Item Search on itemSearch page
  #   And I clicked on item search btn
  #   When I clicked on item row and view product
  #   Then I verified item text in calender

  #  Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |


  # Scenario Outline: 6 (C55965) As a user, I View product Item History
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I clicked on item search tab on itemSearch page
  #   And I changed to other job location for any Item Search on itemSearch page
  #   When I clicked on item search btn
  #   And I clicked on view product code link
  #   Then I verified product history item

  #  Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |
      
       Scenario Outline: 7 (C56800) As a user, I can delete the package selecting the elipisis
     Given I am on the navigatorLogin page
    When  I login with <username> and <password>
    Then  I was directed to landing page
    And   I changed to other job location for Item Search on addItems page
    When  I add the classic sales order  
    When I add package and validate the package is deleted
       Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |