import Image from 'next/image';
import React from 'react';

const Who = () => {
  return (
    <div className="default-margin relative py-30 lg:py-40 flex flex-col gap-12 justify-center items-center">
      <h3 className="text-darkgreen2 general-title font-rubik">Who we are</h3>
      <div className="flex flex-col gap-6 md:flex-row w-full max-w-6xl">
        <div className="grid grid-cols-2 gap-6 place-items-center max-w-lg flex-1">
          <div className="relative w-full aspect-square max-w-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/salad1.jpeg"
              alt="salad"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square max-w-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/salad1.jpeg"
              alt="salad"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-square max-w-60 rounded-2xl overflow-hidden">
            <Image
              src="/images/salad1.jpeg"
              alt="salad"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex-1 max-w-2xl">
          <h4 className="text-3xl font-bold mb-6 font-lora">Deola Resources</h4>
          <p className="text-gray-600 font-lora">
            Is a food company with a diverse range of products and services,
            including snacks, catering services, easy foods, natural foods,
            agriculture, food processing, food production, food manufacturing,
            manufacturing beverages and general contracts...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Who;
