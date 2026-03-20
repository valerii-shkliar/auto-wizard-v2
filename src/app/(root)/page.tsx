import { auth } from 'auth';
import React, { ReactNode } from 'react';

const Page = async ({ children }: { children: ReactNode }) => {
  const data = await auth();
  console.log(data);

  return <div>HOME{children}</div>;
};

export default Page;
