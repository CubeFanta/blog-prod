import { fireEvent, screen } from '@testing-library/react';
import { componentRander } from 'shared/lib/tests/componentRander/componentRander';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
	test('Test clear theme', () => {
		componentRander(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('test toggle', () => {
		componentRander(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-toggle');
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
		fireEvent.click(toggleBtn);
		expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
	});
});