Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 008")

	Scenario: Checking the ability to edit a previously made entry in the ToDo list
		Given I open Todos page
		Then I make ToDo entries
		Then I change first record in ToDo list
		And I check that record is changed
