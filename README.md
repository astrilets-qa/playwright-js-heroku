# Playwright UI Automation Framework
![Playwright Tests](https://github.com/Tolstr/playwright-js-heroku/actions/workflows/playwright.yml/badge.svg)

Automated UI test framework built with **Playwright (JavaScript/TypeScript)** to demonstrate **scalable test architecture**, **maintainable automation design**, and **CI-ready execution**.

Target demo application:  
👉 https://the-internet.herokuapp.com/login

---

## Tech Stack
- Playwright (JavaScript/TypeScript)
- Node.js
- Page Object Model (POM)
- Data-driven testing
- GitHub Actions (CI)
- Playwright HTML reports

---

## Test Coverage
- ✅ Valid login
- ❌ Invalid login (wrong credentials)
- ❌ Empty credentials validation
- 🔁 Logout flow
- 🔽 Dropdown interaction and validation
- 🏷 Tagged execution (`@smoke`, `@regression`)

---

## Project Structure
```text
pages/        → Page Objects (UI interactions only)
tests/        → Test logic and assertions
testdata/     → Centralized test data
utils/        → Helpers and shared logic
.github/      → CI configuration (GitHub Actions)


Framework Design Principles

Page Object Model (POM)
Separates test logic from UI interactions for maintainability and reuse.

Data-driven approach
Enables easy expansion of test scenarios without duplicating code.

Stable selector strategy
Preference for semantic locators such as getByLabel() for reliability.

Test tagging
Supports selective execution of smoke and regression suites.


Session Handling Note

⚠️ The demo site does not persist sessions across browser contexts.

As a result:

Login reuse is simulated within the same test

No reliance on Playwright storageState

The framework itself fully supports real applications that persist sessions via cookies or local storage.


Continuous Integration

Automated execution via GitHub Actions

Fails fast on regressions

Generates Playwright HTML reports on test completion


Running Tests Locally

Install dependencies: npm install

Run all tests: npx playwright test

Run in headed mode: npx playwright test --headed

Debug mode: npx playwright test --debug

Run a specific test: npx playwright test dropdown.spec.js

Sample Test
test('@regression Login with invalid credentials', async ({ page }) => {
  await loginPage.login('wrongUser', 'wrongPass');
  await expect(loginPage.errorMessage).toContainText('invalid');
});

Purpose of This Repository

This project serves as a proof-of-skill automation framework, demonstrating:

Professional test architecture

Scalable automation design

CI-integrated UI testing practices
