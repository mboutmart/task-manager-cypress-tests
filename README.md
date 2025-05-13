Task Manager Cypress Automation
This repository contains the Task Manager MERN application along with Cypress test automation for critical user flows.
Below are the steps to set up the application, install Cypress, and run the automated tests.
### Table of Contents
1. Installation and Setup
2. Running the Application
3. Cypress Test Automation
4. Additional Information
### Installation and Setup
1. Clone the repository to your local machine:
 git clone https://github.com/mboutmart/task-manager-cypress-tests.git
2. Navigate into the project directory:
 cd task-manager-cypress-tests
3. Install all the dependencies and dev-dependencies:
 npm run install-all
4. Navigate into the frontend directory:
 cd frontend
5. Install Cypress in the frontend directory:
 npm install cypress --save-dev
6. Create a `.env` file inside the backend folder and add data from `.env.example`, replacing with your own credentials.
### Running the Application
1. Start the backend and frontend application by running:
 npm run dev
2. Go to http://localhost:3000 to view the application in your browser.
### Cypress Test Automation
Cypress is used for automating end-to-end tests. The automated tests are located inside the frontend/cypress directory.
1. Navigate into the frontend directory:
 cd frontend
2. Open Cypress using the command:
 npx cypress open
3. Or run the tests in headless mode :
   npx cypress run

### Additional Information
1. For more details on the application, refer to the official MERN Task Manager repository:
 https://github.com/aayush301/MERN-task-manager
