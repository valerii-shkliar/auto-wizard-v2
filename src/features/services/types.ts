import { CATEGORIES_ICONS } from '@/features/services/constants/categories-icons.js';

export type TCategory = {
  id: string | number;
  title: TCategoryName;
  slug: string;
};

export type TService = {
  id: string | number;
  category_id: string | number;
  lead_time: number;
  name: string;
  price: number;
};
export type TServiceWithCategory = TService & {
  repair_categories: {
    slug: string;
    title: TCategoryName;
  };
};

export type TGroupeServicesByCategory = {
  category: {
    title: TCategoryName;
    slug: string;
  };
  services: TServiceWithCategory[];
};

export type TCategoryName = keyof typeof CATEGORIES_ICONS;
