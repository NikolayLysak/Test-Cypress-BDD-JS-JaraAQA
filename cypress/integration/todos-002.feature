Feature: Todos page functional testing

	@subSuite("TODOS")

	@AS_ID("TestCase 002")

	Scenario Outline: Checking the availability of data entry in the field "What needs to be done?"
		Given I open Todos page
		When I input in "What needs to be done?" field "<value>"
		And I check that a new entry with value "<value>" has been created

		Examples:
			| value                       |
			| 1234567890                  |
			| ~!@##%^&*()_+=-`?/\[]{}.,;: |
			| QWERTYUIOPASDFGHJKLZXCVBNM  |
			| qwertyuiopasdfghjklzxcvbnm  |

