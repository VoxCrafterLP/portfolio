import { expect, Page, test } from '@playwright/test';

test('test initial loading', async ({ page }: { page: Page }) => {
   await page.goto('/');

   await expect(page).toHaveTitle('Alex Drui | Portfolio');

   await expect(page.getByText('voxcrafter.dev')).toHaveAttribute('href', '/');

   await expect(
      page.getByRole('heading', { name: 'Fullstack web developer' })
   ).toBeVisible();
   await expect(
      page.getByRole('heading', { name: 'Technologies' })
   ).toBeVisible();
   await expect(page.getByRole('heading', { name: 'DevOps' })).toBeVisible();

   await expect(page.getByRole('img', { name: 'Laptop' })).toBeVisible();
   await expect(page.getByRole('img', { name: 'Technology' })).toBeVisible();
   await expect(page.getByRole('img', { name: 'Robot' })).toBeVisible();
});
