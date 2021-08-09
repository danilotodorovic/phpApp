class Register {
    get myAccount() {
        return cy.get(":nth-child(3) > .dropdown > #dropdownCurrency")
    }
    get registerButton() {
        return cy.get("[href='https://www.phptravels.net/register']")
    }
    get firstName() {
        return cy.get(".row > :nth-child(1) > .form-group > .pure-material-textfield-outlined > span")
    }
    get lastName() {
        return cy.get(":nth-child(2) > .form-group > .pure-material-textfield-outlined > span")
    }
    get mobileNumber() {
        return cy.get(":nth-child(4) > .pure-material-textfield-outlined > span")
    }
    get email() {
        return cy.get(":nth-child(5) > .pure-material-textfield-outlined > span")
    }
    get password() {
        return cy.get(":nth-child(6) > .pure-material-textfield-outlined > span")
    }
    get confirmedPassword() {
        return cy.get(":nth-child(7) > .pure-material-textfield-outlined > span")
    }
    get submit() {
        return cy.get('.signupbtn')
    }

    register(firstName, lastName, mobileNumber, email, password, confirmedPassword) {
        this.firstName.type(firstName)
        this.lastName.type(lastName)
        this.mobileNumber.type(mobileNumber)
        this.email.type(email)
        this.password.type(password)
        this.confirmedPassword.type(confirmedPassword)
        this.submit.click()
    }
}

export const register = new Register()