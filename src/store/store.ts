import { combineReducers, configureStore } from '@reduxjs/toolkit';
import repairsReducer from './slices/repairsSlice';
import { TService, TServiceWithCategory } from '@/features/services/types';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export type TRepairsState = {
  servicesCart: TServiceWithCategory[];
  filter: string;
};
export type TState = {
  repairs: TRepairsState;
};

const persistConfig = {
  key: 'persisted-store',
  storage,
};

const rootReducer = combineReducers({
  repairs: repairsReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
