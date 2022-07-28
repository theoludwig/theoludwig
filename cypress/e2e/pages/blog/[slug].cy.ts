describe('Page /blog/[slug]', () => {
  it('should displays the first blog post (`hello-world`)', () => {
    cy.visit('/blog/hello-world')
    cy.get('[data-cy=language-flag-text]').should('not.exist')
    cy.get('h1').should('have.text', '👋 Hello, world!')
    cy.get('.prose a').should('have.attr', 'target', '_blank')
  })

  it("should redirect to /404 if the blog post doesn't exist", () => {
    cy.visit('/blog/random-blog-post-not-found', { failOnStatusCode: false })
    cy.get('[data-cy=status-code]').contains('404')
  })
})

export {}
