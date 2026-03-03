import ServicesApi from '@/api/ServicesApi';
import { REPAIR_CATEGORIES_PATH, REPAIR_SERVICES_PATH, SUPABASE_URL } from '@/constants/url';
import CategoriesClient from './CategoriesClient';
import { TCategory, TService } from '@/types';

async function Categories() {
  let categories: TCategory[] | [] = [];
  let services: TService[] | [] = [];

  try {
    categories = await ServicesApi.getList<TCategory[] | []>(
      `${SUPABASE_URL + REPAIR_CATEGORIES_PATH}`,
    );
    services = await ServicesApi.getList<TService[] | []>(`${SUPABASE_URL + REPAIR_SERVICES_PATH}`);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
  return <CategoriesClient categories={categories} services={services} />;
}

export default Categories;
