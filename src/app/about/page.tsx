import Banner from '@/components/Banner';
import { Circles } from '@/components/icons/Circles';
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className="default-margin relative py-10 lg:py-20 flex flex-col gap-20">
      <Banner
        title="About Us"
        imageSrc="/images/land3.png"
        className="rounded-3xl"
      />
{/* 
      <h3 className="text-darkgreen2 general-title2 font-lora text-center">
        About Us
      </h3> */}

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="flex flex-col gap-8 w-full max-w-150">
          <p>
            Deola Resources is a food company with a diverse range of products
            and services, including snacks, catering services, easy foods,
            natural foods, agriculture, food processing, food production, food
            manufacturing, manufacturing beverages and general contracts..
          </p>
          <h4 className="text-lg font-semibold text-darkgreen2">
            VISION STATEMENT
          </h4>
          <p>To let the globe know and feel the delight in foods.</p>
          <h4 className="text-lg font-semibold text-darkgreen2">
            MISION STATEMENT
          </h4>
          <p>
            Creating delights in our foods, snacks, beverages, products and
            services.
          </p>
        </div>

        <div className="relative w-full max-w-150 flex-1 overflow-hidden rounded-2xl min-h-160 md:block">
          <Image
            src={'/images/about.png'}
            alt="dish"
            fill
            quality={100}
            priority
            className="object-cover will-change-transform pointer-events-none"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="relative w-full max-w-150 flex-1 overflow-hidden rounded-2xl min-h-50 md:block">
          <Image
            src={'/images/people.png'}
            alt="dish"
            fill
            quality={100}
            priority
            className="object-cover will-change-transform pointer-events-none"
          />
        </div>
        <div className="flex flex-col justify-center gap-8 w-full max-w-150 relative">
          <Circles
            size={400}
            primaryFill="#ffd700"
            primaryStroke="#207176"
            accentFill="#D1ED5E"
            accentStroke="#AACF17"
            className="absolute top-0 opacity-10"
          />
          <h4 className="text-lg font-semibold text-darkgreen2">
            Meet Our CEO
          </h4>
          <p>
            Deola Resources is led by an entrepreneur with a passion for
            business and food. As the CEO, she combines her expertise as a cook
            and caterer with a love for creating delicious snacks like peanuts,
            chin chin, and chips. She is also a skilled traditional orthopedic
            doctor, blending ancient healing techniques with modern care. A true
            lover of God, her faith drives her passion for nourishing both the
            body and soul through her work, striving to make a positive impact
            through Deola Resources.
          </p>
          <h4 className="text-lg font-semibold text-darkgreen2">BRAND STORY</h4>
          <p>
            As Deola Resources continues to grow, the company remains dedicated
            to its founding principles of passion, connection, and community. It
            seeks to bring delight and enjoyment to every food experience,
            reminding people of the simple pleasures that can be found in a
            delicious meal shared with friends and family. With each new
            product, Deola Resources aims to tell a story, bringing the flavors
            and stories of the world to every plate. In doing so, they hope to
            inspire a new appreciation for the magic that can be found in every
            bite. 🍲
          </p>
          <hr className="my-3" />
          <p>
            From the heart of Deola Resources, a new chapter in food is
            unfolding. The company is committed to using only the freshest
            ingredients, grown with respect for the land and the environment. By
            embracing sustainable and ethical farming practices, Deola Resources
            is helping to support local communities and preserve the natural
            resources that make their products so special. The heart of the chef
            is also reflected in the artistry and attention to detail found in
            every product.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
