export class CheckoutPage
{
	ClickCheckoutButton(){
	    cy.get('button[id="checkout"]').click();
	}

	FillCheckoutFormAndSubmit(){
		cy.fixture('SauceLabsFixture').then((items) => {
	    cy.fillCheckoutForm(
	        items.checkoutDetails.firstName,
	        items.checkoutDetails.lastName,
	        items.checkoutDetails.zip
	      );
	    });

	    cy.get('input[id="continue"]').click();
	}

	FinishAndSubmit(){
		cy.get('button[id="finish"]').click();  
	}
}