Cypress.Commands.add("login", (username, password) => {
  cy.visit("/signin")
  cy.get('[data-test="signin-username"]').type(username)
  cy.get('[data-test="signin-password"]').type(password)
  cy.get('[data-test="signin-submit"]').click()
})

Cypress.Commands.add("loginAsValidUser", () => {

  cy.fixture("users").then((user) => {

    cy.login(user.validUser.username, user.validUser.password)

  })

})
