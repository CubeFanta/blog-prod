// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { ThunkConfig } from 'app/providers/StoreProvider';
// import { Comment } from 'entities/Comment';

// export const fetchCommentsByArticleId = createAsyncThunk<
// 	Comment[],
// 	string | undefined,
// 	ThunkConfig<string>
// >(
// 	'articleDetails/fetchCommentsByArticleId',
// 	async (articleId, thunkApi) => {
// 		const { extra, rejectWithValue } = thunkApi;

// 		if (!articleId) {
// 			return rejectWithValue('error');
// 		}

// 		try {
// 			const response = await extra.api.get<Comment[]>('/comments', {
// 				params: {
// 					articleId,
// 					_expand: 'user',
// 				},
// 			});

// 			if (!response.data) {
// 				throw new Error();
// 			}

// 			return response.data;
// 		} catch (e) {
// 			return rejectWithValue('error');
// 		}
// 	},
// );

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<
	Article[],
	void,
	ThunkConfig<string>
>(
	'articlesPage/fetchArticlesList',
	async (articleId, thunkApi) => {
		const { extra, rejectWithValue } = thunkApi;

		try {
			const response = await extra.api.get<Article[]>('/articles', {
				params: {
					_expand: 'user',
				},
			});

			if (!response.data) {
				throw new Error();
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('error');
		}
	},
);