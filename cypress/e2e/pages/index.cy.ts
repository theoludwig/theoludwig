describe("Page /", () => {
  beforeEach(() => {
    return cy.visit("/")
  })

  it("should reveals the sections while scrolling except the about section", () => {
    const sectionsReveals = ["#interests", "#skills", "#portfolio"]
    cy.get("#about").should("be.visible")
    for (const section of sectionsReveals) {
      cy.get(section)
        .should("not.be.visible")
        .scrollIntoView()
        .should("be.visible")
    }
  })
})

export {}
