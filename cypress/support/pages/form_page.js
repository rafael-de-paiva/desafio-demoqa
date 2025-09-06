/// <reference types="cypress" />

export default {
    button: {
        submit: '#submit',
    },

    input: {
        firstName: 'input[placeholder="First Name"]',
        lastName: 'input[placeholder="Last Name"]',
        email: 'input[placeholder="name@example.com"]',
        gender: '#gender-radio-',
        phone: 'input[placeholder="Mobile Number"]',
        birth: '#dateOfBirthInput',
        hobbySports: '#hobbies-checkbox-1',
        hobbyReading: '#hobbies-checkbox-2',
        hobbyMusic: '#hobbies-checkbox-3',
        img: '#uploadPicture'
    },

    textarea: {
        address: '#currentAddress'
    },

    select: {
        year: '.react-datepicker__year-select',
        month: '.react-datepicker__month-select',
    },

    div: {
        day: '.react-datepicker__day--0',
        dayOutside: '.react-datepicker__day--outside-month',
        subject: '#subjectsContainer',
        state: '#state',
        city: '#city'
    },

    text: {
        practice: 'Practice Form',
        thanks: 'Thanks for submitting the form',
    },

    goToPractice() {
        cy.contains(this.text.practice).click()
    },

    fillForm(firstName, lastName, email, gender, phone, day, month, year, subject, hobbySports, hobbyReading, hobbyMusic, address, state, city) {
        cy.get(this.input.firstName).type(firstName)
        cy.get(this.input.lastName).type(lastName)
        cy.get(this.input.email).type(email)
        cy.get(this.input.gender + gender).check({ force: true })
        cy.get(this.input.phone).type(phone)
        cy.get(this.input.birth).click()
        cy.get(this.select.year).select(year.toString());
        cy.get(this.select.month).select(month);
        cy.get(this.div.day + '' + day).not(this.div.dayOutside).click()
        cy.get(this.div.subject).type(subject)
        if (hobbySports) { cy.get(this.input.hobbySports).check({ force: true }) }
        if (hobbyReading) { cy.get(this.input.hobbyReading).check({ force: true }) }
        if (hobbyMusic) { cy.get(this.input.hobbyMusic).check({ force: true }) }
        cy.get(this.input.img).selectFile('cypress/support/fixtures/file_sample.txt')
        cy.get(this.textarea.address).type(address)
        cy.get(this.div.state).click().type(state + '{enter}')
        cy.get(this.div.city).click().type(city + '{enter}')
    },

    submitForm() {
        cy.get(this.button.submit).click()
    },

    validateForm() {
        cy.contains(this.text.thanks).should('be.visible')
    }
}