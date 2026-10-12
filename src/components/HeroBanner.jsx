import Image from 'next/image';
import React, { Suspense } from 'react';
import DateTime from './DateTime';
import Link from 'next/link';

function HeroBanner() {
  return (
    <div className="container mx-auto py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row mx-4 xl:mx-0 justify-between lg:items-center border border-gray-200 rounded-2xl px-4 py-8 bg-white">
        <div className="lg:w-1/2 w-full flex flex-col gap-3 lg:gap-6">
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
            <Link href="#all-products">
              <button className="py-2 px-6 bg-green-800 text-white rounded-2xl cursor-pointer transition-colors ease-in duration-200 hover:bg-green-900">
                সব পণ্য দেখুন
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
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
