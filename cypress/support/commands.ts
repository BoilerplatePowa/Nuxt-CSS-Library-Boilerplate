// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to visit a Storybook story
       * @example cy.visitStory('components-button--primary')
       */
      visitStory(storyId: string): Chainable<void>;

      /**
       * Custom command to check accessibility
       * @example cy.checkA11y()
       */
      checkA11y(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('visitStory', (storyId: string) => {
  cy.visit(`/?path=/story/${storyId}`);
  cy.get('#storybook-preview-iframe').then($iframe => {
    const $body = $iframe.contents().find('body');
    cy.wrap($body).as('storyContent');
  });
});

Cypress.Commands.add('checkA11y', () => {
  cy.injectAxe();
  cy.checkA11y();
});

export {};
