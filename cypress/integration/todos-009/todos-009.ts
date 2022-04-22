import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import testData from '../../fixtures/todos-008/testData';

Then('I make todo entries', () => {
  cy.task('log', 'I make todo entries');
  TodosPage.inputToDoValues(testData.listOfToDoEntries);
});

And('I check that deleted entry with index {string} not contains in ToDo list', (index: string) => {
  cy.task('log', `I check that deleted entry with index "${index}" not contains in ToDo list`);
  TodosPage.checkRecordIsNotInToDoList(testData.listOfToDoEntries, parseInt(index));
});
