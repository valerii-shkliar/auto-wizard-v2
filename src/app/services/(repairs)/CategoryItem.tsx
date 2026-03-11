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
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

function CategoryItem({ title, id }: TCategory) {
  const dispatch = useDispatch();
  const activeCategoryId = useSelector(getActiveCategoryId);
  const amountOptedServices = useSelector(getAmountOptedServices(id));
  const src = CATEGORIES_ICONS[title].src;
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
          'p-2.5 flex items-center rounded-xl transition-colors duration-400 hover:bg-box-background-hover',
          isActiveCategory && 'bg-box-background-hover',
        )}
        onClick={handleCategoryClick}
      >
        <Image width={24} height={24} src={src} alt={title} />
        <p className="ml-3 text-primary-color">{title}</p>
        <span className="ml-auto text-primary-color">{amountOptedServices}</span>
      </Link>
    </li>
  );
}
export default CategoryItem;
