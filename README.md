# Cypress Automation Project – Send Money Feature Testing

## 📌 Project Overview

This project is an end-to-end automation test suite built using Cypress to test the **Send Money (Transfer)** feature in [cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app).

The goal of this project is to demonstrate my understanding of:
- QA fundamentals
- Test case design
- Boundary value analysis
- Positive & negative testing
- Basic automation structure using Cypress
- POM (Page Object Model)

Total Test Cases Implemented: 15

---

## 🎯 Test Scenarios Covered

The test suite validates business rules and input validation for money transfer.

### ✅ Positive Test Cases
- **TC01** – Send money successfully
- **TC07** – Send money with decimal amount successfully
- **TC11** – Should send money successfully when amount = balance - 1
- **TC13** – Should handle amount with leading/trailing spaces correctly
- **TC15** – Should update balance correctly after successful transfer

### ❌ Negative Test Cases
- **TC02** – Should NOT allow send money when amount = 0
- **TC03** – Should NOT allow negative amount (-100)
- **TC04** – Should show error when amount > balance
- **TC05** – Should NOT allow Amount is text
- **TC06** – Should NOT allow Amount is empty
- **TC12** – Should show error when amount has more than 2 decimal places

### ⚠️ Boundary & Edge Cases
- **TC08** – Should send money successfully with minimum amount = 1
- **TC09** – Should send money successfully with amount equal to balance"
- **TC10** – Should show error when amount > balance by 1" 

---

## 🧠 Testing Approach

This project applies key QA concepts:

- Positive & Negative Testing
- Boundary Value Analysis
- Input Validation Testing
- Business Logic Verification

For example:
- Capture account balance before transfer
- Perform transfer
- Verify that new balance = old balance - transfer amount

This ensures the system works correctly beyond just UI validation.

---

## 🛠 Tech Stack

- Cypress
- JavaScript
- Node.js
- Git & GitHub

---

## 🚀 How to Run the Project

```bash
git clone https://github.com/suphachok09790/cypress-realworld-automation.git
cd cypress-realworld-automation
npm install
npx cypress open
```
---


## 💡 What I Learned from This Project

- Writing structured test cases before automation
- Separating positive, negative, and boundary scenarios
- Validating business logic in financial transactions
- Handling real UI interactions using Cypress
- Organizing automation test files clearly
- Using Git for version control

---

## 🎯 Career Objective

As a fresh graduate seeking a QA Tester (Cypress) position, this project represents my hands-on practice in automation testing. I am eager to learn from real-world projects and contribute to building high-quality software.
