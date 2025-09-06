Feature: Manage Web Table Records
    As a site user who maintains data
    I want to create, edit, and delete records in Web Tables
    To keep the table accurate and allow bulk cleanups

    Scenario: Record CRUD (W/Bonus)
        Given I am on landing page
        And I navigate to the elements page
        When I create a new record
        And I edit the record
        And I delete the record
        Then I should not see the record in the table
        When I create 12 new records
        And I delete those 12 records
        Then I should have no created records left