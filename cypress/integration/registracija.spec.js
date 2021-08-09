/// <reference types="Cypress" />
import { register } from '../page_objects/registerObject'


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

describe("Php aplikacija", () => {
    // it("Registracija sa validnim podacima", () => {
        // cy.visit("/home");
        // cy.get(":nth-child(3) > .dropdown > #dropdownCurrency").click();
        // cy.get("a[href='https://www.phptravels.net/register']").click();
        // cy.url().should("contain", "/register");
        // cy.get('input[name="firstname"]').type("Danilo");
        // cy.get('input[name="lastname"]').type("Todorovic");
        // cy.get('input[name="phone"]').type("123456789");
        // cy.get('input[name="email"]').type("test123@test.com");
        // cy.get('input[name="password"]').type("pass1234");
        // cy.get('input[name="confirmpassword"]').type("Danilo");
    // })

    it('Register using POM', () => {
        cy.visit('/')
        register.myAccount.click()
        register.registerButton.click()
        register.register('danilo', 'todorovic', '+38166666666', 'testtest@gmail.com', '123456789', '123456789')
        })
})