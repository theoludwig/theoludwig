describe("Page /blog/[slug]", () => {
  it("should displays the first blog post (`hello-world`)", () => {
    cy.visit("/blog/hello-world")
    cy.get("[data-cy=locale-flag-text]").should("not.exist")
    cy.get("main h1").should("have.text", "👋 Hello, world!")
  })

  it("should redirect to /404 if the blog post doesn't exist", () => {
    cy.visit("/blog/random-blog-post-not-found", { failOnStatusCode: false })
    cy.get("[data-cy=status-code]").contains("404")
  })
})

export {}
