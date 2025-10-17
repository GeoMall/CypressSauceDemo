import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { LoginPage} from '../../pages/LoginPage';

const loginPage = new LoginPage();

Given('I Open SauceDemo', () => {
	loginPage.visit();
	cy.title().should('eq', 'Swag Labs');
});

When('I Enter Details and Login', () => {
	loginPage.login();
});

Then('The User Should be Loggedin', () => {
	cy.get('[data-test="title"]')
    .should('be.visible')
    .and('have.text', 'Products');
    cy.get('.inventory_list').should('be.visible');
});