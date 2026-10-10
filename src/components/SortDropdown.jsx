'use client';

import { ChevronDown, ArrowDownWideNarrow } from 'lucide-react';

export default function SortDropdown({ sort, setSort }) {
  return (
    <div className="flex items-center gap-3">
      <label htmlFor="sort-products" className="text-sm font-medium text-gray-500">
        সাজান:
      </label>

      <div className="relative">
        <select
          id="sort-products"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="appearance-none cursor-pointer rounded-xl border border-gray-200 bg-white py-3 pl-10 pr-11 text-sm font-medium text-gray-800 shadow-sm outline-none transition-all duration-200 hover:border-green-600 focus:border-green-700 focus:ring-4 focus:ring-green-700/10"
        >
          <option value="default">ডিফল্ট</option>
          <option value="low-to-high">দাম: কম থেকে বেশি</option>
          <option value="high-to-low">দাম: বেশি থেকে কম</option>
        </select>

        <ArrowDownWideNarrow
          size={17}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-green-700"
        />

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500"
        />
      </div>
    </div>
  );
}
