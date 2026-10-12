import React from 'react';

function MarqueeSkeleton() {
  return (
    <div className="overflow-hidden border-b border-gray-200 bg-white py-2">
      <div className="flex w-max animate-pulse items-center">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="shrink-0 px-4">
            <div className="flex items-center gap-2 text-sm">
              {/* Product icon */}
              <div className="h-4 w-4 rounded bg-gray-200" />

              {/* Product name */}
              <div className={`h-4 rounded bg-gray-200 ${item % 2 === 0 ? 'w-16' : 'w-20'}`} />

              {/* Price */}
              <div className="h-4 w-24 rounded bg-gray-200" />

              {/* Price change indicator */}
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-sm bg-gray-200" />
                <div className="h-4 w-8 rounded bg-gray-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarqueeSkeleton;
