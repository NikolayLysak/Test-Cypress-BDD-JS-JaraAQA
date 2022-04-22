Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 009")

	Scenario: Checking if an entry can be deleted
		Given I open Todos page
		Then I make todo entries
		Then I deleted one of entries with index "0"
		And I check that deleted entry with index "0" not contains in ToDo list

