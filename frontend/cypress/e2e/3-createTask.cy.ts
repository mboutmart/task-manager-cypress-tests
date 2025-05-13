import 'cypress-xpath';

describe('Create Task - After Login', () => {
  before(() => {
    cy.fixture('credentials').then((creds) => {
      cy.visit('http://localhost:3000/login');

      // Login
      cy.xpath("//input[@id='email']").type(creds.email);
      cy.xpath("//input[@id='password']").type(creds.password);
      cy.xpath("//button[text()='Submit']").click();

      // Wait for redirect to home
      cy.url().should('eq', 'http://localhost:3000/');

      // Check login alert and wait until it disappears
      cy.contains('div', 'Login successful..').should('be.visible');

      // Wait for a few seconds to make sure the alert disappears
      cy.wait(3000);

      // Check if the alert is gone
      cy.contains('div', 'Login successful..').should('not.exist');
    });
  });

  it('should create a task and verify network request', () => {
    // Intercept POST request to /api/tasks
    cy.intercept('POST', '/api/tasks').as('createTask');

    // Click on the first "Add task" button using XPath
    cy.xpath("//a[@href='/tasks/add']").first().click();

    // Wait for the task creation page to load
    cy.url().should('include', '/tasks/add');

    // Create a unique task description
    const taskDescription = `Test task - ${Date.now()}`;
    cy.get('textarea#description').type(taskDescription);

    // Submit the task
    cy.contains('button', 'Add task').click();

    // Wait for and assert the XHR request
    cy.wait('@createTask').its('request.body').should('deep.equal', {
      description: taskDescription,
    });

    // Check task creation success alert
    cy.contains('div', 'Task created successfully..').should('be.visible');
  });
});
