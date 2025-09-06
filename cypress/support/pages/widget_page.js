/// <reference types="cypress" />

export default {
    text: {
        progress: 'Progress Bar'
    },

    button: {
        start: '#startStopButton',
        reset: '#resetButton'
    },

    el: {
        bar: '[role="progressbar"]',
    },

    attribute: {
        val: 'aria-valuenow'
    },

    goToProgress() {
        cy.contains(this.text.progress).click()
    },

    startProgress() {
        cy.get(this.button.start).click();
    },

    pauseBefore25() {
        cy.get(this.el.bar).should(($el) => {
            const v = $el.text();
            const n = parseInt(String(v));
            expect(n).to.be.within(23, 25);
        });
        cy.get(this.button.start).click();
        cy.wait(5000)
    },

    resumeToComplete() {
        cy.get(this.button.start).click();
        cy.get(this.el.bar).should(($el) => {
            const v = $el.text();
            const n = parseInt(String(v));
            expect(n).to.eq(100);
        });
    },

    expectComplete() {
        cy.get(this.el.bar).should('have.attr', this.attribute.val, '100');
        cy.wait(1000)
    },

    resetAndExpectZero() {
        cy.get(this.button.reset).click();
        cy.get(this.el.bar).should('have.attr', this.attribute.val, '0');
    }
}