Feature: Open New Window and Validate Content
    As a site user navigating multiple windows
    I want to open a new window and view its text
    To confirm content loads correctly and I can return to the original page

    Scenario: Window Opening
        Given I am on landing page
        And I move to alerts, frame & windows page
        When I click on new window
        Then I should see a pop up window with text
        And I should be able to go back