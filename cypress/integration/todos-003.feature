Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 003")

	Scenario: Checking the checkbox
		Given I open Todos page
		Then I make todo entry
		Then I mark the checkbox
		And I check that todo entry is done
