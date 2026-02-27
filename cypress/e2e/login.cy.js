describe("Login Test", () => {
  it("should login successfully", () => {
    cy.visit("/signin")

    cy.get('[data-test="signin-username"]').type("Dina20")
    cy.get('[data-test="signin-password"]').type("s3cret")
    cy.get('[data-test="signin-submit"]').click()

  })
})
