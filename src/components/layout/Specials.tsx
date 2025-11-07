import React from 'react';
import Foodcard from '../cards/Foodcard';

const Specials = () => {
  return (
    <div className="default-margin pt-25 md:pt-15 flex md:flex-row gap-4 md:gap-24 items-center md:items-start md:justify-center lg:justify-start">
      <Foodcard imageSrc="/images/salad1.jpeg" white />
      <Foodcard imageSrc="/images/salad1.jpeg" />
    </div>
  );
};

export default Specials;
