'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navConfig } from './config';

const Nav = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        // Optional future logic for closing dropdowns, etc.
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={navRef} className="hidden md:flex">
      <ul className="flex gap-2 text-xl">
        {navConfig.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href) && item.href !== '/') ||
            (pathname === '/' && item.label === 'Home');

          return (
            <li key={index} className="relative">
              <Link href={item.href}>
                <div
                  className={`flex justify-between gap-4 items-center px-4 py-2 cursor-pointer transition-colors duration-200
                    ${
                      isActive
                        ? 'text-darkgreen font-semibold'
                        : 'text-gray-700 hover:text-myPurple'
                    }`}
                >
                  <span className="text-[16px]">{item.label}</span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
