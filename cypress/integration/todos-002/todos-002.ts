import {And, When} from 'cypress-cucumber-preprocessor/steps';
import TodosPage from '../../pages/todos.page';

When('I input in "What needs to be done?" field {string}', (value: string) => {
	cy.task('log', `I input in "What needs to be done?" field ${value}`);

	cy.allure().step('Input value into the input field', true);
	TodosPage.inputToDoValue(value);
});

And('I check that a new entry with value {string} has been created', (value: string) => {
	cy.task('log', `I check that a new entry with value "${value}" has been created`);
	cy.allure().step('I check input field is exist on the page', true);
	TodosPage.checkNewEntryCreated(value);
});
