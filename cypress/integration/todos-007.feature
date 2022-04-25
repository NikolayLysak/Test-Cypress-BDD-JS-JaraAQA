Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 007")

	Scenario: Checking the operation of the "Select All" button
		Given I open Todos page
		Then I make ToDo entries
		Then I mark all checkboxes via "Select All" button
		And I check that all records are completed
		Then I mark all checkboxes via "Select All" button
		And I check that all records are active
