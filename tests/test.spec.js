import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://resultearchnow.com/?dn=linkdein.com&sksubid=232035&_slsen=1');
  await page.locator('iframe').contentFrame().getByRole('link').nth(2).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'AI Resume Maker - CV Maker in' }).click();
  const page1 = await page1Promise;
});