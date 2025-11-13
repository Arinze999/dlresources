'use client';

import React, { useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FoodCard2 from '@/components/cards/FoodCard2';
import Pagination from '@/components/Pagination';
import { DishCategory, getMenuPage } from '@/data/menu';
import Banner from './Banner';

// If you kept the old path:
// import { getMenuPage } from '@/data/menuDemo-helpers';

const allCategories: DishCategory[] = [
  'rice',
  'soups',
  'grill',
  'snacks',
  'wraps',
  'pasta',
  'burgers',
  'fish',
  'salads',
  'continental',
];

type SortKey =
  | 'price-asc'
  | 'price-desc'
  | 'rating-desc'
  | 'name-asc'
  | 'name-desc';

export default function MenuClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryParam =
    (searchParams.get('category') as DishCategory | null) ?? null;
  const qParam = searchParams.get('q') ?? '';
  const availParam = searchParams.get('available') === '1';
  const sortParam = (searchParams.get('sort') as SortKey | null) ?? null;
  const maxPriceParam = searchParams.get('maxPrice');
  const maxPriceNum = maxPriceParam ? Number(maxPriceParam) : null;
  const pageParam = Number(searchParams.get('page') || '1');

  // Build the page result (9 per page)
  const { items, totalPages } = useMemo(
    () =>
      getMenuPage({
        q: qParam,
        category: categoryParam,
        availableOnly: availParam,
        maxPrice:
          typeof maxPriceNum === 'number' && !Number.isNaN(maxPriceNum)
            ? maxPriceNum
            : null,
        sort: sortParam,
        page: Number.isNaN(pageParam) ? 1 : pageParam,
        pageSize: 6, // <= requested
      }),
    [qParam, categoryParam, availParam, maxPriceNum, sortParam, pageParam]
  );

  // Helper to mutate URL params
  function pushParams(next: Record<string, string | null | undefined>) {
    const sp = new URLSearchParams(searchParams.toString());
    Object.entries(next).forEach(([k, v]) => {
      if (v == null || v === '') sp.delete(k);
      else sp.set(k, v);
    });
    router.push(`/menu?${sp.toString()}`);
  }

  return (
    <div className="default-margin relative py-10 lg:py-20 flex flex-col gap-8">
      <Banner
        title="Menu"
        imageSrc="/images/land4.png"
        className="rounded-3xl"
      />
      <h3 className="text-darkgreen2 general-title2 font-lora text-center">
        Here is our diverse Menu and Food Combos
      </h3>

      {/* Controls (keep your previous ones; shortened here) */}
      <div className="flex flex-wrap gap-2 justify-center">
        <button
          className={`px-4 py-1.5 rounded-full text-[13px] transition ${
            !categoryParam
              ? 'bg-emerald-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          onClick={() => pushParams({ category: null, page: null })}
        >
          All
        </button>
        {allCategories.map((cat) => {
          const active = cat === categoryParam;
          const label = cat[0].toUpperCase() + cat.slice(1);
          return (
            <button
              key={cat}
              onClick={() =>
                pushParams({ category: active ? null : cat, page: null })
              }
              className={`px-4 py-1.5 rounded-full text-[13px] transition ${
                active
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="flex flex-col md:flex-row flex-wrap gap-6 items-center justify-between w-full mt-6">
        {items.length === 0 ? (
          <p className="text-sm text-gray-500 w-full text-center py-10">
            No dishes match your filters.
          </p>
        ) : (
          items.map((item) => (
            <React.Fragment key={item.id}>
              <FoodCard2
                imageSrc={item.imageSrc}
                name={item.name}
                description={item.description}
                priceFrom={item.priceFrom}
                currency={item.currency}
                orderHref={item.orderHref}
                badge={item.badge}
                outOfStock={item.outOfStock}
                className="w-full md:max-w-sm"
              />
              <hr className="bg-gray-200 w-full block md:hidden" />
            </React.Fragment>
          ))
        )}
      </div>

      {/* Pager */}
      <Pagination totalPages={totalPages} />
    </div>
  );
}
