import { expect, Page, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('test accessibility', async ({ page }: { page: Page }) => {
   await page.goto('/');

   const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

   expect(accessibilityScanResults.violations).toEqual([]);
});