describe('Page /', () => {
  beforeEach(() => cy.visit('/'))

  it('should reveals the sections while scrolling except the about section', () => {
    const sectionsReveals = [
      '#interests',
      '#skills',
      '#portfolio',
      '#open-source'
    ]
    cy.get('#about').should('be.visible')
    for (const section of sectionsReveals) {
      cy.get(section)
        .should('not.be.visible')
        .scrollIntoView()
        .should('be.visible')
    }
  })
})

export {}
