import TransactionPage from "../../pages/TransactionPage"

describe("Send Money Boundary Test", () => {

  beforeEach(() => {

    cy.loginAsValidUser() 

    TransactionPage.visit()

  })

  it("TC08 Should send money successfully with minimum amount = 1", () => {

    TransactionPage.selectUser("Ted Parisian")

    TransactionPage.enterAmount("1")

    TransactionPage.enterNote("Boundary minimum test")

    TransactionPage.submit()

    TransactionPage.verifyPaymentSuccess("1", "Boundary minimum test")
  })

  it("TC09 Should send money successfully with amount equal to balance", () => {
    // Get balance from UI
    cy.get('[data-test="sidenav-user-balance"]')
        .invoke("text")
        .then((balanceText) => {

        // Extract number เช่น "$100.00" → "100"
        const balance = balanceText.replace("$", "").trim()

        TransactionPage.selectUser("Ted Parisian")

        TransactionPage.enterAmount(balance.toString())

        TransactionPage.enterNote("Boundary max valid test")

        TransactionPage.submit()

        TransactionPage.verifyPaymentSuccess(balance.toString(), "Boundary max valid test")
        })
  })

  it("TC10 Should show error when amount > balance by 1", () => {
    // Get balance from UI
    cy.get('[data-test="sidenav-user-balance"]')
        .invoke("text")
        .then((balanceText) => {

        const balance = parseFloat(balanceText.replace("$", "").trim())

        const invalidAmount = (balance + 1).toFixed(2)

        TransactionPage.selectUser("Ted Parisian")

        TransactionPage.enterAmount(invalidAmount)

        TransactionPage.enterNote("Boundary max valid test")

        TransactionPage.submit()

        TransactionPage.verifyPaymentSuccess(invalidAmount, "Boundary max valid test")

        })
  })

  

})
