Feature: Todos page smoke testing

	@subSuite("TODOS")

	@AS_ID("TestCase 001")

	Scenario: Check all pages blocks
		Given I open Todos page
		Then I check the presence of all elements and blocks on the page
