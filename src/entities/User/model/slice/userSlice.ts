import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTOREGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setAuthData: (state, action: PayloadAction<User>) => {
			state.authData = action.payload;
		},
		initAuthData: (state) => {
			const user = localStorage.getItem(USER_LOCALSTOREGE_KEY);
			if (user) {
				state.authData = JSON.parse(user);
			}
		},
		logout: (state) => {
			state.authData = undefined;
			localStorage.removeItem(USER_LOCALSTOREGE_KEY);
		},
	},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;