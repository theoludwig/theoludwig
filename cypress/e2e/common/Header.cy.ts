describe('Common > Header', () => {
  beforeEach(() => cy.visit('/'))

  it('should redirect to /blog on click of the blog link', () => {
    cy.get('[data-cy=header-blog-link]')
      .click()
      .location('pathname')
      .should('eq', '/blog')
  })

  it('should always be visible (sticky header)', () => {
    cy.scrollTo('bottom').get('header').should('be.visible')
  })

  describe('Switch theme color (dark/light)', () => {
    it('should switch theme from `dark` (default) to `light`', () => {
      cy.get('[data-cy=switch-theme-dark]').should('be.visible')
      cy.get('[data-cy=switch-theme-light]').should('not.be.visible')
      cy.get('body').should(
        'not.have.css',
        'background-color',
        'rgb(255, 255, 255)'
      )

      cy.get('[data-cy=switch-theme-click]').click()

      cy.get('[data-cy=switch-theme-dark]').should('not.be.visible')
      cy.get('[data-cy=switch-theme-light]').should('be.visible')
      cy.get('body').should(
        'have.css',
        'background-color',
        'rgb(255, 255, 255)'
      )
    })
  })

  describe('Switch Language', () => {
    it('should switch language from EN (default) to FR', () => {
      cy.get('h1').contains('I am Divlo')
      cy.get('[data-cy=language-flag-text]').contains('EN')
      cy.get('[data-cy=languages-list]').should('not.be.visible')
      cy.get('[data-cy=language-click]').click()
      cy.get('[data-cy=languages-list]').should('be.visible')
      cy.get('[data-cy=languages-list] > li:first-child').contains('FR').click()
      cy.get('[data-cy=languages-list]').should('not.be.visible')
      cy.get('[data-cy=language-flag-text]').contains('FR')
      cy.get('h1').contains('Je suis Divlo')
    })

    it('should close the language list menu when clicking outside', () => {
      cy.get('[data-cy=languages-list]').should('not.be.visible')
      cy.get('[data-cy=language-click]').click()
      cy.get('[data-cy=languages-list]').should('be.visible')
      cy.get('h1').click()
      cy.get('[data-cy=languages-list]').should('not.be.visible')
    })
  })
})

export {}
