import {test, expect} from '@playwright/test';

test('selectors', async ({page}) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  // 1. Selecting by id
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');

  //2. Selecting by class
  await page.locator('.radius').click();
  await page.locator('.icon-signout').click();

    //3. By Tag name and Class
  await page.locator('button.radius').click();

    //4. By Attribute value
  await page.locator('input[type="text"]').fill('tomsmith');
  await page.locator('input[name="password"]').fill('SuperSecretPassword!');
  await page.locator('button[class="radius"]').click();
  await page.locator('a[href="/logout"]').click();

    //5. Partial Attribute value
  await page.locator('input[id*="user"]').fill('tomsmith');
  await page.locator('input[type*="pass"]').fill('SuperSecretPassword!');
  await page.locator('button[type*="subm"]').click();
  await page.locator('a[href*="/log"]').click();

  //6. By Text content

  await page.locator('label:has-text("Username")').fill('tomsmith');
  await page.locator('label:has-text("Password")').fill('SuperSecretPassword!');
  await page.locator('button:has-text("Login")').click();
  await page.locator('a:has-text("Logout")').click();
  
  
  //7. Combine selectors for percision, class and text 
  await page.locator('.radius:has-text(" Login")').click();

  //8. Attribute and Text
  await page.locator('button[type="submit"]:has-text("Login")').click();


  //9. Playwright Locaors
  //get by label
  await page.getByLabel('Username').fill('tomsmith');
  await page.getByLabel('Password').fill('SuperSecretPassword!');
  await page.locator('button:has-text("Login")').click();
  await page.locator('a:has-text("Logout")').click();

  // get by role
  await page.getByRole('textbox', {name: 'Username'}).fill('tomsmith');
  await page.getByRole('textbox', {name: 'Password'}).fill('SuperSecretPassword!');
  await page.getByRole('button', {name: 'Login'}).click();
  await page.getByRole('link', {name: 'Logout'}).click();

  

  await page.pause();

})