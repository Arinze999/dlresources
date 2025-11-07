'use client';

import { useEffect, useState } from 'react';
// import CompanyLogo from '../components/CompanyLogo';
// import HamburgerIcon2 from '../components/HamburgerIcon2';
// import MobileNav from '../components/MobileNav';
// import Button from '../components/Button';
import Nav from '../nav/Nav';
import Mobilenav from '../nav/MobileNav';
import CompanyLogo from '@/components/CompanyLogo';
import Link from 'next/link';
import Button from '../Button';
import { Close } from '../icons/Close';
import { Menu } from '../icons/Menu';

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const toggleNav = () => setNavOpen((prev) => !prev);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1152) {
        setNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`sticky w-full top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <div className="default-margin flex justify-between items-center h-[4.1rem] md:h-23 relative">
        <CompanyLogo
          close={() => {
            setNavOpen(false);
          }}
        />
        <Nav />
        <div className="flex items-center">
          <div className="px-4 py-2 md:flex gap-2 hidden">
            <Link href="/donate" className="text-blue-500">
              <Button
                className="bg-darkgreen text-white w-40"
                text="Book us now!"
              />
            </Link>
          </div>
          {navOpen ? (
            <Close
              onClick={toggleNav}
              className="cursor-pointer flex md:hidden"
            />
          ) : (
            <Menu
              onClick={toggleNav}
              className="cursor-pointer flex md:hidden"
            />
          )}
        </div>
        <Mobilenav
          isOpen={navOpen}
          close={() => {
            setNavOpen(false);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
