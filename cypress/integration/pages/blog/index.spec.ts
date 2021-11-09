describe('Page /blog', () => {
  it('should displays the blog posts sorted from newest to oldest', () => {
    cy.visit('/blog')
    cy.get('[data-cy=blog-posts] [data-cy=blog-post-title]')
      .last()
      .should('have.text', 'Hello, world! 👋')
    cy.get('[data-cy=blog-posts] [data-cy=blog-post-description]')
      .last()
      .should(
        'have.text',
        'First post of the blog, introduction and explanation of how this blog is made.'
      )
    cy.get('[data-cy=blog-posts] [data-cy=blog-post-date]')
      .last()
      .should('have.text', '06/11/2021')
  })

  it('should redirect the user to the right blog post', () => {
    cy.visit('/blog')
    cy.get('[data-cy=blog-posts]')
      .last()
      .click()
      .location('pathname')
      .should('eq', '/blog/hello-world')
  })
})
