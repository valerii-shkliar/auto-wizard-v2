import {
  getCategoryByCategorySlug,
  getServicesByCategoryId,
} from '@/features/services/api/services.server';
import EmptySearchState from '@/features/services/components/EmptySearchState';
import ServicesList from '@/features/services/components/ServicesList';
import { notFound } from 'next/navigation';

async function Services({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryByCategorySlug(slug);

  if (!category) {
    notFound();
  }
  const services = await getServicesByCategoryId(category.id);

  if (services.length === 0) {
    return (
      <EmptySearchState>
        Services list for category &quot;{category.title}&quot; is empty.
      </EmptySearchState>
    );
  }
  return <ServicesList services={services} />;
}

export default Services;
