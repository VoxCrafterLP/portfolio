import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Contact from '../Contact';
import { ContactContext } from '../../context/ContactContext';
import userEvent from '@testing-library/user-event';

describe('Contact popup', () => {
   test('Contact popup visibility', () => {
      const contactContext = {
         contactOpen: true,
         setContactOpen: jest.fn(),
      };

      render(
         <ContactContext.Provider value={contactContext}>
            <Contact />
         </ContactContext.Provider>
      );
      expect(screen.queryByText('Contact me')).toBeInTheDocument();
      fireEvent.click(screen.getByTestId('contact-background'));
      expect(contactContext.setContactOpen).toBeCalledWith(false);
   });

   test('Email input color indicators', () => {
      render(
         <ContactContext.Provider
            value={{
               contactOpen: true,
               setContactOpen: () => {},
            }}
         >
            <Contact />
         </ContactContext.Provider>
      );

      expect(screen.getByTestId('contact-email').className).not.toContain(
         '!ring-green-500'
      );
      expect(screen.getByTestId('contact-email').className).not.toContain(
         '!ring-red-500'
      );

      userEvent.type(screen.getByTestId('contact-email'), 'abc');
      expect(screen.getByTestId('contact-email').className).toContain(
         '!ring-red-500'
      );

      userEvent.type(screen.getByTestId('contact-email'), 'abc@abc.com');
      expect(screen.getByTestId('contact-email').className).toContain(
         '!ring-green-500'
      );

      userEvent.type(screen.getByTestId('contact-email'), 'abc');
      expect(screen.getByTestId('contact-email').className).toContain(
         '!ring-red-500'
      );
   });
});
