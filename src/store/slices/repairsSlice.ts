import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TRepairsState, TState } from '../store';
import { TCategory, TService } from '@/types';

const initialState: TRepairsState = {
  servicesList: [],
  categoriesList: [],
  servicesCart: [],
  activeCategoryId: null,
  isActiveCart: false,
  filter: '',
};

const repairsSlice = createSlice({
  name: 'repairs',
  initialState,
  reducers: {
    saveCategories: (state, action: PayloadAction<TCategory[]>) => {
      state.categoriesList = action.payload;
    },
    saveServices: (state, action: PayloadAction<TService[]>) => {
      state.servicesList = action.payload;
    },
    setActiveCategory: (state, action: PayloadAction<string | number>) => {
      state.activeCategoryId = action.payload;
      state.isActiveCart = false;
    },
    addServiceToCart: (state, action: PayloadAction<TService>) => {
      state.servicesCart.push(action.payload);
    },
    removeServiceFromCart: (state, action: PayloadAction<string | number>) => {
      state.servicesCart = state.servicesCart.filter((service) => {
        return service.id !== action.payload;
      });
    },
    setActiveCart: (state) => {
      state.isActiveCart = true;
      state.activeCategoryId = null;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
      state.activeCategoryId = null;
    },
    resetFilter: (state) => {
      state.filter = '';
    },
  },
});

export const {
  saveCategories,
  saveServices,
  setActiveCategory,
  addServiceToCart,
  removeServiceFromCart,
  setActiveCart,
  setFilter,
  resetFilter,
} = repairsSlice.actions;
export default repairsSlice.reducer;

export function getActiveCategoryId(state: TState) {
  return state.repairs.activeCategoryId;
}

export function selectActiveServices(state: TState) {
  return state.repairs.servicesList.filter((serviceItem) => {
    return serviceItem.category_id === state.repairs.activeCategoryId;
  });
}
export function getOverallAmountOptedServices(state: TState) {
  return state.repairs.servicesCart.length;
}
export function getOptedServices(state: TState) {
  return state.repairs.servicesCart;
}
export function getServicesList(state: TState) {
  return state.repairs.servicesList;
}

export function getFilter(state: TState) {
  return state.repairs.filter;
}
export function isActiveCartNow(state: TState) {
  return state.repairs.isActiveCart;
}
export function sortServicesByFilter(state: TState) {
  const filter = state.repairs.filter;

  return state.repairs.servicesList.filter((service) => {
    return service.name.toLowerCase().trim() === filter.toLowerCase().trim();
  });
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
export function getCategoryTitleById(id: string | number) {
  return (state: TState) => {
    const category = state.repairs.categoriesList.find((category) => {
      return category.id === id;
    });
    return category?.title;
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
  [getOptedServices, getServicesList, getFilter],
  (optedServicesCart, servicesList, filter) => {
    if (filter) {
      const servicesByFilter = servicesList.filter((service: TService) => {
        return service.name.toLowerCase().trim().includes(filter.toLowerCase().trim());
      });

      return sortServices(servicesByFilter);
    } else {
      return sortServices(optedServicesCart);
    }

    function sortServices(list: TService[]) {
      const overallObj: Record<string, TService[]> = {};

      for (let i = 0; i < list.length; i++) {
        if (list[i]) {
          const key = String(list[i].category_id);

          if (key in overallObj) {
            overallObj[key].push(list[i]);
          } else {
            overallObj[key] = [list[i]];
          }
        }
      }
      return Object.values(overallObj);
    }
  },
);
