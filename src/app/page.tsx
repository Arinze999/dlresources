import UpDown from '@/components/icons/UpDown';
import UpDownGradient from '@/components/icons/UpDownGradient';
import Contact from '@/components/layout/Contact';
import Faqs from '@/components/layout/Faqs';
import Featured from '@/components/layout/Featured';
import Hero from '@/components/layout/Hero';
import Kitchen from '@/components/layout/Kitchen';
import SpecialOffers from '@/components/layout/SpecialOffers';
import Specials from '@/components/layout/Specials';
import Testimonials from '@/components/layout/Testimonials';
import Who from '@/components/layout/Who';
import { BlogProvider } from '@/context/BlogContext';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div>
      <Hero />
      <Specials />
      <Featured />
      <SpecialOffers />
      <Who />
      <UpDownGradient className="w-full h-40" />
      <Suspense fallback={<div>Loading...</div>}>
        <BlogProvider>
          <Kitchen />
        </BlogProvider>
      </Suspense>
      <UpDownGradient className="w-full h-40 rotate-180" />
      <Testimonials />
      <UpDown className="w-full h-auto" />
      <Faqs />
      <UpDownGradient className="w-full h-40 rotate-180" />
      <Contact />
    </div>
  );
}
