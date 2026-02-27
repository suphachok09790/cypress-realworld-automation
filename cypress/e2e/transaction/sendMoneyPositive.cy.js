import TransactionPage from "../../pages/TransactionPage"

describe("Send Money Positive Test", () => {

  beforeEach(() => {

    cy.loginAsValidUser() 

    TransactionPage.visit()

  })

  it("TC01 Send money successfully", () => {

    TransactionPage.selectUser("Ted Parisian")

    TransactionPage.enterAmount("100")

    TransactionPage.enterNote("test123")

    TransactionPage.submit()

    TransactionPage.verifyPaymentSuccess("100", "test123")
  })

  it("TC07 Send money with decimal amount successfully", () => {

    TransactionPage.selectUser("Ted Parisian")

    TransactionPage.enterAmount("10.50")

    TransactionPage.enterNote("decimal test")

    TransactionPage.submit()

    TransactionPage.verifyPaymentSuccess("10.50", "decimal test")
 })

  it("TC11 Should send money successfully when amount = balance - 1", () => {
    // Get balance from UI
    cy.get('[data-test="sidenav-user-balance"]')
        .invoke("text")
        .then((balanceText) => {

        const balance = parseFloat(balanceText.replace("$", "").trim())

        const validAmount = (balance - 1).toFixed(2)

        TransactionPage.selectUser("Ted Parisian")

        TransactionPage.enterAmount(validAmount)

        TransactionPage.enterNote("Boundary below max test")

        TransactionPage.submit()

        TransactionPage.verifyPaymentSuccess(validAmount, "Boundary below max test")

        })
 })

  it("TC13 Should handle amount with leading/trailing spaces correctly", () => {

      TransactionPage.selectUser("Ted Parisian")

      TransactionPage.enterAmount("  100  ")

      TransactionPage.enterNote("Trim space test")

      TransactionPage.submit()

      // Verify transaction success
      TransactionPage.verifyPaymentSuccess("100.00", "Trim space test")

 })

  it("TC15 Should update balance correctly after successful transfer", () => {

  const amount = 30

  cy.get('[data-test="sidenav-user-balance"]')
    .invoke("text")
    .then((balanceText) => {

      const initialBalance = parseFloat(
        balanceText.replace(/[^0-9.]/g, "")
      )

      TransactionPage.selectUser("Ted Parisian")
      TransactionPage.enterAmount(amount.toString())
      TransactionPage.enterNote("Balance update test")
      TransactionPage.submit()

      cy.intercept("GET", "/transactions/public*").as("getTransactions")
      cy.contains(/return to transactions/i).click()
      cy.wait("@getTransactions")

      cy.get('[data-test="sidenav-user-balance"]')
        .invoke("text")
        .then((newText) => {

          const newBalance = parseFloat(newText.replace(/[^0-9.]/g, ""))

          expect(newBalance).to.be.lessThan(initialBalance)

        })

    })

 })


})
