// Verify that user info becomes visible when hovering over avatar image.

import { test, expect } from '@playwright/test';

test.describe('Hovers Feature', () => {
  test('type: @regression - user info appears on hover', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');

    const firstAvatar = page.locator('.figure').first();
    const userInfo = firstAvatar.locator('.figcaption');

    await firstAvatar.hover();

    await expect(userInfo).toBeVisible();
    await expect(userInfo).toContainText('name: user1');
  });
});
