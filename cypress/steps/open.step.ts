import { And, Given, Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../pages/todos.page';
import { returnRecotrdStatus } from '../support/helpers';

Given('I open Todos page', () => {
  cy.allure().step('I open Todos page', true);

  cy.allure().startStep('Page opening');
  TodosPage.openPage();
  cy.allure().endStep();

  cy.allure().startStep('Checking page title');
  TodosPage.checkTitle('todos');
  cy.allure().endStep();
});

Then('I select filter {string}', (filter: string) => {
  cy.task('log', `I select filter "${filter}"`);
  cy.allure().step(`I select filter "${filter}"`, true);
  TodosPage.setFilter(filter);
});

Then('I click on "Clear completed" button', () => {
  cy.task('log', 'I click on "Clear completed" button');
  cy.allure().step('I click on "Clear completed" button', true);
  TodosPage.removeCompletedRecords();
});

And('I check that ony active records stay in ToDo list', () => {
  cy.task('log', 'I check that ony active records stay in ToDo list');
  cy.allure().step('I check that ony active records stay in ToDo list', true);
  TodosPage.checkRecordsAttributes(returnRecotrdStatus('active'));
});

And('I check counter value equal active records quantity', () => {
	cy.task('log', 'I check counter value equal active records quantity');
	cy.allure().step('I check counter value equal active records quantity', true);
	TodosPage.checkCounterValue();
});
