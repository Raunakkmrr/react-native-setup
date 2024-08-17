import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {AuthState, authSlice} from './slices/auth-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import {DashboardState, dashboardSlice} from './slices/dashboard-slice';

export const rootReducer = combineReducers({
  auth: authSlice.reducer,
  dashboard: dashboardSlice.reducer,
});

// Configuring the redux-persist library to persist the root reducer with AsyncStorage
const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

// Creating a new persisted reducer with the configuration and root reducer
const persistedReducer = persistReducer(configuration, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {auth: AuthState; dashboard: DashboardState};
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// persistor.purge();
