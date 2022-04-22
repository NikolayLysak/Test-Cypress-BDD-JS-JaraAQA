import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../pages/todos.page';

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
