Feature:verify  jobs

# # Scenario Outline: (C56412) As a user, I can  Add Item to Operations Job and Verify that Add to sales link is populated


# #     Given I am on the navigatorLogin page
# #     When I login with <username> and <password>
# #     Then I was directed to landing page
# #     When I create a classic order and navigate to the navigator page
# #     Then I validate the save button is enabled 
# #     Then I validate the startdate and enddate
# #     When I am click on the save button and navigate to the jobsheader
# #     Then I validate the job type sales and operations
# #     When I am add the  Item for an operational Job
# #     Then I validate the sales link is populated for the operations Job
# #       Examples: 
# #       | username                | password  |
# #       | s-tst-navi-CRM@psav.com | Winter23$ |


# Scenario Outline: (C56413) As a user, I can  Add Pkg to Operations and Job and Verify that Add to Sales link is populated on the Pkg Header


#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create a classic order and navigate to the navigator page
#     Then I validate the save button is enabled 
#     Then I validate the startdate and enddate
#     When I am click on the save button and navigate to the jobsheader
#     Then I validate the job type sales and operations
#     When I add the  package for an operational Job
#     Then I validate the sales link is populated for the operations Job
#     When I click on the Notrequired checkbox in add package and save the package
#     Then I validate the RequiredReview button is unchecked
#     Then I validate the sales link is populated for the operations Job
#       Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |



Scenario Outline: (C56415) As a user, I can  Verify NERF message is triggered on operations Job when Qty is updated on the Sales JOB


    Given I am on the navigatorLogin page
    When I login with <username> and <password>
    Then I was directed to landing page
    When I create a classic order and navigate to the navigator page
    Then I validate the save button is enabled 
    Then I validate the startdate and enddate
    When I am click on the save button and navigate to the jobsheader
    Then I validate the job type sales and operations
    When I add the  Items for an operational Job
    Then I validate NERF message is populated and opsCheckbox is checked
      Examples: 
      | username                | password  |
      | s-tst-navi-CRM@psav.com | Winter23$ |

# Scenario Outline: (C56416) As a user, I can : Verify NERF message triggered on operations Job is not displayed when Ops Review is completed


#     Given I am on the navigatorLogin page
#     When I login with <username> and <password>
#     Then I was directed to landing page
#     When I create a classic order and navigate to the navigator page
#     Then I validate the save button is enabled 
#     Then I validate the startdate and enddate
#     When I am click on the save button and navigate to the jobsheader
#     Then I validate the job type sales and operations
#     When I add the  Items for an operational Job
#     Then I validate NERF message is populated and opsCheckbox is checked
#     When I uncheck the opsreview checkbox in operational job
#     Then I validate the Nerf Message is not populated 
#       Examples: 
#       | username                | password  |
#       | s-tst-navi-CRM@psav.com | Winter23$ |