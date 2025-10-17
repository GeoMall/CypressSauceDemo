Cypress.Commands.add('login', (username, password) => {
    cy.get('input[id="user-name"]').type(username);
    cy.get('input[id="password"]').type(password);
    cy.get('input[id="login-button"]').click();
});

Cypress.Commands.add('addItem', (productName) => {
     cy.get('.inventory_item')
      .contains('.inventory_item_name', productName)
      .parents('.inventory_item')
      .find('button[data-test^="add-to-cart"]')
      .click();
});

Cypress.Commands.add('fillCheckoutForm', (firstName, lastName, zip) => {
    cy.get('input[id="first-name"]').type(firstName);
    cy.get('input[id="last-name"]').type(lastName);
    cy.get('input[id="postal-code"]').type(zip);
});