Feature: As a QA engineer
    I want to start, pause under 25%, resume to 100%, and reset the progress bar
    To ensure the progress states and thresholds behave reliably

    Scenario: Pause under 25% and finish to reset
        Given I am on landing page
        And I move to widgets page
        When I see progress bar reaching 25
        And I stop the progress bar and continue
        Then I should see bar reach 100
        And I should be able to reset the progress

