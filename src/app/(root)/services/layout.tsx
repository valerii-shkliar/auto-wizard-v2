import { ReactNode } from 'react';

async function ServicesLayout({
  catalog,
  appointment,
}: {
  catalog: ReactNode;
  appointment: ReactNode;
}) {
  return (
    <div className="flex">
      {catalog}
      {appointment}
    </div>
  );
}

export default ServicesLayout;
