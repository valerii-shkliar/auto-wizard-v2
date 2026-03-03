import { CATEGORIES_ICONS } from '@/constants/categories-icons.js';

export type TCategory = {
  id: string | number;
  title: TCategoryName;
};

export type TService = {
  id: string | number;
  category_id: string | number;
  lead_time: number;
  name: string;
  price: number;
};

export type TCategoryName = keyof typeof CATEGORIES_ICONS;
