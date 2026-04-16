'use client';

import { CATEGORIES_ICONS } from '@/features/services/constants/categories-icons';
import { getAmountOptedServices } from '@/store/slices/repairsSlice';
import { TCategory } from '@/features/services/types';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import ROUTES from '@/constants/routes';

function CategoryItem({ title, id, slug }: TCategory) {
  const amountOptedServices = useSelector(getAmountOptedServices(id));
  const Icon = CATEGORIES_ICONS[title];
  const pathname = usePathname();
  const href = ROUTES.SERVICES + '/' + slug;
  const isActiveCategory = pathname.includes(href);

  return (
    <li>
      <Link
        href={href}
        onClick={(e) => {
          if (isActiveCategory) {
            e.preventDefault();
          }
        }}
        className={clsx(
          'group p-2.5 flex items-center rounded-xl transition-colors duration-400 hover:bg-light-700',
          isActiveCategory && 'bg-light-700 text-dark-primary200',
        )}
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
