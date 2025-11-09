import React from 'react';
import MenuGrid from '../MenuGrid';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className="default-margin relative py-30 lg:py-40 flex flex-col gap-12 justify-center items-center">
      <div className="absolute left-0 top-40 opacity-4 -rotate-40 -z-1">
        <Image src="/images/s1.png" alt="" height={100} width={100} />
      </div>
       <div className="absolute right-0 top-0 opacity-4 -rotate-40 -z-1">
        <Image src="/images/s4.png" alt="" height={100} width={100} />
      </div>
      <div className="absolute right-0 top-80 opacity-4 rotate-40 -z-1">
        <Image src="/images/s3.png" alt="" height={100} width={100} />
      </div>
      <div className="absolute left-40 top-160 opacity-4 rotate-40 -z-1">
        <Image src="/images/s2.png" alt="" height={100} width={100} />
      </div>
      <h3 className="text-darkgreen2 general-title font-rubik">
        Our Featured Dishes
      </h3>
      <MenuGrid />
    </div>
  );
};

export default Featured;
