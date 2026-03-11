import { getList } from '@/api/ServicesApi';
import { REPAIR_CATEGORIES_PATH, REPAIR_SERVICES_PATH } from '@/constants/url';
import CategoriesClient from './CategoriesClient';
import { TCategory, TService } from '@/types';

async function Categories() {
  let categories: TCategory[] = [];
  let services: TService[] = [];

  try {
    categories = await getList<TCategory[]>(REPAIR_CATEGORIES_PATH);
    services = await getList<TService[]>(REPAIR_SERVICES_PATH);
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(e.message);
    }
  }
  return <CategoriesClient categories={categories} services={services} />;
}

export default Categories;
