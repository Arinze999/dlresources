'use client';

import React from 'react';
import Image from 'next/image';
import Button from '../Button';

type FoodCardProps = {
  imageSrc: string;
  alt?: string;
  title?: string;
  description?: string;
  white?: boolean;
};

const Foodcard: React.FC<FoodCardProps> = ({
  imageSrc,
  alt = 'Food image',
  title = 'Fresh and healthy salad',
  description = 'Crisp mixed greens with cherry tomatoes, cucumber, and a light lemon vinaigrette.',
  white,
}) => {
  return (
    <div
      className={`group relative w-52 h-53 md:h-65 rounded-lg md:rounded-2xl  p-2 md:p-4 pt-8 md:pt-16
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-2xl ${
          white ? 'bg-white shadow-2xl' : 'bg-darkgreen  shadow-sm'
        }`}
    >
      {/* Circular image, half overflowing above the card */}
      <div className="absolute left-1/2 -top-10 md:-top-12 -translate-x-1/2">
        <div className="relative h-20 md:h-30 w-20 md:w-30 overflow-hidden rounded-full shadow-md">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            sizes="96px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* Text content */}
      <h3
        className={`mt-2 text-center text-sm md:text-base tracking-tight ${
          white ? 'text-darkgreen2' : 'text-white'
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-1 text-center text-xs ${white ? 'text-gray-500' : 'text-gray-300'}`}
      >
        {description}
      </p>

      <Button
        text="Place order"
        className={`text-xs md:text-sm mt-2 ${
          white ? 'text-white bg-darkgreen' : 'bg-yellow text-darkgreen'
        }`}
        icon
      />
    </div>
  );
};

export default Foodcard;
