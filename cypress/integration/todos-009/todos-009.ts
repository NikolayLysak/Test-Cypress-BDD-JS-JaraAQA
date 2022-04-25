import { And, Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';
import { listOfToDoEntries } from '../../fixtures/todos-009/testData';

Then('I make todo entries', () => {
  cy.task('log', 'I make todo entries');
  TodosPage.inputToDoValues(listOfToDoEntries);
});

And('I check that deleted entry with index {string} not contains in ToDo list', (index: string) => {
  cy.task('log', `I check that deleted entry with index "${index}" not contains in ToDo list`);
  TodosPage.checkRecordIsNotInToDoList(listOfToDoEntries, parseInt(index));
});
