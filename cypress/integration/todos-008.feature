Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 008")

	Scenario: Checking the operation of the "Select All" button
		Given I open Todos page
		Then I make todo entries
		Then I change first record in ToDo list
		And I check that record is changed
