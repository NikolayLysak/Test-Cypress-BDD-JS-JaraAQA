import { Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import { listOfToDoEntries } from '../../fixtures/todos-007/testData';

Then('I make ToDo entries', () => {
  cy.task('log', 'I make todo entries');
  TodosPage.inputToDoValues(listOfToDoEntries);
});
