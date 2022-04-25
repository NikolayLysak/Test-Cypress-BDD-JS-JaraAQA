import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import { listOfActiveRecords, listOfDodeRecords, listOfToDoEntries } from '../../fixtures/todos-004/testData';

Then('I make todo entries', () => {
  cy.task('log', 'I make todo entries');
  TodosPage.inputToDoValues(listOfToDoEntries);
});

Then('I mark some checkboxes', () => {
  cy.task('log', 'I mark some checkboxes');
  TodosPage.markCheckBoxesByEntryText(listOfDodeRecords);
});

And('I check that only active entries are present', () => {
  cy.task('log', 'I check that only active entries are present');
  TodosPage.checkRecordsList(listOfActiveRecords);
});

And('I check that only completed entries are present', () => {
  cy.task('log', 'I check that only completed entries are present');
  TodosPage.checkRecordsList(listOfDodeRecords);
});

And('I check that all entries are present', () => {
  cy.task('log', 'I check that all entries are present');
  TodosPage.checkRecordsList(listOfToDoEntries);
});
