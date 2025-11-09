import React from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '@/data/testimonial';

const Testimonials = () => {
  return (
    <div className="default-padding relative py-30 lg:py-40 flex flex-col gap-12">
      <h3 className="text-darkgreen2 general-title font-rubik">Testimonials</h3>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
