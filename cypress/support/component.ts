// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your component test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
// ***********************************************************

import './commands';
import { mount } from 'cypress/vue';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', mount);
