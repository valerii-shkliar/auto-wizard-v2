import NavBar from '@/components/navigation/NavBar';
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-384 mx-auto">
      <header className="border-b pb-1">
        <NavBar />
      </header>
      <main>{children}</main>
    </div>
  );
}
