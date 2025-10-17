Feature: SauceDemo Buy Item

	Scenario: Successfully Buy Item
		Given I Open SauceDemo
		When I Enter Details and Login
		Then The User Should be Loggedin
		When I Add Item To Cart
		When I Open Cart
		Then The Cart Title Is Visible
		Then The Item Is Added to Cart
		When I Click Checkout
		Then The Checkout Form Should Be Loaded
		When I Fill Checkout Form and Continue
		Then The Checkout Overview Should Be Loaded and Data Should be Correct
		When I Click Finish
		Then The Checkout Is Completed