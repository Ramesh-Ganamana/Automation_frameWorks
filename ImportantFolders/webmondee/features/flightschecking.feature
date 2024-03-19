
Feature:checking the flights


Scenario Outline:As a user ,I can check the flights

    Given I am on the login page
    When I login with <mail> and <password>
    When I am checking the avaliable flights in the landing page
    When I am register  as a new user
    Examples:
      | mail | password |
      | qatestautomationagent@guerrillamail.com |#9b75FQt |

      