export class HomePage
{
	AddItemToCart(){
	    cy.fixture('SauceLabsFixture').then((items) => {
     		cy.addItem(items.productName);
    	});
	}

	OpenCart(){
		cy.get('#shopping_cart_container').click();
	}
}