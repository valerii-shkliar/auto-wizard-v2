'use client';

import { useDeferredValue, useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { useRouter, useSearchParams } from 'next/navigation';
import ROUTES from '@/constants/routes';

function Header() {
  const params = useSearchParams();
  const router = useRouter();
  const currentValue = params.get('search') ?? '';
  const [value, setValue] = useState(currentValue);
  const deferredValue = useDeferredValue(value);

  useEffect(() => {
    if (!currentValue) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(currentValue);
    }
  }, [currentValue]);

  useEffect(() => {
    const input = deferredValue.trim();
    const current = currentValue.trim();
    const searchParams = new URLSearchParams(params.toString());

    if (input === current) return;

    if (input) {
      searchParams.set('search', input);
    } else {
      searchParams.delete('search');
    }
    router.replace(`${ROUTES.SERVICES}?${searchParams.toString()}`);
  }, [deferredValue, params, router, currentValue]);

  function handleIconCloseClick() {
    router.push(ROUTES.SERVICES);
  }

  return (
    <div className="p-5 flex justify-between items-center border-b border-light-800">
      <h3 className="text-xl font-semibold">Categories services</h3>
      <div className="min-w-2/3 flex relative">
        <IoSearch className="icon absolute left-2.5 top-1/2 -translate-y-1/2" />
        <input
          className="group input-primary p-2.5 w-full px-10"
          name="searchInput"
          placeholder="Search..."
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        {currentValue && (
          <TiDelete
            className="icon scale-120 absolute right-2.5 top-1/2 -translate-y-1/2"
            onClick={handleIconCloseClick}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
