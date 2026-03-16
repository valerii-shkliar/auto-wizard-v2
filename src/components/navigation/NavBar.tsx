import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Theme from './Theme';
import MainLogo from '../main-logo/MainLogo';

export default function NavBar() {
  const linkItemClass =
    'px-2.5 uppercase text-primary200_light900 font-medium text-lg hover:scale-110 border border-transparent hover:border-primary-900 rounded-2xl hover:shadow-md hover:shadow-primary-900';

  return (
    <nav className="flex flex-between">
      <Link href={'/'}>
        <MainLogo />
      </Link>
      <ul className="flex gap-4">
        <li className="">
          <Link href="/" className={linkItemClass}>
            Home
          </Link>
        </li>
        <li className="">
          <Link href="/services" className={linkItemClass}>
            Services
          </Link>
        </li>
        <li className="">
          <Link href="/blog" className={linkItemClass}>
            Blog
          </Link>
        </li>
        <li className="">
          <Link href="/for-customers" className={linkItemClass}>
            For customers
          </Link>
        </li>
        <li className="">
          <Link href="/contacts" className={linkItemClass}>
            Contacts
          </Link>
        </li>
      </ul>
      <div className="flex gap-2.5">
        <Theme />
        <div>Auth</div>
      </div>
    </nav>
  );
}
