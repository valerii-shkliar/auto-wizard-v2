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
          'p-2.5 flex items-center rounded-xl transition-colors duration-400 rounded-2.5 hover:bg-box-background-hover',
          isActiveCart && 'bg-box-background-hover',
        )}
        onClick={handleCategoryCartClick}
      >
        <FaCartArrowDown
          className={clsx(
            'w-6 h-6 text-primary-color',
            overallAmountOptedRepairs > 0 && 'text-secondary-color',
          )}
        />
        <p className="ml-3 text-primary-color">Chosen Services</p>
        <span className="ml-auto text-primary-color">{overallAmountOptedRepairs}</span>
      </a>
    </li>
  );
}
export default CategoryCart;
