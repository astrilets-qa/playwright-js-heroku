// playwright.config.ts
import 'dotenv/config';
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 2,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: { headless: true, screenshot: 'only-on-failure', video: 'retain-on-failure' },
  // comment globalSetup out if you don't have the file:
  // globalSetup: './global-setup.ts',
  projects: [
    {
      name: 'ui',
      testIgnore: ['tests/api/**'],
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        baseURL: 'https://the-internet.herokuapp.com/',
        storageState: 'auth.json',
      },
    },
    {
      name: 'api',
      testDir: 'tests/api',
      use: {
        baseURL: process.env.API_BASE_URL,
        storageState: undefined,
      },
    },
  ],
});
