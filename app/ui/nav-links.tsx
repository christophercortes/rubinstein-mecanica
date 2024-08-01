'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { name: 'Quienes Somos', href: '/quienes-somos' },
  { name: 'Nuestros Servicios', href: '/nuestros-servicios' },
  { name: 'Taller Multimarcas', href: '/taller-multimarcas' },
  { name: 'Contacto', href: '/contacto' },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Image
                src="/logo.jpg"
                width={65} // Adjusted width for small screens
                height={65} // Adjusted height for small screens
                alt="Rubinstein Logo"
                className="bg-white p-1 rounded-md md:w-55 md:h-55 lg:w-35 lg:h-35" // Adjusted sizes for medium and large screens
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'px-3 py-2 rounded-md text-sm font-medium',
                    pathname === link.href
                      ? 'bg-blue-700 text-white'
                      : 'text-blue-500 hover:bg-blue-700 hover:text-white'
                  )}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-500 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
            >
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'block px-3 py-2 rounded-md text-base font-medium',
                  pathname === link.href
                    ? 'bg-blue-700 text-white'
                    : 'text-blue-500 hover:bg-blue-700 hover:text-white'
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
