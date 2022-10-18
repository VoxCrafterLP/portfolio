import { expect, Page, test } from '@playwright/test';

test('test navigation', async ({ page }: { page: Page }) => {
   //Home
   await page.goto('http://localhost:3000/');
   await expect(page.getByTestId('nav-Home')).toHaveClass('text-purple-500');
   await expect(page.getByTestId('nav-About')).not.toHaveClass(
      'text-purple-500'
   );
   await expect(page.getByTestId('nav-Projects')).not.toHaveClass(
      'text-purple-500'
   );

   //About
   await page.getByTestId('nav-About').click();
   await expect(page).toHaveURL('http://localhost:3000/about');
   await expect(page.getByTestId('nav-Home')).not.toHaveClass(
      'text-purple-500'
   );
   await expect(page.getByTestId('nav-About')).toHaveClass('text-purple-500');
   await expect(page.getByTestId('nav-Projects')).not.toHaveClass(
      'text-purple-500'
   );

   //Projects
   await page.getByTestId('nav-Projects').click();
   await expect(page).toHaveURL('http://localhost:3000/projects');
   await expect(page.getByTestId('nav-Home')).not.toHaveClass(
      'text-purple-500'
   );
   await expect(page.getByTestId('nav-About')).not.toHaveClass(
      'text-purple-500'
   );
   await expect(page.getByTestId('nav-Projects')).toHaveClass(
      'text-purple-500'
   );

   //Home
   await page.getByRole('link', { name: 'voxcrafter.dev' }).click();
   await expect(page).toHaveURL('http://localhost:3000/');
   await expect(page.getByTestId('nav-Home')).toHaveClass('text-purple-500');
   await expect(page.getByTestId('nav-About')).not.toHaveClass(
      'text-purple-500'
   );
   await expect(page.getByTestId('nav-Projects')).not.toHaveClass(
      'text-purple-500'
   );
});
