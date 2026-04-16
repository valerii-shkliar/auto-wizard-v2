import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRepairsState, TState } from '../store';
import { TService, TServiceWithCategory } from '@/features/services/types';
import { groupServicesByCategory } from '@/features/services/lib/groupServicesByCategory';

const initialState: TRepairsState = {
  servicesCart: [],
  filter: '',
};

const repairsSlice = createSlice({
  name: 'repairs',
  initialState,
  reducers: {
    addServiceToCart: (state, action: PayloadAction<TServiceWithCategory>) => {
      state.servicesCart.push(action.payload);
    },
    removeServiceFromCart: (state, action: PayloadAction<string | number>) => {
      state.servicesCart = state.servicesCart.filter((service) => {
        return service.id !== action.payload;
      });
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    resetFilter: (state) => {
      state.filter = '';
    },
  },
});

export const { addServiceToCart, removeServiceFromCart, setFilter, resetFilter } =
  repairsSlice.actions;
export default repairsSlice.reducer;

export function getAmountServicesInCart(state: TState) {
  return state.repairs.servicesCart.length;
}

export function getOptedServices(state: TState) {
  return state.repairs.servicesCart;
}

export function getFilter(state: TState) {
  return state.repairs.filter;
}

export function getAmountOptedServices(id: string | number) {
  return (state: TState) => {
    const optedServicesByCategory = state.repairs.servicesCart.filter((service) => {
      return service.category_id === id;
    });
    return optedServicesByCategory.length;
  };
}

export function isSelectedService(id: string | number) {
  return (state: TState) => {
    return state.repairs.servicesCart.some((service) => {
      return service.id === id;
    });
  };
}

export const getActiveServices = createSelector(
  [(state) => state.repairs.servicesList, (state) => state.repairs.activeCategoryId],
  (servicesList: TService[], activeCategoryId: null | string) => {
    return servicesList.filter((serviceItem) => {
      return serviceItem.category_id === activeCategoryId;
    });
  },
);

export const getServicesSortedByCategories = createSelector(
  [getOptedServices],
  (optedServicesInCart) => {
    return groupServicesByCategory(optedServicesInCart);
  },
);
