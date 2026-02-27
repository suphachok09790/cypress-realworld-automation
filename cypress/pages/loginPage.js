class LoginPage {

  visit() {
    cy.visit("/signin")
  }

  enterUsername(username) {
    cy.get('[data-test="signin-username"]').type(username)
  }

  enterPassword(password) {
    cy.get('[data-test="signin-password"]').type(password)
  }

  submit() {
    cy.get('[data-test="signin-submit"]').click()
  }

  login(username, password) {
    this.visit()
    this.enterUsername(username)
    this.enterPassword(password)
    this.submit()
  }

}

export default new LoginPage()
