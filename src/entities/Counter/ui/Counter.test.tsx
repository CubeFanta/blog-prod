import { screen } from '@testing-library/react';
import { componentRander } from 'shared/lib/tests/componentRander/componentRander';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Counter', () => {
	test('with only first param', () => {
		componentRander(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
	});

	test('increment', () => {
		componentRander(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		userEvent.click(screen.getByTestId('increment-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('11');
	});

	test('decrement', () => {
		componentRander(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		userEvent.click(screen.getByTestId('decrement-btn'));
		expect(screen.getByTestId('value-title')).toHaveTextContent('9');
	});
});