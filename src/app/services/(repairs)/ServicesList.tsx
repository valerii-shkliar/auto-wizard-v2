'use client';

import { useSelector } from 'react-redux';
import ServiceItem from './ServiceItem';
import {
  getActiveCategoryId,
  getActiveServices,
  getFilter,
  getOverallAmountOptedServices,
  getServicesSortedByCategories,
  isActiveCartNow,
} from '@/store/slices/repairsSlice';
import EmptyServices from './EmptyServices';
import ServicesByCategory from './ServicesByCategory';

function ServicesList() {
  const servicesList = useSelector(getActiveServices);
  const isActiveCart = useSelector(isActiveCartNow);
  const filter = useSelector(getFilter);
  const sortedServicesList = useSelector(getServicesSortedByCategories);
  const amountOptedServices = useSelector(getOverallAmountOptedServices);
  const activeCategoryId = useSelector(getActiveCategoryId);

  function renderServices() {
    return (
      <ul className="p-2.5 ">
        {isActiveCart || filter
          ? sortedServicesList.map((servicesByCategory, index) => {
              const categoryId = servicesByCategory[0].category_id;

              return (
                <ServicesByCategory
                  key={index}
                  services={servicesByCategory}
                  categoryId={categoryId}
                />
              );
            })
          : servicesList.map((service) => <ServiceItem key={service.id} service={service} />)}
      </ul>
    );
  }

  return (
    <div className="w-2/3">
      {activeCategoryId || filter || (isActiveCart && amountOptedServices > 0) ? (
        renderServices()
      ) : (
        <EmptyServices />
      )}
    </div>
  );
}

export default ServicesList;
