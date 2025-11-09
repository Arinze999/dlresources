export type DemoDish = {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  priceFrom: number;
  currency?: string;
  orderHref?: string;
  badge?: string;
};

export const menuDemo: DemoDish[] = [
  {
    id: 'jollof-001',
    imageSrc: '/images/ft1.jpeg',
    name: 'Jollof Rice & Chicken',
    description:
      'Smoky party jollof served with juicy fried chicken and plantain.',
    priceFrom: 3500,
    currency: 'NGN',
    orderHref: '#order/jollof',
    badge: 'Popular',
  },
  {
    id: 'smallchops-002',
    imageSrc: '/images/ft2.jpeg',
    name: 'Small Chops Platter',
    description:
      'Spring rolls, samosas, puff-puff, grilled gizzards & spicy dips.',
    priceFrom: 2800,
    currency: 'NGN',
    orderHref: '#order/smallchops',
  },
  {
    id: 'chicken-003',
    imageSrc: '/images/ft3.jpeg',
    name: 'Crispy Fried Chicken',
    description: 'Golden, crunchy skin with tender, marinated meat inside.',
    priceFrom: 3000,
    currency: 'NGN',
    orderHref: '#order/chicken',
    badge: 'Chef’s pick',
  },
//   {
//     id: 'salad-004',
//     imageSrc: '/images/veggie-salad.jpg',
//     name: 'Fresh Garden Salad',
//     description:
//       'Crunchy greens with tomatoes, cucumbers, sweet corn & house dressing.',
//     priceFrom: 2200,
//     currency: 'NGN',
//     orderHref: '#order/salad',
//   },
];
