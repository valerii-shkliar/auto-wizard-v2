import { getServicesByFilter } from '@/features/services/api/services.server';
import DefaultServicesPage from '@/features/services/components/DefaultServicesPage';
import EmptySearchState from '@/features/services/components/EmptySearchState';
import ServicesByCategory from '@/features/services/components/ServicesByCategory';

async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<{ search: string | undefined }>;
}) {
  const { search } = await searchParams;

  if (!search) {
    return <DefaultServicesPage />;
  }

  const filteredServices = await getServicesByFilter(search);

  if (filteredServices.length === 0) {
    return <EmptySearchState>Not matching services...</EmptySearchState>;
  }

  return (
    <div className="w-full">
      {filteredServices.map((servicesByCategory, index) => (
        <ServicesByCategory key={index} services={servicesByCategory} />
      ))}
    </div>
  );
}

export default CatalogPage;
