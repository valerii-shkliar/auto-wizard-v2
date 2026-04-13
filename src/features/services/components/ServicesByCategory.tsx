import ServiceItem from './ServiceItem';
import { TGroupeServicesByCategory } from '@/features/services/types';

function ServicesByCategory({ services }: { services: TGroupeServicesByCategory }) {
  return (
    <div className="w-full border-b border-solid border-light-800">
      <h3 className="text-base font-medium p-5 pb-0">{services.category.title}</h3>
      {services.services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </div>
  );
}
export default ServicesByCategory;
