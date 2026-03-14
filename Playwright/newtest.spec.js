import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1773082891616&no_sw_cr=1');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await expect(page.getByText('Enter an email or phone number')).toBeVisible();
  await page.getByText('Enter an email or phone number').click();
});