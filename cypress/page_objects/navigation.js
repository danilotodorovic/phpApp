class Navigation {
    get getHomeBtn(){
        return cy.get(".imagelogo");
    }

    get myAccountBtn(){
        return cy.get(":nth-child(3) > .dropdown > #dropdownCurrency");
    }

    get signUpBtn(){
        return cy.get('a[href="https://www.phptravels.net/register"]');
    }

    clickHomeBtn(){
        this.getHomeBtn.click({force:true});
    }

    toRegisterPage(){
        this.myAccountBtn.click({force:true});
        this.signUpBtn.click({force:true});
    }
}

export const navigation = new Navigation();