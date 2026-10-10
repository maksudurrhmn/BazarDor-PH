import AllProdcts from '@/components/AllProdcts';
import HeroBanner from '@/components/HeroBanner';
import NavMarquee from '@/components/NavMarquee';
import PriceDown from '@/components/PriceDown';
import PriceUp from '@/components/PriceUp';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <Suspense>
        <NavMarquee />
      </Suspense>
      <HeroBanner />
      <Suspense fallback={'...'}>
        <PriceUp />
      </Suspense>
      <Suspense fallback={'...'}>
        <PriceDown />
      </Suspense>
      <Suspense fallback={'...'}>
        <AllProdcts />
      </Suspense>
    </div>
  );
}
