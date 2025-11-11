import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '@/data/testimonial';
import Floater from '../Floater';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <div className="default-padding relative pt-30 lg:pt-40 flex flex-col gap-12">
      <h3 className="text-darkgreen2 general-title font-rubik">Testimonials</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
      <p className="font-lora italic text-lg font-semibold text-center text-gray-600 mb-10 lg:mb-0">
        At Deola Resources, your <span className="text-yellow">Craving</span> is
        our <span className="text-yellow">Business</span>...!
      </p>

      <Floater
        imageSrc="/images/float1.png"
        positionLeft="10%"
        className="top-full"
        size="2.5rem"
        fromLeft
      />

      <Floater
        imageSrc="/images/float2.png"
        positionRight="10%"
        className="top-35"
        size="2.5rem"
        fromDown
      />

      <div className="absolute inset-0 -z-10 opacity-20 md:opacity-10 overflow-hidden">
        <Image
          src="/images/veggies.png"
          alt="background"
          fill
          priority={false}
          className="object-contain w-full h-full md:rotate-90 scale-130 md:scale-200"
        />

        <div className="absolute inset-0 backdrop-blur-sm" />

        <div className="absolute inset-x-0 top-0 h-[20%] bg-linear-to-b from-white to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[20%] bg-linear-to-t from-white to-transparent" />
      </div>
    </div>
  );
};

export default Testimonials;
