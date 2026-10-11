import Link from 'next/link';
import React from 'react';

function ProductCard({ product }) {
  return (
    <>
      {product.map((item) => (
        <Link href={`/product/${item.slug}`} key={item.id}>
          <div className="p-5 rounded-3xl bg-white border border-gray-200 shadow-sm hover:border-green-800 transition-all duration-200 ease-in-out">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-[#eef2ee] rounded-2xl flex items-center justify-center text-3xl">
                {item.image}
              </div>

              <div>
                <h3 className="m-0 text-lg font-bold text-gray-900 leading-none">{item.nameBn}</h3>
                <p className="mt-1 text-sm font-medium text-gray-400">প্রতি {item.unit}</p>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <div>
                <span className="block text-sm font-medium text-gray-600 mb-1">আজকের দাম</span>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-extrabold text-gray-900">{item.today}</span>
                  <span className="text-base font-bold text-gray-900">টাকা</span>
                </div>
              </div>

              <div
                className={`flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                  item.change.dir === 'up'
                    ? 'text-red-700 bg-red-100'
                    : item.change.dir === 'down'
                      ? 'text-green-600 bg-green-100'
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
        </Link>
      ))}
    </>
  );
}

export default ProductCard;
