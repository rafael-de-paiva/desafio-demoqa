/// <reference types="cypress" />

export default {
    button: {
        add: '#addNewRecordButton',
        submit: '#submit'
    },

    span: {
        edit: '#edit-record-',
        delete: '#delete-record-'
    },

    input: {
        firstName: '#firstName',
        lastName: '#lastName',
        email: '#userEmail',
        age: '#age',
        salary: '#salary',
        department: '#department'
    },

    text: {
        tables: 'Web Tables'
    },

    goToTables(){
        cy.contains(this.text.tables).click()
    },

    createNewRecord(firstName, lastName, email, age, salary, department) {
        cy.get(this.button.add).click()
        cy.get(this.input.firstName).type(firstName)
        cy.get(this.input.lastName).type(lastName)
        cy.get(this.input.email).type(email)
        cy.get(this.input.age).type(age)
        cy.get(this.input.salary).type(salary)
        cy.get(this.input.department).type(department)
        cy.get(this.button.submit).click()
    },

    editNewRecord(firstName, lastName, email, age, salary, department) {
        cy.get(this.span.edit+'4').click({ force: true })
        cy.get(this.input.firstName).clear().type(firstName)
        cy.get(this.input.lastName).clear().type(lastName)
        cy.get(this.input.email).clear().type(email)
        cy.get(this.input.age).clear().type(age)
        cy.get(this.input.salary).clear().type(salary)
        cy.get(this.input.department).clear().type(department)
        cy.get(this.button.submit).click()

    },

    deleteNewRecord(position) {
        cy.get(this.span.delete+position.toString()).click()
    },

    validateDelete(position) {
        cy.get(this.span.delete+position.toString()).should('not.exist')
    }
}