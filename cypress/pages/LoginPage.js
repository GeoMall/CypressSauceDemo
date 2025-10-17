export class LoginPage
{
	visit(){
	   cy.visit('https://www.saucedemo.com');
	}

	login(){
		cy.fixture('SauceLabsFixture').then((items) => 
		{
       		cy.login(items.username, items.password);
    	});  
	}
}