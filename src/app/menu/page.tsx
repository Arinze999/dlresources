import React from 'react';
import { Suspense } from 'react';
import MenuClient from '@/components/MenuClient';

const Menu = () => {
  return (
    <Suspense fallback="Loading...">
      <MenuClient />
    </Suspense>
  );
};

export default Menu;
