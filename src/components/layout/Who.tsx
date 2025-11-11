import { ABOUT } from '@/routes/routes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowRight } from '../icons/ArrowRight';

const Who = () => {
  return (
    <div className="default-padding relative pt-30 lg:pt-40 pb-20 flex flex-col gap-12 justify-center items-center">
      <h3 className="text-darkgreen2 general-title font-rubik">Who we are</h3>
      <div className="flex flex-col gap-6 md:flex-row w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-6 place-items-center max-w-lg flex-1">
          <div className="relative w-full aspect-square max-w-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/spicy.jpeg"
              alt="salad"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square max-w-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/farm.jpeg"
              alt="salad"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square max-w-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/chef.jpeg"
              alt="salad"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square max-w-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/ofada.jpeg"
              alt="salad"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 max-w-2xl">
          <h4 className="text-3xl font-bold mb-6 font-lora">Deola Resources</h4>
          <p className="text-gray-600 font-lora mb-6">
            Is a food company with a diverse range of products and services,
            including snacks, catering services, easy foods, natural foods,
            agriculture, food processing, food production, food manufacturing,
            manufacturing beverages and general contracts...
          </p>
          <Link
            href={`/${ABOUT}`}
            className="text-darkgreen flex gap-3 items-center"
          >
            About Us <ArrowRight />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[250px] lg:w-[300px] h-auto pointer-events-none opacity-50">
        <Image
          src="/images/serve.png"
          alt="decorative shape"
          width={300}
          height={300}
          className="w-full h-auto object-contain scale-x-[-1]"
          priority={false}
        />
      </div>

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

export default Who;
