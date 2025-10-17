import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { CheckoutPage } from '../../pages/CheckoutPage';

const checkoutPage = new CheckoutPage();

When('I Click Checkout', () => {
	checkoutPage.ClickCheckoutButton();
});

Then('The Checkout Form Should Be Loaded', () => {
   cy.get('[data-test="title"]')
    .should('be.visible')
    .and('have.text', 'Checkout: Your Information');
});

When('I Fill Checkout Form and Continue', () => {
	checkoutPage.FillCheckoutFormAndSubmit();
});

Then('The Checkout Overview Should Be Loaded and Data Should be Correct', () => {
	cy.get('[data-test="title"]')
    .should('be.visible')
    .and('have.text', 'Checkout: Overview');

    cy.fixture('SauceLabsFixture').then((items) => {
      cy.get('.cart_item')
      .contains('.inventory_item_name', items.productName);
    });
});

When('I Click Finish', () => {
	checkoutPage.FinishAndSubmit();
});

Then('The Checkout Is Completed', () => {
	cy.get('[data-test="title"]')
	    .should('be.visible')
	    .and('have.text', 'Checkout: Complete!');

	cy.get('.checkout_complete_container').should('be.visible');
});
