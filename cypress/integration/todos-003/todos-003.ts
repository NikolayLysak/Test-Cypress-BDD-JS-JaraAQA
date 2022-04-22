import {And, Then} from "cypress-cucumber-preprocessor/steps";
import TodosPage from "../../pages/todos.page";
import testData from "../../fixtures/todos-003/testData";

Then('I make todo entry', ()=> {
	cy.task('log', 'I make todo entry');
	TodosPage.inputToDoValue(testData.toDoValue);
});

Then('I mark the checkbox', ()=> {
	cy.task('log', 'I mark the checkbox');
	TodosPage.markCheckBoxChecked()
})

And('I check that todo entry is done', () => {
	cy.task('log', 'I check that todo entry is done');
	TodosPage.checkEntryStatusIsDone()
})
