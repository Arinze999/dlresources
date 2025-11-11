import UpDown from '@/components/icons/UpDown';
import Contact from '@/components/layout/Contact';
import Faqs from '@/components/layout/Faqs';
import Featured from '@/components/layout/Featured';
import Hero from '@/components/layout/Hero';
import Kitchen from '@/components/layout/Kitchen';
import SpecialOffers from '@/components/layout/SpecialOffers';
import Specials from '@/components/layout/Specials';
import Testimonials from '@/components/layout/Testimonials';
import Who from '@/components/layout/Who';

export default function Home() {
  return (
    <div>
      <Hero />
      <Specials />
      <Featured />
      <SpecialOffers />
      <Who />
      <UpDown className="w-full h-auto" />
      <Kitchen />
      <Testimonials />
      <UpDown className="w-full h-auto" />
      <Faqs />
      <Contact />
    </div>
  );
}
