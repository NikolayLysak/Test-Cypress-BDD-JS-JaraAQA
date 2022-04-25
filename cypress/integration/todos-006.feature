Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 006")

	Scenario: Checking the operation of the counter of open tasks
		Given I open Todos page
		Then I make ToDo entries
		And I check counter value equal active records quantity
		Then I mark some checkboxes
		And I check counter value equal active records quantity
