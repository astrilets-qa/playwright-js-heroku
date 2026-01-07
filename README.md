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
```bash
pages/        → Page Objects (UI interactions only)
tests/        → Test logic and assertions
testdata/     → Centralized test data
utils/        → Helpers and shared logic
.github/      → CI configuration (GitHub Actions)
```

## Framework Design Principles
### Page Object Model (POM)
Separates test logic from UI interactions for maintainability and reuse.

### Data-driven approach
Enables easy expansion of test scenarios without duplicating code.

### Stable selector strategy
Preference for semantic locators such as getByLabel() to improve test stability and resilience to UI changes.

### Test tagging
Supports selective execution using tags such as @smoke and @regression.

## Session Handling Note
⚠️ The demo application does **not persist login sessions across browser contexts**.

For this reason:
- Session reuse is simulated within the same test
- Playwright `storageState` is intentionally not used

The framework fully supports real-world applications that persist sessions via cookies or local storage.


### Continuous Integration
 - Automated execution via GitHub Actions
 - Fails fast on regressions
 - Generates Playwright HTML reports on test completion


### Running Tests Locally

#### Install dependencies: 
```bash
npm install
```

#### Run all tests: 
```bash 
npx playwright test
```

#### Run in headed mode: 
```bash 
npx playwright test --headed
```

#### Debug mode: 
```bash 
npx playwright test --debug
```

Run a specific test:
```bash 
npx playwright test dropdown.spec.js
```

### Sample Test
```bash 
test('@regression Login with invalid credentials', async ({ page }) => {
  await loginPage.login('wrongUser', 'wrongPass');
  await expect(loginPage.errorMessage).toContainText('invalid');
});
```
## Purpose of This Repository
This repository serves as a **production-style automation framework** demonstrating:
- Scalable UI test architecture
- Maintainable Playwright design patterns
- CI-integrated automated testing
- Senior-level automation practices

