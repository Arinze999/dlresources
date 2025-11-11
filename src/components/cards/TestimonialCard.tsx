// components/cards/TestimonialCard.tsx
'use client';

import * as React from 'react';
import Image from 'next/image';
import { Star } from '../icons/Star';

type TestimonialCardProps = {
  imageSrc: string;
  name: string;
  stars: number;      // 1..5
  comment: string;
  className?: string;
};

const clampStars = (n: number) => Math.min(5, Math.max(1, Math.floor(n)));

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  imageSrc,
  name,
  stars,
  comment,
  className,
}) => {
  const rating = clampStars(stars);

  return (
    <figure
      className={[
        'w-full rounded-2xl border border-gray-200/30 bg-white/30 p-2 md:p-4 shadow-sm',
        className || '',
      ].join(' ')}
    >
      {/* Top row: avatar + name + stars */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-full">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="64px"
            className="object-cover"
            priority={false}
          />
        </div>

        <figcaption className="min-w-0">
          <p className="truncate text-base font-semibold text-gray-900">{name}</p>
          <div className="mt-1 flex items-center" aria-label={`Rated ${rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={i < rating ? 'h-4 w-4 text-yellow-400' : 'h-4 w-4 text-gray-300'}
                aria-hidden="true"
              />
            ))}
          </div>
        </figcaption>
      </div>

      {/* Comment */}
      <blockquote className="mt-3 text-sm leading-6 text-gray-700">
        “{comment}”
      </blockquote>
    </figure>
  );
};

export default TestimonialCard;
