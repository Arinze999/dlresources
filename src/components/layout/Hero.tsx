import React from 'react';
import Button from '../Button';
import { HeroBg } from '../icons/HeroBg';
import Floater from '../Floater';
import HeroCircleCarousel from '../HeroCircleCarousel';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row default-margin pt-20 md:pt-30 2xl:pt-40">
      {/* Floaters */}
      <Floater
        imageSrc="/images/float1.png"
        positionRight="70%"
        size="2.5rem"
        fromDown
      />

      <Floater
        imageSrc="/images/float2.png"
        positionLeft="40%"
        className="top-[70%]"
        size="2.5rem"
        fromLeft
      />

      <Floater
        imageSrc="/images/float3.png"
        positionLeft="10%"
        className="top-[50%]"
        size="2.5rem"
        fromDown
      />

      <Floater
        imageSrc="/images/float4.png"
        positionLeft="60%"
        className="top-[30%]"
        size="2.5rem"
        fromUp
      />

      {/*  */}
      <div className="w-full  flex flex-col">
        <div>
          <h1 className="text-6xl xl:text-7xl font-bold text-center lg:text-left leading-normal font-rubik">
            Healthy <br /> <span className="text-yellow">Food</span> Is <br />{' '}
            Waiting for you
          </h1>
          <p className="text-sm text-center lg:text-left text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            nesciunt, voluptatum velit iusto ab amet ratione unde totam cumque
            non, sed repudiandae eveniet natus debitis! Labore, facilis tempora?
            Accusantium, suscipit?
          </p>
          <div className="flex  justify-between lg:max-w-[300px] my-4">
            <Button
              text="View Menu"
              className="bg-darkgreen text-white text-sm"
            />
            <Button text="Book Us Now" className="bg-myGray6 text-sm" />
          </div>
        </div>

        {/* <div className=" pt-15 flex md:flex-row gap-4 md:gap-8 items-center md:items-start md:justify-center lg:justify-start">
          <Foodcard imageSrc="/images/salad1.jpeg" white />
          <Foodcard imageSrc="/images/salad1.jpeg" />
        </div> */}
      </div>
      <div className="w-full hidden lg:flex max-h-120 xl:max-h-none items-end justify-end h-fit">
        <div className="absolute inset-x-0 -z-2 ml-auto top-0 right-0 w-[50vw] opacity-70">
          <HeroBg />
        </div>
        <HeroCircleCarousel />
      </div>
    </div>
  );
};

export default Hero;
