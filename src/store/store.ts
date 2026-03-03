import { configureStore } from '@reduxjs/toolkit';
import repairsReducer from './slices/repairsSlice';
import { TCategory, TService } from '@/types';

export type TRepairsState = {
  servicesList: TService[];
  categoriesList: TCategory[];
  servicesCart: TService[];
  activeCategoryId: null | string | number;
  isActiveCart: boolean;
  filter: string;
};
export type TState = {
  repairs: TRepairsState;
};

const store = configureStore({
  reducer: {
    repairs: repairsReducer,
  },
});

export default store;
