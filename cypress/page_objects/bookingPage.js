const data = require("../fixtures/data.json")

class BookingPage {
    get rentalBtn(){
        return cy.get('a[data-name="rentals"]');
    }

    get rentalsInput(){
        return cy.get("div#select2-drop  .select2-input");
    }

    selectRental(){
        this.rentalBtn.click({force:true});
    }

    bookRental(){
        this.rentalsInput.type()
    }
}

export const bookingPage  = new BookingPage();