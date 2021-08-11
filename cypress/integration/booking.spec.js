/// <reference types="Cypress" />

import { navigation } from '../page_objects/navigation.js';
import { register } from '../page_objects/register.js';
import { bookingPage } from "../page_objects/bookingPage.js";

describe("positive booking flow", () => {
    before(() => {
        cy.visit("")
    })

    it('Register using POM', () => {
        cy.intercept("GET", "https://settings.luckyorange.net/?u=https%3A%2F%2Fwww.phptravels.net%2Fregister&s=193429").as("goToRegister")
        navigation.toRegisterPage();
        cy.wait("@goToRegister").then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200);
        })
        cy.url().should("contain", "/register");
    })

    it("Registracija sa validnim podacima", () => {
        cy.intercept("POST", "https://www.phptravels.net/account/signup").as("registerUser");
        register.registerNewUser();
        cy.wait("@registerUser").then((intercept) => {
            expect(intercept.response.statusCode).to.eql(200);
        })
        cy.url().should("contain", "/account");
    })
    
    it("Redirect to home page", () => {
        cy.get('a[title="home"]').click({force:true});
        cy.url().should("contain", "/home");
    })

    it("Select rentals tab", () => {
        bookingPage.selectRental();
    })

})