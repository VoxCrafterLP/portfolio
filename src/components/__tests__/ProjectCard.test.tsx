import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';
import { ProjectCardProps } from '../../types/props/ProjectCardProps';

describe('ProjectCard component', () => {
	const props: ProjectCardProps = {
		name: 'Test project',
		link: 'https://example.com',
		type: 'web app',
		description: 'project description',
		details: 'project details',
	};

	test('ProjectCard renders correctly', () => {
		render(
			<ProjectCard
				name={props.name}
				link={props.link}
				description={props.description}
				type={props.type}
				details={props.details}
			/>
		);
		expect(screen.getByRole('heading')).toHaveTextContent(props.name);
		expect(screen.getByTestId('type')).toHaveTextContent(props.type);
		expect(screen.getByTestId('description')).toHaveTextContent(props.description);
	});

	test('ProjectCard details are hidden', () => {
		render(
			<ProjectCard
				name={props.name}
				link={props.link}
				description={props.description}
				type={props.type}
				details={props.details}
			/>
		);
		expect(screen.queryByText('Details')).toBeNull();
	});

	test('ProjectCard details are visible', () => {
		render(
			<ProjectCard
				name={props.name}
				link={props.link}
				description={props.description}
				type={props.type}
				details={props.details}
			/>
		);

		fireEvent.click(screen.getByRole('button'));
		expect(screen.queryByText('Details')).toBeInTheDocument();
		expect(screen.getByTestId('details')).toHaveTextContent(props.details);
	});
});