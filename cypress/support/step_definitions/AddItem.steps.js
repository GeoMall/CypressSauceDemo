import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { HomePage} from '../../pages/HomePage';

const homePage = new HomePage();

When('I Add Item To Cart', () => {
    homePage.AddItemToCart();
	cy.get('button[data-test^="remove"]').should('be.visible');
});

When('I Open Cart', () => {
    homePage.OpenCart();
});

Then('The Cart Title Is Visible', () => {
	cy.get('[data-test="title"]')
	      .should('be.visible')
	      .and('have.text', 'Your Cart');
});

Then('The Item Is Added to Cart', () => {
	cy.fixture('SauceLabsFixture').then((items) => {
      cy.get('.cart_item')
      .contains('.inventory_item_name', items.productName);
    });
});