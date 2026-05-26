# Playwright UI Automation Framework
![Playwright Tests](https://github.com/Tolstr/playwright-js-heroku/actions/workflows/playwright.yml/badge.svg)

**Project Strategy & Evolution**
Built as a production-style framework to demonstrate modern Playwright/TS automation practices. Focused on stabilizing mission-critical smoke tests for enterprise analytics platforms. It demonstrates a transition from initial core-flow validation to a fully scalable architecture, utilizing **Page Object Model (POM)** and data-driven patterns to handle complex web behaviors. The primary objective is to prove **CI/CD readiness** and maintainable automation design, ensuring high-confidence releases with minimal manual intervention.

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

**Auth**
- Valid login and logout (`@smoke`)
- Invalid username / invalid password / empty fields (data-driven, `@regression`)

**UI Components**
- Dropdown selection and value verification (`@regression`)
- Checkbox default state and independent toggling (`@smoke`, `@regression`)
- Add/Remove Elements — dynamic DOM assertions (`@smoke`, `@regression`)
- Dynamic Controls — enable/disable checkbox and input (`@smoke`, `@regression`)
- Hover interactions — user info visibility (`@regression`)
- Number inputs — keyboard interaction (ArrowUp/ArrowDown) (`@smoke`, `@regression`)
- JS Alerts, Confirms, and Prompts — dialog handling (`@smoke`, `@regression`)

**API**
- GET tags and articles
- Create and delete article (end-to-end flow)
- Create, update, and delete article (full CRUD flow)

---

## Project Structure
```bash
pages/        → Page Objects (UI interactions only)
tests/        → Test logic and assertions
test-data/    → Centralized test data
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

For this reason, `global-setup.mjs` generates a fresh `auth.json` before each run, which is used as `storageState` for the UI test project. The `auth.json` file is gitignored and never committed.


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
npx playwright test dropdown.spec.ts
```

### Sample Test
```typescript
test('@regression Login with invalid credentials', async () => {
  await loginPage.login('wrongUser', 'wrongPass');
  await loginPage.verifyFlashMessage('Your username is invalid!');
});
```
## Purpose of This Repository
This repository serves as a **production-style automation framework** demonstrating:
- Scalable UI test architecture
- Maintainable Playwright design patterns
- CI-integrated automated testing
- Senior-level automation practices

