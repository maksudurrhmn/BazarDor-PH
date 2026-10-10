'use client';

import { useState } from 'react';
import SortDropdown from '@/components/SortDropdown';

export default function CategoryProducts({ products }) {
  const [sort, setSort] = useState('default');

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === 'low-to-high') {
      return a.today - b.today;
    }

    if (sort === 'high-to-low') {
      return b.today - a.today;
    }

    return 0;
  });

  return (
    <>
      <div className="py-2 flex justify-between items-center">
        <span>মোট {products.length}টি পণ্য দেখানো হচ্ছে</span>

        <SortDropdown sort={sort} setSort={setSort} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedProducts.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm font-inter hover:border-green-800 transition-all duration-200 ease-in-out"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-[#eef2ee] rounded-2xl flex items-center justify-center text-3xl">
                {item.image}
              </div>

              <div>
                <h3 className="m-0 text-lg font-bold text-gray-900 leading-none">{item.nameBn}</h3>
                <p className="mt-1 text-xs font-medium text-gray-400">প্রতি {item.unit}</p>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <span className="block text-xs font-medium text-gray-400 mb-1">আজকের দাম</span>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-gray-900">{item.today}</span>
                  <span className="text-base font-bold text-gray-900">টাকা</span>
                </div>
              </div>

              <div
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  item.change.dir === 'up'
                    ? 'text-green-600 bg-green-100'
                    : item.change.dir === 'down'
                      ? 'text-red-700 bg-red-100'
                      : 'text-gray-600 bg-gray-100'
                }`}
              >
                <span>
                  {item.change.dir === 'up' ? '▲' : item.change.dir === 'down' ? '▼' : '-'}
                </span>

                <span>{Math.abs(item.change.pct)}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
