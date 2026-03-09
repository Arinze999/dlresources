'use client';

import { useState, useEffect } from 'react';
import TestimonialCard from '../cards/TestimonialCard';
import { testimonials } from '@/data/testimonial';
import Floater from '../Floater';
import Image from 'next/image';

const AUTO_SCROLL_INTERVAL = 9000;

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  /** Auto-scroll */
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <div className="default-padding relative pt-30 lg:pt-40 flex flex-col gap-12">
      <h3 className="text-darkgreen2 general-title font-rubik">Testimonials</h3>

      {/* Carousel Wrapper with max-w-120 */}
      <div className="relative w-full mx-auto max-w-150">
        <div className="relative w-full mx-auto max-w-150 overflow-hidden min-h-[300px]">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`absolute inset-0 flex justify-center items-center transition-opacity duration-700 ease-out ${
                i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <TestimonialCard {...t} className="max-w-120" />
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow px-3 py-1"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow px-3 py-1"
        >
          ›
        </button>

        {/* Dots */}
        <div className="mt-4 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === index ? 'bg-yellow scale-110' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
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
