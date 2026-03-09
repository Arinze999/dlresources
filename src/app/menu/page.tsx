import React from 'react';
import { Suspense } from 'react';
import MenuClient from '@/components/MenuClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Deola resources Food Menu',
  description: 'Best Food Vendor in Owerri, welcome to our food menu',
};

const Menu = () => {
  return (
    <Suspense fallback="Loading...">
      <MenuClient />
    </Suspense>
  );
};

export default Menu;
