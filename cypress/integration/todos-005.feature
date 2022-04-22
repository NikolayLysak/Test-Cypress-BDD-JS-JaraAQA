Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 005")

	Scenario: Checking for cleanup of completed tasks
		Given I open Todos page
		Then I make todo entries
		Then I mark some checkboxes
		Then I select filter "All"
		Then I click on "Clear completed" button
		And I check that all records are active

