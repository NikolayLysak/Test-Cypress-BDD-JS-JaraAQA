import {And, Then} from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import testData from '../../fixtures/todos-008/testData';

Then('I make todo entries', () => {
  cy.task('log', 'I make todo entries');
  TodosPage.inputToDoValues(testData.listOfToDoEntries);
});

Then('I change first record in ToDo list', () => {
  cy.task('log', 'I change first record in ToDo list');
  TodosPage.changeValueByIndex(testData.additionRecord, 0)
})

And('I check that record is changed', () => {
  cy.task('log', 'I check that record is changed');
  TodosPage.checkRecordInListByIndex(testData.newRecord, testData.recordIndex)
})
