import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.getByPlaceholder('What needs to be done?').fill('new to-do');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('button', { name: 'Clear completed' }).click();
});