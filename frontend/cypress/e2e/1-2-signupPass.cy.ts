import 'cypress-xpath';

describe('Signup - Happy Path', () => {
  it('should allow the user to sign up with valid credentials and redirect to the login page', () => {
    // Visit the signup page
    cy.visit('http://localhost:3000/signup');

 
    // This will generate a random number to append to the email
    const randomSuffix = Math.floor(Math.random() * 100000);
    const testEmail = `testuser${randomSuffix}@example.com`;
    const testPassword = 'Test123!';

    // store the email and password in Cypress environment variables
    Cypress.env('signupEmail', testEmail);
    Cypress.env('signupPassword', testPassword);

    // Fill in the form with valid credentials
    cy.xpath("//input[@id='name']").type('John Doe'); // Enter valid name
    cy.xpath("//input[@id='email']").type(testEmail); // Enter valid email
    cy.xpath("//input[@id='password']").type(testPassword); // Enter valid password

    // Click the submit button
    cy.xpath("//button[text()='Submit']").click();

    // Verify successful redirection to the login page
    cy.url().should('eq', 'http://localhost:3000/login'); // Check if redirected to login page

    // Write credentials to a JSON file 
    const credentials = {
      email: testEmail,
      password: testPassword,
    };

    cy.writeFile('cypress/fixtures/credentials.json', credentials);

  });
});
