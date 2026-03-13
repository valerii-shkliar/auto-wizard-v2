import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
  const linkItemClass =
    'px-2.5 transition-default uppercase text-primary-200 font-medium text-lg hover:scale-110 border border-transparent hover:border-primary-900 rounded-2xl hover:shadow-md hover:shadow-primary-900';

  return (
    <nav className="flex flex-between">
      <Link href={'/'}>
        <Image
          src="/logo/logo.svg"
          alt="Auto Wizard Logo"
          width={200}
          height={65}
          loading="eager"
        />
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
        <div>Theme</div>
        <div>Auth</div>
      </div>
    </nav>
  );
}
