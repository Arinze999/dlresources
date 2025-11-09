import UpDown from '@/components/icons/UpDown';
import Featured from '@/components/layout/Featured';
import Hero from '@/components/layout/Hero';
import Kitchen from '@/components/layout/Kitchen';
import SpecialOffers from '@/components/layout/SpecialOffers';
import Specials from '@/components/layout/Specials';
import Testimonials from '@/components/layout/Testimonials';

export default function Home() {
  return (
    <div>
      <Hero />
      <Specials />
      <Featured />
      <SpecialOffers />
      <Testimonials />
      <UpDown className="w-full h-auto" />
      <Kitchen />
    </div>
  );
}
