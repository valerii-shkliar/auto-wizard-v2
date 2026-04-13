import React from 'react';

function EmptySearchState({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-2.5 w-full">
      <h4 className="text-center font-semibold text-2xl">{children}</h4>
    </div>
  );
}

export default EmptySearchState;
