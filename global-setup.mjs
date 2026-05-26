// global-setup.js
import { chromium } from '@playwright/test';

export default async function globalSetup() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', process.env.TEST_USERNAME);
  await page.fill('#password', process.env.TEST_PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForLoadState('networkidle'); // Ensure the login is successful and the secure area is loaded
  await page.context().storageState({ path: 'auth.json' });
  await browser.close();
}
