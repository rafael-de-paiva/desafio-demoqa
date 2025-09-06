/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import generateUserData from '../data/user_data'
import landing_page from "../pages/landing_page";
import form_page from "../pages/form_page";

When('I move to form page', function () {
    landing_page.goToFormPage()
    form_page.goToPractice()
})

When('Fill all fields with random values', function () {
    var user = generateUserData()
    form_page.fillForm(
        user.firstName,
        user.lastName,
        user.email,
        user.gender,
        user.phone,
        user.day,
        user.month,
        user.year,
        user.subject,
        user.hobbySports,
        user.hobbyReading,
        user.hobbyMusic,
        user.address,
        user.state,
        user.city
    )
})

When('I submit the form', function () {
    form_page.submitForm()
})

Then('I should see a pop up after it', function () {
    form_page.validateForm()
})

