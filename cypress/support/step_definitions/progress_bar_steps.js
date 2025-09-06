/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import landing_page from "../pages/landing_page";
import widget_page from "../pages/widget_page";

When('I move to widgets page', function () {
    landing_page.goToWidgetPage()
    widget_page.goToProgress()
})

When('I see progress bar reaching 25', function () {
    widget_page.startProgress();
    widget_page.pauseBefore25();
})

When('I stop the progress bar and continue', function () {
    widget_page.resumeToComplete();
})

Then('I should see bar reach 100', function () {
    widget_page.expectComplete();
})

When('I should be able to reset the progress', function () {
    widget_page.resetAndExpectZero();
})

