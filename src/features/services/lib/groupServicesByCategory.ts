import { TGroupeServicesByCategory, TServiceWithCategory } from '../types';

export function groupServicesByCategory(servicesList: TServiceWithCategory[]) {
  return servicesList.reduce<TGroupeServicesByCategory[]>((acc, service) => {
    const existingCategory = acc.find(
      (group) => group?.category.slug === service.repair_categories.slug,
    );

    if (existingCategory) {
      existingCategory.services.push(service);
    } else {
      acc.push({
        category: { ...service.repair_categories },
        services: [{ ...service }],
      });
    }
    return acc;
  }, []);
}
