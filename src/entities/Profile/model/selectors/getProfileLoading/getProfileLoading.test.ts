import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading.test', () => {
	test('', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				isLoading: true,
			},
		};
		expect(getProfileLoading(state as StateSchema)).toEqual(true);
	});
	test('abc', () => {
		const state: DeepPartial<StateSchema> = {};
		expect(getProfileLoading(state as StateSchema)).toEqual(undefined);
	});
});