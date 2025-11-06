'use client';

import React from 'react';
import Link from 'next/link';
import { navConfig } from './config';
import { usePathname } from 'next/navigation';
import Button from '../Button';

type MobileNavProps = {
  isOpen: boolean;
  close: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, close }) => {
  const pathname = usePathname();

  const handleToggle = () => {
    close();
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen w-full bg-myWhite shadow pb-4 -z-10 transition-transform duration-300 flex flex-col gap-12 bg-white md:hidden ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className="flex flex-col w-full text-xl mt-28 gap-2">
        {navConfig.map((item, index) => {
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href) && item.href !== '/') ||
            (pathname === '/' && item.label === 'Home');

          return (
            <Link href={item.href} key={index}>
              <li>
                <div
                  className={`flex justify-between gap-4 items-center px-4 py-2 cursor-pointer transition-colors duration-200
                    ${
                      isActive
                        ? 'text-myPurple font-semibold'
                        : 'text-gray-700 hover:text-myPurple'
                    }`}
                  onClick={() => handleToggle()}
                >
                  <span className="text-[16px] hover:text-myPurple">
                    {item.label}
                  </span>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
      <div className="px-4 w-full py-2 flex gap-2 md:hidden">
        <Link
          href={'/donate'}
          className="w-full"
          onClick={() => handleToggle()}
        >
          <Button
            className="bg-darkgreen text-white w-full"
            text="Book us now!"
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;
