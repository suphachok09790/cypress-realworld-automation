import TransactionPage from "../../pages/TransactionPage"

describe("Send Money Negative Test", () => {

  beforeEach(() => {

    cy.loginAsValidUser()

    TransactionPage.visit()

  })

  it("TC02 Should NOT allow send money when amount = 0", () => {

    TransactionPage.selectUser("Ted Parisian")

    TransactionPage.enterAmount("0")

    TransactionPage.enterNote("test zero")

    TransactionPage.submit()

    // Expected: should NOT show success message
    cy.contains("Paid")
      .should("not.exist")

  })

  it("TC03 - Amount is negative (-100)", () => {

    TransactionPage.selectUser("Ted Parisian")

    TransactionPage.enterAmount("-100")

    TransactionPage.enterNote("negative amount")

    TransactionPage.submit()

    TransactionPage.verifyError("Amount")

    cy.url().should("include", "/transaction/new")

  })

  it("TC04 - Should show error when amount > balance", () => {

    TransactionPage.selectUser("Ted Parisian")

    TransactionPage.enterAmount("2000")

    TransactionPage.enterNote("test insufficient balance")

    TransactionPage.submit()

    // verify error message
    TransactionPage.verifyError("Insufficient")

  })

  it("TC05 - Amount is text", () => {
    TransactionPage.selectUser("Ted Parisian")
    TransactionPage.enterAmount("abc")
    TransactionPage.enterNote("text amount")
    cy.get('[data-test="transaction-create-submit-payment"]')
      .should("be.disabled")
    
  })

  it("TC06 - Amount is empty", () => {

    TransactionPage.selectUser("Ted Parisian")

    TransactionPage.enterNote("empty amount")

    cy.get('[data-test="transaction-create-submit-payment"]')
      .should("be.disabled")
  })

  it("TC12 Should show error when amount has more than 2 decimal places", () => {

  const invalidAmount = "10.123"

  TransactionPage.selectUser("Ted Parisian")

  TransactionPage.enterAmount(invalidAmount)

  TransactionPage.enterNote("Invalid precision test")

  TransactionPage.submit()

  TransactionPage.verifyFieldError("Amount must have at most 2 decimal places")

})


  

})
