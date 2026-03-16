import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginPage.js';

// Data-driven login tests
const loginData = [
  { username: process.env.TEST_USERNAME, password: process.env.TEST_PASSWORD, expectedMessage: 'You logged into a secure area!', isSuccess: true, type: '@smoke' },
  { username: 'invalidUser', password: 'invalidPassword', expectedMessage: 'Your username is invalid!', isSuccess: false, type: '@regression' },
  { username: '', password: '', expectedMessage: 'Your username is invalid!', isSuccess: false, type: '@regression' },
  { username: 'tomsmith', password: 'WrongPassword!', expectedMessage: 'Your password is invalid!', isSuccess: false, type: '@regression' }
];

test.describe('Data-Driven Login Flow', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto('/login');
  });

  loginData.forEach(({ username, password, expectedMessage, isSuccess, type }) => {
    test(`${type.toUpperCase()} - Login with username: "${username}" and password: "${password}" ${type}`, async ({ page }) => {
      await loginPage.login(username, password);
      await loginPage.assertLoginMessage(expectedMessage);
      if (isSuccess) {
        await loginPage.logout();
        await loginPage.assertLogoutMessage('You logged out of the secure area!');
      }
    });
  });
});

test.describe('Session Reuse', () => {
  test('should load secure page after login (self-contained)', async ({ page }) => {
    await page.goto('/login');
    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');
    await expect(page.locator('#flash')).toContainText('You logged into a secure area!', { timeout: 10000 });
  });
});

