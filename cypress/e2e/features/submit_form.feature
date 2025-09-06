Feature: Submit Practice Form
    As a prospective user filling out a form
    I want to complete all fields with valid data and submit
    To receive a confirmation that my submission was successful

    Scenario: Form Submitting
        Given I am on landing page
        And I move to form page
        When Fill all fields with random values
        And I submit the form
        Then I should see a pop up after it