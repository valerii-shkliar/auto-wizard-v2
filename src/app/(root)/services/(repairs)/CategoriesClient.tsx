'use client';

import { TCategory, TService } from '@/types';
import CartOfRepairs from './CategoryCart';
import CategoryItem from './CategoryItem';
import { saveCategories, saveServices } from '@/store/slices/repairsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

interface IProps {
  categories: TCategory[];
  services: TService[];
}

function CategoriesClient({ categories, services }: IProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveCategories(categories));
    dispatch(saveServices(services));
  }, [categories, services, dispatch]);

  return (
    <div className="min-w-1/3 border border-solid border-light-800">
      <ul className="p-2.5">
        <CartOfRepairs />
        {categories.map(({ id, title }) => {
          return <CategoryItem key={id} id={id} title={title} />;
        })}
      </ul>
    </div>
  );
}

export default CategoriesClient;
