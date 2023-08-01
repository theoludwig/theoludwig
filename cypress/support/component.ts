import { mount } from 'cypress/react'

import './commands'
import '../../app/globals.css'

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add('mount', mount)
