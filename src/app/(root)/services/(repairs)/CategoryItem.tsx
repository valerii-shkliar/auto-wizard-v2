'use client';

import { CATEGORIES_ICONS } from '@/constants/categories-icons';
import {
  getActiveCategoryId,
  getAmountOptedServices,
  resetFilter,
  setActiveCategory,
} from '@/store/slices/repairsSlice';
import { TCategory } from '@/types';
import clsx from 'clsx';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

function CategoryItem({ title, id }: TCategory) {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(getActiveCategoryId);
  const amountOptedServices = useSelector(getAmountOptedServices(id));
  const Icon = CATEGORIES_ICONS[title];
  const isActiveCategory = activeCategoryId === id;
  const categoryQuery = title.split(/\s+/).join('-').toLowerCase();

  function handleCategoryClick() {
    if (id !== activeCategoryId) {
      dispatch(setActiveCategory(id));
      dispatch(resetFilter());
    }
  }

  return (
    <li>
      <Link
        href={{
          pathname: '/services',
          query: { name: categoryQuery },
        }}
        className={clsx(
          'group p-2.5 flex items-center rounded-xl transition-colors duration-400 hover:bg-light-700',
          isActiveCategory && 'bg-light-700 text-dark-primary200',
        )}
        onClick={handleCategoryClick}
      >
        <Icon
          className={clsx(
            'text-primary200_light900 group-hover:dark:text-primary-200',
            isActiveCategory && 'dark:text-primary-200',
          )}
        />

        <p className="ml-3 text-primary200_dark:light100 group-hover:text-dark-primary200">
          {title}
        </p>
        <span className="ml-auto text-primary200_dark:light100 group-hover:text-dark-primary200">
          {amountOptedServices}
        </span>
      </Link>
    </li>
  );
}
export default CategoryItem;
