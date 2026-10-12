'use client';

import SortDropdown from '@/components/SortDropdown';
import ProductCard from './ProductCard';
import { useState } from 'react';

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
        <ProductCard product={sortedProducts}></ProductCard>
      </div>
    </>
  );
}
