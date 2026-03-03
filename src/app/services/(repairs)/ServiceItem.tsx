'use client';

import {
  addServiceToCart,
  getFilter,
  isSelectedService,
  removeServiceFromCart,
} from '@/store/slices/repairsSlice';
import { TService } from '@/types';
import { convertLeadTime } from '@/utilities/convertLeadTime';
import { JSX } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ServiceItem({ service }: { service: TService }) {
  const { name, lead_time: leadTime, price } = service;
  const dispatch = useDispatch();
  const isChecked = useSelector(isSelectedService(service.id));
  const filter = useSelector(getFilter);

  function handleInputChange() {
    if (isChecked) {
      dispatch(removeServiceFromCart(service.id));
    } else {
      dispatch(addServiceToCart(service));
    }
  }

  function pointFilteredText(name: string, filter: string): JSX.Element {
    const regExp = new RegExp(`(${filter.toLowerCase()})`, 'gi');
    const textsList = name.split(regExp);
    const res = [];

    for (let i = 0; i < textsList.length; i++) {
      const text = textsList[i];

      if (regExp.test(text)) {
        regExp.lastIndex = 0;
        res.push(
          <span key={i} className="font-medium underline text-warning-color">
            {text}
          </span>,
        );
        continue;
      }
      res.push(text);
    }
    return <>{res}</>;
  }

  return (
    <li>
      <a
        className="group flex items-center p-2.5 rounded-xl hover:bg-box-background-hover"
        onClick={handleInputChange}
      >
        <input
          checked={isChecked}
          onChange={handleInputChange}
          readOnly
          className="appearance-none w-6 h-6 rounded-md border border-solid border-secondary-color-darken relative bg-pattern bg-none bg-size-[80%] transition-all duration-400 hover:cursor-pointer select-none checked:bg-secondary-color-darken checked:bg-[url('/icons/systems/tick.svg')]"
          name="service-select"
          type="checkbox"
        />

        <p className="text-primary-color ml-2.5 text-sm">
          {filter ? pointFilteredText(name, filter) : name}
        </p>
        <span className="text-primary-color text-sm ml-4.5 opacity-0 transition-opacity duration-800 group-hover:opacity-100">
          {!isNaN(leadTime) && `approx.: ${convertLeadTime(leadTime)}`}
        </span>
        <span className="text-primary-color text-sm font-medium ml-auto">{`from ${price}$`}</span>
      </a>
    </li>
  );
}
export default ServiceItem;
