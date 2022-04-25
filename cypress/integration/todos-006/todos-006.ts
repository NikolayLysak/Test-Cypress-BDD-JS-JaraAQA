import { Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import { listOfDodeRecords, listOfToDoEntries } from '../../fixtures/todos-006/testData';

Then('I make todo entries', () => {
  cy.task('log', 'I make todo entries');
  TodosPage.inputToDoValues(listOfToDoEntries);
});

Then('I mark some checkboxes', () => {
  cy.task('log', 'I mark some checkboxes');
  TodosPage.markCheckBoxesByEntryText(listOfDodeRecords);
});
