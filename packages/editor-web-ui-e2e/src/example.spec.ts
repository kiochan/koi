import { test, expect } from '@playwright/test';

test('e2e ok!', async ({ page }) => {
  await page.goto('/spec/e2e');

  // Expect h1 to contain a substring.
  expect(await page.locator('pre').innerText()).toContain('e2e ok');
});
