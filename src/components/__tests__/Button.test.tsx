import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from '../Button';

describe('Button component', () => {
   test('Button renders correctly', () => {
      render(<Button name="Test" />);
      expect(screen.getByRole('button')).toBeInTheDocument();
   });

   test('Button displays the right text', () => {
      const text = 'test abc';

      render(<Button name={text} />);
      expect(screen.getByRole('button')).toHaveTextContent(text);
   });

   test('Button not clicked', () => {
      render(
         <Button
            name="Test"
            onClick={() => {
               fail('onClick function has been called');
            }}
         />
      );
   });

   test('Button clicked', () => {
      const onClick = jest.fn();

      render(<Button name="Test" onClick={onClick} />);
      fireEvent.click(screen.getByRole('button'));

      expect(onClick).toBeCalled();
   });
});
