 @regression1
 Feature: Verify job search for Navigator application

  # Scenario Outline: 0 Order Creation Pre Defined Scenario
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I can create a new classic order in jobNavigator page
  #   And I add package to an order in jobNavigator page
  #   Then I save an order in jobNavigator page
  #   When I click job option in jobSearch tab
    
  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline: 1(C55842)As a user, I can Verify Job Number Field
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   And  I changed to other job location on jobSearch tab
  #   When I click on jobSearch tab
  #   When I search for the job id under job search tab
  #   Then I verify job id exists in the search results

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline: 2(C55843) As a user, I can Verify Order Num Search Field
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I changed to other job location on jobSearch tab
  #   And I click on jobSearch tab
  #   When I search for the order Num under job search tab
  #   Then I verify Order Number exists in the search results page

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline: 3(C55761) As a user, I can Verify Order Name Search Field
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I changed to other job location on jobSearch tab
  #   And I click on jobSearch tab
  #   When I search for the order Name under job search tab
  #   Then I verify Order Name exists in the search results page

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline: 4(C55845) As a user, I can Verify Search by Status  Field
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   And I changed to other job location on jobSearch tab
  #   When I click on jobSearch tab
  #   When I search for the choose Job Status under job search tab
  #   Then I verify choose  Job Status  exists in the search results page

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 5 (C55866)As a user, I can Verify Update Job Status Scenario
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I change to other job location on jobSearch tab
    When I click on jobSearch tab
    When I search for the Update Job Status under job search tab
    Then I verify Update  Job Status  exists in the search results page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
