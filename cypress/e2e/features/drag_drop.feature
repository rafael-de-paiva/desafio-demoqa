Feature: Sortable List Ordering
    As a QA engineer
    I want to arrange the list items in descending order via drag and drop
    To verify the UI correctly reorders and persists the new order

    Scenario: Arrange items in descending order
        Given I am on landing page
        And I move to interactions page
        When I sort the list descending
        Then  the list should be in descending order