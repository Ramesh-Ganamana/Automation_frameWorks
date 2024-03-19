@regression1
Feature: Verify Job Action search for Navigator application

 Scenario Outline: 0 Order creation prerequisite scenario
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I can create a new classic order in jobNavigator page
    Then I save an order in jobNavigator page
    When I click on items job option in addItems page
    
    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline: 1.(C55761) As a user, I can verify change open job status
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I navigate to orderSearch tab
  #   And I change to other location for job action on jobActionSearch page
  #   When I clicked on search button
  #   And I clicked on Order Number Link and job tab
  #   When I verified multiple jobs
  #   And I clicked on jobactions and hovering on change job status
  #   When I Verified Updated Job Status for Change Jobs
  #   And I clicked on save job
  #   When I Verified Updated Job Quote Status for Change Jobs

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline: 2.(C55762)As a user, I can verify copy job search
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I navigate to orderSearch tab
  #   And I change to other location for job action on jobActionSearch page
  #   When I clicked on copyjobsearch button
  #   And I clicked on select results
  #   When I clicked on jobs
  #   And I clicked on jobactions
  #   When I clicked on copy jobs
  #   And I clicked on paste jobs
  #   When I clicked on save job
  #   Then I Verified on Copy Job Status

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

  # Scenario Outline:3.(C55763) As a user, I can verify copy jobs to multiple rooms
  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I navigate to orderSearch tab
  #   And I change to other location for job action on jobActionSearch page
  #   When I clicked on search button
  #   And I clicked on Order Number Link and job tab
  #   When I clicked on jobactions
  #   And I clicked on multiple copy jobs
  #   When I clicked on extended date copy
  #   And I clicked on extendedmultiple copy jobs
  #   When I clicked on create copy jobs
  #   And I clicked on job done
  #   When I verified job before save
  #   And I clicked on save job
  #   Then I verified job after save

  #   Examples: 
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |
