import AllProdcts from '@/components/AllProdcts';
import HeroBanner from '@/components/HeroBanner';
import NavMarquee from '@/components/NavMarquee';
import PriceDown from '@/components/PriceDown';
import PriceUp from '@/components/PriceUp';
import MarqueeSkeleton from '@/components/skeletons/MarqueeSkeleton';
import ProductCardSkeleton from '@/components/skeletons/ProductCardSkeleton';
import { Suspense } from 'react';

export default function Home() {
  return (
    <div className="bg-[#F0F5F0]">
      <Suspense fallback={<MarqueeSkeleton />}>
        <NavMarquee />
      </Suspense>

      <HeroBanner />

      <Suspense fallback={<ProductCardSkeleton />}>
        <PriceUp />

        <PriceDown />

        <AllProdcts />
      </Suspense>
    </div>
  );
}
