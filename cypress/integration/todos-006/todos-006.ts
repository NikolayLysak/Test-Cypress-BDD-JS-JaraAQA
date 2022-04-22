import { Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import testData from '../../fixtures/todos-006/testData';

Then('I make todo entries', () => {
  cy.task('log', 'I make todo entries');
  TodosPage.inputToDoValues(testData.listOfToDoEntries);
});

Then('I mark some checkboxes', () => {
  cy.task('log', 'I mark some checkboxes');
  TodosPage.markCheckBoxesByEntryText(testData.listOfDodeRecords);
});
