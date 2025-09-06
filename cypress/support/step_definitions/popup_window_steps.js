/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import landing_page from "../pages/landing_page";
import window_page from "../pages/window_page";

When('I move to alerts, frame & windows page', function () {
    landing_page.goToAlertPage()
    window_page.goToBrowser()
})

When('I click on new window', function () {
    window_page.goToTheWindow()
})

Then('I should see a pop up window with text', function () {
    window_page.validateNewWindow()
})

Then('I should be able to go back', function () {
    window_page.closeNewWindow()
    window_page.validateReturn()
})