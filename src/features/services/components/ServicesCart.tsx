'use client';
import { getServicesSortedByCategories } from '@/store/slices/repairsSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ServicesByCategory from './ServicesByCategory';
import { useRouter } from 'next/navigation';
import ROUTES from '@/constants/routes';

function ServicesCart() {
  const router = useRouter();
  const optedServices = useSelector(getServicesSortedByCategories);

  useEffect(() => {
    if (optedServices.length < 1) {
      router.push(ROUTES.SERVICES);
    }
  }, [optedServices, router]);

  return optedServices.map((servicesByCategory, index) => (
    <ServicesByCategory key={index} services={servicesByCategory} />
  ));
}

export default ServicesCart;
