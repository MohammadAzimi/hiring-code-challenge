import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
// import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import {exampleSlice, orderSlice} from './slices';

// slices
const {reducer: exampleReducer} = exampleSlice;
const {reducer: orderReducer} = orderSlice;

// reducer
const rootReducer = combineReducers({
  countState: exampleReducer,
  orderState: orderReducer,
});

// middleware
const middlewares: any[] = [];
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

// store
export const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  devTools: __DEV__,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
