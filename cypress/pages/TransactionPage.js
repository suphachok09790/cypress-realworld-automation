class TransactionPage {

  visit() {

    cy.get('[data-test="nav-top-new-transaction"]').click()

    cy.url().should("include", "/transaction/new")

  }

  selectUser(user) {

    cy.contains("li", user)
      .should("be.visible")
      .click()

  }

  enterAmount(amount) {

    cy.get('[data-test="transaction-create-amount-input"]')
      .type(amount)

  }

  enterNote(description) {
    cy.get('[data-test="transaction-create-description-input"]')
     .type(description)
  }

  submit() {

    cy.get('[data-test="transaction-create-submit-payment"]')
      .click()

  }

  verifyPaymentSuccess(amount, note) {

    const formattedAmount = Number(amount).toFixed(2)

    cy.contains(`Paid $${formattedAmount}`)
      .should("be.visible")

    cy.contains(note)
      .should("be.visible")
  }

  verifyError(message) {
    cy.contains(message)
      .should("be.visible")
  }




}

export default new TransactionPage()
