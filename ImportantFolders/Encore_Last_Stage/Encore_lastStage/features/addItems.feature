@regression
Feature: Verify Add Items for Navigator application

  Scenario Outline: 0 Order Creation Pre Defined Scenario
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I can create a new classic order in jobNavigator page
    Then I save an order in jobNavigator page
    When I click on items job option in addItems page

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 1 (C56068) As a user, I can Add Items From the Hot List
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I changed to other job location for Item Search on addItems page
    When I entered order number on order search field
    And I clicked on item order number link
    When I clicked on jobs link
    And I clicked on items link
    When I clicked on hot items link
    And I clicked on item section
    When I clicked on item close section
    Then I verified total calulations

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 2 (C56070) As a user, I can Add Freight to a Job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I changed to other job location for Item Search on addItems page
    When I entered order number on order search field
    And I clicked on item order number link
    When I clicked on jobs link
    And I clicked on items link
    When I clicked on frieght link and added frieght items
    When I clicked on item close section
    Then I verified the frieght total cost

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 3 (C56071) As a user, I can Add Packages to a Job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I changed to other job location for Item Search on addItems page
    When I entered order number on order search field
    And I clicked on item order number link
    When I clicked on jobs link
    And I clicked on items link
    When I clicked on package link and added pacakge items
    And I clicked on item close section
    Then I verified total calculation of package items

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |



  Scenario Outline: 4 (C56072) As a user, I can Add Subclass Labor and Items to a Job

    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I changed to other job location for Item Search on addItems page
    When I can create a new classic order in jobNavigator page
    And I clicked on jobs link
    When I clicked on items link
    And I clicked on sub item link
    When I clicked on search magnifier
    And I clicked on subzero check box
    When I entered text for subzero check box
    And I verified SubZero data
    When I clicked on labor subclass and Verified

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 5 (C56073) As a user, I can Add Items and labor to a job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I changed to other job location for Item Search on addItems page
    When I can create a new classic order in jobNavigator page
    And I clicked on jobs link
    When I clicked on items link
    And I clicked on item link
    When I clicked on item search magnifier
    And I entered text for item subzero check box
    When I verified item SubZero data
    Then I clicked on  labor item and Verified

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


  Scenario Outline: 6. (C55779) : As a user, I can Add Items and Labor to a Sales Order
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I can create a new classic order in jobNavigator page
    When I clicked on jobs link
    And I clicked on items link
    When I clicked on package link and added pacakge items
    And I added the labor subclass and verified
    When I added the subclass greater than zero and verified
    And I Verify that Order  is saved and the Totals are calculated on the Totals Tab

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  # 3rd Phase

  Scenario Outline: 7. (C56439) : As a user, Add Items to a Job using Double Click
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I create a production order in job module
    When I verified the order and job start and end dates
    And I clicked on item list
    When I verified the item text vals

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


  Scenario Outline: 8. (C56441) : As a user, Add Items from Grid
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I can create a new classic order in jobNavigator page
    And I clicked on the sales job and entered sales name
    Then I verified the added package

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


  Scenario Outline: 9. (C56443) : As a user, Add items to Operations Job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I can create a new classic order in jobNavigator page
    When I clicked on operational job
    Then I verified sales job and opeartional job
    And I verified sales Review

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 10. (C56446) : As a user, I verified Labor hrs should reflect the hrs set for the job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I create a production order in job module
    When I update the starting and ending hrs and verified sales and Operation jobs
    And I added and verified labor items times

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


  Scenario Outline: 11.(C56447) : As a user, I veirifed Labor hrs should reflect the hrs set for the jobAdd Items to a Job using Double Click
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I create a production order in job module
    When I verified the added labor hours reflected
    And I updated items start and end times
    When I verified the gross total

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


  # 4th Phase

  Scenario Outline: 12.(C56630) : As a user, I Add CMP package to a Job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I create a production order in job module
    When I selected cmp package from package filter
    And I added cmp package to job and verified added package

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


  Scenario Outline: 13.(C56631) : As a user, I Add Serial package to a job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I create a classic order in job module
    When I selected serial package from package filter
    And I added serial package to job and verified added package

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |


  Scenario Outline: 14.(C56632) : As a user, I Add Standard package to a Job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I create a classic order in job module
    When I selected standard package from package filter
    And I added standard package to job and verified added package

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |



  Scenario Outline: 15.(C56633) : As a user, I Add Super PKG to a job
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    And I create a production order in job module
    When I selected super package from package filter
    And I added super package to job and verified added package

    Examples:
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |