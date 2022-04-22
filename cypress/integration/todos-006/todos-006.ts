import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import testData from '../../fixtures/todos-004/testData';

Then('I make todo entries', () => {
  cy.task('log', 'I make todo entries');
  cy.allure().step('I make todo entries', true);
  TodosPage.inputToDoValues(testData.listOfToDoEntries);
});

Then('I mark some checkboxes', () => {
  cy.task('log', 'I mark some checkboxes');
  cy.allure().step('I mark some checkboxes', true);
  TodosPage.markCheckBoxesByEntryText(testData.listOfDodeRecords);
});

And('I check that only active entries are present', () => {
  cy.task('log', 'I check that only active entries are present');
  cy.allure().step('I check that only active entries are present', true);
  TodosPage.checkRecordsList(testData.listOfActiveRecords);
});

And('I check that only completed entries are present', () => {
  cy.task('log', 'I check that only completed entries are present');
  cy.allure().step('I check that only completed entries are present', true);
  TodosPage.checkRecordsList(testData.listOfDodeRecords);
});

And('I check that all entries are present', () => {
  cy.task('log', 'I check that all entries are present');
  cy.allure().step('I check that all entries are present', true);
  TodosPage.checkRecordsList(testData.listOfToDoEntries);
});
