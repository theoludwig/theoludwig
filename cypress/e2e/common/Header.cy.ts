describe("Common > Header", () => {
  beforeEach(() => {
    return cy.visit("/")
  })

  it("should redirect to /blog on click of the blog link", () => {
    cy.get("[data-cy=header-blog-link]")
      .click()
      .location("pathname")
      .should("eq", "/blog")
  })

  it("should always be visible (sticky header)", () => {
    cy.scrollTo("bottom").get("header").should("be.visible")
  })

  describe("Switch theme color (dark/light)", () => {
    it("should switch theme from `dark` (default) to `light`", () => {
      cy.get("[data-cy=switch-theme-dark]").should("be.visible")
      cy.get("[data-cy=switch-theme-light]").should("not.be.visible")
      cy.get("body").should(
        "not.have.css",
        "background-color",
        "rgb(255, 255, 255)",
      )

      cy.get("[data-cy=switch-theme-click]").click()

      cy.get("[data-cy=switch-theme-dark]").should("not.be.visible")
      cy.get("[data-cy=switch-theme-light]").should("be.visible")
      cy.get("body").should(
        "have.css",
        "background-color",
        "rgb(255, 255, 255)",
      )
    })
  })

  describe("Switch Language", () => {
    it("should switch locale from English (default) to French", () => {
      cy.get("h1").contains("Théo LUDWIG")
      cy.get("[data-cy=locale-flag-text]").contains("English")
      cy.get("[data-cy=locales-list]").should("not.be.visible")
      cy.get("[data-cy=locale-click]").click()
      cy.get("[data-cy=locales-list]").should("be.visible")
      cy.get("[data-cy=locales-list] > li:first-child")
        .contains("French")
        .click()
      cy.get("[data-cy=locales-list]").should("not.be.visible")
      cy.get("[data-cy=locale-flag-text]").contains("French")
      cy.get("h1").contains("Théo LUDWIG")
    })

    it("should close the locale list menu when clicking outside", () => {
      cy.get("[data-cy=locales-list]").should("not.be.visible")
      cy.get("[data-cy=locale-click]").click()
      cy.get("[data-cy=locales-list]").should("be.visible")
      cy.get("h1").click()
      cy.get("[data-cy=locales-list]").should("not.be.visible")
    })
  })
})

export {}
