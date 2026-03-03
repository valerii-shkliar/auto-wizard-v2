'use client';

import { getFilter, resetFilter, setFilter } from '@/store/slices/repairsSlice';
import { ChangeEventHandler } from 'react';
import { IoSearch } from 'react-icons/io5';
import { TiDelete } from 'react-icons/ti';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(setFilter(e.target.value));
  };

  function handleIconCloseClick() {
    if (filter) {
      dispatch(resetFilter());
    }
  }

  return (
    <div className="p-5 flex justify-between items-center border-b border-border-color">
      <h3 className="text-xl font-semibold">Categories services</h3>
      <div className="min-w-2/3 flex relative">
        <IoSearch className="icon absolute left-2.5 top-1/2 -translate-y-1/2" />
        <input
          className="group input w-full px-10"
          name="searchInput"
          placeholder="Search..."
          onChange={handleSearchChange}
          value={filter}
        />
        {filter && (
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
