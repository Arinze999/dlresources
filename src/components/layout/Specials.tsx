import React from 'react';
import Foodcard from '../cards/Foodcard';
import Floater from '../Floater';

const Specials = () => {
  return (
    <div className="default-margin relative pt-25 md:pt-15 flex md:flex-row gap-4 md:gap-24 items-center md:items-start md:justify-center lg:justify-start">
      {/* floaters */}

      <Floater
        imageSrc="/images/float5.png"
        positionLeft="50%"
        className="top-[50%]"
        size="2.5rem"
        fromRight
      />

      {/*  */}
      <Foodcard imageSrc="/images/salad1.jpeg" white />
      <Foodcard imageSrc="/images/salad1.jpeg" />
    </div>
  );
};

export default Specials;
