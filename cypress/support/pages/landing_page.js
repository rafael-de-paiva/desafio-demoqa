/// <reference types="cypress" />

export default {
    text: {
        element: 'Elements',
        form: 'Forms',
        alert: 'Alerts, Frame & Windows',
        widget: 'Widgets',
        interaction: 'Interactions',
    },

    start() {
        cy.visit('/')
    },

    goToFormPage() {
        cy.contains(this.text.form).click()
    },

    goToAlertPage() {
        cy.contains(this.text.alert).click()
    },

    goToElementPage() {
        cy.contains(this.text.element).click()
    },

    goToWidgetPage() {
        cy.contains(this.text.widget).click()
    },

    goToInteractionPage() {
        cy.contains(this.text.interaction).click()
    }
}