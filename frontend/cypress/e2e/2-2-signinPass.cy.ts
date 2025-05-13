import 'cypress-xpath';

describe('Signin - Happy Path', () => {
  it('should allow the user to sign in with valid credentials from the JSON file', () => {
    // Read the credentials from the JSON file
    cy.readFile('cypress/fixtures/credentials.json').then((credentials) => {
      // Visit the login page
      cy.visit('http://localhost:3000/login');

      // Fill in the form with credentials from the JSON file
      cy.xpath("//input[@id='email']").type(credentials.email);
      cy.xpath("//input[@id='password']").type(credentials.password);

      // Click the login button
      cy.xpath("//button[text()='Submit']").click();

      // Verify successful login by checking the URL
      cy.url().should('eq', 'http://localhost:3000/'); // Check if redirected to the home page

        // Wait for the success toast to appear and check its message
      cy.get('.Toastify__toast-body')
      .should('contain.text', 'Login successful..'); // Verify the toast contains the success message

    });
  });
});
