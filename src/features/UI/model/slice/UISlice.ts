import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UISchema } from '../types/UISchema';

const initialState: UISchema = {
	scroll: {},
};

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		setScrollPosition: (state, { payload }: PayloadAction<{ path: string; position: number }>) => {
			state.scroll[payload.path] = payload.position;
		},
	},

	// extraReducers: (builder) => {
	// 	builder
	// 		.addCase(loginByUsername.pending, (state) => {
	// 			state.error = undefined;
	// 			state.isLoading = true;
	// 		})
	// 		.addCase(loginByUsername.fulfilled, (state) => {
	// 			state.isLoading = false;
	// 		})
	// 		.addCase(loginByUsername.rejected, (state, action) => {
	// 			state.isLoading = false;
	// 			state.error = action.payload;
	// 		});
	// },
});

// Action creators are generated for each case reduser function
export const { actions: uiActions } = uiSlice;
export const { reducer: uiReducer } = uiSlice;