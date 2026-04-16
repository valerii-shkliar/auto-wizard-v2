import { getAllCategories } from '@/features/services/api/services.server';
import CategoriesList from '@/features/services/components/CategoriesList';
import Header from '@/features/services/components/Header';
import { ReactNode } from 'react';

async function CatalogLayout({ children }: { children: ReactNode }) {
  const categories = await getAllCategories();

  return (
    <div className="w-3/4 background-light900_dark100 text-light900_dark100 rounded-lg shadow-gray-300 shadow-lg">
      <Header />
      <div className="flex">
        <CategoriesList categories={categories} />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}

export default CatalogLayout;
