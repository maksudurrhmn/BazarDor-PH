import HeroBanner from '@/components/HeroBanner';
import PriceUp from '@/components/PriceUp';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <HeroBanner />
      <Suspense fallback={'...'}>
        <PriceUp />
      </Suspense>
    </div>
  );
}
