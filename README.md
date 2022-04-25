# Test-Cypress-BDD-JS-JaraAQA

To install:
- clone repository on local storage
- run 'npm install' command

Test runing:
To run tests first open cypress runner:
 - use terminal command: npx cypress open
 
- To run all tests, select in the runner: index.ts
- To run a single test, select the .feature file with the desired test name in the runner

Added the ability to generate an ALLURE report on the results of running tests. 

To view a report on the results of passing tests in the form of an ALLURE report, you can use terminal command: 
  - allure serve results
