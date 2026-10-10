import Image from 'next/image';
import React, { Suspense } from 'react';
import DateTime from './DateTime';

function HeroBanner() {
  return (
    <div className="container mx-auto py-24">
      <div className="flex justify-between items-center border border-gray-200 rounded-2xl px-4 py-8 bg-white">
        <div className="w-1/2 flex flex-col gap-6">
          <span className="text-green-700 bg-green-100 py-2 px-4 text-sm rounded-2xl w-fit font-semibold ">
            <Suspense fallback="{...}">
              <DateTime />
            </Suspense>
          </span>
          <h2 className="text-4xl font-bold">আজকের বাজারের দাম এক নজরে</h2>
          <p className="text-gray-900">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়,
            সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>
          <div>
            <button className="py-2 px-6 bg-green-800 text-white rounded-2xl cursor-pointer transition-colors ease-in duration-200 hover:bg-green-900">
              সব পণ্য দেখুন
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <Image
            src="/assets/bazar-hero.png"
            alt="Banner"
            width={340}
            height={340}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
