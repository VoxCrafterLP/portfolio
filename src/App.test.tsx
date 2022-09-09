import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import App from './App';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';

test('full app rendering/navigating', () => {
	render(<App />, { wrapper: BrowserRouter });
	expect(screen.getByText('Fullstack web developer')).toBeInTheDocument();

	fireEvent.click(screen.getByTestId('nav-About'));
	expect(screen.getAllByText('About me')[0]).toBeInTheDocument();

	fireEvent.click(screen.getByTestId('nav-Projects'));
	expect(screen.getByText('My projects')).toBeInTheDocument();
});

test('landing on a bad page', () => {
	const badRoute = '/some/bad/route';

	render(
		<MemoryRouter initialEntries={[badRoute]}>
			<App />
		</MemoryRouter>
	);

	expect(screen.getByText('page not found')).toBeInTheDocument();
});
