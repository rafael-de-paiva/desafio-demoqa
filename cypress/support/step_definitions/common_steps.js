/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import landing_page from "../pages/landing_page";

beforeEach(() => {
    cy.clearCookies()
    cy.clearLocalStorage()
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })
})

Given('I am on landing page', () => {
    landing_page.start()
})