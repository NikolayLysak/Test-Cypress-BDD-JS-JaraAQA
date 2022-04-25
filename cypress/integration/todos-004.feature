Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 004")

	Scenario: Filter check all/active/completed
		Given I open Todos page
		Then I make ToDo entries
		Then I mark some checkboxes
		Then I select filter "Active"
		And I check that only active entries are present
		Then I select filter "Completed"
		And I check that only completed entries are present
		Then I select filter "All"
		And I check that all entries are present
