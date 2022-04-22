import { Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import testData from '../../fixtures/todos-007/testData';

Then('I make todo entries', () => {
  cy.task('log', 'I make todo entries');
  cy.allure().step('I make todo entries', true);
  TodosPage.inputToDoValues(testData.listOfToDoEntries);
});