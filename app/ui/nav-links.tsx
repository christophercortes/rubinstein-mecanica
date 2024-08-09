'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { name: 'Home', href: '/' },
  { name: 'Quienes Somos', href: '/quienes-somos' },
  { name: 'Nuestros Servicios', href: '/nuestros-servicios' },
  //{ name: 'Taller Multimarcas', href: '/taller-multimarcas' },
  { name: 'Contacto', href: '/contacto' },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#0056A0] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-30 md:h-30"> {/* Adjust height for better fit */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" onClick={handleLinkClick}>
                <Image
                  src="/logo.jpg"
                  width={100} // Adjust width if needed
                  height={100} // Adjust height if needed
                  alt="Rubinstein Logo"
                />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6 ml-auto"> {/* Increased space */}
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  'px-4 py-2 text-medium font-medium rounded-md', // Large font size and padding
                  pathname === link.href
                    ? 'bg-[#004A87] text-white' // Active state color
                    : 'text-white hover:bg-[#00376D] hover:text-white' // Hover state color
                )}
                aria-current={pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-white hover:bg-[#00376D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0056A0] focus:ring-[#0056A0]"
            >
              <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-[#0056A0]"> {/* Adjusted spacing */}
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={clsx(
                    'block px-4 py-2 text-medium font-medium rounded-md', // Large font size and padding
                    pathname === link.href
                      ? 'bg-[#004A87] text-white' // Active state color
                      : 'text-white hover:bg-[#00376D] hover:text-white' // Hover state color
                  )}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={handleLinkClick} // close menu on link click
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
