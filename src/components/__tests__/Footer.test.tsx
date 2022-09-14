import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Footer from '../Footer';

describe('Footer component', () => {
   test('Footer renders properly', () => {
      render(<Footer />);
      expect(screen.getByTestId('footer')).toBeInTheDocument();
   });

   test('Footer shows credits properly', () => {
      render(<Footer />);

      expect(screen.getByTestId('footer-credits').className).toEqual(
         'overflow-hidden transition-all h-0 mt-0'
      );
      fireEvent.mouseEnter(screen.getByTestId('footer'));
      expect(screen.getByTestId('footer-credits').className).toContain(
         'h-fit mt-4'
      );
      fireEvent.mouseLeave(screen.getByTestId('footer'));
      expect(screen.getByTestId('footer-credits').className).toContain(
         'h-0 mt-0'
      );
   });
});
