import React from 'react';
import Button from '../Button';
import Foodcard from '../cards/Foodcard';

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row border default-margin pt-10">
      <div className="w-full border flex flex-col">
        <div>
          <h1 className="text-6xl lg:text-7xl font-bold text-center lg:text-left leading-normal">
            Healthy <br /> <span className="text-yellow">Food</span> Is <br />{' '}
            Waiting for you
          </h1>
          <p className="text-sm text-center lg:text-left text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            nesciunt, voluptatum velit iusto ab amet ratione unde totam cumque
            non, sed repudiandae eveniet natus debitis! Labore, facilis tempora?
            Accusantium, suscipit?
          </p>
          <div className="flex border justify-between lg:max-w-[300px] my-4">
            <Button
              text="View Menu"
              className="bg-darkgreen text-white text-sm"
            />
            <Button text="Book Us Now" className="bg-myGray6 text-sm" />
          </div>
        </div>

        <div className="border pt-15 flex md:flex-row gap-4 md:gap-8 items-center md:items-start md:justify-center lg:justify-start">
          <Foodcard imageSrc="/images/salad1.jpeg" white />
          <Foodcard imageSrc="/images/salad1.jpeg" />
        </div>
      </div>
      <div className="w-full border hidden lg:block">2</div>
    </div>
  );
};

export default Hero;
