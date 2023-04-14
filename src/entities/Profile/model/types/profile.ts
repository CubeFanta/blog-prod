import { Country, Currency } from 'shared/const/common';

export interface Profile {
	first: string,
	lastname: string,
	age: 28,
	currency: Currency,
	country: Country,
	city: string,
	username: string,
	avatart: string
}

export interface ProfileSchema {
	data?: Profile;
	isLoading: boolean;
	error?: string;
	readonly: boolean;
}