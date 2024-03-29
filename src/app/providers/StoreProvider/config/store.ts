import {
	CombinedState,
	Reducer,
	ReducersMapObject,
	configureStore,
} from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { $api } from 'shared/api/api';
import { userReducer } from 'entities/User';
import { uiReducer } from 'features/UI';
import { StateSchema } from './StateSchema';
import { createReducerManager } from './reducerManager';

export function createReduxStore(
	initialState?: StateSchema,
	asyncReducers?: ReducersMapObject<StateSchema>,
	// navigate?: (to: To, options?: NavigateOptions) => void,
) {
	const rootReducers: ReducersMapObject<StateSchema> = {
		...asyncReducers,
		counter: counterReducer,
		user: userReducer,
		ui: uiReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: (getDefaultMiddleware) => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
				},
			},
		}),
	});

	// @ts-ignore
	store.reducerManager = reducerManager;

	return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];