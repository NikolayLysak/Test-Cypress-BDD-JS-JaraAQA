// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

declare global {
  namespace Cypress {
    interface Chainable {
      before(property: any): Chainable;
    }

    interface Chainable {
      after(property: any): Chainable;
    }

    interface Chainable {
      inputValue(el: any, value: string): void;
    }

    interface Chainable {
      getDivisionByText(text: string): Chainable<JQuery<HTMLDivElement>>;
    }
  }
}

Cypress.Commands.add('before', { prevSubject: 'element' }, (el, property) => {
  const win: any = el[0].ownerDocument.defaultView;
  const after = win.getComputedStyle(el[0], 'after');
  return after.getPropertyValue(property).replace(/(^")|("$)/g, '');
});

Cypress.Commands.add('after', { prevSubject: 'element' }, (el, property) => {
  const win: any = el[0].ownerDocument.defaultView;
  const after = win.getComputedStyle(el[0], 'after');
  return after.getPropertyValue(property).replace(/(^")|("$)/g, '');
});

Cypress.Commands.add('inputValue', (el: any, value: string) => {
  cy.wrap(el).click().clear().type(value);
});

Cypress.Commands.add('getDivisionByText', (text: string) => {
  return cy.contains('div', `${text}`);
});
