import ServiceItem from './ServiceItem';
import { TServiceWithCategory } from '../types';

function ServicesList({ services }: { services: TServiceWithCategory[] }) {
  return (
    <ul className="p-2.5 w-full">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </ul>
  );
}

export default ServicesList;
