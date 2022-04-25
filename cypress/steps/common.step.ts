import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../pages/todos.page';
import { returnRecotrdStatus } from '../support/helpers';

Given('I open Todos page', () => {
  cy.allure().startStep('Page opening');
  TodosPage.openPage();
  cy.allure().endStep();

  cy.allure().startStep('Checking page title');
  TodosPage.checkTitle('todos');
  cy.allure().endStep();
});

Then('I select filter {string}', (filter: string) => {
  cy.task('log', `I select filter "${filter}"`);
  TodosPage.setFilter(filter);
});

Then('I click on "Clear completed" button', () => {
  cy.task('log', 'I click on "Clear completed" button');
  TodosPage.removeCompletedRecords();
});

And('I check counter value equal active records quantity', () => {
	cy.task('log', 'I check counter value equal active records quantity');
	TodosPage.checkCounterValue();
});

Then('I mark all checkboxes via "Select All" button', () => {
  cy.task('log', 'I mark all checkboxes via "Select All" button');
  TodosPage.markAllTasksCompleted();
})

And('I check that all records are completed', () => {
  cy.task('log', 'I check that all records are completed');
  TodosPage.checkRecordsAttributes(returnRecotrdStatus('complete'));
})

And('I check that all records are active', () => {
  cy.task('log', 'I check that all records are active');
  TodosPage.checkRecordsAttributes(returnRecotrdStatus('active'));
})

Then('I deleted one of entries with index {string}', (index: string) => {
  cy.task('log', 'I deleted one of entries');
  TodosPage.deleteEntryByIndex(parseInt(index));
})
