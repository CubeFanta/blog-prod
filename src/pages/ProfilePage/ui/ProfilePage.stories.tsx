import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ProfilePage from './ProfilePage';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
	profile: {
		form: {
			username: 'admin',
			age: 22,
			city: 'Erevan',
			country: Country.Armenia,
			lastname: 'CubeFanta',
			first: 'asd',
			currency: Currency.RUB,
		},
	},
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
	profile: {
		form: {
			username: 'admin',
			age: 22,
			country: Country.Armenia,
			lastname: 'CubeFanta',
			first: 'asd',
			currency: Currency.RUB,
		},
	},
})];