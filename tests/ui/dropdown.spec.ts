import { test, expect } from '@playwright/test';

//Dropdown tests for the "Dropdown" page 
test.describe('Dropdown Tests', () => {
  const options = [
    { value: '2', label: 'Option 2', type: '@regression' },
    { value: '1', label: 'Option 1', type: '@regression' }
  ];
  test.beforeEach(async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
  });

  for (const { value, label, type } of options) {
    test(`${type}: Selecting "${label}" should update dropdown`, async ({ page }) => {
      await page.selectOption('#dropdown', value);
      const selectedValue = await page.locator('#dropdown').inputValue();
      expect(selectedValue).toBe(value);

      const selectedText = await page.locator('#dropdown option:checked').textContent();
      expect(selectedText).toBe(label);
    });
  }
});

//// Additional tests for dropdown interaction 
// test.describe('Dropdown Interaction', () => {
//   test('should select Option 1 and verify selection', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/dropdown');
//     await page.selectOption('#dropdown', '1');
//     const selectedValue = await page.locator('#dropdown').inputValue();
//     expect(selectedValue).toBe('1');
//     const selectedText = await page.locator('#dropdown option:checked').textContent();
//     expect(selectedText).toBe('Option 1');
//   });

//   test('should select Option 2 and verify selection', async ({ page }) => {
//     await page.goto('https://the-internet.herokuapp.com/dropdown');
//     await page.selectOption('#dropdown', '2');
//     const selectedValue = await page.locator('#dropdown').inputValue();
//     expect(selectedValue).toBe('2');
//     const selectedText = await page.locator('#dropdown option:checked').textContent();
//     expect(selectedText).toBe('Option 2');
//   });
// });
