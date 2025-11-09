import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '@/data/testimonial';
import Floater from '../Floater';

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
    </div>
  );
};

export default Testimonials;
