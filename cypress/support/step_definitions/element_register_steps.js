/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import generateUserData from '../data/user_data';
import landing_page from "../pages/landing_page";
import element_page from "../pages/element_page";


When('I navigate to the elements page', function () {
    landing_page.goToElementPage()
    element_page.goToTables()
})

When('I create a new record', function () {
    var user = generateUserData()
    element_page.createNewRecord(
        user.firstName,
        user.lastName,
        user.email,
        (2025 - user.year).toString(),
        user.salary,
        user.department
    )
})

When('I edit the record', function () {
    var user = generateUserData()
    element_page.editNewRecord(
        user.firstName,
        user.lastName,
        user.email,
        (2025 - user.year).toString(),
        user.salary,
        user.department
    )
})

When('I delete the record', function () {
    element_page.deleteNewRecord(4)
})

Then('I should not see the record in the table', function () {
    element_page.validateDelete(4)
})

When('I create {int} new records', function (count) {
    for (let i = 0; i < count; i++) {
        var user = generateUserData()
        element_page.createNewRecord(
            user.firstName,
            user.lastName,
            user.email,
            (2025 - user.year).toString(),
            user.salary,
            user.department
        )
    }
})

When('I delete those {int} records', function (count) {
    for (let i = 0; i < count; i++) {
        element_page.deleteNewRecord(4 + i)
    }
})

Then('I should have no created records left', function () {
    element_page.validateDelete(4)
})