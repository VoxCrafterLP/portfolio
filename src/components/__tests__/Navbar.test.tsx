import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../Navbar';

test('Navbar correct accent color based on current route', () => {
	const route = '/projects';

	render(
		<MemoryRouter initialEntries={[route]}>
			<Navbar />
		</MemoryRouter>
	);

	const projectsElement = screen.getByTestId('nav-Projects');
	expect(projectsElement.className).toContain('text-purple-500');

	fireEvent.click(screen.getByTestId('nav-About'));
	expect(screen.getByTestId('nav-About').className).toContain(
		'text-purple-500'
	);
	expect(projectsElement.className).toContain('text-white');
});