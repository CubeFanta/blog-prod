import { screen } from '@testing-library/react';
import React from 'react';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';
// import { Sidebar } from '';

describe('Sidebar', () => {
	test('Test clear theme', () => {
		// eslint-disable-next-line i18next/no-literal-string
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});
});