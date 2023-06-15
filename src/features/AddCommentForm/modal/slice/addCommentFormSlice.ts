import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
	text: '',
};

export const addCommentFormSlice = createSlice({
	name: 'addCommentForm',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
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
export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReduser } = addCommentFormSlice;