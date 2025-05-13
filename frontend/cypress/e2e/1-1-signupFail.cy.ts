// signup.cy.ts
describe('Signup Fail Scenarios', () => {
  beforeEach(() => {
    // Navigate to the signup page before each test
    cy.visit('http://localhost:3000/signup');
  });

  it('should show error when required fields are not filled', () => {
    // Click the submit button without filling any input fields
    cy.contains('button', 'Submit').click();
    
    // Assert that the "Name is required" error message appears
    cy.get('p.text-pink-600').contains('This field is required').should('be.visible');
    
    // Assert that the "Email is required" error message appears
    cy.contains('p.text-pink-600', 'This field is required').should('be.visible');
    
    // Assert that the "Password is required" error message appears
    cy.contains('p.text-pink-600', 'This field is required').should('be.visible');
  });

  it('should show error for invalid email format', () => {
    // Type an invalid email (without the @ symbol)
    cy.get('input#email').type('invalid-email');
    
    // Type a valid password
    cy.get('input#password').type('validpassword123');
    
    // Click the submit button
    cy.contains('button', 'Submit').click();
    
    // Assert that the error message for invalid email is displayed
    cy.get('p.text-pink-600').contains('Please enter valid email address').should('be.visible');
  });

  it('should show error for missing name', () => {
    // Leave the name field empty
    cy.get('input#name').clear();
    
    // Type a valid email and password
    cy.get('input#email').type('valid.email@example.com');
    cy.get('input#password').type('validpassword123');
    
    // Click the submit button
    cy.contains('button', 'Submit').click();
    
    // Assert that the "Name is required" error message appears
    cy.get('p.text-pink-600').contains('This field is required').should('be.visible');
  });

  it('should show error for missing password', () => {
    // Leave the password field empty
    cy.get('input#password').clear();
    
    // Type a valid name and email
    cy.get('input#name').type('Valid Name');
    cy.get('input#email').type('valid.email@example.com');
    
    // Click the submit button
    cy.contains('button', 'Submit').click();
    
    // Assert that the "Password is required" error message appears
    cy.get('p.text-pink-600').contains('This field is required').should('be.visible');
  });
});
