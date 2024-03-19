@regression1
Feature: Verify order search for Navigator application

  Scenario Outline: 1 (C55804) As a user, I should verify Order number search Scenario
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order id under order search tab
    Then I verify order id exists in the search results

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 2 (C55805) As a user, I should verify OrderName search Scenario
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order name under order search tab
    Then I verify order name exists in the search results

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 3 (C55809) As a user, I can log into the secure area and validate order search by status
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search order by status under order search tab
    Then I verify order status exists in the search results

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 4 (C55811) As a user, I can log into the secure area and validate order search by order type
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the order type under order search tab
    Then I verify order type exists in the search results

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 5 (C55840) As a user, I can log into the secure area and update order shorts result
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search order by status under order search tab
    Then I verify order status exists in the search results
    When I select an order to update order shorts
    Then I update order shorts and validate order shorts button

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 6 (C55817) As a user, I can log into the secure area and able to validate new internal order button
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I click on new internal order button
    Then I should navigate to orders page

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 8 (C55819) As a user, I can log into the secure area and able to validate print production consolidated quote
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I select an order and go to production quote
    Then I should able to verify print consolidated production quote

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 9 (C55820) As a user, I can log into the secure area and able to validate print consolidated quote
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I select an order and go to consolidated quote
    Then I should able to verify print consolidated quote

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 10 (C55818) As a user, I can log into the secure area and able to validate print Quote/Event Billing quote
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I select an order and go to event billing quote
    Then I should able to verify print event billing quote

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

   Scenario Outline: 11 (C55815) As a user, I can log into the secure area and able to validate use date range in order search
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I give a date range and check the search results
    Then I should validate date according to the search date

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 12 (C55807) As a user, I can log into the secure area and able to validate search results with the invoice number
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I capture invoice number from search results
    When I give an invoice number and check the search results
    Then I should validate invoice number according to the search value

    
    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

Scenario Outline: 13 (C55841) As a user, I can log into the secure area and able to update ordershorts all
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I select an order with tentitive status to update order shorts all
    Then I update orderShortsAll and validate order shorts save message

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 14 (C55806) As a user, I can log into the secure area and validate DRO number search
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I search for the DRO number under order search tab
    Then I verify DRO number exists in the search results

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

  Scenario Outline: 15 (C55868) As a user, I can navigate to DRO search tab and able to search with DRO number
    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I navigate to orderSearch tab
    And I changed to other location
    When I navigate to dro search tab and search with dro number
    Then I verify dro number search results in dro search tab

    Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |
