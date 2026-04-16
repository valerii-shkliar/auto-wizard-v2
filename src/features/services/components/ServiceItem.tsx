'use client';

import {
  addServiceToCart,
  isSelectedService,
  removeServiceFromCart,
} from '@/store/slices/repairsSlice';
import { TServiceWithCategory } from '@/features/services/types';
import { convertLeadTime } from '@/features/services/lib/convertLeadTime';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import MarkedText from './MarkedText';

function ServiceItem({ service }: { service: TServiceWithCategory }) {
  const { name, lead_time: leadTime, price } = service;
  const dispatch = useDispatch();
  const isChecked = useSelector(isSelectedService(service.id));
  const searchParams = useSearchParams();
  const filter = searchParams.get('search');

  function handleInputChange() {
    if (isChecked) {
      dispatch(removeServiceFromCart(service.id));
    } else {
      dispatch(addServiceToCart(service));
    }
  }

  return (
    <li>
      <a
        className="group flex items-center p-2.5 rounded-xl hover:bg-light-700"
        onClick={handleInputChange}
      >
        <input
          checked={isChecked}
          onChange={handleInputChange}
          readOnly
          className="appearance-none w-6 h-6 rounded-md border border-solid border-primary-300 relative bg-pattern 
          bg-none bg-size-[80%] transition-all duration-400 hover:cursor-pointer select-none 
          checked:bg-[url('/icons/systems/tick.svg')] checked:bg-primary-300"
          name="service-select"
          type="checkbox"
        />

        <p className="text-dark-primary200_dark:light100 ml-2.5 text-sm group-hover:text-dark-primary200">
          {filter ? <MarkedText name={name} filter={filter} /> : name}
        </p>
        <span
          className="text-dark-primary200_dark:light100 text-sm ml-4.5 opacity-0 transition-opacity duration-800 
        group-hover:opacity-100 group-hover:text-dark-primary200"
        >
          {!isNaN(leadTime) && `approx.: ${convertLeadTime(leadTime)}`}
        </span>
        <span className="text-dark-primary200_dark:light100 text-sm font-medium ml-auto group-hover:text-dark-primary200">{`from ${price}$`}</span>
      </a>
    </li>
  );
}
export default ServiceItem;
