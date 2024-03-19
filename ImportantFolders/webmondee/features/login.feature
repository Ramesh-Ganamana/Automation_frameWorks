Feature: The mondee application

  Scenario Outline: As a user, I can log into the login page

    Given I am on the login page
    When I login with <mail> and <password>


    Examples:
      | mail | password |
      | qatestautomationagent@guerrillamail.com |#9b75FQt |

