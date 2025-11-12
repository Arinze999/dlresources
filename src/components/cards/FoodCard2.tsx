'use client';

import Image from 'next/image';
import { MouseEvent } from 'react';

type FoodCard2Props = {
  imageSrc: string;
  name: string;
  description: string;
  priceFrom: number; // e.g. 2500
  currency?: string; // e.g. 'NGN' (defaults to NGN)
  orderHref?: string; // if provided, button becomes a link
  onOrder?: (e: MouseEvent<HTMLButtonElement>) => void;
  badge?: string; // optional small badge at the top-left of the image
  className?: string; // optional extra classes
  outOfStock?: boolean;
};

const formatPrice = (value: number, currency = 'NGN') =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(value);

export default function FoodCard2({
  imageSrc,
  name,
  description,
  priceFrom,
  currency = 'NGN',
  onOrder,
  badge,
  className = '',
  outOfStock,
}: FoodCard2Props) {
  return (
    <article
      className={`group w-full overflow-hidden rounded-2xl border border-gray-100/10 bg-white shadow-sm transition hover:shadow-md ${className}`}
      aria-label={name}
    >
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(min-width:1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          priority={false}
        />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-base font-semibold leading-tight md:text-lg">
          {name}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>

        <div className="mt-2 flex items-center justify-between">
          <div className="text-sm text-gray-700">
            <span className="mr-1 text-gray-500">Starting from</span>
            <span className="font-semibold">
              {formatPrice(priceFrom, currency)}
            </span>
          </div>

          {/* {orderHref ? (
            <a
              href={orderHref}
              className="rounded-full px-4 py-2 text-sm font-medium text-white bg-darkgreen hover:bg-darkgreen2"
            >
              Order now
            </a>
          ) : ( */}
          <button
            type="button"
            onClick={onOrder}
            className="rounded-full px-4 py-2 text-sm font-medium text-white bg-darkgreen hover:bg-darkgreen2 disabled:bg-white disabled:cursor-not-allowed"
            disabled={outOfStock}
          >
            {outOfStock ? (
              <span className="text-red-800">- out of stock</span>
            ) : (
              'Order now'
            )}
          </button>
          {/* )} */}
        </div>
      </div>
    </article>
  );
}
