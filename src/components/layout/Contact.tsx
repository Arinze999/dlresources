'use client';

import React from 'react';
import ContactCard from '../cards/ContactCard';
import { Phone } from '../icons/Phone';
import { Mail } from '../icons/Mail';
import { Whatsapp } from '../icons/Whatsapp';
import Floater from '../Floater';

const Contact = () => {
  return (
    <div className="default-margin relative py-30 lg:py-40 flex flex-col gap-12 justify-center items-center">
      <h3 className="text-darkgreen2 general-title font-lora">
        Ready to Order?
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
        <ContactCard
          Icon={Phone}
          title="Call Us"
          description="Reach out to our support team anytime during working hours."
          buttonText="Call Now"
          color="yellow"
        />
        <ContactCard
          Icon={Mail}
          title="Email"
          description="We reply to all inquiries within 24 hours on business days."
          buttonText="Send Email"
          color="blue"
        />
        <ContactCard
          Icon={Whatsapp}
          title="WhatsApp"
          description="Chat directly with our team for quick responses."
          buttonText="Chat Now"
          color="green"
        />
      </div>

      <Floater
        imageSrc="/images/float9.png"
        positionRight="10%"
        className="top-35"
        size="2.5rem"
        fromDown
      />

       <Floater
        imageSrc="/images/float8.png"
        positionLeft="10%"
        className="bottom-20"
        size="2.5rem"
        fromDown
      />
    </div>
  );
};

export default Contact;
