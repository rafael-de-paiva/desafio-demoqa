/// <reference types="cypress" />

export default {
    button: {
        newWindow: 'button[id="windowButton"]'
    },

    text: {
        browser: 'Browser Windows',
        sample: 'This is a sample page'
    },

    goToBrowser() {
        cy.contains(this.text.browser).click()
    },

    goToTheWindow() {
        cy.followWindow(() => {
            cy.get(this.button.newWindow).click()
        });
    },

    validateNewWindow() {
        cy.contains(this.text.sample).should('be.visible')
    },

    closeNewWindow() {
        cy.go('back');
    },

    validateReturn() {
        cy.contains(this.text.browser).should('be.visible');
    }
}