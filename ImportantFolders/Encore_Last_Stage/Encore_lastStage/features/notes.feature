Feature:Adding Notes


  # Scenario Outline:1(C56428)As a user I can add job notes/Customer Notes For a Sales job

  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I create a classic production and navigate to the navigator page
  #   Then I validate the save button is enabled 
  #   Then I validate the startdate and enddate
  #   When I am click on the save button and navigate to the jobsheader
  #   Then I validate the job type sales and operations
  #   When I add the items to the sales job
  #   When I add the CustomerNotes
  #   Then I validate the customerNotes is not avalible for operations Job
  #   Examples:
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |


  # Scenario Outline:2(C56432)As a user I can add Pick listnotes Notes For a Production job    

  #  Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I create a classic order and navigate to the navigator page
  #   Then I validate the save button is enabled 
  #   Then I validate the startdate and enddate
  #   When I am click on the save button and navigate to the jobsheader
  #   Then I validate the job type sales and operations
  #   When I add Items for the operational job
  #   Then I validate the PickList enabled
  #   Then I add notes to the picklist and validate the picklistnotes is saved
  #   Examples:
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |


  
  # Scenario Outline:3(C56433)As a user I can verify  picklist notes does not avaliable for sales job

  #  Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I create a classic order and navigate to the navigator page
  #   Then I validate the save button is enabled 
  #   Then I validate the startdate and enddate
  #   When I am click on the save button and navigate to the jobsheader
  #   Then I validate the job type sales and operations
  #   When I add the items for picklistnotes for sales job
  #   Then I validate picklist textarea is not enable for sales job
  #     Examples:
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |


  #  Scenario Outline:4(C56434)As a user I can verify Job Notes/Customer Notes does not avaliable for operational job

  #   Given I am on the navigatorLogin page
  #   When I login with <username> and <password>
  #   Then I was directed to landing page
  #   When I create a classic production and navigate to the navigator page
  #   Then I validate the save button is enabled 
  #   Then I validate the startdate and enddate
  #   When I am click on the save button and navigate to the jobsheader
  #   Then I validate the job type sales and operations
  #   When I add items for the Customer Notes in operational job 
  #   Then I validateCustomerJobnotesNotEnabledForOperationalJob
  #        Examples:
  #     | username                | password  |
  #     | s-tst-navi-CRM@psav.com | Winter23$ |

        Scenario Outline:5.(C56801)AS a user I can add notes to order header

          Given I am on the navigatorLogin page
          When I login with <username> and <password>
          Then I was directed to landing page
           And I changed to other job location for Item Search on addItems page
           When I add the classical order for the notes
           When I click on Order tab to make notes 
        
        Examples: 
        | username                | password  |
        | s-tst-navi-CRM@psav.com | Winter23$ |


     Scenario Outline:6.(C56802)AS a user I can  verify order notes displayed in quotes

             Given I am on the navigatorLogin page
             When I login with <username> and <password>
             Then I was directed to landing page
             And I changed to other job location for Item Search on addItems page
             When I add the classical order
             When I click on Order tab to make notes
             Then I verify that notes tab is displayed in classcial order 
      
        Examples: 
      | username                | password  |
       | s-tst-navi-CRM@psav.com | Winter23$ |


