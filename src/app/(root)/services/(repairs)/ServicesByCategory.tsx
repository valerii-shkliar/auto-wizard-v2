import ServiceItem from './ServiceItem';
import { TService } from '@/types';
import { useSelector } from 'react-redux';
import { getCategoryTitleById } from '@/store/slices/repairsSlice';

type TProps = { services: TService[]; categoryId: string | number };

function ServicesByCategory({ services, categoryId }: TProps) {
  const categoryTitle = useSelector(getCategoryTitleById(categoryId));

  return (
    <li className="w-full border-b border-solid border-light-800">
      <h3 className="text-base font-medium p-5 pb-0">{categoryTitle}</h3>
      <ul className="p-2.5">
        {services?.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </ul>
    </li>
  );
}
export default ServicesByCategory;
