import { Given } from 'cypress-cucumber-preprocessor/steps';
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
