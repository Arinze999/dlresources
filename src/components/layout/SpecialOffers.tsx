'use client';

import React from 'react';
import { Pattern } from '../icons/Pattern';
import OfferCard from '../cards/OfferCard';
import { Cake } from '../icons/Cake';
import { CheersFill } from '../icons/CheersFill';
import Image from 'next/image';

const SpecialOffers = () => {
  return (
    <div className="default-padding relative py-30 lg:py-40 flex flex-col gap-12">
      <h3 className="text-darkgreen2 general-title font-rubik">
        Special Offers
      </h3>
      <p className='text-center text-gray-600'>For your events and celebrations!</p>
      <div className="absolute inset-x-0 -z-2 ml-auto top-0 right-0 w-full h-full opacity-30 overflow-hidden">
        <Pattern size={800} className="w-full h-auto" idPrefix="hero-bg" />
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="flex flex-col justify-center gap-8">
          <OfferCard
            Icon={Cake}
            title="Event Cartering"
            description="Full-service catering for all occasions"
            perks={[
              'Wedding receptions',
              'Corporate events',
              'Birthday parties',
              'Custom menu planning',
            ]}
            buttonText="Get Quote on Whattsap"
            className="bg-darkgreen w-full max-w-150"
          />
          <OfferCard
            Icon={CheersFill}
            title="Mini Party Packages"
            description="Small chops & finger foods for intimate gatherings"
            perks={[
              'House parties',
              'Office meetings',
              'Small celebrations',
              'Quick delivery',
            ]}
            buttonText="Order small chops"
            className="bg-yellow w-full max-w-150"
          />
        </div>

        <div className="relative w-full max-w-150 flex-1 overflow-hidden opacity-75 rounded-2xl hidden md:block">
          <Image
            src={'/images/people.png'}
            alt="dish"
            fill
            quality={100}
            priority
            className="object-cover will-change-transform pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
