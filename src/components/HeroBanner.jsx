import Image from 'next/image';
import React, { Suspense } from 'react';
import DateTime from './DateTime';

function HeroBanner() {
  return (
    <div className="container mx-auto py-24">
      <div className="flex justify-between items-center border border-gray-200 rounded-2xl p-4 bg-white">
        <div className="w-1/2 flex flex-col gap-6">
          <span className="text-[#05893E] bg-[#05893e2a] py-1 px-2 text-sm rounded-2xl font-inter w-fit ">
            <Suspense fallback="{...}">
              <DateTime />
            </Suspense>
          </span>
          <h2 className="text-4xl font-oswald font-bold">Today's market prices at a glance</h2>
          <p className="font-inter text-gray-900">
            Prices of rice, pulses, oil, vegetables, fish, meat, eggs and spices – market-wise
            details, average, minimum-maximum and price changes in one place.
          </p>
          <div>
            <button className="py-2 px-6 bg-green-800 text-white rounded-2xl cursor-pointer transition-colors ease-in duration-200 hover:bg-green-900 font-inter">
              View all products
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
