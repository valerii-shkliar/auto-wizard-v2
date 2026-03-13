import {
  getOverallAmountOptedServices,
  isActiveCartNow,
  resetFilter,
  setActiveCart,
} from '@/store/slices/repairsSlice';
import clsx from 'clsx';
import { FaCartArrowDown } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';

function CategoryCart() {
  const dispatch = useDispatch();
  const isActiveCart = useSelector(isActiveCartNow);
  const overallAmountOptedRepairs = useSelector(getOverallAmountOptedServices);

  function handleCategoryCartClick() {
    if (!isActiveCart) {
      dispatch(setActiveCart());
      dispatch(resetFilter());
    }
  }

  return (
    <li>
      <a
        className={clsx(
          'group p-2.5 flex items-center rounded-xl transition-colors duration-400 rounded-2.5 hover:bg-light-700',
          isActiveCart && 'bg-light-700 text-dark-primary200',
        )}
        onClick={handleCategoryCartClick}
      >
        <FaCartArrowDown
          className={clsx(
            'w-6 h-6 text-primary-200',
            overallAmountOptedRepairs > 0 && 'text-primary-200',
          )}
        />
        <p className="ml-3 text-primary200_light100 group-hover:text-dark-primary200">
          Chosen Services
        </p>
        <span className="ml-auto text-primary200_light100 group-hover:text-dark-primary200">
          {overallAmountOptedRepairs}
        </span>
      </a>
    </li>
  );
}
export default CategoryCart;
