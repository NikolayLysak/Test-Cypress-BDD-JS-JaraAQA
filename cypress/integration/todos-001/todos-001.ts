import {Then} from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';

Then('I check the presence of all elements and blocks on the page', () => {
	cy.task('log', 'I check the presence of all elements and blocks on the page');

	cy.allure().step('I check input field is exist on the page', true)
	cy.task('log', 'I check input field is exist on the page');
	TodosPage.checkInputFieldExist();

	cy.allure().step('I check left side block content', true)
	cy.task('log', 'I check left side block content');
	TodosPage.checkLeftFrame();


});
