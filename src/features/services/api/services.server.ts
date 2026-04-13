import axios from 'axios';
import { REPAIR_CATEGORIES_PATH, REPAIR_SERVICES_PATH } from '../constants/path';
import { groupServicesByCategory } from '../lib/groupServicesByCategory';
import { TCategory, TServiceWithCategory } from '../types';
import { api } from '@/lib/api/http';

type TParams = {
  select: string;
  order?: string;
  name?: string;
};

export async function getAllCategories() {
  let res;

  try {
    res = await api.get<TCategory[]>(REPAIR_CATEGORIES_PATH);
  } catch {
    throw new Error('Failed request fetching category.');
  }

  if (!Array.isArray(res.data)) {
    throw new Error('Invalid data from server!');
  }

  return res.data;
}

export async function getCategoryByCategorySlug(slug: string) {
  let res;

  try {
    res = await api.get<TCategory>(REPAIR_CATEGORIES_PATH, {
      params: {
        slug: `eq.${slug}`,
      },
      headers: {
        Accept: 'application/vnd.pgrst.object+json',
      },
    });
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 406) {
      return null;
    }
    throw new Error('Failed request fetching category.');
  }
  if (!res.data || typeof res.data !== 'object') {
    throw new Error('Invalid data from server!');
  }

  return res.data;
}

export async function getServicesByCategoryId(id: string | number) {
  let res;

  try {
    res = await api.get<TServiceWithCategory[]>(REPAIR_SERVICES_PATH, {
      params: {
        select: '*,repair_categories!inner(slug,title)',
        category_id: `eq.${id}`,
        order: 'id.asc',
      },
    });
  } catch {
    throw new Error('Failed request fetching services by category id.');
  }
  if (!Array.isArray(res.data)) {
    throw new Error('Invalid data from server!');
  }
  return res.data;
}

export async function getServicesByFilter(queryName: string | undefined) {
  let res;

  try {
    const params: TParams = {
      select: '*,repair_categories!inner(slug,title)',
      order: 'id.asc',
    };

    if (queryName) {
      params.name = `ilike.*${queryName}*`;
    }

    res = await api.get<TServiceWithCategory[]>(REPAIR_SERVICES_PATH, { params });
  } catch {
    throw new Error('Failed request fetching services by filter.');
  }

  if (!Array.isArray(res.data)) {
    throw new Error('Invalid data from server!');
  }

  return groupServicesByCategory(res.data);
}
