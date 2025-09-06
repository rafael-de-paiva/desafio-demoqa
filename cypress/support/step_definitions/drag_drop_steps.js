/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import landing_page from "../pages/landing_page";
import interaction_page from "../pages/interaction_page";

When('I move to interactions page', () => {
    landing_page.goToInteractionPage()
    interaction_page.goToSortable()
});

When('I sort the list descending', () => {
    interaction_page.sortListDescending();
});

Then('the list should be in descending order', () => {
    interaction_page.expectListDescending();
});