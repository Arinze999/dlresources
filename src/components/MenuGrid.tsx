'use client';

import { baseMenu } from '@/data/menu';
import FoodCard2 from './cards/FoodCard2';

export default function MenuGrid() {
  return (
    <section className="max-w-6xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {baseMenu.slice(0, 3).map((item) => (
          <FoodCard2
            key={item.id}
            imageSrc={item.imageSrc}
            name={item.name}
            description={item.description}
            priceFrom={item.priceFrom}
            currency={item.currency}
            orderHref={item.orderHref}
            badge={item.badge}
          />
        ))}
      </div>
    </section>
  );
}
