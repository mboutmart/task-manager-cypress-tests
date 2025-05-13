// login.cy.ts
describe('Login Fail Scenarios', () => {
  beforeEach(() => {
    // Navigate to the login page before each test
    cy.visit('http://localhost:3000/login');
  });

  it('should show error message when email is empty', () => {
    // Leave email empty
    cy.get('input#email').clear();

    // Type a password (valid or invalid as per your test scenario)
    cy.get('input#password').type('validpassword123');

    // Click the submit button
    cy.contains('button', 'Submit').click();

    // Assert that the "Email is required" error message appears
    cy.contains('p.text-pink-600', 'This field is required').should('be.visible');
  });

  it('should show error message when password is empty', () => {
    // Type a valid email
    cy.get('input#email').type('test@example.com');

    // Leave password empty
    cy.get('input#password').clear();

    // Click the submit button
    cy.contains('button', 'Submit').click();

    // Assert that the "Password is required" error message appears
    cy.contains('p.text-pink-600', 'This field is required').should('be.visible');
  });

  it('should show error message when email format is invalid', () => {
    // Type an invalid email
    cy.get('input#email').type('invalidemail');

    // Type a valid password
    cy.get('input#password').type('validpassword123');

    // Click the submit button
    cy.contains('button', 'Submit').click();

    // Assert that the "Invalid email format" error message appears
    cy.contains('p.text-pink-600', 'Please enter valid email address').should('be.visible');
  });

  it('should show toast alert when email is not registered', () => {
    // Type a non-existent email
    cy.get('input#email').type('nonexistent.email@example.com');

    // Type a password (valid or invalid as per your test scenario)
    cy.get('input#password').type('validpassword123');

    // Click the submit button
    cy.contains('button', 'Submit').click();

    // Assert that the toast alert with the correct message appears
    cy.get('.Toastify__toast-body') // Target the toast container
      .should('be.visible') // Ensure the toast is visible
      .and('contain.text', 'This email is not registered!!'); // Verify the message in the toast
  });

});
