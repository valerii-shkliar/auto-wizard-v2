'use client';

import ROUTES from '@/constants/routes';
import { getAmountServicesInCart } from '@/store/slices/repairsSlice';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCartArrowDown } from 'react-icons/fa6';
import { useSelector } from 'react-redux';

function CategoryCart() {
  const pathname = usePathname();
  const isActiveCart = pathname.includes(ROUTES.CART);
  const amountServicesInCart = useSelector(getAmountServicesInCart);

  return (
    <li>
      <Link
        href={ROUTES.CART}
        className={clsx(
          'group p-2.5 flex items-center rounded-xl transition-colors duration-400 rounded-2.5 hover:bg-light-700',
          isActiveCart && 'bg-light-700 text-dark-primary200',
        )}
      >
        <FaCartArrowDown
          className={clsx(
            'w-6 h-6 text-primary200_light900 group-hover:dark:text-primary-200',
            isActiveCart && ' dark:text-primary-200',
            amountServicesInCart > 0 && 'text-primary-500',
          )}
        />
        <p
          className={clsx(
            'ml-3 text-primary200_light900 group-hover:text-dark-primary200 group-hover:dark:text-primary-200',
            isActiveCart && 'dark:text-primary-200',
          )}
        >
          Chosen Services
        </p>
        <span
          className={clsx(
            'ml-auto text-primary200_light900 group-hover:text-dark-primary200 group-hover:dark:text-primary-200 p-1',
            isActiveCart && 'dark:text-primary-200',
            amountServicesInCart > 0 && 'scale-120 underline',
          )}
        >
          {amountServicesInCart}
        </span>
      </Link>
    </li>
  );
}
export default CategoryCart;
